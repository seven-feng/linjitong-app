<template>
  <div class="container">
    <app-header>
      <span slot="title">空中课堂</span>
    </app-header>
    <div class="tab-container">
      <el-tabs v-model="listQuery.subType" @tab-click="handleTab">
        <el-tab-pane label="林下经济" name="林下经济"/>
        <el-tab-pane label="竹笋" name="竹笋"/>
        <el-tab-pane label="花卉苗木" name="花卉苗木"/>
        <el-tab-pane label="木本粮油" name="木本粮油"/>
        <el-tab-pane label="综合" name=""/>
      </el-tabs>
    </div>
    <section>
      <img src="/static/knowledge.jpg" alt="" style="width: 100%; height: 200px;">
    </section>
    <div class="more-content" @click="handleMore">更多></div>
    <div class="knowledge-container">
      <section v-for="(item,index) in tableData" :key="index">
        <knowledge-item :item="item"/>
      </section>
    </div>
    <app-footer/>
  </div>
</template>

<script>
import appHeader from '../components/header'
import knowledgeItem from './knowledgeItem'
import appFooter from '../components/footer'
import { getKnowledgeList } from '@/api/table'
export default {
  components: { appHeader, knowledgeItem, appFooter },
  data() {
    return {
      listQuery: {
        page: 1,
        limit: 10,
        title: '',
        subType: '竹笋'
      },
      tableData: []
    }
  },
  mounted() {
    this.getlist()
  },
  methods: {
    handleTab(tab, event) {
      this.listQuery.subType = tab.name
      this.getlist()
    },
    getlist() { // 获取知识列表
      getKnowledgeList(this.listQuery).then(response => {
        this.tableData = response.data.list
      })
    },
    handleFilter() { // 标题过滤
      this.listQuery.page = 1
      this.getlist()
    },
    handleMore() { // 更多
      this.$router.push({ name: 'moreKnowledgeContent', params: { title: this.listQuery.subType }})
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    padding-top: 2rem;
    padding-bottom: 2rem;
    background-color: #ffffff;
    .knowledge-container, .tab-container {
      padding-left: .853rem;
      padding-right: .853rem;
    }
    .more-content {
      text-align: right;
      font-size: .597rem;
      color: #606060;
      padding-right: .597rem;
    }
  }
</style>
