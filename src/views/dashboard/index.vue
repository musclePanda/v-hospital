<template>
  <div class="dashboard-container">
    <baidu-map class="map" :center="center" :zoom="zoom" :scroll-wheel-zoom="true"></baidu-map>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'dashboard',
  data(){
    return{
      center:{lng: 115.296662, lat: 40.986393},
      zoom:15
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.map{
  width:100%;
  height:700px;
}
</style>
