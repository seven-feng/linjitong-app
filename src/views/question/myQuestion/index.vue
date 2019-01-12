<template>
  <div class="myQuestion-container">
    <div class="filter-container">
      <el-input v-model="listQuery.title" placeholder="标题" type="text" size="small">
        <el-button slot="append" @click="handleFilter">搜索</el-button>
      </el-input>
    </div>
    <section v-for="(item,index) in tableData" :key="index">
      <question-item :item="item"/>
    </section>
    <el-button type="primary" style="width: 100%; margin-top: .427rem;" @click="handleQuestion">提问</el-button>
  </div>
</template>

<script>
import { getQuestionList } from '@/api/table'
import questionItem from '../component/questionItem'
export default {
  components: { questionItem },
  data() {
    return {
      total: 10,
      listQuery: {
        page: 1,
        limit: 10,
        title: ''
      },
      tableData: []
    }
  },
  mounted() {
    this.getlist()
  },
  methods: {
    getlist() { // 获取列表
      getQuestionList(this.listQuery).then(response => {
        this.tableData = response.data.list
      })
    },
    handleFilter() { // 标题过滤
      this.listQuery.page = 1
      this.getlist()
    },
    handleRow(row) { // 跳转app消息详情页
      this.$router.push({ name: 'appQuestionDetail', params: { id: row.id }})
    },
    handleQuestion() { // 提问按钮
      this.$router.push({ name: 'appPublishQuestion' })
    }
  }
}
</script>

<style lang="scss" scoped>
  .myQuestion-container {
    padding-top: .427rem;
    padding-bottom: .427rem;
  }
</style>

