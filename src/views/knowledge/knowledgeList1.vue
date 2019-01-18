<template>
  <div class="container">
    <app-header>
      <span slot="title">空中课堂</span>
    </app-header>
    <section>
      <img src="/static/knowledge.jpg" alt="" style="width: 100%; height: 200px;">
    </section>
    <section v-for="(item,index) in tableData" :key="index">
      <knowledge-item :item="item"/>
    </section>
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
        limit: 20,
        title: ''
      },
      tableData: []
    }
  },
  mounted() {
    this.getlist() // 获取知识列表
  },
  methods: {
    getlist() { // 获取知识列表
      getKnowledgeList(this.listQuery).then(response => {
        this.tableData = response.data.list
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .container {
    padding-top: 2rem;
    padding-bottom: 2rem;
    background-color: #ffffff;
  }
</style>
