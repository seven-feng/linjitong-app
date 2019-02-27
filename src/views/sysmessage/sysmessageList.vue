<template>
  <div class="container">
    <app-header>
      <span slot="title">系统消息</span>
    </app-header>
    <section v-for="(item,index) in tableData" :key="index">
      <sysmessage-item :item="item"/>
    </section>
    <app-footer/>
  </div>
</template>
<script>
import appHeader from '../components/header'
import sysmessageItem from './sysmessageItem'
import appFooter from '../components/footer'
import { getSysMessageList } from '@/api/table'
export default {
  components: { appHeader, sysmessageItem, appFooter },
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
      getSysMessageList(this.listQuery).then(response => {
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
