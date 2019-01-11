<template>
  <div class="container">
    <app-header>
      <span slot="title">通知公告</span>
    </app-header>
    <content-item v-for="(item,index) in 10" :key="index"/>
    <app-footer/>
  </div>
</template>
<script>
import appHeader from '../components/header'
import contentItem from '../components/contentItem'
import appFooter from '../components/footer'
export default {
  components: { appHeader, contentItem, appFooter },
  data() {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
  .container {
    margin-top: 2rem;
  }
</style>
