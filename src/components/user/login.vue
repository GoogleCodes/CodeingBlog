<template>
  <div style="width: 100%;height: 100%;position: relative;background: #f8f8f8;">
    <heads></heads>
    <!-- login start -->
    <div class="administrator"></div>
    <div class="login">
      <div class="login-form">
        <div class="tab">
          <div style="height: 40px;border-bottom: 1px solid #ccc;">
            <div class="form-title fl ft-22">登录账号</div>
            <div class="fr form-h4">来有账号?
              <router-link :to="{ path : '/user/register'}" class="clickReg">点此注册</router-link>
              <!--<a href="reg.html" class="clickReg">点此注册</a>-->
            </div>
          </div>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <div class="form-input">
              <div class="form-h2">手机号：</div>
              <el-form-item prop="username">
                <el-input class="inputInfo" v-model="ruleForm.username" placeholder="请输入账户名"></el-input>
              </el-form-item>
            </div>
            <div class="form-input">
              <div class="form-h2">密码：</div>
              <el-form-item prop="password">
                <el-input type="password" class="inputInfo" v-model="ruleForm.password" placeholder="请输入账户密码"></el-input>
              </el-form-item>
            </div>
          </el-form>
          <div class="form-input">
            <div class="fl" style="cursor: pointer;">
              <el-checkbox label="记住登录密码" name="type" v-model="remember"></el-checkbox>
            </div>
            <router-link :to="{ path: '/user/find'}" class="fr" style="color: #b11e25;">忘记密码</router-link>
          </div>
          <div class="form-input clear">
            <el-button class="comfirm" @click="logining('ruleForm')">登录</el-button>
          </div>
        </div>
      </div>
    </div>
    <!-- login end -->
    <foots></foots>
  </div>
</template>

<script type="text/javascript">

  import heads from '@/components/top/Top.vue'
  import foots from '@/components/footer/Footer.vue'
  import ElInput from "../../../node_modules/element-ui/packages/input/src/input";
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button";
  import ElForm from "../../../node_modules/element-ui/packages/form/src/form";
  import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item";

  export default {
    name: 'login',
    data () {
      return {
        ruleForm: {
          username: null,
          password: null,
        },
        rules: {
          username: [{required: true, message: '请输入账户名！', trigger: 'blur'}],
          password: [{required: true, message: '请输入账户密码！', trigger: 'blur'}]
        },
        remember: false
      }
    },
    created () {

    },
    methods: {
      logining (formName) {
        this.$refs[formName].validate((valid) => {
          if (!valid) {
            return false;
          }
          this.$message({
            showClose: true,
            message: '警告哦，这是一条警告消息',
            type: 'warning'
          });

        });
      }
    },
    components: {
      ElFormItem, ElForm, ElButton, ElInput, heads,
      foots,
    }
  };
</script>


<style>

  .tab .form-input .el-input__inner {
    height: 40px;
    border: none;
    width: 90%;
  }

  .tab .form-input .el-button {
    width: 100%;
    height: 49px;
    border: none;
    margin-top: 20px;
    color: #fff;
    background: #b11e25;

  }
</style>
