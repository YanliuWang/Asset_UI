<template>
    <div style="width: 100%" class="subscription">
        <div style="margin-top: 15px;">
          <span>AssetId: </span>
          <el-input 
          placeholder="Please input assetId" 
          v-model="inputVal" 
          class="input-with-select"
          
          style="width:25%; margin: 0 20px 0 10px;"
          ></el-input>
          <el-button type="success" plain @click="submitSubs()">Subscription</el-button>
        </div>
    </div>  
</template>

<script>
import { update_sub } from '../axios/api.js';
export default {
  name:'SubPage',
  components:{
    
  },
  data(){ 
    return { 
        inputVal: '',
    } 
  }, 
  methods: {
    submitSubs(){
        var id = this.inputVal;
        if (id != '') {
          update_sub(id)
          .then((res)=>{
                if(res.success) {
                    this.$message({
                        type: 'success',
                        message: 'Add notification service for the assetId successful!'
                      },3000);
                   
                }
                this.inputVal = '';
                return res;
            })
          .catch((err) => {
            console.log('hit error for data request', err)
          })
        } 
    },

  }
 
}
</script>

<style scoped lang="scss">
body{
   font-size: 16px !important; 
   
}


</style>