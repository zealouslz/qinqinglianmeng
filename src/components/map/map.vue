<template>
    <div class="map">
    <img src="../../image/map.png" width="843px" height="765px" style="margin-top:-120px"/>
    <div style="position: absolute;top:75px;left:360px">
     <div class="mapCircleOut">
        <div class="mapCircleInner"></div>
    </div>
    <div class="placeName">湖州</div>
    </div>
    <div style="position: absolute;top:85px;left:460px">
     <div class="mapCircleOut">
        <div class="mapCircleInner"></div>
    </div>
    <div class="placeName">嘉兴</div>
    </div>
    <div style="position: absolute;top:170px;left:300px">
     <div class="mapCircleOut">
        <div class="mapCircleInner"></div>
    </div>
    <div class="placeName">杭州</div>
    </div>
    <div style="position: absolute;top:190px;left:440px">
     <div class="mapCircleOut">
        <div class="mapCircleInner"></div>
    </div>
    <div class="placeName">绍兴</div>
    </div>
    <div style="position: absolute;top:190px;left:550px">
     <div class="mapCircleOut">
        <div class="mapCircleInner"></div>
    </div>
    <div class="placeName">宁波</div>
    </div>
    <div style="position: absolute;top:165px;left:620px">
     <div class="mapCircleOut">
        <div class="mapCircleInner"></div>
    </div>
    <div class="placeName">舟山</div>
    </div>
    <div style="position: absolute;top:290px;left:220px">
     <div class="mapCircleOut">
        <div class="mapCircleInner"></div>
    </div>
    <div class="placeName">衢州</div>
    </div>
    <div style="position: absolute;top:260px;left:360px">
     <div class="mapCircleOut">
        <div class="mapCircleInner"></div>
    </div>
    <div class="placeName">金华</div>
    </div>
    <div style="position: absolute;top:300px;left:530px">
     <div class="mapCircleOut">
        <div class="mapCircleInner"></div>
    </div>
    <div class="placeName">台州</div>
    </div>
    <div style="position: absolute;top:370px;left:310px">
     <div class="mapCircleOut">
        <div class="mapCircleInner"></div>
    </div>
    <div class="placeName">丽水</div>
    </div>
    <div style="position: absolute;top:420px;left:410px">
     <div class="mapCircleOut">
        <div class="mapCircleInner"></div>
    </div>
    <div class="placeName">温州</div>
    </div>

    </div>
  </template>

<script>
export default {
  name: 'Map',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
   @import url("./map.css");
  </style>
