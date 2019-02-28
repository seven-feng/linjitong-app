<template>
  <div class="knowledgeItem-container" @click="handleItem">
    <section class="item">
      <section>
        <span class="title">{{ item.title }}</span>
      </section>
      <section>
        <span class="intro">{{ item.intro }}</span>
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
      this.$router.push({ name: 'appKnowledgeDetail', params: { id: this.item.id, name: 'appKnowledgeList' }}) // 跳转app知识详情页
    }
  }
}
</script>

<style lang="scss" scoped>
  .knowledgeItem-container {
    width: 100%;
    height: 4.1rem;
    border-bottom: 0.025rem solid #f1f1f1;
    padding: .5rem;
    .item {
      width: 100%;
      height: 100%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      .title {
        font-size: .6rem;
        font-weight: 700;
        display: inline-block;
        width: 100%;
      }
      section:nth-child(2) {
        margin-top: .2rem;
      }
      .intro {
        font-size: 0.597rem;
        color: #606060;
      }
    }
  }
</style>

