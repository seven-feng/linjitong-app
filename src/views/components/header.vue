<template>
  <div class="header-container">
    <section @click="handleBack">
      <svg-icon icon-class="left" class="icon-left" />
    </section>
    <slot name="title"/>
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
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 2rem;
    background: #ffffff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #000000;
    border-bottom: 1px solid #ebeef5;
    .icon-left {
      font-size: .9rem;
      margin-left: .2rem;
      margin-bottom: .04rem;
    }
    span {
      font-size: .7rem;
      margin-left: .5rem;
    }
  }
</style>

