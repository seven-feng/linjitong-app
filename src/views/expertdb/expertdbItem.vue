<template>
  <div class="contentItem-container" @click="handleItem">
    <section class="left">
      <img :src="imgUrl">
    </section>
    <section class="right">
      <div class="title">
        <span>{{ item.title }}</span>
      </div>
      <div class="subTitle">
        <span>电话：{{ item.pubdate }}</span>
      </div>
      <div class="subTitle">
        <span>单位：{{ item.pubdate }}</span>
      </div>
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
            pubdate: '',
            content: ''
          }
        }
      }
    }
  },
  data() {
    return {
      imgUrl: ''
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
        font-size: .597rem;
        line-height: .8rem;
        font-weight: 700;
        display: inline-block;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 100%;
      }
      .subTitle {
        font-size: .5rem;
        line-height: 1rem;
        color: #606060;
      }
    }
  }
</style>

