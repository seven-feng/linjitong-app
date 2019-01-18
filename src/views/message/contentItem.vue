<template>
  <div class="contentItem-container" @click="handleItem">
    <section class="left">
      <img :src="imgUrl">
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
  created() {
    if (this.item.content !== '' && this.item.content.indexOf('img') > 0) { // 从content中提取第一张图片的路径
      var a = this.item.content.substring(this.item.content.indexOf('img'))
      var b = a.substring(a.indexOf('src="') + 5, a.indexOf('/>'))
      this.imgUrl = '/TDS/' + b.substring(0, b.indexOf('"'))
    } else {
      this.imgUrl = '/static/mayi.png'
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

