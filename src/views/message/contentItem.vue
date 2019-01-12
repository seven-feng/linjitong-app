<template>
  <div class="contentItem-container" @click="handleItem">
    <section class="left">
      <img src="/static/mayi.png">
    </section>
    <section class="right">
      <section>
        <span class="title">{{ item.title }}</span>
      </section>
      <section>
        <span class="time">{{ item.pubdate }}</span>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: function() {
        return {
          item: {
            id: '',
            title: '',
            pubdate: ''
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
    handleItem() {
      this.$router.push({ name: 'appMessageDetail', params: { id: this.item.id }}) // 跳转app消息详情页
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
    height: 4rem;
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
        line-height: .8rem;
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

