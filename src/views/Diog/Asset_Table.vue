<template>
    <div style="margin: 10px 20px;">
        <el-table 
            border 
            :data="tableList" 
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
    name: 'AssetTable',
    data(){
      return{
        tableList: [], 
      }
    },
    props:{
      childRes: {
        type:Object,
      },
      childSelectRes: {
        type:Object,
      },
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
          this.tableList = [];
          this.tableList.push(this.childRes);
          
        }
    },
    watch: {
      // eslint-disable-next-line 
      childRes(newVal, oldVal){
        if (newVal){
          this.autoShow();
        }
      },
      //eslint-disable-next-line 
      childSelectRes(newVal, oldVal){
        if (newVal){
          console.log('6666',this.childSelectRes.res);
          //this.autoShow();
        }
        
      },        
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