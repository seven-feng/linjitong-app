<template>
  <div class="header-container">
    <section class="icon-left" @click="handleBack">
      <svg-icon icon-class="left"/>
    </section>
    <section class="title">
      <slot name="title"/>
    </section>
    <section class="search">
      <slot name="search"/>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: Object,
      default: function() {
        return {
          path: {
            name: '',
            params: {}
          }
        }
      }
    }
  },
  data() {
    return {
    }
  },
  methods: {
    handleBack() {
      if (window.history.length <= 1) {
        this.$router.push({ name: 'appHome' }) // 如果没有回退，全部重定向到首页
      } else {
        if (this.path !== null && this.path.name !== undefined && this.path.name !== '') {
          this.$router.go(-1)
          this.$router.replace({ name: this.path.name, params: this.path.params }) // 路由回退后，params为{}
        } else {
          this.$router.go(-1)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .header-container {
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 2rem;
    line-height: 2rem;
    background: #ffffff;
    color: #000000;
    border-bottom: 1px solid #ebeef5;
    text-align: center;
    .icon-left {
      position: absolute;
      font-size: 1rem;
      left: .2rem;
    }
    .title {
      font-size: .768rem;
    }
    .search {
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }
</style>

