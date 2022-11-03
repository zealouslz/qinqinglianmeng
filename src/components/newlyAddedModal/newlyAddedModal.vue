<template>
  <div>
    <a-modal
      v-model="visible"
      title="亲清廉盟新增"
      @ok="handleOk"
      @cancel="handleCancel"
      width="800px"
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
        <a-button key="back" @click="handleCancel"> 取消 </a-button>
        <a-button key="submit" type="primary" @click="handleOk">
          确认
        </a-button>
      </template>
      <a-row>
        <a-col :span="12">
          <div style="margin-bottom: 12px">
            <span class="itemName">所属模块：</span>
            <a-select
              placeholder="请选择"
              v-model="modular"
              @change="handleModularChange"
              style="width: 240px"
            >
              <a-select-option v-for="d in modularAndType" :key="d.modularId">
                {{ d.modularName }}
              </a-select-option>
            </a-select>
          </div>
        </a-col>
        <a-col :span="12">
          <div style="margin-bottom: 12px">
            <span class="itemName">廉盟类型：</span>
            <a-select placeholder="请选择" v-model="type" style="width: 280px">
              <a-select-option v-for="d in typeList" :key="d.typeId">
                {{ d.typeName }}
              </a-select-option>
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
            style="width: 655px"
          />
        </div>
      </a-row>
      <a-row>
        <a-col :span="12">
          <div style="margin-bottom: 12px">
            <span class="itemName">创建时间：</span>
            <a-date-picker
              placeholder="年/月/日"
              disabled
              v-model="createDate"
              style="width: 240px"
            />
          </div>
        </a-col>
        <a-col :span="12">
          <span class="itemName">&nbsp;&nbsp; 创建人：</span>
          <a-input
            placeholder="请输入"
            disabled
            v-model="creatorName"
            style="width: 280px"
          />
        </a-col>
      </a-row>
      <a-row>
        <editor-vue
          ref="editorVue"
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
            width: 992px;
            height: 702px;
            background: rgba(3, 30, 66, 0.8);
            box-shadow: inset 0px 1px 20px 0px rgba(1, 112, 198, 0.26);
            color: white;
          "
          >附件上传：</span
        >
        <a-upload
          name="multipartFile"
          :multiple="true"
          :data="uploadData"
          :action="action"
          :file-list="fileList"
          :headers="headers"
          @change="handleFileChange"
          accept=".doc,.docx,image/*,.pdf"
        >
          <div style="color: #60b3ff; display: inline">
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
    </a-modal>
  </div>
</template>
<script>
import editorVue from "../editorVue/editorVue.vue";
import api from "../../api/index";
import url from "../../api/url/url";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
export default {
  components: { editorVue },
  props: ["visible"],
  data() {
    return {
      modularAndType: [],
      modular: "",
      type: "",
      typeList: [],
      itemName: "",
      creatorId: "202210291",
      creatorName: "zealous",
      createDate: moment(moment().valueOf()).format("YYYY/MM/DD"),
      uploadData: {
        belongItemId: "",
      },
      action: "",
      headers: {
        // token: storage.get(ACCESS_TOKEN)
      },
      fileList: [],
      readOnlys: false,
      content: "",
    };
  },
  mounted() {},

  methods: {
    handleOk(e) {
      if (this.modular == "") {
        this.$message.warn("请选择所属模块！");
      } else if (this.type == "") {
        this.$message.warn("请选择廉盟类型！");
      } else if (this.itemName == "") {
        this.$message.warn("请输入标题！");
      } else {
        api
          .postRequest({
            url: url.newAddItem,
            params: {
              belongModular: this.modular,
              belongType: this.type,
              createDate: moment().valueOf(),
              creatorId: this.creatorId,
              creatorName: this.creatorName,
              htmlContent: this.content,
              itemId: this.itemId,
              itemName: this.itemName,
            },
          })
          .then((res) => {
            if (res.code == 200) {
              this.$message.success("新增成功");
              this.$emit("changeVisiable", false);
            } else {
              this.$message.warning("新增失败！");
            }
          });
      }
    },
    handleCancel() {
      this.$emit("changeVisiable", false);
      if (this.fileList.length > 0) {
        api.postQueryRequest({
          url: url.deleteByItemId,
          params: { itemId: this.itemId },
        });
      }
    },
    init() {
      this.fileList = [];
      this.modular = "";
      this.type = "";
      this.content = "";
      this.itemId = uuidv4();
      this.uploadData.belongItemId = this.itemId;
      this.action = "/api/itemList/newAddFile";
      api
        .getRequest({
          url: url.getModularAndType,
        })
        .then((res) => {
          console.log(res);
          if (res.code == 200) {
            this.modularAndType = res.data;
          }
        });
    },
    handleModularChange(value) {
      console.log(value);
      this.type = "";
      this.modularAndType.forEach((e) => {
        if (e.modularId == value) {
          this.typeList = e.lianmengTypes;
        }
      });
    },
    handleFileChange({ fileList }) {
      this.fileList = fileList;
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
  },
};
</script>
<style scoped>
@import url("./newlyAddedModal.css");
</style>
