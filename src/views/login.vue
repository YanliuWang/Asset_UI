<template>
  <div id="login">
    <div class="login-header-title"
    style="
     font-size:40px !important;
     font-weight:bold;"
    >An Asset Management System</div>
    <div class="login-container">
      <el-input
        placeholder="Please enter user name"
        type="text"
        prefix-icon="el-icon-user" v-model="userName"></el-input>
      <el-input
        placeholder="Please enter password"
        type="password"
        prefix-icon="el-icon-goods"
        v-model="passWord"
      ></el-input>
      <el-button type="primary" @click="submitForm">Login</el-button>
    </div>
    <!--加载提示框 start-->
    <dv-loading id="loading" v-if="ifloading" style="color: #fff"
      >Loading...</dv-loading>
    <!--加载提示框 end-->

    <div class="StudentInfo">
      <p>Course: TCSS 559 Services Computing</p>
      <p>Project Proposal - Group 3</p>
      <p>Name: Xiaojie Li, Yanliu Wang</p>
    </div>
  </div>
</template>

<script>
import { login_request } from '../axios/api.js';
export default {
  name: 'login',
  data() {
    return {
      userName: "",
      passWord: "",
      ifloading: false,
    };
  },
  methods: {
    submitForm() {
      // localStorage.setItem("token", "111");
      // this.$router.push({ path: "/Home-Page" });
      let formData = {};

      if (this.userName != "" && this.passWord != "") {
        formData.userName = this.userName;
        formData.password = this.passWord;
          
        login_request(formData)
            .then((res) => {
              console.log('login res', res)
              if (res.success) { 
                console.log(localStorage.getItem("Authorization"));
                this.$router.push({ path: "/Home-Page" });

              } else{
                this.$message.error('login failed, please check your username and passward.');
              }
             
            })
            .catch((err) => {
                console.log(err, 'hit error for add request')
                this.$message.error('login failed, please check your username and passward.');
            })

      }

      
    },
  },
}
</script>

<style lang="scss">
html,
body {
  width: 100vw;
  height: 100vh;
}
body {
  background-size: 100% 100%;
  background-color: rgb(160, 194, 227);
}
#login {
  .login-header-title {
    width: 100%;
    height: 20%;
    font-size: 0.5rem;
    color: rgb(7, 7, 10);
    text-align: center;
    padding-top: 20vh;
  }
  .login-container {
    width: 35vw;
    height: 35vh;
    margin: 20px auto;
    margin-top: 5vh;
    background: url(../assets/image/login-border.png);
    background-size: 100% 100%;
    box-sizing: border-box;
    padding-top: 2rem;
  }
  .login-container .el-input {
    width: 70%;
    display: block;
    margin: 4vh auto !important;
    margin-bottom: 3rem !important;
  }
  .login-container .el-input--prefix .el-input__inner {
    margin: 0px auto;
    background: rgba(0, 0, 0, 0);
    border: 1px solid #02ffff;
    color: #fff;
    height: 45px !important;
    line-height: 45px !important;
  }
  .login-container .el-input__icon {
    color: #02ffff;
    font-size: 0.35rem;
  }
  .el-button--primary {
    width: 70%;
    display: block;
    margin: 0px auto !important;
    margin-top: 0.25rem !important;
    background-color: #0384ea !important;
    border-color: #0384ea !important;
    font-size: 0.35rem;
  }
  input::-webkit-input-placeholder,
  textarea::-webkit-input-placeholder {
    color: #eee !important;
  }

  input:-moz-placeholder,
  textarea:-moz-placeholder {
    color: #eee !important;
  }

  input::-moz-placeholder,
  textarea::-moz-placeholder {
    color: #eee !important;
  }

  input:-ms-input-placeholder,
  textarea:-ms-input-placeholder {
    color: #eee !important;
  }

  div.StudentInfo{
    
    font-weight: bold;
    width: 100%;
    height: 30%;
    text-align: center;
    padding-top: 5vh;
  }

  div.StudentInfo p{
    font-size: 24px !important;
    line-height: 35px;
  }
}
</style>
