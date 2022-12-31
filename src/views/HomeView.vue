<template>
  <!-- 0.v-bind -->
  <div class="page">
    <div class="bg-video">
      <video src="../assets/HomeVideo.mp4" autoplay loop></video>
    </div>
    <div class="container">
      <!-- <ChildComp></ChildComp> -->
      <div class="desc"></div>
      <div class="login">
        <div class="login-wrapper">
          <el-form :model="form" label-width="80px">
            <el-form-item label="用户名：">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密码：">
              <el-input v-model="form.passwd" show-password></el-input>
            </el-form-item>
          </el-form>
          <div class="operator">
            <el-button size="small" @click="login">登录</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 预定义属性
  name: 'HomeView',
  // 组件当中所有的响应式数据
  data: function () {
    return {
      form: {
        name: '',
        passwd: '',
      },
      isShowChild: true,
      pInfo: '这是用来设置默认的input框的值'
    }
  },
  // 方法
  methods: {
    login() {
      // TODO: 跳转至主页面
      console.log(this.$router)
      this.$router.push({ path: 'main' })
      // router.push({path: 'about'})
    },
  }
}
</script>


<style lang="scss">
/**
使用了scoped关键字，当前样式只应用于此组件以及子组件，不会影响父组件
*/
html,
body {
  margin: 0;
  padding: 0;
  overflow-y: hidden;
}
.container {
  display: flex;
}
.operator {
  display: flex;
  justify-content: center;
}
.desc {
  width: 60%;
}
.login {
  padding-top: 150px;
  .login-wrapper {
    background-color: #fff;
    width: 300px;
    padding: 40px;
    border-radius: 10px;
  }
}
.bg-video {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  video {
    width: 100%;
  }
}
</style>