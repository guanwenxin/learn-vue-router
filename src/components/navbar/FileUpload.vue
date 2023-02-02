<template>
    <div>
        <el-button @click="openInput">选择文件</el-button>
        <input ref="visible" class="input-layout" type="file" @change="getFileInfo($event)" />
        <el-button @click="upload">上传</el-button>
    </div>
</template>
<script>
import { http } from '@/utils/http'
export default {
    name: "FileUpload",
    data: function () {
        return {
            // 是一个File对象，继承自Blob
            file: null,
        }
    },
    methods: {
        openInput() {
            this.$refs.visible.click();
        },
        getFileInfo(event) {
            // 1.通过input type="file"获取到用户上传的文件信息
            this.file = event.target.files[0]
            console.log(this.file)
        },
        async upload() {
            // form-data
            // 2.构造http请求体，FormData刚好满足传输文件(content-type：multipart/form-data)
            const formData = new FormData();
            formData.append('name', 'pjw')
            // 此处的key file，是后端取文件信息时的key
            formData.append('file', this.file)
            // 3.直接将formdata 放置axios post方法的参数中
            const result = await http.post('/upload', /**放file文件 */formData)
            console.log(result)
        }
    }
}
</script>
<style lang="scss">
.input-layout {
    height: 0;
    width: 0;
}
</style>