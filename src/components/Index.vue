<template>
  <div class="index-con">
    <div class="clear">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">
          <div class="el-tabs-con">
            <userinfo></userinfo>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script type="text/javascript">
  import ElCheckbox from "../../node_modules/element-ui/packages/checkbox/src/checkbox";
  import ElRadio from "../../node_modules/element-ui/packages/radio/src/radio";
  import userinfo from '@/components/user/userinfo.vue'

  export default {
    name: 'index',
    data () {
      return {
        activeName: 'first',
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    },
    created() {
      this.ready();
    },
    methods: {
      handleClick(row) {
        console.log(row);
      },
      ready() {
          this.$http.get('http://localhost/web/WebService.asmx/Select').then((res) => {
            console.log(res.data);
          });
      }
    },
    components: {
      ElRadio,
      ElCheckbox,
      userinfo

    }
  }
</script>

<style>
  .right-nav {
    margin-left: 200px;
  }

  .index-con {
    padding-top: 100px;
    margin-left: 40px;
  }

  .el-tabs {
    width: 796px;
  }

  .el-tabs .el-tabs__header {
    margin: 0px;
  }

  .el-tabs__content .el-tab-pane {
    height: 320px;
    background: #eef1f6;
    border: 1px solid #d1dbe5;
    border-top: none;
  }

  .el-tabs-con {
    padding: 10px;
    height: 90%;
    overflow-y: auto;
  }

</style>
