<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
 *{
   font-family:"Microsoft YaHei";
   font-weight: normal;
   font-size: 12px !important;
   
  }
  .el-table{
    color:black !important;
  }
  .el-table thead{
    color:black !important;
  }
  .el-select span{
     /* right: 22px; */
     top:2px
   }
 .el-input input{
    margin-right: 15px;
    height: 35px;
    line-height: 35px;
  }
.el-form-item label{
  padding: 0 8px 0 0;
}

.el-dialog__body{
  padding-bottom: 2px;
}
</style>
