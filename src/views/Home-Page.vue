<template>
  <div>
    <div style="width: 100%" class="funcButton">
        <div id="selects">
            <el-input
              class="search"
              placeholder="Please enter Asset id/name/country/city "
              prefix-icon="el-icon-search"
              @change="handleInputVal"
              v-throttle="autoShow"
              v-model="inputSearch">
            </el-input>
        </div>
        <div>
          <el-button type="danger" @click="importBtn" class="addButton">Import Assets</el-button>
          <el-button type="warning" @click="exportBtn" class="addButton">Export Assets</el-button>
          <el-button type="primary" @click="addBtn" class="addButton">Add Asset</el-button>
          <el-dialog title="Add Asset" 
            :visible.sync="openOff" left 
            :append-to-body='true' 
            :lock-scroll="false"
            :before-close="handleClose" 
             width="35%"
             >
               <Diog-Bist></Diog-Bist>
          </el-dialog>
        </div>
    </div>
    <div>
      <Diog-Table
      @remove-asset="handleRemoveAsset"
      ></Diog-Table>
    </div>
  </div>
</template>

<script>
import DiogBist from './Diog/Asset_Add.vue';
import DiogTable from './Diog/Asset_Table.vue';
import { asset_byId } from '../axios/api.js';

export default {
  name:'HomePage',
  data(){ 
    return { 
     openOff:false,
     inputSearch:'',
    }
  }, 
  // 搜索框 自定义指令 实时监听输入框的值
  directives:{
    throttle:{
      inserted(el, obj){
        let timerId = null
        let flag = true
        el.addEventListener('input', function () {
            if (!flag) return
            flag = false
            timerId && clearTimeout(timerId)
            timerId = setTimeout(function () {
                flag = true
                obj.value()
            }, 500)
        })
      }
    }
  },
  components:{
      DiogBist,
      DiogTable
  },
  methods: {
    importBtn(){
       console.log('aaa')
    },
  
    exportBtn(){
      console.log('bbb')
    },
    addBtn(){
     // console.log('ccc')
     this.openOff = true;
    },
    handleInputVal(val){
        console.log('handleInputVal:', val)
        this.autoShow()
    },
    autoShow(){
      //console.log('6666666666');
      var id = this.inputSearch;
      console.log('id is', id)
      asset_byId(id)
        .then((res) => {
          console.log(res);
          return res;
        })
        .catch((err) => {
          console.log('hit error for data request', err)
        })
    },
    //delete asset
    handleRemoveAsset(assetId){
       console.log('delete the asset id is',assetId)
       // send request to delete 
    },
    handleClose(){
      this.openOff = false;
    }
  },
  
}
</script>
<style scoped>
.funcButton{
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space:normal;
}
#batchDel{
  border-top:none;
  border-left:none;
  border-right:none;
  border-color:#F56C6C;
  color: #F56C6C;
  padding: 2px;
  line-height: 1;
  margin-top: 20px;
  border-radius: 0%;
  
}
#selects{
  float: left;
  margin-top: 8px;
  height: 35px;
  line-height: 35px;
  box-sizing: border-box; 
  
}
.el-select {
  width: 150px;
  margin-right: 15px;
}
.search{
  width: 260px;
  display: inline-block;
}
.funcButton .el-button{
  padding: 9px 15px;
  margin-top: 10px;
}
.paginate{
    margin: 40px auto;

  } 
</style>