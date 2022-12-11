<template>
  <div>
    <div style="width: 100%" class="funcButton">
        <div id="selects">
            <el-input
              class="search"
              placeholder="Please enter Asset id"
              prefix-icon="el-icon-search"
              @change="handleInputVal"
              v-model="inputSearchOne">
            </el-input> 
            
            <el-select 
            v-model="selectValue" 
            placeholder="Select category"
            @change="handleSelectValTwo"
            style = "margin-left: 20px;"
            >
            <el-option
              v-for="item in cateOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
            </el-select>

            <el-input
              class="search"
              style = "margin-left: 20px;"
              placeholder="Please enter name "
              prefix-icon="el-icon-search"
              @change="handleInputValThree"
              v-model="inputSearchThree">
            </el-input>

            <el-input
              class="search"
              style = "margin-left: 20px;"
              placeholder="Please enter city "
              prefix-icon="el-icon-search"
              @change="handleInputValFour"
              v-model="inputSearchFour">
            </el-input>

            <el-input
              class="search"
              style = "margin-left: 20px;"
              placeholder="Please enter country "
              prefix-icon="el-icon-search"
              @change="handleInputValFive"
              v-model="inputSearchFive">
            </el-input>
        </div>

        <div>
          <!-- <el-button type="danger" @click="importBtn" class="addButton">Import Assets</el-button> -->
          <!-- <el-button type="warning" @click="exportBtn" class="addButton">Export Assets</el-button> -->
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
    <!-- <div>
      <Diog-Table
      ref=”myUpdate”
      :childRes = "getData"
      :childSelectRes = "getSelectData"
      @remove-asset="handleRemoveAsset"
      ></Diog-Table>
    </div> -->

    <div style="margin: 10px 20px;" v-if="this.tableList != []">
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
            <el-table-column prop="rfidId" label="rfidId" width="150"> </el-table-column>
            <el-table-column prop="state" label="state" width="150"> </el-table-column>
            <el-table-column prop="value" label="value" width="150"> </el-table-column>
            <el-table-column fixed="right" label="Oprations" width="300">
              <template slot-scope="scope">
                <el-button @click="checkLocation(scope.$index,scope.row)" type="text" size="small">Location Tracking</el-button>
                <el-button @click="editClick(scope.$index,scope.row)" type="text" size="small">Asset Update</el-button>
                <el-button @click="deleteClick(scope.$index,scope.row)" type="text" size="small">Delete</el-button>
              </template>
            </el-table-column>
        </el-table>
    </div>
<!-- update asset -->
    <el-dialog title="Update Asset Details" 
            :visible.sync="assetShow" left 
            :append-to-body='true' 
            :lock-scroll="false"
            :before-close="handleAssetClose" 
            :childAssetId = "getRfidId"
             width="35%"
             >
            <Diog-Detail></Diog-Detail>
    </el-dialog>

    <!-- asset tracking -->
    <el-dialog title="Asset Tracking" 
            :visible.sync="TrackingShow" left 
            :append-to-body='true' 
            :lock-scroll="false"
            :before-close= "handleTrackingClose"
             width="35%"
             >
            <Diog-Track></Diog-Track>
    </el-dialog>
  </div>
</template>

<script>
import DiogBist from './Diog/Asset_Add.vue';
import DiogDetail from './Diog/Asset_Details.vue';
import DiogTrack from './Diog/Asset_Tracking.vue';

//import DiogTable from './Diog/Asset_Table.vue';
import { asset_byId, asset_byCountry, asset_byCategory, asset_byName, asset_byCity, delete_asset} from '../axios/api.js';

