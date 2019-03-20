<template>
  <div class="container">
    <app-header>
      <span slot="title">专家库</span>
    </app-header>
    <div class="tab-container">
      <el-tabs v-model="listQuery.type" @tab-click="handleTab">
        <el-tab-pane label="林技产业" name="林技产业"/>
      </el-tabs>
    </div>
    <div class="expert-container">
      <section v-for="(item,index) in tableData" :key="index">
        <expert-item :item="item"/>
      </section>
    </div>
    <app-footer/>
  </div>
</template>

<script>
import appHeader from '../components/header'
import expertItem from './expertItem'
import appFooter from '../components/footer'
import { getExpertList } from '@/api/table'
export default {
  components: { appHeader, expertItem, appFooter },
  data() {
    return {
      listQuery: {
        page: 1,
        limit: 10,
        title: '',
        type: '林技产业'
      },
      tableData: []
    }
  },
  created() {
    this.getlist()
  },
  methods: {
    handleTab(tab, event) {
      this.listQuery.type = tab.name
      this.getlist()
    },
    getlist() { // 获取专家列表
      getExpertList(this.listQuery).then(res => {
        this.tableData = res.data.list
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
    .expert-container, .tab-container {
      padding-left: .853rem;
      padding-right: .853rem;
    }
  }
</style>
