<template>
  <div class="container">
    <app-header/>
    <section class="expert-content">
      <div>姓名：{{ name }}</div>
      <div>年龄：{{ age }}</div>
      <div>电话：{{ phone }}</div>
      <div>类别：{{ type }}</div>
      <div>部门：{{ department }}</div>
      <div>简介：{{ intro }}</div>
    </section>
  </div>
</template>

<script>
import appHeader from '../components/header'
import { getExpert } from '@/api/table'
export default {
  components: { appHeader },
  data() {
    return {
      id: '', // 专家id
      name: '',
      age: '',
      phone: '',
      type: '',
      department: '',
      intro: ''
    }
  },
  created() {
    this.id = this.$route.params.id
    getExpert(this.id).then(res => {
      if (res.data != null) {
        this.name = res.data.name
        this.age = res.data.age
        this.phone = res.data.phone
        this.type = res.data.type
        this.department = res.data.department
        this.intro = res.data.intro
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 2rem;
  padding-top: 0.427rem;
  padding-left: .853rem;
  padding-right: .853rem;
  padding-bottom: .853rem;
  background-color: #ffffff;
}
.expert-content {
  color: #606266;
  font-size: .683rem;
  div {
    margin-top: 1rem;
  }
}
</style>
