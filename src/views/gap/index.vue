<template>
  <div class="container">
    <app-header/>
    <section>
      <img src="/static/gap-main.png" alt="" style="width: 100%; height: 200px;">
    </section>
    <section class="info">
      <div>正在开发，敬请期待</div>
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
      margin: 2rem auto;
      width: 7rem;
      div {
        margin: 1rem auto;
      }
    }
  }
</style>
