<template>
  <div class="container">
    <app-header :path="path"/>
    <div class="head">
      <h3 style="text-align: center; font-size: .768rem;">{{ title }}</h3>
      <div v-if="pubdate" style="text-align: center; color: #606266; font-size: .597rem">
        <span>类别：{{ subType }}</span><span style="margin-left: .853rem">时间：{{ pubdate }}</span>
      </div>
    </div>
    <div class="body">
      <div style="color: #606266; font-size: .683rem">
        <p>{{ intro }}</p>
      </div>
      <div style="font-size: 0.597rem; margin-top: .853rem;">
        <a v-for="(file, index) in fileUrls" :key="index" :href="'/TDS' + file" style="text-decoration:underline; margin-right: 10px;">
          {{ file.substring(file.lastIndexOf('/') + 1, file.length) }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import appHeader from '../components/header'
import { getKnowledge } from '@/api/table'
export default {
  components: { appHeader },
  data() {
    return {
      id: '', // 消息id
      title: '',
      subType: '',
      pubdate: '',
      intro: '',
      fileUrls: [],
      path: {
        name: '',
        params: {
          title: ''
        }
      }
    }
  },
  created() {
    this.id = this.$route.params.id

    getKnowledge(this.id).then(res => {
      if (res.data != null) {
        this.title = res.data.title
        this.subType = res.data.subType
        this.pubdate = res.data.pubdate
        this.intro = res.data.intro
        this.fileUrls = res.data.fileUrls

        if (this.$route.params.name) {
          this.path.name = this.$route.params.name
          this.path.params.title = this.subType
        }
      }
    }).then(() => {
      this.$wxShare.updateWxShareConfig({
        title: this.title,
        desc: this.intro,
        link: window.location.href.split('#')[0] + 'static/html/redirect.html?app3Redirect=' + encodeURIComponent(window.location.href),
        imgUrl: ''
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 2rem;
  padding-top: 0.427rem;
  padding-left: .853rem;
  padding-right: .853rem;
  padding-bottom: .853rem;
  background-color: #ffffff;
}
.illustration {
  text-align: center;
  img {
     max-width: 80%;
     margin-top: 10px;
  }
}
</style>
