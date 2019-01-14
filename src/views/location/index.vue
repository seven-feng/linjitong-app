<template>
  <div class="location-container">
    <app-header/>
    <section>
      <section class="section-title">
        <span>当前定位</span>
      </section>
      <h3><svg-icon icon-class="location" class="icon-location"/>{{ city }}</h3>
    </section>
    <section class="section-title">
      <span>热门城市</span>
    </section>
    <section class="hot-cities">
      <el-row :gutter="10" type="flex" justify="space-around">
        <el-col :span="8">
          <div class="hot-city" @click="handleCity('杭州')">杭州</div>
        </el-col>
        <el-col :span="8">
          <div class="hot-city" @click="handleCity('衢州')">衢州</div>
        </el-col>
        <el-col :span="8">
          <div class="hot-city" @click="handleCity('宁波')">宁波</div>
        </el-col>
      </el-row>
    </section>
    <ul class="letter-ul">
      <li v-for="(value,key) in sortedCities" :key="key" class="letter-li">
        <section>
          <span>{{ key }}</span>
        </section>
        <ul class="city-ul">
          <li v-for="item in value" :key="item.id" class="city-li" @click="handleCity(item.name)">
            {{ item.name }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { getSortedCities } from '@/api/table'
import appHeader from '../components/header'
export default {
  components: { appHeader },
  data() {
    return {
      sortedCities: [],
      city: ''
    }
  },
  created() {
    this.city = this.$store.getters.location
  },
  mounted() {
    getSortedCities().then(res => {
      this.sortedCities = res.data
    })
  },
  methods: {
    handleCity(city) {
      this.$store.commit('SET_LOCATION', city)
      this.$router.push({ name: 'appHome' })
    }
  }
}
</script>

<style lang="scss" scoped>
  .location-container {
    font-size: 0.597rem;
    padding-left: 0.853rem;
    padding-right: 0.853rem;
    padding-top: 3rem;
    .icon-location {
      fill: #4cd964;
      margin-right: .213rem;
    }
    .section-title {
      color: #606060;
    }
    .hot-cities {
      margin: 0.853rem 0;
      padding: 0 0.853rem;
    }
    .hot-city {
      color: #606060;
      width: 100%;
      height: 1.2rem;
      line-height: 1.2rem;
      text-align: center;
      border-radius: 4px;
      background-color: #EBEEF5;
    }
    .letter-ul {
      padding: 0;
    }
    .letter-li {
      color: #606060;
    }
    .city-ul {
      padding-left: 0.853rem;
    }
    li {
      list-style: none;
      line-height: 1.6rem;
    }
    .city-li {
      color: #000000;
      border-top: 0.025rem solid #f1f1f1;
    }
  }
</style>
