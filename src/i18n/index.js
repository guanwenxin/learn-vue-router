import I18n from 'vue-i18n'
// vue静态挂载
import Vue from 'vue'
Vue.use(I18n)

const language = {
    // 语言
    zh: {
        msg: {
            login: '登录',
            name: '用户名',
            passwd: '密码',
            email: '邮箱'
        }
    },
    en: {
        msg: {
            login: 'Login in',
            name: 'Username',
            passwd: 'Password',
            email: 'Email'
        }
    }
}

const i18n = new I18n({
    locale: 'zh',
    messages: language
})

export default i18n