<template>
  <div style="background: #061733">
    <headerBar @addSuccess="addSuccess"></headerBar>
    <div class="main">
      <a-row>
        <a-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" id="leftHight">
          <a-row>
            <BulletinBoardCard ref="cardList1"></BulletinBoardCard>
          </a-row>
          <a-row>
            <BulletinBoardCard ref="cardList2"></BulletinBoardCard>
          </a-row>
          <a-row>
            <BulletinBoardCard ref="cardList3"></BulletinBoardCard>
          </a-row>
        </a-col>
        <a-col :xs="20" :sm="16" :md="12" :lg="8" :xl="12" @click="clickMap">
          <Map></Map>
        </a-col>
        <a-col :xs="2" :sm="4" :md="6" :lg="8" :xl="6" id="rightHight">
          <a-row>
            <BulletinBoardCard ref="cardList4"></BulletinBoardCard>
          </a-row>
          <a-row>
            <BulletinBoardCard ref="cardList5"></BulletinBoardCard>
          </a-row>
          <a-row>
            <BulletinBoardCard ref="cardList6"></BulletinBoardCard>
          </a-row>
        </a-col>
      </a-row>
      <a-row>
        <a-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" id="bottom1">
          <BulletinBoardCard ref="cardList7"></BulletinBoardCard>
        </a-col>
        <a-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" id="bottom2">
          <BulletinBoardCard ref="cardList8"></BulletinBoardCard>
        </a-col>
        <a-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" id="bottom3">
          <BulletinBoardCard ref="cardList9"></BulletinBoardCard>
        </a-col>
        <a-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" id="bottom4">
          <BulletinBoardCard ref="cardList10"></BulletinBoardCard>
        </a-col>
      </a-row>
    </div>
    <introduce-modal
      :visible="introduceVisible"
      @changeVisiable="(e) => (introduceVisible = e)"
    ></introduce-modal>
  </div>
</template>

<script>
import headerBar from "../header/header.vue";
import Map from "../map/map.vue";
import api from "../../api/index";
import url from "../../api/url/url";
import BulletinBoardCard from "../bulletinBoardCard/bulletinBoardCard.vue";
import IntroduceModal from "../introduceModal/introduceModal.vue";
export default {
  components: { headerBar, Map, BulletinBoardCard, IntroduceModal },
  name: "bulletinBoard",
  data() {
    return {
      introduceVisible: false,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.getBulletinBoardList();
    },
    getBulletinBoardList() {
      api
        .getRequest({
          url: url.getBulletinBoardList,
        })
        .then((res) => {
          if (res.code == 200) {
            console.log(res);
            var count = 1;
            res.data.forEach((modular) => {
              modular.typeAndItemLists.forEach((typeAndItemList) => {
                let id = "cardList" + count;
                console.log(id);
                this.$refs[id].init({
                  title: modular.modularName + "-" + typeAndItemList.typeName,
                  items: typeAndItemList.items,
                  modular: modular,
                  typeAndItemList: typeAndItemList,
                });
                // this.cardList.push({
                //   title: modular.modularName + "-" + typeAndItemList.typeName,
                //   items: typeAndItemList.items,
                // });
                count++;
              });
            });
          } else {
            this.$message.warning("获取看板列表失败！");
          }
        });
    },
    addSuccess() {
      this.getBulletinBoardList();
    },
    clickMap() {
      this.introduceVisible = true;
    },
  },
};
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
@import url("./bulletinBoard.css");
</style>
