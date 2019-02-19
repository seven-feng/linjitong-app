<template>
  <div class="home-container">
    <header class="home-header">
      <section @click="handleLocation">
        <svg-icon icon-class="location" class="icon-location"/>
        <span v-if="city" class="span-location">{{ city }}</span>
        <span v-else class="span-location">杭州</span>
      </section>
      <section>
        <el-input v-model="searchContent" placeholder="搜索" prefix-icon="el-icon-search" size="small" @focus="handleSearch"/>
      </section>
      <section @click="handleWeather">
        <svg-icon icon-class="cloudy" class="icon-weather"/>
      </section>
    </header>
    <el-carousel height="6.4rem">
      <el-carousel-item v-for="item in items" :key="item">
        <img :src="item" alt="" style="width: 100%; height: 6.4rem;">
      </el-carousel-item>
    </el-carousel>
    <section>
      <el-row>
        <el-col :span="6">
          <div class="card-panel" @click="handleMessage">
            <div class="card-panel-icon-wrapper">
              <svg-icon icon-class="message" class-name="card-panel-icon"/>
            </div>
            <div class="card-panel-description">
              <div class="card-panel-text">通知公告</div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="card-panel" @click="handleKnowledge">
            <div class="card-panel-icon-wrapper">
              <svg-icon icon-class="knowledge" class-name="card-panel-icon" />
            </div>
            <div class="card-panel-description">
              <div class="card-panel-text">空中课堂</div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="card-panel" @click="handleQuestion">
            <div class="card-panel-icon-wrapper">
              <svg-icon icon-class="question" class-name="card-panel-icon" />
            </div>
            <div class="card-panel-description">
              <div class="card-panel-text">林技问答</div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="card-panel" @click="handleModel">
            <div class="card-panel-icon-wrapper">
              <svg-icon icon-class="model" class-name="card-panel-icon" />
            </div>
            <div class="card-panel-description">
              <div class="card-panel-text">典型示范</div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <div class="card-panel" @click="handleKnowledge">
            <div class="card-panel-icon-wrapper">
              <svg-icon icon-class="supply" class-name="card-panel-icon" />
            </div>
            <div class="card-panel-description">
              <div class="card-panel-text">供求信息</div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="card-panel" @click="handleQuestion">
            <div class="card-panel-icon-wrapper">
              <svg-icon icon-class="expert" class-name="card-panel-icon" />
            </div>
            <div class="card-panel-description">
              <div class="card-panel-text">乡土专家</div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="card-panel" @click="handleMessage">
            <div class="card-panel-icon-wrapper">
              <svg-icon icon-class="expertdb" class-name="card-panel-icon" />
            </div>
            <div class="card-panel-description">
              <div class="card-panel-text">专家库</div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="card-panel" @click="handleMessage">
            <div class="card-panel-icon-wrapper">
              <svg-icon icon-class="contact" class-name="card-panel-icon" />
            </div>
            <div class="card-panel-description">
              <div class="card-panel-text">联系我们</div>
            </div>
          </div>
        </el-col>
      </el-row>
    </section>
    <el-row :gutter="2" style="margin-left: 0; margin-right: 0;">
      <el-col :span="12">
        <img src="/static/left.jpg" alt="" style="width: 100%;" @click="handleMessage">
      </el-col>
      <el-col :span="12">
        <img src="/static/right.jpg" alt="" style="width: 100%;" @click="handleKnowledge">
      </el-col>
    </el-row>
    <app-footer/>
  </div>
</template>

<script>
import appFooter from '../components/footer'
export default {
  components: { appFooter },
  data() {
    return {
      city: '', // 定位城市
      items: ['/static/home1.jpg'],
      searchContent: ''
    }
  },
  created() {
    this.city = this.$store.getters.location
  },
  methods: {
    handleLocation() {
      this.$router.push({ name: 'appLocation' })
    },
    handleSearch() {
      this.$router.push({ name: 'appContent' })
    },
    handleMessage() {
      this.$router.push({ name: 'appMessageList' })
    },
    handleKnowledge() {
      this.$router.push({ name: 'appKnowledgeList' })
    },
    handleQuestion() {
      this.$router.push({ name: 'appQuestion' })
    },
    handleModel() {
      this.$router.push({ name: 'appModelList' })
    },
    handleWeather() {
      location.href = 'https://www.baidu.com/s?wd=' + this.city + '天气'
    }
  }
}
</script>

<style lang="scss" scoped>
  .home-container {
    padding-bottom: 2rem;
  }
  .home-header {
    background-color: #ffffff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 2rem;
    .icon-location {
      fill: #4cd964;
    }
    .span-location {
      font-size: 0.76rem;
    }
    .icon-weather {
      width: 1.3rem;
      height: 1.3rem;
    }
  }
  .grid-content {
    min-height: 100px;
    background:#fff;
  }
  .el-row {
    background-color: #fff;
  }
  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    border-radius: 4px;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);
    .card-panel-icon-wrapper {
      margin: 15px auto 10px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
      width: 50px;
      height: 50px;
      text-align: center;
    }
    .card-panel-icon {
      font-size: 50px;
    }
    .card-panel-description {
      margin-top: 10px;
      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 14px;
        text-align: center;
      }
    }
  }
</style>

