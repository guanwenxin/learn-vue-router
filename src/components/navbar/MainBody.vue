<template>
    <div class="container">
        <el-table stripe :data="tableData">
            <el-table-column prop="property" label="今日属性"></el-table-column>
            <el-table-column prop="value" label="现状"></el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    name: 'MainBody',
    data: function () {
        return {
            tableData: [
                { property: '天气情况', value: '🌤' }, 
                { property: '今日温度', value: '10℃' },
                { property: '明天天气', value: '😂' },
                { property: '穿什么呢', value: '裙子' },
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
.container {
    
}
</style>