<template>
    <div style="margin: 10px 20px;">
        <el-table 
            border 
            ref="multipleTable" 
            :data="tableList" 
            row-key="getRowKey"
            highlight-current-row
            v-if="(tableList.length > 0)"
            :fit="true" 
            style="width: 100%; margin-top: 30px;">
            <el-table-column type="selection" width="50" reserve-selection=""></el-table-column>
            <el-table-column prop="id" label="ID" width="80" class-name="bg_blue"></el-table-column>
            <el-table-column prop="category" label="Category" width="120"> </el-table-column>
            <el-table-column prop="AssetName" label="Asset Name" width="140"> </el-table-column>
            <el-table-column prop="Country" label="Country" width="140"> </el-table-column>
            <el-table-column prop="City" label="City" width="140"> </el-table-column>
            <el-table-column fixed="right" label="Oprations" width="300">
              <template slot-scope="scope">
                <el-button @click="checkLocation(scope.$index,scope.row)" type="text" size="small">Location Tracking</el-button>
                <el-button @click="checkDetails(scope.$index,scope.row)" type="text" size="small">Asset Details</el-button>
                <el-button @click="editClick(scope.$index,scope.row)" type="text" size="small">Edit</el-button>
                <el-button @click="deleteClick(scope.$index,scope.row)" type="text" size="small">Delete</el-button>
              </template>
            </el-table-column>
        </el-table>
    </div>
  </template>
  <script>
  export default {
    name: 'AssetDetails',
    data(){
      return{
        tableList: [
            {}
        ], 
      }
    },
    methods:{
      //remove-asset
      // 子组件点击删除asset按钮
        deleteClick(val) {
            let id = val;
            console.log('删除的问题id:',id) 
            this.$emit("remove-asset",id);//传给父组件id值
        },
    }
  }
  </script>
  
  <style scoped>
  .el-input{
    width: 54% !important;
  }
  .btn{
    margin-left: 150px;
  }
  .sureBtn{
    margin-left: 20px;
  }
  .el-select{
    margin: 0 0 !important;
    width: 54% !important;
  }
  </style>