<template>
  <div class="home-container">
    <header class="home-header">
      <section @click="handleLocation">
        <svg-icon icon-class="location" class="icon-location"/>
        <span v-if="city" class="span-location">{{ city }}</span>
        <span v-else class="span-location">杭州</span>
      </section>
      <section>
        <el-input v-model="searchContent" placeholder="搜索" prefix-icon="el-icon-search" size="small" class="input-search" @focus="handleSearch"/>
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
          <div class="card-panel" @click="handleGap">
            <div class="card-panel-icon-wrapper">
              <svg-icon icon-class="supply" class-name="card-panel-icon" />
            </div>
            <div class="card-panel-description">
              <div class="card-panel-text">供求信息</div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="card-panel" @click="handleGap">
            <div class="card-panel-icon-wrapper">
              <svg-icon icon-class="expert" class-name="card-panel-icon" />
            </div>
            <div class="card-panel-description">
              <div class="card-panel-text">乡土专家</div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="card-panel" @click="handleExpertdb">
            <div class="card-panel-icon-wrapper">
              <svg-icon icon-class="expertdb" class-name="card-panel-icon" />
            </div>
            <div class="card-panel-description">
              <div class="card-panel-text">专家库</div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="card-panel" @click="handleContact">
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
        <img :src="leftImg" alt="" style="width: 100%; height: 6rem;" @click="handleMessageDetail">
      </el-col>
      <el-col :span="12">
        <img :src="rightImg" alt="" style="width: 100%; height: 6rem;" @click="handleModelDetail">
      </el-col>
    </el-row>
    <app-footer/>
  </div>
</template>

<script>
import appFooter from '../components/footer'
import { getMessageList, getModelList } from '@/api/table'
export default {
  components: { appFooter },
  data() {
    return {
      city: '', // 定位城市
      items: ['/static/home-main.jpg', '/static/home-main1.jpg'],
      searchContent: '',
      messageId: '',
      modelId: '',
      leftImg: '',
      rightImg: ''
    }
  },
  created() {
    this.city = this.$store.getters.location
    const listQuery = {
      page: 1,
      limit: 1,
      title: ''
    }
    getMessageList(listQuery).then(response => {
      if (response.data && response.data.list.length > 0) {
        this.messageId = response.data.list[0].id
        const content = response.data.list[0].content
        if (content !== '' && content.indexOf('img') > 0) { // 从content中提取第一张图片的路径
          var a = content.substring(content.indexOf('img'))
          var b = a.substring(a.indexOf('src="') + 5, a.indexOf('/>'))
          this.leftImg = '/TDS/' + b.substring(0, b.indexOf('"'))
        } else {
          this.leftImg = '/static/left.jpg'
        }
      }
    })
    getModelList(listQuery).then(response => {
      if (response.data && response.data.list.length > 0) {
        this.modelId = response.data.list[0].id
        const content = response.data.list[0].content
        if (content !== '' && content.indexOf('img') > 0) { // 从content中提取第一张图片的路径
          var a = content.substring(content.indexOf('img'))
          var b = a.substring(a.indexOf('src="') + 5, a.indexOf('/>'))
          this.rightImg = '/TDS/' + b.substring(0, b.indexOf('"'))
        } else {
          this.rightImg = '/static/right.jpg'
        }
      }
    })
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
    handleContact() {
      this.$router.push({ name: 'appContact' })
    },
    handleExpertdb() {
      this.$router.push({ name: 'appExpertList' })
    },
    handleGap() {
      this.$router.push({ name: 'appGap' })
    },
    handleWeather() {
      location.href = 'https://www.baidu.com/s?wd=' + this.city + '天气'
    },
    handleMessageDetail() {
      this.$router.push({ name: 'appMessageDetail', params: { id: this.messageId }})
    },
    handleModelDetail() {
      this.$router.push({ name: 'appModelDetail', params: { id: this.modelId }})
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
    .input-search {
      width: 8.533rem;
    }
    /deep/ .el-input--small .el-input__inner {
      height: 1.365rem;
      line-height: 1.365rem;
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
    height: 4.608rem;
    cursor: pointer;
    font-size: .512rem;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    // border-radius: 4px;
    // box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);
    .card-panel-icon-wrapper {
      margin: .64rem auto .427rem;
      transition: all 0.38s ease-out;
      // border-radius: 6px;
      width: 2.133rem;
      height: 2.133rem;
      text-align: center;
    }
    .card-panel-icon {
      font-size: 2.133rem;
    }
    .card-panel-description {
      margin-top: .427rem;
      .card-panel-text {
        line-height: .768rem;
        color: rgba(0, 0, 0, 0.45);
        font-size: .597rem;
        text-align: center;
      }
    }
  }
</style>

