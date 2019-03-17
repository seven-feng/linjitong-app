<template>
  <div class="container">
    <app-header>
      <span slot="title">专家库</span>
    </app-header>
    <div class="tab-container">
      <el-tabs v-model="listQuery.subType" @tab-click="handleTab">
        <el-tab-pane label="竹笋专家" name="竹笋专家"/>
        <el-tab-pane label="竹笋专家1" name="竹笋专家1"/>
        <el-tab-pane label="竹笋专家2" name="竹笋专家2"/>
        <el-tab-pane label="竹笋专家3" name="竹笋专家3"/>
      </el-tabs>
    </div>
    <div class="expertdb-container">
      <section v-for="(item,index) in tableData" :key="index">
        <expertdb-item :item="item"/>
      </section>
    </div>
    <app-footer/>
  </div>
</template>

<script>
import appHeader from '../components/header'
import expertdbItem from './expertdbItem'
import appFooter from '../components/footer'
import { getKnowledgeList } from '@/api/table'
export default {
  components: { appHeader, expertdbItem, appFooter },
  data() {
    return {
      listQuery: {
        page: 1,
        limit: 10,
        title: '',
        subType: '竹笋专家'
      },
      tableData: []
    }
  },
  created() {
    if (this.$route.params.title) {
      this.listQuery.subType = this.$route.params.title
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
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    padding-top: 2rem;
    padding-bottom: 2rem;
    background-color: #ffffff;
    .expertdb-container, .tab-container {
      padding-left: .853rem;
      padding-right: .853rem;
    }
  }
</style>
