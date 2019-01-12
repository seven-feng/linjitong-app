<template>
  <div class="container">
    <app-header>
      <span slot="title">通知公告</span>
    </app-header>
    <section>
      <img src="/static/shan.jpg" alt="" style="width: 100%; height: 200px;">
    </section>
    <section v-for="(item,index) in tableData" :key="index">
      <content-item :item="item"/>
    </section>
    <app-footer/>
  </div>
</template>
<script>
import appHeader from '../components/header'
import contentItem from './contentItem'
import appFooter from '../components/footer'
import { getMessageList } from '@/api/table'
export default {
  components: { appHeader, contentItem, appFooter },
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
    this.getlist() // 获取消息列表
  },
  methods: {
    getlist() { // 获取消息列表
      getMessageList(this.listQuery).then(response => {
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
  }
</style>
