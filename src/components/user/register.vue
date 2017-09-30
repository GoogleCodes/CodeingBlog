<template>
  <div style="width: 100%;height: 100%;position: relative;background: #f8f8f8;">
    <heads></heads>
    <!-- login start -->
    <div class="administrator"></div>
    <div class="login" style="height: 470px;">
      <div class="login-form formWindow">
        <div class="tab">
          <div style="height: 40px;border-bottom: 1px solid #ccc;">
            <div class="form-title fl ft-22">快速注册</div>
            <div class="fr form-h4">已有帐号?
            <router-link :to="{ path: '/user/login'}" class="clickReg">点此登录</router-link>
            </div>
          </div>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <div class="form-input" style="margin-top: 20px;">
              <div class="form-h2 lineHeight50 fl">姓名：</div>
              <el-form-item prop="name">
                <el-input class="inputInfo input fl" placeholder="您的姓名" v-model="ruleForm.name" />
              </el-form-item>
            </div>
            <div class="form-input">
              <div class="form-h2 lineHeight50 fl">手机号：</div>
              <el-form-item prop="phone">
                <el-input class="inputInfo input fl" placeholder="您的手机号" v-model="ruleForm.phone" />
              </el-form-item>
            </div>
            <div class="form-input">
              <div class="form-h2 lineHeight50 fl">密码：</div>
              <el-form-item prop="password">
                <el-input class="inputInfo input fl" placeholder="输入密码" v-model="ruleForm.password" />
              </el-form-item>
            </div>
            <div class="form-input">
              <div class="form-h2 lineHeight50 fl">确认密码：</div>
              <el-form-item>
                <el-input class="inputInfo input fl" placeholder="再次输入密码" />
              </el-form-item>
            </div>
          </el-form>
          <div class="form-input clear">
            <el-button class="comfirm" style="width: 207px;margin-left: 88px;" @click="goRegister('ruleForm')">注册</el-button>
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
  import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item";

  export default {
    name: 'login',
    data () {
      return {
        ruleForm: {
          name: null,
          phone: null,
          password: null,
        },
        rules: {
          name: [{required: true, message: '请输入姓名！', trigger: 'blur'}],
          phone: [{required: true, message: '请输入账户名！', trigger: 'blur'}],
          password: [{required: true, message: '请输入账户密码！', trigger: 'blur'}]
        },
      }
    },
    created () {

    },
    methods: {
      goRegister (formName) {
        this.$refs[formName].validate((valid) => {
          if (!valid) {
            return false;
          }
        });
      }
    },
    components: {
      ElFormItem, ElButton, ElInput, heads,
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
    margin-top: 5px;
    color: #fff;
    background: #b11e25;

  }
</style>
