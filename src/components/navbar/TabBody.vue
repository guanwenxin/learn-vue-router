<template>
    <div>
        <!--匿名插槽，默认插槽-->
        <slot></slot>
        <!--具名插槽-->
        <div class="header">
            <slot name="header"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TabBody',
}
</script>

<style lang="scss" scoped>
.header {
    color: red;
}
</style>