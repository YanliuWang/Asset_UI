<template>
    <div style="margin: 10px 20px;">
        <el-table 
            border 
            :data="tableList" 
            row-key="getRowKey"
            highlight-current-row
            v-if="(tableList.length > 0)"
            :fit="true" 
            style="width: 100%; margin-top: 30px;">
            <el-table-column type="selection" width="50" reserve-selection=""></el-table-column>
            <el-table-column prop="assetId" label="assetId" width="80" class-name="bg_blue"></el-table-column>
            <el-table-column prop="category" label="category" width="120"> </el-table-column>
            <el-table-column prop="assetName" label="assetName" width="140"> </el-table-column>
            <el-table-column prop="country" label="country" width="140"> </el-table-column>
            <el-table-column prop="city" label="city" width="140"> </el-table-column>
            <el-table-column prop="rfidId" label="rfidId" width="140"> </el-table-column>
            <el-table-column prop="state" label="state" width="140"> </el-table-column>
            <el-table-column prop="value" label="value" width="140"> </el-table-column>
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
        tableList: [], 
      }
    },
    props:{
      // childRes: {
      //   type:Object,
      // },
      childResTwo: {
        type:Array
      },
      // childResThree: {
      //   type:Object,
      // },
      // childResFour: {
      //   type:Object,
      // },
      // childResFive: {
      //   type:Object,
      // },
    },
    methods:{
      //remove-asset
      // 子组件点击删除asset按钮
        deleteClick(val) {
            let id = val;
            console.log('删除的问题id:',id) 
            this.$emit("remove-asset",id);//传给父组件id值
        },

        autoShow(){ 
          this.tableLis = [];

          this.tableList = this.childResTwo;

          // if (this.childResThree != null) {
          //   this.tableList.push(this.childResThree);
          // }

          // if (this.childResFour != null) {
          //   this.tableList.push(this.childResFour);
          // }

          // if (this.childResFive != null) {
          //   this.tableList.push(this.childResFive);
          // }
          
        }
    },
    watch: {
      // childRes(newVal, oldVal){
      //   if (newVal){
      //     this.autoShow();
      //   }
      // },
      childResTwo(newVal, oldVal){
        if (newVal){
          this.autoShow();
        }
      }
      
         
    },
    mounted(){
      
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