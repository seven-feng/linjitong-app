<template>
  <div class="container">
    <app-header>
      <span slot="title">个人信息</span>
    </app-header>
    <div class="info">
      <div class="info-left">姓名</div>
      <div class="info-right">{{ name }}</div>
    </div>
    <div class="info">
      <div class="info-left">手机号</div>
      <div class="info-right">{{ phone }}</div>
    </div>
  </div>
</template>

<script>
import appHeader from '../../components/header'

export default {
  components: { appHeader },
  data() {
    return {
      name: '',
      phone: ''
    }
  },
  created() {
    this.$store.dispatch('GetInfo').then(res => {
      this.name = res.data.name
      this.phone = res.data.phone
    })
  }
}
</script>

<style lang="scss" scoped>
  .container {
    padding-top: 2rem;
    .info {
      height: 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 0.025rem solid #f1f1f1;
      .info-left {
        font-size: .683rem;
        padding-left: 1rem;
      }
      .info-right {
        color: #606266;
        padding-right: 1rem;
        font-size: .683rem;
      }
    }
  }
</style>

