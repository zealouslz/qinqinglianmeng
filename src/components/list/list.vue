<template>
    <div style="width:100%;height:100%;background: #061733;">
        <headerBar></headerBar>
        <div class="body">
        <img src="../../image/backIcon.svg" style="display:inline-block;float: left;">
        <span style="float:left;font-size: 12px;font-family: PingFangSC-Medium, PingFang SC;font-weight: 500;color: #FFFFFF;line-height: 10px;">返回</span>
        <div class="rectangle"></div><span class="headNav">服务联动-各单位诉求及解决情况</span>
        <div class="divider" />
        <div class="content">
            <span class="itemName">标题名称：</span>
            <a-input placeholder="请输入"  style="width:30%"/>
            <span class="itemName">创建时间：</span>
            <a-date-picker placeholder="年/月/日"  />
            <a-button icon="search" type="primary">搜索</a-button>
            <a-button  class="resetButton"> <img src="../../image/reset.svg"/> <span>重置</span></a-button>
        </div>
        <br/> <br/>
        <div class="newAdd"><a-icon type="plus" />新增</div>
        <a-table :columns="columns" :data-source="data" :scroll="{ x: 1500, y: 300 }">
        <a slot="action" slot-scope="text">
            <span>置顶</span> <span>编辑</span><span>详情</span> <span>删除</span></a>
  </a-table>
    </div>
    </div>
  </template>

<script>
import headerBar from '../header/header.vue'
export default {
  components: { headerBar, Map },
  name: 'list',
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
      data: []
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
    }
  }
}
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
@import url("./list.css");
  </style>
