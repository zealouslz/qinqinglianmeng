<template>
  <div class="card">
    <div class="cardTitle" @click="clickMore">
      <img src="../../image/titleOutLine.svg" width="100%" />
      <div class="title">
        <img
          src="../../image/cardTitleIcon.svg"
          style="float: left; margin-left: 15px; margin-top: -4px"
        />
        <div class="titleContent">{{ this.cardList.title }}</div>
        <span class="titleMore">更多 >></span>
      </div>
    </div>
    <div class="cardContent">
      <p v-for="item in this.cardList.items" :key="item.itemId">
        {{ "·" + item.itemName }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      cardList: {},
    };
  },
  mounted() {},
  methods: {
    init(cardList) {
      this.cardList = cardList;
      this.$forceUpdate;
      console.log(this.cardList);
    },
    clickMore() {
      console.log("clickMore");
      this.$router.push({
        name: "list",
        // params: { hzInfo: this.currentArg.event._def.extendedProps }
        params: {
          cardList: this.cardList,
        },
      });
    },
  },
};
</script>
<style scoped>
@import url("./bulletinBoardCard.css");
</style>
