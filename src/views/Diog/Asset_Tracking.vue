<template>
    <div style="margin: 5px 20px;font-size:15px !important">
        <el-card class="box-card">
            <div>
                <span style="display:inline-block; margin-right:10px;">rfidId:</span>
                <span v-if="changeLocation == 1">{{formLabelAlign.rfidId}}</span>
                <el-input v-if="changeLocation == 2" v-model="formLabelAlign.rfidId" placeholder="enter rfidId"></el-input>
            </div>
            <div style="margin-top:15px;">
                <span style="display:inline-block; margin-right:10px;">city:</span>
                <span v-if="changeLocation == 1">{{formLabelAlign.city}}</span>
                <el-input v-if="changeLocation == 2" v-model="formLabelAlign.city" placeholder="enter city"></el-input>
            </div>
            <div style="margin-top:15px;">
                <span style="display:inline-block; margin-right:10px;">state:</span>
                <span v-if="changeLocation == 1">{{formLabelAlign.state}}</span>
                <el-input v-if="changeLocation == 2" v-model="formLabelAlign.state" placeholder="enter state"></el-input>
            </div>
            <div style="margin-top:15px;">
                <span style="display:inline-block; margin-right:10px;">country:</span>
                <span v-if="changeLocation == 1">{{formLabelAlign.country}}</span>
                <el-input v-if="changeLocation == 2" v-model="formLabelAlign.country" placeholder="enter country"></el-input>
            </div>

            <div style="margin:15px auto; text-align: center;">
                <el-button size="small" type="primary" @click="cancelForm()">Close</el-button>
                <el-button size="small" type="success" @click="updateForm()">Update</el-button>
                <el-button size="small" type="success" @click="submitForm()">Save</el-button>
            </div>
        </el-card>
    </div>
  </template>
  <script>
  import {tracking_location, update_location} from '../../axios/api.js';

  export default {
    name: 'AssetTracking',
    props:{
        
    },
    data(){
      return{
        changeLocation: 1,
        formLabelAlign:{
            rfidId:'',
            city:'',
            state:'',
            country:''
        }
      }
    },
    mounted(){
        console.log('getTrackId',this.$parent.$parent.getTrackId);
        console.log('getOneLocationIndex',this.$parent.$parent.getOneLocationIndex);
        
        var id = '';
        id = this.$parent.$parent.getTrackId;
        console.log('id', id)

        this.assetAutoShow(id);
      
    },
    watch: {
        // eslint-disable-next-line 
        
    },
    methods:{
        assetAutoShow(id){
            if (id != '') {
                tracking_location(id)
                .then((res) => {
                  this.formLabelAlign.rfidId = res.rfidId;
                  this.formLabelAlign.city = res.city;
                  this.formLabelAlign.state = res.state;
                  this.formLabelAlign.country = res.country;
                  return res;
                })
                .catch((err) => {
                  console.log('hit error for data request', err)
                })
            } 
        },
        updateForm() {
            this.changeLocation = 2;

        },
        submitForm() {
            this.changeLocation = 1; 
            var formData = this.formLabelAlign;
            update_location(formData)
            .then((res) => {
                this.$message({
                    type: 'success',
                    message: 'update the location successful!'
                },3000);
                var index = this.$parent.$parent.getOneLocationIndex;
                this.$parent.$parent.tableList[index].rfidId = this.formLabelAlign.rfidId;
                this.$parent.$parent.tableList[index].city = this.formLabelAlign.city;
                this.$parent.$parent.tableList[index].state = this.formLabelAlign.state;
                this.$parent.$parent.tableList[index].country = this.formLabelAlign.country;
                return res;

            })
            .catch((err) => {
              console.log('hit error for data request', err)
            })

        },
        cancelForm() {
            this.$parent.$parent.handleTrackingClose();
        }
  
      
  
     
      
    }
  }
  </script>
  
  <style scoped>
  *{
    font-size: 15px !important;
  }
  .box-card {
    width: 450px;
  }
  .box-card .el-input{
    width: 60%;
  }
  </style>