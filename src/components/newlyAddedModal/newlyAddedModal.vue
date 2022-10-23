<template>
    <div>
      <a-modal v-model="visible" title="亲清廉盟新增" @ok="handleOk"  @cancel="handleCancel" width="800px">
        <template>
        <div style="position: absolute;right: 0;top:0">
         <div class="triangle"></div>
      </div>
      <div style="position: absolute;left: 0;top:12px">
         <div class="rectangle"></div>
      </div>
    </template>
    <template slot="footer">
        <a-button key="back" @click="handleCancel">
          取消
        </a-button>
        <a-button key="submit" type="primary" @click="handleOk">
          确认
        </a-button>
      </template>
      <a-row>
      <a-col :span="12">
        <div style="margin-bottom:12px">
        <span class="itemName">所属模块：</span>
        <a-select placeholder="请选择" style="width: 280px">
        <a-select-option value="jack">
            Jack
        </a-select-option>
        <a-select-option value="lucy">
            Lucy
        </a-select-option>
        <a-select-option value="disabled" disabled>
            Disabled
        </a-select-option>
        <a-select-option value="Yiminghe">
            yiminghe
        </a-select-option>
        </a-select>
    </div>
      </a-col>
      <a-col :span="12">
        <div style="margin-bottom:12px">
        <span class="itemName">廉盟类型：</span>
        <a-select placeholder="请选择" style="width: 280px">
        <a-select-option value="jack">
            Jack
        </a-select-option>
        <a-select-option value="lucy">
            Lucy
        </a-select-option>
        <a-select-option value="disabled" disabled>
            Disabled
        </a-select-option>
        <a-select-option value="Yiminghe">
            yiminghe
        </a-select-option>
        </a-select>
    </div>
      </a-col>
    </a-row>
    <a-row>
        <div style="margin-bottom:12px">
        <span class="itemName">标题名称：</span>
        <a-input placeholder="请输入" style="width: 655px" />
        </div>
    </a-row>
    <a-row>
      <a-col :span="12">
        <div style="margin-bottom:12px">
        <span class="itemName">创建时间：</span>
        <a-date-picker  placeholder="年/月/日" style="width: 280px" />
        </div>
      </a-col>
      <a-col :span="12">
        <span class="itemName">&nbsp;&nbsp; 创建人：</span>
        <a-input placeholder="请输入" style="width: 280px" />
      </a-col>
    </a-row>
    <a-row>
        <editor-vue
        :content="content"
        :readOnlys="readOnlys"
        @changeData="hChangeData"
        @uploadImg="hUploadImg"></editor-vue>
    </a-row>
      </a-modal>
    </div>
  </template>
<script>
import editorVue from '../editorVue/editorVue.vue'
export default {
  components: { editorVue },
  props: ['visible'],
  data () {
    return {
      readOnlys: false,
      content: `<p style="text-align: center;"><strong>我是标题</strong></p><p style="text-align: center;"><br></p>`
    }
  },
  methods: {
    handleOk (e) {
      console.log(e)
      this.$emit('changeVisiable', false)
    },
    handleCancel () {
      this.$emit('changeVisiable', false)
    },
    init () {
    },
    hChangeData (editDataHtml) {
      // 获取最新的html数据
      this.content = editDataHtml
      console.log(this.content)
    },
    hUploadImg (file, insertFn) {
      console.log(file)
      // 插入图片，调接口返回图片url,通过插入conteng
      let imgUrl = 'https://img1.baidu.com/it/u=608404415,1639465523&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800'
      insertFn(imgUrl)
      // 设置只读
      this.readOnlys = true
    }

  }
}
</script>
<style scoped>
@import url("./newlyAddedModal.css");
</style>
