<template>
  <div class="allQuestion-container">
    <el-tabs v-model="listQuery.subType" @tab-click="handleTab">
      <el-tab-pane label="竹笋" name="竹笋"/>
      <el-tab-pane label="山核桃" name="山核桃"/>
      <el-tab-pane label="香榧" name="香榧"/>
      <el-tab-pane label="其他" name=""/>
    </el-tabs>
    <div class="filter-container">
      <el-input v-model="listQuery.title" placeholder="标题" type="text" size="small">
        <el-button slot="append" @click="handleFilter">搜索</el-button>
      </el-input>
    </div>
    <section v-for="(item,index) in tableData" :key="index">
      <question-item :item="item"/>
    </section>
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
    getlist() { // 获取列表
      getQuestionList(this.listQuery).then(response => {
        this.tableData = response.data.list
        this.total = response.data.total
      })
    },
    handleRow(row) { // 编辑按钮
      this.$router.push({ name: 'appQuestionDetail', params: { id: row.id }}) // 跳转问答详情页
    },
    handleFilter() { // 标题过滤
      this.listQuery.page = 1
      this.getlist()
    }
  }
}
</script>

<style lang="scss" scoped>
  .allQuestion-container {
    background-color: #ffffff;
  }
</style>
