<template>
  <div class="photoefficiency">
    <img src="../../image/icon.svg" class="headIcon" />
    <span class="headSpan">亲清廉盟在线平台</span>
    <span class="addSpan" @click="newAdd">
      <a-icon type="plus" />新增亲清廉盟</span
    >
    <img src="../../image/headLine.svg" class="headLine" />
    <NewlyAddedModal
      :visible="visible"
      ref="newAdd"
      @changeVisiable="changeVisiable"
    ></NewlyAddedModal>
    <!-- <introduce-modal :visible="true"></introduce-modal> -->
  </div>
</template>

<script>
import IntroduceModal from "../introduceModal/introduceModal.vue";
import NewlyAddedModal from "../newlyAddedModal/newlyAddedModal.vue";
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    newAdd() {
      this.visible = true;
      this.$refs.newAdd.init();
    },
    changeVisiable(e) {
      this.visible = e;
      console.log("changeVisiable");
      this.$emit("addSuccess");
    },
  },
  components: { NewlyAddedModal, IntroduceModal },
};
</script>
<style scoped>
@import url("./header.css");
</style>
