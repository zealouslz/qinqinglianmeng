<template>
  <div>
    <a-modal
      v-model="visible"
      title="亲清廉盟介绍"
      @cancel="handleCancel"
      width="600px"
    >
      <template>
        <div style="position: absolute; right: 0; top: 0">
          <div class="triangle"></div>
        </div>
        <div style="position: absolute; left: 0; top: 12px">
          <div class="rectangle"></div>
        </div>
      </template>
      <template slot="footer">
        <a-button key="submit" type="primary" @click="handleCancel">
          取消
        </a-button>
      </template>
      <div class="title">服务联动下设：</div>
      <div class="content">
        1、各单位诉求及解决情况<br />
        2、连队化+指导员服务机制<br />
        3、施工现场服务<br />
        4、督办工作<br />
      </div>
      <div class="title">廉防联动下设：</div>
      <div class="content">
        1、廉防机制<br />
        2、“啄木鸟”监督队工作开展情况<br />
        3、“十不准”开展情况<br />
        4、廉洁案例<br />
      </div>
      <div class="title">廉防联动下设：：</div>
      <div class="content">
        1、廉防机制<br />
        2、“啄木鸟”监督队工作开展情况<br />
        3、“十不准”开展情况<br />
        4、廉洁案例<br />
      </div>
    </a-modal>
  </div>
</template>
<script>
export default {
  components: {},
  props: ["visible"],
  data() {
    return {};
  },
  methods: {
    handleCancel() {
      this.$emit("changeVisiable", false);
    },
  },
};
</script>
  <style scoped>
@import url("./introduceModal.css");
</style>
