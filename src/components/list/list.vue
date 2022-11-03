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
      <span class="headNav">{{ cardList.title }}</span>
      <div class="divider" />
      <div class="content">
        <span class="itemName">标题名称：</span>
        <a-input placeholder="请输入" style="width: 30%" v-model="itemName" />
        <span class="itemName">创建时间：</span>
        <a-date-picker
          placeholder="年/月/日"
          v-model="date"
          :format="dateFormat"
        />
        <a-button icon="search" type="primary" @click="search">搜索</a-button>
        <a-button class="resetButton">
          <img src="../../image/reset.svg" />
          <span style="margin-left: 5px">重置</span></a-button
        >
      </div>
      <br />
      <br />
      <div class="newAdd" @click="newAdd"><a-icon type="plus" />新增</div>
      <br />
      <a-table
        :columns="columns"
        :data-source="data"
        :scroll="{ x: 1500, y: 450 }"
        :pagination="{ pageSize: 8 }"
      >
        <a slot="action" slot-scope="text">
          <span
            @click="
              () => {
                (tipsVisible = true), (selectItem = text);
              }
            "
            >置顶</span
          >
          <span style="margin-left: 15px" @click="edit(text)">编辑</span
          ><span style="margin-left: 15px" @click="details(text)">详情</span>
          <span
            style="margin-left: 15px; color: #ff3535"
            @click="
              () => {
                (deleteVisible = true), (selectItem = text);
              }
            "
            >删除</span
          ></a
        >
      </a-table>
    </div>
    <keep-alive include="list">
      <router-view></router-view>
    </keep-alive>
    <a-modal v-model="tipsVisible" title="提示" width="400px">
      <template>
        <div style="position: absolute; right: 0; top: 0">
          <div class="triangle"></div>
        </div>
        <div style="position: absolute; left: 0; top: 12px">
          <div class="rectangleModal"></div>
        </div>
      </template>
      <template>
        <div style="padding: 20px 40px 10px 40px">
          <img src="../../image/warning.svg" />
          <span
            style="
              font-size: 16px;
              font-family: PingFangSC-Semibold, PingFang SC;
              font-weight: 400;
              color: #ffffff;
              line-height: 25px;
            "
            >是否将当前数据置顶操作?</span
          >
        </div>
      </template>
      <template slot="footer">
        <a-button
          key="back"
          id="tipscancle"
          @click="
            () => {
              tipsVisible = false;
            }
          "
        >
          取消
        </a-button>
        <a-button key="submit" id="tipsOk" type="primary" @click="setTopping">
          确认
        </a-button>
      </template>
    </a-modal>
    <a-modal v-model="deleteVisible" title="提示" width="450px">
      <template>
        <div style="position: absolute; right: 0; top: 0">
          <div class="triangle"></div>
        </div>
        <div style="position: absolute; left: 0; top: 12px">
          <div class="rectangleModal"></div>
        </div>
      </template>
      <template>
        <div style="padding: 20px 40px 10px 40px">
          <img src="../../image/warning.svg" />
          <span
            style="
              font-size: 16px;
              font-family: PingFangSC-Semibold, PingFang SC;
              font-weight: 400;
              color: #ffffff;
              line-height: 25px;
            "
            >是否将当前数据删除，删除则无法找回</span
          >
        </div>
      </template>
      <template slot="footer">
        <a-button
          key="back"
          id="tipscancle"
          @click="
            () => {
              deleteVisible = false;
            }
          "
        >
          取消
        </a-button>
        <a-button key="submit" id="tipsOk" type="primary" @click="deleteItem">
          确认
        </a-button>
      </template>
    </a-modal>
  </div>
</template>

<script>
import headerBar from "../header/header.vue";
import api from "../../api/index";
import url from "../../api/url/url";
import moment from "moment";
export default {
  components: { headerBar },
  name: "list",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      columns: [
        { title: "序号", dataIndex: "serialNo", key: "serialNo" },
        { title: "标题名称", dataIndex: "itemName", key: "titleName" },
        { title: "创建时间", dataIndex: "createDate", key: "createTime" },
        { title: "创建人", dataIndex: "creatorName", key: "2" },
        {
          title: "操 作",
          key: "operation",
          scopedSlots: { customRender: "action" },
        },
      ],
      data: [],
      cardList: this.$route.params.cardList,
      itemName: "",
      date: "",
      dateFormat: "YYYY/MM/DD",
      tipsVisible: false,
      deleteVisible: false,
      selectItem: {},
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      console.log("init");
      this.getList();
    },
    getList() {
      api
        .getRequest({
          url: url.searchList,
          params: {
            date:
              this.date == "" ? "" : this.date.format("YYYY-MM-DD").toString(),
            itemName: this.itemName,
            modualr: this.cardList.modular.modularId,
            type: this.cardList.typeAndItemList.typeId,
          },
        })
        .then((res) => {
          this.data = res.data;
          this.data.forEach((element) => {
            element.createDate = moment(element.createDate)
              .format("YYYY-MM-DD")
              .toString();
          });
        });
    },
    search() {
      this.getList();
    },
    goback() {
      this.$router.push({
        name: "bulletinBoard",
        // params: { hzInfo: this.currentArg.event._def.extendedProps }
      });
    },
    newAdd() {
      this.$router.push({
        name: "newlyAdd",
        // params: { hzInfo: this.currentArg.event._def.extendedProps }
        params: {
          cardList: this.cardList,
        },
      });
    },
    setTopping() {
      api
        .postRequest({
          url: url.setTopping,
          params: this.selectItem,
        })
        .then((res) => {
          if (res.code == 200) {
            this.tipsVisible = false;
            this.$message.success("置顶成功");
            this.getList();
          }
        });
    },
    deleteItem() {
      api
        .postRequest({
          url: url.deleteItem,
          params: this.selectItem,
        })
        .then((res) => {
          if (res.code == 200) {
            this.deleteVisible = false;
            this.$message.success("删除成功");
            this.getList();
          }
        });
    },
    edit(item) {
      this.$router.push({
        name: "edit",
        params: {
          cardList: this.cardList,
          item: item,
        },
      });
    },
    details(item) {
      this.$router.push({
        name: "details",
        params: {
          cardList: this.cardList,
          item: item,
        },
      });
    },
  },
};
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
@import url("./list.css");
</style>
