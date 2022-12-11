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
        <el-button type="primary" @click="submitForm()" class="sureBtn">Save</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import {asset_byId, update_asset} from '../../axios/api.js';
export default {
  name: 'AssetDetails',
  props:{
      childAssetId: {
        type:String,
      },
    },
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
  mounted(){
    console.log('childAssetId',this.$parent.$parent.tableList);
    console.log('childAssetId',this.$parent.$parent);
    let id = this.$parent.$parent.getRfidId;
    console.log('now id change is', id)
    if (id != undefined || id != '') {
      this.assetAutoShow(id);
    }
    
  },
  watch: {
      // eslint-disable-next-line 
      
  },
  methods:{
    cancelForm() {
      this.$parent.$parent.handleAssetClose();
    },

    assetAutoShow(id){
      if (id != '') {
        asset_byId(id)
        .then((res) => {
          this.formLabelAlign.rfidId = res.rfidId;
          this.formLabelAlign.assetName = res.assetName;
          this.formLabelAlign.ip = res.ip;
          this.formLabelAlign.category = res.category;
          this.formLabelAlign.value = res.value;
          return res;
        })
        .catch((err) => {
          console.log('hit error for data request', err)
        })
      } 
    },

    submitForm() {
        this.$confirm('This will permanently update the Asset. Continue?', 'Warning', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          console.log()
          const formData = {};
          formData.rfidId = this.formLabelAlign.rfidId;
          formData.assetName = this.formLabelAlign.assetName;
          formData.value = this.formLabelAlign.value;
          
          update_asset(formData)
          .then((res) => {
            if (res.success) {
              //update the tableList data
              var index = this.$parent.$parent.getOneAssetIndex;
              this.$parent.$parent.tableList[index].rfidId = this.formLabelAlign.rfidId;
              this.$parent.$parent.tableList[index].assetName = this.formLabelAlign.assetName;
              this.$parent.$parent.tableList[index].value = this.formLabelAlign.value;

              this.$parent.handleClose();

              this.$message({
                type: 'success',
                message: 'update the asset successful!'
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
            message: 'update canceled'
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