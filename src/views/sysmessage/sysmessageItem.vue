<template>
  <div class="sysmessageItem-container" @click="handleItem">
    <section class="item">
      <section class="item-top">
        <span class="title">{{ item.title }}</span>
        <span class="time">{{ item.pubdate | dateFilter }}</span>
      </section>
      <section>
        <span class="intro">{{ item.intro }}</span>
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
            intro: ''
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
      this.$router.push({ name: 'appSystemMessageDetail', params: { id: this.item.id }}) // 跳转app系统消息详情页
    }
  }
}
</script>

<style lang="scss" scoped>
  .sysmessageItem-container {
    width: 100%;
    height: 3.1rem;
    border-bottom: 0.025rem solid #f1f1f1;
    padding: .5rem;
    .item {
      width: 100%;
      height: 100%;
      .item-top {
        margin-top: .2rem;
        display: flex;
        justify-content: space-between;
        .title {
          font-size: .597rem;
          font-weight: 700;
          display: inline-block;
          width: 50%;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .time {
          font-size: .512rem;
          color: #606060;
        }
      }
      section:nth-child(2) {
        margin-top: .2rem;
      }
      .intro {
        font-size: 0.597rem;
        color: #606060;
        display: inline-block;
        width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
</style>

