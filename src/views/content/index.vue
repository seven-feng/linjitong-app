<template>
  <transition>
    <div class="content-container">
      <app-header>
        <el-input slot="search" v-model="listQuery.title" placeholder="搜索" prefix-icon="el-icon-search" size="small" style="vertical-align: middle;" @change="handleChange"/>
      </app-header>
      <ul class="city-ul">
        <li v-for="item in tableData" :key="item.id" class="city-li" @click="handleContent(item)">
          {{ item.title }}
        </li>
      </ul>
    </div>
  </transition>
</template>

<script>
import appHeader from '../components/header'
import { getMessageList } from '@/api/table'
export default {
  components: { appHeader },
  data() {
    return {
      listQuery: {
        page: 1,
        limit: 10,
        title: ''
      },
      tableData: []
    }
  },
  methods: {
    handleChange() {
      getMessageList(this.listQuery).then(res => {
        if (res.data && res.data.list) {
          this.tableData = res.data.list
        }
      })
    },
    handleContent(item) {
      this.$router.push({ name: 'appMessageDetail', params: { id: item.id }}) // 跳转app消息详情页
    }
  }
}
</script>

<style lang="scss" scoped>
  .content-container {
    font-size: 0.597rem;
    padding-top: 2rem;
    .city-ul {
      padding-left: 0.853rem;
      padding-right: 0.853rem;
    }
    li {
      list-style: none;
      line-height: 2rem;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .city-li {
      color: #000000;
      border-bottom: 0.025rem solid #f1f1f1;
    }
  }
</style>
