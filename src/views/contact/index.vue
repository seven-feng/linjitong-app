<template>
  <div class="container">
    <app-header>
      <span slot="title">联系我们</span>
    </app-header>
    <section>
      <img src="/static/shan.jpg" alt="" style="width: 100%; height: 200px;">
    </section>
    <section class="info">
      <div>XXX有限公司</div>
      <div>地址：xxxxx</div>
      <div>电话：xxxxx</div>
      <div>邮箱：xxxx</div>
    </section>
    <app-footer/>
  </div>
</template>
<script>
import appHeader from '../components/header'
import appFooter from '../components/footer'
export default {
  components: { appHeader, appFooter },
  data() {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
  .container {
    padding-top: 2rem;
    padding-bottom: 2rem;
    background-color: #ffffff;
    .info {
      font-size: .683rem;
      margin: 0 auto;
      width: 50%;
      div {
        margin: 1rem auto;
      }
    }
  }
</style>
