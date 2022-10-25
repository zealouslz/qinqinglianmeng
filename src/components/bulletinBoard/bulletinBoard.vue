<template>
    <div style=" background: #061733;">
        <headerBar></headerBar>
        <div class="main">
        <a-row>
            <a-col :xs="2" :sm="4" :md="6" :lg="8" :xl="6">
            <a-row>
                <BulletinBoardCard></BulletinBoardCard>
            </a-row>
            <a-row>
                <BulletinBoardCard></BulletinBoardCard>
            </a-row>
            <a-row>
                <BulletinBoardCard></BulletinBoardCard>
            </a-row>
            </a-col>
            <a-col :xs="20" :sm="16" :md="12" :lg="8" :xl="12">
           <Map></Map>
            </a-col>
            <a-col :xs="2" :sm="4" :md="6" :lg="8" :xl="6">
                <a-row>
                    <BulletinBoardCard></BulletinBoardCard>
            </a-row>
            <a-row>
                <BulletinBoardCard></BulletinBoardCard>
            </a-row>
            <a-row>
                <BulletinBoardCard></BulletinBoardCard>
            </a-row>
            </a-col>
        </a-row>
        <a-row>
            <a-col :xs="2" :sm="4" :md="6" :lg="8" :xl="6">
                <BulletinBoardCard></BulletinBoardCard>
            </a-col>
            <a-col :xs="20" :sm="16" :md="12" :lg="8" :xl="6">
                <BulletinBoardCard></BulletinBoardCard>
            </a-col>
            <a-col :xs="2" :sm="4" :md="6" :lg="8" :xl="6">
                <BulletinBoardCard></BulletinBoardCard>
            </a-col>
            <a-col :xs="2" :sm="4" :md="6" :lg="8" :xl="6">
                <BulletinBoardCard></BulletinBoardCard>
            </a-col>
        </a-row>
    </div>
    </div>
  </template>

<script>
import headerBar from '../header/header.vue'
import Map from '../map/map.vue'
import BulletinBoardCard from '../bulletinBoardCard/bulletinBoardCard.vue'
export default {
  components: { headerBar, Map, BulletinBoardCard },
  name: 'bulletinBoard',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
@import url("./bulletinBoard.css");
  </style>