export default {
  name:'HomePage',
  data(){ 
    return { 
     openOff:false,
     assetShow:false,
     TrackingShow:false,

     inputSearchOne:'',
     inputSearchThree:'',
     inputSearchFour:'',
     inputSearchFive:'',
     
     getData:{},
     getSelectData:[],
     getDataThree:[],
     getDataCity:[],
     getDataCountry:[],

     cateOptions:[{
      value:'OfficeUtility',
      label:'OfficeUtility'
     }],
     selectValue: '',

     tableList: [], 

     getRfidId:'',
     getOneAssetIndex:'',

     getTrackId:'',
     getOneLocationIndex:'',

    }
  }, 
  // 搜索框 自定义指令 实时监听输入框的值
  // directives:{
  //   throttle:{
  //     inserted(el, obj){
  //       let timerId = null
  //       let flag = true
  //       el.addEventListener('input', function () {
  //           if (!flag) return
  //           flag = false
  //           timerId && clearTimeout(timerId)
  //           timerId = setTimeout(function () {
  //               flag = true
  //               obj.value()
  //           }, 500)
  //       })
  //     }
  //   }
  // },
  components:{
      DiogBist,
      DiogDetail,
      DiogTrack,
     // DiogTable
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
    //id
    handleInputVal(val){
        console.log('handleInputVal:', val)
        this.autoShow();
        this.selectValue = '';//2
        this.inputSearchThree = '';//3
        this.inputSearchFour = '';//4
        this.inputSearchFive = '';//5
    },
    //category
    handleSelectValTwo(val){
        console.log('category:', val)
        if (val != '') {
        asset_byCategory(val)
        .then((res) => {
          this.getSelectData = res;
          console.log('category list res',this.getSelectData)
          this.$nextTick(()=>{
            this.tableList = [];
            this.tableList = this.getSelectData;
            this.inputSearchOne = '';//1
            this.inputSearchThree = '';//3
            this.inputSearchFour = '';//4
            this.inputSearchFive = '';//5
          })
          return res;
        })
        .catch((err) => {
          console.log('hit error for data request', err)
        })
        }
    },
    //name
    handleInputValThree(val){
        console.log('name res:', val)
        if (val != '') {
        asset_byName(val)
        .then((res) => {
          this.getDataThree = res;
          console.log('this.getDataThree',this.getDataThree)
          this.$nextTick(()=>{
            this.tableList = [];
            this.tableList = this.getDataThree;
            this.inputSearchOne = '';//1
            this.selectValue = '';//2
            this.inputSearchFour = '';//4
            this.inputSearchFive = '';//5
          })
          return res;
        })
        .catch((err) => {
          console.log('hit error for data request', err)
        })
      }

    },
    //city
    handleInputValFour(val){
        console.log('city res:', val)
      if (val != '') {
        asset_byCity(val)
        .then((res) => {
          this.getDataCity = res;
          console.log('this.getDataCity',this.getDataCity)
          this.$nextTick(()=>{
            this.tableList = [];
            this.tableList = this.getDataCity;
            this.inputSearchOne = '';//1
            this.selectValue = '';//2
            this.inputSearchThree = '';//3
            this.inputSearchFive = '';//5
          })
          return res;
        })
        .catch((err) => {
          console.log('hit error for data request', err)
        })
      }

    },
    //country
    handleInputValFive(val){
      console.log('country res list:', val)
      if (val != '') {
        asset_byCountry(val)
        .then((res) => {
          this.getDataCountry = res;
          console.log('this.getDataCountry',this.getDataCountry)
          this.$nextTick(()=>{
            this.tableList = [];
            this.tableList = this.getDataCountry;
            this.inputSearchOne = '';//1
            this.selectValue = '';//2
            this.inputSearchThree = '';//3
            this.inputSearchFour = '';//4
          })
          return res;
        })
        .catch((err) => {
          console.log('hit error for data request', err)
        })
      }
    },
  
    autoShow(){
      var id = this.inputSearchOne;
     
      if (id != '') {
        asset_byId(id)
        .then((res) => {
          this.getData = res;
          console.log('send to sun id', res);
            this.tableList = [];
            this.tableList.push(res);
            return res;
        })
        .catch((err) => {
          console.log('hit error for data request', err)
        })
      } 
    },
    
    //tracking location
    checkLocation(index, row) {
      console.log('Get the location index', index);
      console.log('Get the location information', row);
      
      this.getTrackId = row.rfidId;
      this.getOneLocationIndex = index;

      this.$nextTick(()=>{
        this.TrackingShow = true;
      })
      
    },

    //editClick 
    editClick(index, row) {
       console.log('update asset index', index);
       console.log('update asset row', row);
    
       this.getRfidId = row.rfidId;
       this.getOneAssetIndex = index;

       this.$nextTick(()=>{
          this.assetShow = true;
       })

    },
    //delete asset
    deleteClick(index, row) {
       console.log('delete the asset id is',index)
       console.log('delete the asset id is',row.rfidId)
       let rfidId = '';
       rfidId = row.rfidId;

       if (rfidId != '') {
         delete_asset(rfidId)
         .then((res) =>{
          console.log('delete success',res)
          this.tableList.splice(index, 1);
          if(res.success) {
            this.$message({
                type: 'success',
                message: 'Delete the asset successful!'
              },3000);
          }
          return res;
         })
         .catch(() => {
            this.$message({
              type: 'error',
              message: 'delete the asset failed!'
            }); 
          })
       }
    },
    handleClose() {
      this.openOff = false;
    },

    handleAssetClose() {
      this.assetShow = false;
    },
    handleTrackingClose() {
      this.TrackingShow = false;
      this.getTrackId = '';

    },

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
  width: 150px;
  display: inline-block;
}
.funcButton .el-button{
  padding: 9px 15px;
  margin-top: 10px;
}
.paginate{
    margin: 40px auto;

  } 
.el-dialog__header span{
  font-size: 15px;
  font-weight: bold;
}
</style>