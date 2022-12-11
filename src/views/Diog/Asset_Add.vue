<template>
  <div style="margin: 10px 20px;">
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="rfidId">
        <el-input v-model="formLabelAlign.rfidId" placeholder="enter rfidId"></el-input>
      </el-form-item>
      <el-form-item label="assetName">
         <el-input v-model="formLabelAlign.assetName" placeholder="enter assetName"></el-input>
      </el-form-item>
      <el-form-item label="ip">
         <el-input v-model="formLabelAlign.ip" placeholder="enter ip"></el-input>
      </el-form-item>
      <el-form-item label="category">
         <el-input v-model="formLabelAlign.category" placeholder="enter category"></el-input>
      </el-form-item>
      <el-form-item label="value">
         <el-input v-model="formLabelAlign.value" placeholder="enter value"></el-input>
      </el-form-item>
      <el-form-item class="btn">
        <el-button @click="cancelForm()">Cancel</el-button>
        <el-button type="primary" @click="submitForm()" class="sureBtn">Add</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import {create_asset} from '../../axios/api.js';
export default {
  name: 'AssetAdd',
  data(){
    return{
      labelPosition: 'right',// you can change position into top or left
      formLabelAlign: {
        rfidId:'',
        assetName: '',
        ip: '',
        category: '',
        value:''
      }
    }
  },
  methods:{
    cancelForm() {
      //console.log(this.$parent.handleClose)
      this.$parent.handleClose();
    },
    submitForm() {
        this.$confirm('This will permanently add the Asset. Continue?', 'Warning', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          console.log()
          var arr = this.formLabelAlign;
          create_asset(arr)
          .then((res) => {
            if (res.success) {
              this.$parent.handleClose();
              this.$message({
                type: 'success',
                message: 'Add the asset completed!'
              },3000);
            }
            return res;
          })
          .catch(() => {
            this.$message({
              type: 'error',
              message: 'Please enter the correct information!'
            }); 
          })
          
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: 'Add canceled'
          });          
        })
    }
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