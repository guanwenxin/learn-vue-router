<template>
    <div class="default" ref="default" @scroll="setButton($event, '哈哈哈')">
        <div ref="top">默认导航栏,tab1</div>
        <div style="height: 1000px; backgroud-color: red;">
        </div>
        <div v-show="needTopBtn" class="back"><el-button type="primary" @click="returnTop">回顶部</el-button></div>
    </div>
</template>
<script>
export default {
    name: 'DefaultTab',
    data: function() {
        return {
            needTopBtn: false,
        }
    },
    mounted() {
        // 原生的事件绑定
        // this.$refs.default.addEventListener('scroll', this.setButton)
        // this.$refs.default.onscroll = this.setButton
    },
    methods: {
        returnTop() {
            this.$refs.top.scrollIntoView(true, {
                behavior: 'smooth'
            });
        },
        setButton(e, name) {
            // 可优化
            // if (this.$refs.default.scrollTo > 0) {
            //     this.needTopBtn = true;
            // } else {
            //     this.needTopBtn = false;
            // } 
            // 和上面的逻辑等价
            // 对于原生的变量，如何监听变化呢？
            console.log(e, name)
            // if (this.$refs.default.scrollTop > 0) {
            if (e.target.scrollTop > 0) {
                this.needTopBtn = true
            } else {
                this.needTopBtn = false
            }
            // this.needTopBtn = e.target.scrollTop > 0;
        }
    },
    destroyed() {
        // this.$refs.default.removeEventListener('scroll', this.setButton);
        // this.$refs.default.onscroll = null;
    }
}
</script>
<style lang="scss" scoped>
.back {
    position: fixed;
    right: 40px;
    bottom: 40px;
}
.default {
    height: 100%;
    overflow-y: auto;
}
</style>