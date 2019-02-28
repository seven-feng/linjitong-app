<template>
  <div class="container">
    <app-header>
      <span slot="title">{{ listQuery.subType }}</span>
    </app-header>
    <section v-for="(item,index) in tableData" :key="index">
      <content-item :item="item"/>
    </section>
    <app-footer/>
  </div>
</template>
<script>
import appHeader from '../components/wheader'
import contentItem from './contentItem'
import appFooter from '../components/footer'
import { getKnowledgeList } from '@/api/table'
export default {
  components: { appHeader, contentItem, appFooter },
  data() {
    return {
      listQuery: {
        page: 1,
        limit: 2000,
        title: '',
        subType: ''
      },
      tableData: []
    }
  },
  created() {
    this.listQuery.subType = this.$route.query.title
  },
  mounted() {
    this.getlist() // 获取消息列表
  },
  methods: {
    getlist() { // 获取消息列表
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
