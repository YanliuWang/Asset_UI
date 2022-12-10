<template>
  <div style="margin: 10px 20px;">
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="Description">
        <el-input v-model="formLabelAlign.listCode" placeholder="xxxxxid"></el-input>
      </el-form-item>
      <el-form-item label="Description">
         <el-input v-model="formLabelAlign.discribtion"></el-input>
      </el-form-item>
      <el-form-item class="btn">
        <el-button @click="cancelForm()">Cancel</el-button>
        <el-button @click="submitForm()" type="primary" class="sureBtn">OK</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'AssetAdd',
  data(){
    return{
      labelPosition: 'right',// you can change position into top or left
      formLabelAlign: {
        gongDian:'',
        listCode: '',
        discribtion: '',
        sgDepart: '',
        listContract:''
      }
    }
  },
  methods:{
    cancelForm() {
      //console.log(this.$parent.handleClose)
      this.$parent.handleClose();
    },
    submitForm() {

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