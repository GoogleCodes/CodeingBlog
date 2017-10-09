<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column fixed prop="date" label="日期" width="150"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="address" label="地址" width="300"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small" @click="updateClick()">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }]
        }
    },
    methods: {
      handleClick() {
        this.$message({
            message: "警告！还在开发中~~~",
            type: "warning"
        });
      },
      updateClick() {
        this.$message({
          message: "警告！还在开发中~~~",
          type: "warning"
        });
      }
    }
  }
</script>


<style>

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

</style>

