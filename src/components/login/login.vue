<template>
    <div class="login">
        <img src="../../image/icon.svg" class="imgIcon" />
        <div class="nameSpan">亲清廉盟在线平台</div>
        <div class="loginInfo">
            <span class="loginTab">账号密码登录</span>
            <div class="underline"></div>
            <div class="loginForm">
                <a-form-model ref="loginForm" :model="loginForm" :rules="rules">
                    <a-form-model-item prop="username">
                        <a-input v-model="loginForm.username"  placeholder="账户" ><img slot="prefix" src="../../image/userIcon.svg" /></a-input>
                    </a-form-model-item>
                    <a-form-model-item prop="username">
                        <a-input v-model="loginForm.password" type="password" placeholder="密码" ><img slot="prefix" src="../../image/passwordIcon.svg" /></a-input>
                    </a-form-model-item>
                    <a-form-model-item>
                        <a-checkbox @change="onChange">
                            自动登陆
                        </a-checkbox>
                    </a-form-model-item>
                    <a-form-model-item>
                        <a-button type="primary" style="width:100%;background: #00CDFF;border-radius: 2px;" @click="submitForm('ruleForm')">
                            登录
                        </a-button>
                    </a-form-model-item>
                </a-form-model>
                </div>
            <div class="foot">
                <span>帮助</span>
                <span style="margin-left:60px">隐私</span>
                <span style="margin-left:60px">条款</span>
                <div class="copyright">copyright ©️2017 蚂蚁金服体验技术部出品</div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      loginForm: {
        username: '',
        password: ''

      }

    }
  },
  methods: {
    callback (key) {
      console.log(key)
    },
    onChange (e) {
      console.log(e)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
@import url("./login.css");
</style>
