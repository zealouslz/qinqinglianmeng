<template>
    <div class="login">
      <div class="loginInfo">
        <img src="../../image/icon.png" class="imgIcon"/>
        <span class="nameSpan">亲清廉盟在线平台</span>
        <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane key="1" tab="账户密码登录">
        <a-form-model ref="loginForm" :model="loginForm" :rules="rules" >
    <a-form-model-item   prop="username">
      <a-input v-model="loginForm.username" placeholder="账户" />
    </a-form-model-item>
    <a-form-model-item  prop="username">
      <a-input v-model="loginForm.password" type="password" placeholder="密码" />
    </a-form-model-item>
    <a-form-model-item >
      <a-checkbox @change="onChange" style="float:left">
    自动登陆
  </a-checkbox>
    </a-form-model-item>
    <a-form-model-item >
      <a-button type="primary" style="width:100%" @click="submitForm('ruleForm')">
        登录
      </a-button>
    </a-form-model-item>
  </a-form-model>
      </a-tab-pane>
      <a-tab-pane key="2" tab="">
      </a-tab-pane>
      <a-tab-pane key="3" tab="">
      </a-tab-pane>
    </a-tabs>
    <div class="foot">
      <span>帮助

隐私

条款</span>
    </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
