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
        <span class="intro">{{ item.intro }}</span>
      </section>
      <section>
        <span class="time">{{ item.pubdate | filters }}</span>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  filters: {
    dateFilter(value) {
      if (!value) {
        return
      }
      return value.substr(0, 10)
    }
  },
  props: {
    item: {
      type: Object,
      default: function() {
        return {
          item: {
            id: '',
            title: '',
            pubdate: '',
            intro: '',
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
    this.imgUrl = '/static/right.jpg'
  },
  methods: {
    handleItem() {
      this.$router.push({ name: 'appKnowledgeDetail', params: { id: this.item.id, name: 'moreKnowledgeContent' }}) // 跳转app知识详情页
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
      .time, .intro {
        font-size: .5rem;
        color: #606060;
      }
      .intro {
        display: inline-block;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 100%;
      }
    }
  }
</style>

