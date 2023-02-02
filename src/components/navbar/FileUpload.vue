<template>
    <div><input type="file" @change="getFileInfo($event)"/></div>
</template>
<script>
export default {
    name: "FileUpload",
    methods: {
        getFileInfo(event) {
            console.log(event.target.files)
        }
    }
}
</script>