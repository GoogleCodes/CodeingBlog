<template>
  <div class="nav-left">
    <!-- nav start -->
    <div class="logo ft-28">
      <router-link :to="{ path : '/'}" class="logo">GetCodeing</router-link>
    </div>
    <el-row class="tac">
      <el-col>
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <el-menu-item index="2"><i class="el-icon-setting"></i>用户管理</el-menu-item>
          <!--<el-submenu index="1">-->
            <!--<template slot="title"><i class="el-icon-message"></i>导航一</template>-->
            <!--<el-menu-item-group>-->
              <!--<template slot="title">分组一</template>-->
              <!--<el-menu-item index="1-1">选项1</el-menu-item>-->
            <!--</el-menu-item-group>-->
            <!--<el-submenu index="1-4">-->
              <!--<template slot="title">选项4</template>-->
              <!--<el-menu-item index="1-4-1">选项1</el-menu-item>-->
            <!--</el-submenu>-->
          <!--</el-submenu>-->
        </el-menu>
      </el-col>
    </el-row>
    <!-- nav end -->
    <foots></foots>
  </div>
</template>



<script type="text/javascript">

  import foots from '@/components/footer/Footer.vue'

  export default {
    methods: {
      handleOpen(key, keyPath) {

      },
      handleClose(key, keyPath) {

      }
    },
    components: {
      foots,
    }
  }
</script>


<style>
  .nav-left {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: #eef1f6;
  }

  .nav-left .logo {
    text-align: center;
    height: 100px;
    line-height: 100px;
    background: #e4e8f1;
    color: #20a0ff;
  }

</style>
