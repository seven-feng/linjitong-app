<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.$wxShare.updateWxShareConfig({
      title: '浙江省林业技术推广平台',
      desc: '浙江省林业技术推广平台',
      link: location.href.split('#')[0],
      imgUrl: 'http://ljt.1vyu.com/static/left.jpg'
    })
  }
}
</script>
