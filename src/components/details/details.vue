<template>
  <div style="width: 100%; height: 100%; background: #061733">
    <headerBar></headerBar>
    <div class="body">
      <div @click="goback">
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
      </div>
      <div class="rectangle"></div>
      <span class="headNav">{{ title + ">详情" }}</span>
      <div class="divider" />
      <div style="padding: 10px 250px 0 250px">
        <a-row>
          <a-col :span="12">
            <div style="margin-bottom: 12px">
              <span class="itemName">所属模块：</span>
              <span class="itemConten">{{ modularName }}</span>
            </div>
          </a-col>
          <a-col :span="12">
            <div style="margin-bottom: 12px">
              <span class="itemName">廉盟类型：</span>
              <span class="itemConten">{{ typeName }}</span>
            </div>
          </a-col>
        </a-row>
        <a-row>
          <div style="margin-bottom: 12px">
            <span class="itemName">标题名称：</span>
            <span class="itemConten">{{ itemName }}</span>
          </div>
        </a-row>
        <a-row>
          <a-col :span="12">
            <div style="margin-bottom: 12px">
              <span class="itemName">创建时间：</span>
              <span class="itemConten">{{ createDate }}</span>
            </div>
          </a-col>
          <a-col :span="12">
            <span class="itemName">&nbsp;&nbsp; 创建人：</span>
            <span class="itemConten">{{ creatorName }}</span>
          </a-col>
        </a-row>
        <a-row>
          <div style="width: 94%">
            <editor-vue
              ref="editorVue"
              :content="content"
              :readOnlys="readOnlys"
              @changeData="hChangeData"
              @uploadImg="hUploadImg"
            ></editor-vue>
          </div>
        </a-row>
        <a-row>
          <span class="mustIcon">*</span>
          <span style="color: white; float: left">附件上传：</span>
          <a-upload
            name="multipartFile"
            :multiple="true"
            :data="uploadData"
            :action="action"
            :file-list="fileList"
            :headers="headers"
            @change="handleFileChange"
            :remove="handleRemove"
            accept=".doc,.docx,image/*,.pdf"
            style="float: left"
          >
            <div style="color: #60b3ff; display: inline; float: left">
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
      </div>
    </div>
  </div>
</template>

<script>
import headerBar from "../header/header.vue";
import editorVue from "../editorVue/editorVue.vue";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import api from "../../api/index";
import url from "../../api/url/url";
export default {
  components: { headerBar, editorVue },
  name: "details",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      columns: [
        { title: "序号", dataIndex: "serialNo", key: "serialNo" },
        { title: "标题名称", dataIndex: "titleName", key: "titleName" },
        { title: "创建时间", dataIndex: "createTime", key: "createTime" },
        { title: "创建人", dataIndex: "creator", key: "2" },
        {
          title: "操 作",
          key: "operation",
          scopedSlots: { customRender: "action" },
        },
      ],
      data: [],
      readOnlys: true,
      cardList: this.$route.params.cardList,
      modularName: this.$route.params.cardList.modular.modularName,
      modularId: this.$route.params.cardList.modular.modularId,
      typeName: this.$route.params.cardList.typeAndItemList.typeName,
      typeId: this.$route.params.cardList.typeAndItemList.typeId,
      title: this.$route.params.cardList.title,
      item: this.$route.params.item,
      dateFormat: "YYYY/MM/DD",
      itemName: this.$route.params.item.itemName,
      itemId: this.$route.params.item.itemId,
      creatorId: this.$route.params.item.creatorId,
      creatorName: this.$route.params.item.creatorName,
      createDate: this.$route.params.item.createDate,
      uploadData: {
        belongItemId: "",
      },

      action: "",
      headers: {
        // token: storage.get(ACCESS_TOKEN)
      },
      fileList: [],
      readOnlys: true,
      content: this.$route.params.item.htmlContent,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.uploadData.belongItemId = this.itemId;
      this.action = "/api/itemList/newAddFile";
      // this.$refs.editorVue.readOnlys(true);
    },
    hChangeData(editDataHtml) {
      // 获取最新的html数据
      this.content = editDataHtml;
      console.log(this.content);
    },
    hUploadImg(file, insertFn) {
      console.log(file);
      // 插入图片，调接口返回图片url,通过插入conteng
      let imgUrl =
        "https://img1.baidu.com/it/u=608404415,1639465523&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800";
      insertFn(imgUrl);
      // 设置只读
      this.readOnlys = true;
    },
    handleFileChange({ fileList }) {
      this.fileList = fileList;
    },
    goback() {
      this.$router.push({
        name: "list",
        // params: { hzInfo: this.currentArg.event._def.extendedProps }
        params: {
          cardList: this.cardList,
        },
      });
    },
    handleRemove(file) {
      console.log(file);
      // const index = this.fileList.indexOf(file);
      // const newFileList = this.fileList.slice();
      // newFileList.splice(index, 1);
      // this.fileList = newFileList;
    },
  },
};
</script>

    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
@import url("./details.css");
</style>
