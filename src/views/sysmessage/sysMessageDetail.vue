<template>
  <div class="container">
    <app-header/>
    <div class="head">
      <h3 style="text-align: center; font-size: .768rem;">{{ title }}</h3>
      <div v-if="pubdate" style="text-align: center; color: #606266; font-size: .597rem">
        <span>编辑：{{ editor }}</span><span style="margin-left: 20px">时间：{{ pubdate }}</span>
      </div>
    </div>
    <div class="body">
      <el-row v-for="(img, index) in imageUrls" :key="index" class="illustration">
        <img :src="'/TDS' + img">
      </el-row>
      <div class="message-content" v-html="content"/>
      <div style="font-size: 14px; margin-top: 20px;">
        <a v-for="(file, index) in fileUrls" :key="index" :href="'/TDS' + file" style="text-decoration:underline; margin-right: 10px;">
          {{ file.substring(file.lastIndexOf('/') + 1, file.length) }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import appHeader from '../components/header'
import { getMessage } from '@/api/table'
export default {
  components: { appHeader },
  data() {
    return {
      id: '', // 消息id
      title: '',
      editor: '',
      pubdate: '',
      imageUrls: [],
      content: '',
      fileUrls: []
    }
  },
  created() {
    this.id = this.$route.params.id
  },
  mounted() {
    getMessage(this.id).then(res => {
      if (res.data != null) {
        this.title = res.data.title
        this.editor = res.data.editor
        this.pubdate = res.data.pubdate
        this.imageUrls = res.data.imageUrls
        this.content = res.data.content
        this.content = this.content.split('uploadFile').join('/TDS/uploadFile')
        this.content = this.content.split('img').join('img style="max-width: 100%;"')
        this.fileUrls = res.data.fileUrls
      }
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
.message-content {
  color: #606266;
  font-size: .683rem;
}
</style>
