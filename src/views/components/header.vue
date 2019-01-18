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
  data() {
    return {}
  },
  methods: {
    handleBack() {
      this.$router.go(-1)
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

