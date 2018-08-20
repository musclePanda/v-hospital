<template>
  <div class="dashboard-container">
    <baidu-map class="map" :center="center" :zoom="zoom" :scroll-wheel-zoom="true">
      <bm-marker :position="{lng: 115.296662, lat: 40.986393}" @click="infoWindowOpen">
        <bm-info-window :show="show" @close="infoWindowClose" @open="infoWindowOpen">我爱北京天安门</bm-info-window>
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
          <div class="list-head">
            <span>酒店名称</span>
            <span>地理位置</span>
            <span>总客房</span>
            <span>星级</span>
            <span></span>
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
      show: false,
      hotal:{
        name:''
      }
    }
  },
  methods: {
   infoWindowClose () {
     this.show = false
   },
   infoWindowOpen () {
     this.show = true
   },
   onSubmit (){
     console.log(this.hotal.name)
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
  width:480px;
  margin-left: 10px;
  flex-shrink: 0;
  display: flex;
  flex-direction:column;
  padding:10px;
}
.map-right{

}
</style>
