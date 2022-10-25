<template>
    <div class="map">
    <img src="../../image/map.png" width="100%" height="720px" style="margin-top:-120px"/>
    <div style="position: absolute;top:65px;left:43%">
     <div class="mapCircleOut">
        <div class="mapCircleInner"></div>
    </div>
    <div class="placeName">湖州</div>
    </div>
    <div style="position: absolute;top:75px;left:55%">
     <div class="mapCircleOut">
        <div class="mapCircleInner"></div>
    </div>
    <div class="placeName">嘉兴</div>
    </div>
    <div style="position: absolute;top:160px;left:38%">
     <div class="mapCircleOut">
        <div class="mapCircleInner"></div>
    </div>
    <div class="placeName">杭州</div>
    </div>
    <div style="position: absolute;top:180px;left:54%">
     <div class="mapCircleOut">
        <div class="mapCircleInner"></div>
    </div>
    <div class="placeName">绍兴</div>
    </div>
    <div style="position: absolute;top:180px;left:65%">
     <div class="mapCircleOut">
        <div class="mapCircleInner"></div>
    </div>
    <div class="placeName">宁波</div>
    </div>
    <div style="position: absolute;top:155px;left:75%">
     <div class="mapCircleOut">
        <div class="mapCircleInner"></div>
    </div>
    <div class="placeName">舟山</div>
    </div>
    <div style="position: absolute;top:280px;left:26%">
     <div class="mapCircleOut">
        <div class="mapCircleInner"></div>
    </div>
    <div class="placeName">衢州</div>
    </div>
    <div style="position: absolute;top:250px;left:45%">
     <div class="mapCircleOut">
        <div class="mapCircleInner"></div>
    </div>
    <div class="placeName">金华</div>
    </div>
    <div style="position: absolute;top:290px;left:62%">
     <div class="mapCircleOut">
        <div class="mapCircleInner"></div>
    </div>
    <div class="placeName">台州</div>
    </div>
    <div style="position: absolute;top:360px;left:38%">
     <div class="mapCircleOut">
        <div class="mapCircleInner"></div>
    </div>
    <div class="placeName">丽水</div>
    </div>
    <div style="position: absolute;top:410px;left:50%">
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
