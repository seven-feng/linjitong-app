<template>
  <div class="question-container">
    <div class="question-radio">
      <el-radio-group v-model="radio" size="small" @change="handleRadio">
        <el-radio-button label="myQuestion">我的提问</el-radio-button>
        <el-radio-button label="allQuestion">问题总览</el-radio-button>
      </el-radio-group>
    </div>
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>
import appFooter from '../components/footer'
export default {
  components: { appFooter },
  data() {
    return {
      radio: ''
    }
  },
  created() {
    if (this.$route.path.indexOf('allQuestion') !== -1) {
      this.radio = 'allQuestion'
    } else {
      this.radio = 'myQuestion'
    }
  },
  updated() {
    if (this.$route.path.indexOf('allQuestion') !== -1) {
      this.radio = 'allQuestion'
    } else {
      this.radio = 'myQuestion'
    }
  },
  methods: {
    handleRadio(val) {
      if (val === 'myQuestion') {
        this.$router.push({ name: 'myQuestion' })
      } else {
        this.$router.push({ name: 'allQuestion' })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .question-container {
    padding-top: 2rem;
    padding-left: .853rem;
    padding-right: .853rem;
    padding-bottom: 2rem;
    background-color: #ffffff;
    .question-radio {
      position: fixed;
      left: 0;
      top: 0;
      z-index: 100;
      width: 100%;
      height: 2rem;
      line-height: 2rem;
      background-color: #ffffff;
      text-align: center;
    }
  }
</style>

