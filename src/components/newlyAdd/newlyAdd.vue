<template>
    <div style="width: 100%; height: 100%; background: #061733">
      <headerBar></headerBar>
      <div class="body">
        <img
          src="../../image/backIcon.svg"
          style="display: inline-block; float: left"
        />
        <span
          style="
            float: left;
            font-size: 12px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #ffffff;
            line-height: 10px;
          "
          >返回</span
        >
        <div class="rectangle"></div>
        <span class="headNav">服务联动-各单位诉求及解决情况>新增</span>
        <div class="divider" />
        <div style="padding:10px 250px 0 250px">
        <a-row >
        <a-col :span="12">
          <div style="margin-bottom: 12px">
            <span class="itemName">所属模块：</span>
            <a-select placeholder="请选择" style="width: 70%">
              <a-select-option value="jack"> Jack </a-select-option>
              <a-select-option value="lucy"> Lucy </a-select-option>
              <a-select-option value="disabled" disabled>
                Disabled
              </a-select-option>
              <a-select-option value="Yiminghe"> yiminghe </a-select-option>
            </a-select>
          </div>
        </a-col>
        <a-col :span="12">
          <div style="margin-bottom: 12px">
            <span class="itemName">廉盟类型：</span>
            <a-select placeholder="请选择" style="width: 80%">
              <a-select-option value="jack"> Jack </a-select-option>
              <a-select-option value="lucy"> Lucy </a-select-option>
              <a-select-option value="disabled" disabled>
                Disabled
              </a-select-option>
              <a-select-option value="Yiminghe"> yiminghe </a-select-option>
            </a-select>
          </div>
        </a-col>
      </a-row>
      <a-row>
        <div style="margin-bottom: 12px">
          <span class="itemName">标题名称：</span>
          <a-input placeholder="请输入" style="width: 90%" />
        </div>
      </a-row>
      <a-row>
        <a-col :span="12">
          <div style="margin-bottom: 12px">
            <span class="itemName">创建时间：</span>
            <a-date-picker placeholder="年/月/日" style="width: 70%" />
          </div>
        </a-col>
        <a-col :span="12">
          <span class="itemName">&nbsp;&nbsp; 创建人：</span>
          <a-input placeholder="请输入" style="width: 80%" />
        </a-col>
      </a-row>
      <a-row>
        <editor-vue
          :content="content"
          :readOnlys="readOnlys"
          @changeData="hChangeData"
          @uploadImg="hUploadImg"
        ></editor-vue>
      </a-row>
      <a-row>
        <span class="mustIcon">*</span>
        <span
          style="
            color: white;
            float: left;
          "
          >附件上传：</span
        >
        <a-upload
          name="file"
          :multiple="true"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          :headers="headers"
          @change="handleChange"
          style="float:left"
        >
          <div style="color: #60b3ff; display: inline;float: left;">
            <a-icon type="upload" /> 上传文件
          </div>
          <span
            style="
              width: 225px;
              height: 17px;
              display: inline;
              font-size: 12px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #ffffff;
              line-height: 17px;
            "
            >（支持扩展名：doc/docx/pdf/jpg/png）</span
          >
        </a-upload>
      </a-row>
      <a-row>
        <a-button key="back" @click="handleCancel"> 取消 </a-button>
        <a-button key="submit" type="primary" style="margin-left:40px" @click="handleOk">
          确认
        </a-button>
      </a-row>
    </div>
      </div>
    </div>
  </template>

<script>
import headerBar from '../header/header.vue'
import editorVue from '../editorVue/editorVue.vue'
export default {
  components: { headerBar, editorVue },
  name: 'newlyAdd',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      columns: [
        { title: '序号', dataIndex: 'serialNo', key: 'serialNo' },
        { title: '标题名称', dataIndex: 'titleName', key: 'titleName' },
        { title: '创建时间', dataIndex: 'createTime', key: 'createTime' },
        { title: '创建人', dataIndex: 'creator', key: '2' },
        {
          title: '操 作',
          key: 'operation',
          scopedSlots: { customRender: 'action' }
        }
      ],
      data: [],
      readOnlys: true,
      content: `<p style="text-align: center;"><strong>我是标题</strong></p><p style="text-align: center;"><br></p>`
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      for (let i = 0; i < 100; i++) {
        this.data.push({
          serialNo: i,
          titleName: `titleName ${i}`,
          createTime: '2020/10/25',
          creator: 'zealous'
        })
      }
    },
    hChangeData (editDataHtml) {
      // 获取最新的html数据
      this.content = editDataHtml
      console.log(this.content)
    },
    hUploadImg (file, insertFn) {
      console.log(file)
      // 插入图片，调接口返回图片url,通过插入conteng
      let imgUrl =
        'https://img1.baidu.com/it/u=608404415,1639465523&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800'
      insertFn(imgUrl)
      // 设置只读
      this.readOnlys = true
    }
  }
}
</script>

    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
  @import url("./newlyAdd.css");
  </style>
