<template>
  <div class="top-nav">
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
      </el-submenu>
      <!--<el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>-->
      <div class="user-nav fr">
        <el-dropdown>
          <span class="el-dropdown-link">
            用户<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-menu>
  </div>
</template>

<script type="text/javascript">
  export default {
      name: 'top',
      data () {
          return {
            activeIndex2: '1'
          };
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
      },
  }
</script>

<style scoped>
  .top-nav {
    width: 100%;
    position: fixed;
    height: 60px;
  }

  .top-nav .user-nav {
    width: 250px;
    margin: 16px 60px 0 0;
  }

</style>
