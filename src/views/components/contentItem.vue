<template>
  <div class="contentItem-container">
    <section class="left">
      <img src="/static/mayi.png">
    </section>
    <section class="right">
      <section>
        <span class="title">{{ title }}</span>
      </section>
      <section>
        <span class="time">{{ time }}</span>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '省乡土专家首次获得省林业专业高级工程师职称',
      time: '2016-05-02'
    }
  }
}
</script>

<style lang="scss" scoped>
  .contentItem-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 4.1rem;
    border-bottom: 0.025rem solid #f1f1f1;
    padding: .5rem;
    .left {
      width: 3rem;
      height: 3rem;
      margin-right: .5rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .right {
      width: calc(100% - 4rem);
      height: 100%;
      .title {
        font-size: .6rem;
        font-weight: 700;
        display: inline-block;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 100%;
      }
      .time {
        font-size: .5rem;
        color: #606060;
      }
    }
  }
</style>

