<template>
  <div class="dashboard-container">
    <baidu-map class="map" :center="center" :zoom="zoom" :scroll-wheel-zoom="true">
      <bm-marker :position="item.location" @click="infoWindowOpen(index)" v-for="(item, index) in mapList">
        <bm-info-window :show="item.show" @close="infoWindowClose(index)" @open="infoWindowOpen(index)">
          <div class="msg">
            <img :src="item.src" alt="" style="width:100px;height:100px;padding:10px;">
            <div class="msg-right">
              <span>酒店名称：{{item.hotalName}}</span>
              <span>酒店地址：{{item.adds}}</span>
              <span>电话：{{item.tell}}</span>
              <span>简介：{{item.introduc}}</span>
            </div>
          </div>
        </bm-info-window>
      </bm-marker>
    </baidu-map>
    <div class="map-right">
      <div class="queryHotal">
        <el-form :inline="true" :model="hotal" class="demo-form-inline">
          <el-form-item>
            <el-input v-model="hotal.name" placeholder="请输入查询的酒店" style="width:240px;"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="hotal-list">
          <div class="list-head" style="background:#f5f5f5;height:40px;">
            <span style="flex-grow:2;">酒店名称</span>
            <span>地理位置</span>
            <span>总客房</span>
            <span>星级</span>
            <span></span>
          </div>
          <div class="list-head" v-for="item in hotalList">
            <span style="flex-grow:2;">{{item.name}}</span>
            <span>{{item.loc}}</span>
            <span>{{item.room}}</span>
            <span>{{item.star}}</span>
            <span @click='ondetails(item.id)' style="cursor: pointer;">详情</span>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'dashboard',
  data(){
    return{
      center:{lng: 115.296662, lat: 40.986393},
      zoom:15,
      hotal:{
        name:''
      },
      mapList:[
        {location:{lng: 115.296662, lat: 40.986393},show:false,src:'../../../src/assets/img/005.jpg',type:1,hotalName:'崇礼县达沃斯酒店',adds:'河北省张家口市崇礼区裕兴路98号',introduc:'崇礼县达沃斯酒店二星级酒店',tell:'0313--4725199'},
        {location:{lng: 115.292401, lat: 40.978226},show:false,src:'../../../src/assets/img/005.jpg',type:2,hotalName:'峰尚宾馆',adds:'河北省张家口市崇礼区酒吧街1号楼1栋15号',introduc:'峰尚宾馆二星级酒店',tell:'0313-5695599'},
        {location:{lng: 115.29753, lat: 40.987831},show:false,src:'../../../src/assets/img/005.jpg',type:3,hotalName:'张家口逅度假酒店',adds:'河北省张家口市崇礼区裕兴路伯顿庄园1号底商',introduc:'张家口逅度假酒店(原富卓假日酒店)',tell:'(0313)5690888'},
        {location:{lng: 115.291913, lat: 40.982195},show:false,src:'../../../src/assets/img/005.jpg',type:1,hotalName:'卡布风情酒店',adds:'河北省张家口市崇礼区长青路72号酒吧文化城5号楼啤酒广场1号',introduc:'卡布风情酒店',tell:'(0313)5698885'}
      ],
      hotalList:[
        {name:'崇礼县达沃斯酒店',loc:'崇礼区',room:42,star:'二星级',id:1 },
        {name:'峰尚宾馆',loc:'崇礼区',room:42,star:'二星级',id:2 },
        {name:'张家口逅度假酒店',loc:'崇礼区',room:42,star:'二星级',id:3 },
        {name:'卡布风情酒店',loc:'崇礼区',room:42,star:'二星级',id:4 }
      ]
    }
  },
  methods: {
   infoWindowClose (index) {
     this.mapList[index].show = false
   },
   infoWindowOpen (index) {
     this.mapList[index].show = true
   },
   onSubmit (){
     console.log(this.hotal.name)
   },
   ondetails (id){
     this.$router.push({ path: '/hotal' ,query:{ id:id }})
   }
 }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 10px;
    flex-grow: 1;
    display: flex;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.map{
  width:100%;
  height: 100%;
}
.map-right{
  width:550px;
  margin-left: 10px;
  flex-shrink: 0;
  display: flex;
  flex-direction:column;
  padding:10px;
}
.hotal-list{
  display: flex;
  flex-direction: column;
}
.list-head{
  display: flex;
  height: 40px;
  align-items: center;
}
.list-head>span{
  padding:0 10px;
  text-align: center;
  line-height: 40px;
  flex-basis: 0;
  flex-grow: 1;
  font-size: 14px;
}
.msg{
  display: flex;
}
.msg-right{
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding:20px;
}
.msg-right>span{
  display:flex;
  height: 24px;
  align-items: center;
}
</style>
