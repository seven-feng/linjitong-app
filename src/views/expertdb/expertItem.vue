<template>
  <div class="contentItem-container" @click="handleItem">
    <section class="left">
      <img :src="imgUrl">
    </section>
    <section class="right">
      <div class="name">
        <span>{{ item.name }}</span>
      </div>
      <div class="subTitle">
        <span>电话：{{ item.phone }}</span>
      </div>
      <div class="subTitle">
        <span>单位：{{ item.department }}</span>
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
            name: '',
            phone: '',
            department: '',
            imageUrls: []
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
    if (this.item.imageUrls.length) {
      this.imgUrl = '/TDS' + this.item.imageUrls[0]
    }
  },
  methods: {
    handleItem() {
      this.$router.push({ name: 'appExpertDetail', params: { id: this.item.id }}) // 跳转专家详情页
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
      .name {
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

