<template>
    <div class="photoefficiency" >
        <img src="../../image/icon.svg" class="headIcon"/>
        <span class="headSpan">亲清廉盟在线平台</span>
        <span class="addSpan" @click="()=>visible=true"> <a-icon type="plus" />新增亲清廉盟</span>
        <img src="../../image/headLine.svg" class="headLine"/>
        <NewlyAddedModal :visible="visible" @changeVisiable="(e)=>visible=e"></NewlyAddedModal>
    </div>
</template>

<script>
import NewlyAddedModal from '../newlyAddedModal/newlyAddedModal.vue'
export default {
  data () {
    return {
      visible: false
    }
  },
  methods: {},
  components: { NewlyAddedModal }
}
</script>
<style scoped>
@import url("./header.css");
</style>
