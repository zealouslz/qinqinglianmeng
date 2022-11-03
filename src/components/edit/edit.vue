<template>
  <div style="width: 100%; height: 100%; background: #061733">
    <headerBar></headerBar>
    <div class="body">
      <div @click="handleCancle">
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
      <span class="headNav">{{ title + ">编辑" }}</span>
      <div class="divider" />
      <div style="padding: 10px 250px 0 250px">
        <a-row>
          <a-col :span="12">
            <div style="margin-bottom: 12px">
              <span class="itemName">所属模块：</span>
              <a-select
                placeholder="请选择"
                v-model="modularName"
                style="width: 70%"
                disabled
              >
              </a-select>
            </div>
          </a-col>
          <a-col :span="12">
            <div style="margin-bottom: 12px">
              <span class="itemName">廉盟类型：</span>
              <a-select
                placeholder="请选择"
                style="width: 70%"
                v-model="typeName"
                disabled
              >
              </a-select>
            </div>
          </a-col>
        </a-row>
        <a-row>
          <div style="margin-bottom: 12px">
            <span class="itemName">标题名称：</span>
            <a-input
              placeholder="请输入"
              v-model="itemName"
              style="width: 85%"
            />
          </div>
        </a-row>
        <a-row>
          <a-col :span="12">
            <div style="margin-bottom: 12px">
              <span class="itemName">创建时间：</span>
              <a-date-picker
                placeholder="年/月/日"
                :format="dateFormat"
                v-model="createDate"
                disabled
                style="width: 70%"
              />
            </div>
          </a-col>
          <a-col :span="12">
            <span class="itemName">&nbsp;&nbsp; 创建人：</span>
            <a-input
              placeholder="请输入"
              v-model="creatorName"
              disabled
              style="width: 70%"
            />
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
        <a-row>
          <a-button key="back" @click="handleCancle"> 取消 </a-button>
          <a-button
            key="submit"
            type="primary"
            style="margin-left: 40px"
            @click="handleOk"
          >
            确认
          </a-button>
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
  name: "edit",
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
      readOnlys: false,
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
    },
    handleOk() {
      if (this.itemName == "") {
        this.$message.warn("请输入标题！");
      } else {
        api
          .postRequest({
            url: url.updateItem,
            params: {
              htmlContent: this.content,
              itemId: this.itemId,
              itemName: this.itemName,
            },
          })
          .then((res) => {
            if (res.code == 200) {
              this.$message.success("修改成功！");
              this.goback();
            } else {
              this.$message.warning("新增失败！");
            }
          });
      }
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
    handleCancle() {
      if (this.fileList.length > 0) {
        api.postQueryRequest({
          url: url.deleteByItemId,
          params: { itemId: this.itemId },
        });
      }
      this.goback();
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
@import url("./edit.css");
</style>
