<template>
    <div style="width: 100%" class="subscription">
        <span>Category: </span>
        <el-select 
            v-model="selectValue" 
            placeholder="Select category"
            @change="handleSelect"
            style = "margin-left: 20px;"
            >
            <el-option
              v-for="item in cateOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
            </el-select>
        <div style="margin-top: 15px;">
          <span>Choice Value: </span>
          <el-input 
          placeholder="Please input choice value" 
          v-model="inputVal" 
          class="input-with-select"
          
          style="width:25%; margin: 0 20px 0 10px;"
          ></el-input>

          <el-button type="success" plain @click="submitSubs()">Report Download</el-button>
        </div>
    </div>  
</template>

<script>
import { get_report } from '../axios/api.js';
export default {
  name:'ReportPage',
  components:{
    
  },
  data(){ 
    return { 
        inputVal: '',
        cateOptions:[
            {
            value:'category',
            label:'category'
            },
            {
            value:'country',
            label:'country'
            },
            {
            value:'city',
            label:'city'
            },
            {
            value:'name',
            label:'name'
            }
        ],
        selectValue: '',
    } 
  }, 
  methods: {
    //category
    //handleSelect
    handleSelect(val){
        console.log(val)
        
    },
    submitSubs(val){
        console.log('category:', val)
        var formData = {};
        formData.selValue = this.selectValue;
        formData.selValue = this.inputVal;

        if (this.selectValue != '' && this.inputVal != '') {
            get_report(this.selectValue, this.inputVal)
            .then((res) => {
              return res;
            })
            .catch((err) => {
              console.log('hit error for data request', err)
            })
        } else {
            this.$message({
              type: 'error',
              message: 'enter the all information required!'
            }); 
        }
        
    }
  }
 
}
</script>

<style scoped lang="scss">
body{
   font-size: 16px !important; 
   
}


</style>