<template>
  <div class="user-container">
    <div v-if="isLogin" class="login" @click="handleUserInfo">
      <div class="login-left">
        <img :src="imgUrl">
      </div>
      <div class="login-right right">
        <div>{{ userName }}</div>
        <div><svg-icon icon-class="right" class-name="right-icon" /></div>
      </div>
    </div>
    <div v-else class="login" @click="handleLogin">
      <div class="login-left">
        <img :src="imgUrl">
      </div>
      <div class="login-right">立即登录</div>
    </div>
    <div class="gap"/>
    <!-- <div class="info">
      <div class="info-left">
        <svg-icon icon-class="profile-info" class-name="icon" />
      </div>
      <div class="info-right">我的信息</div>
    </div> -->
    <div class="info">
      <div class="info-left">
        <svg-icon icon-class="profile-question" class-name="icon" />
      </div>
      <div class="info-right">历史问答</div>
    </div>
    <div class="info">
      <div class="info-left">
        <svg-icon icon-class="profile-collect" class-name="icon" />
      </div>
      <div class="info-right">我的收藏</div>
    </div>
    <div class="info">
      <div class="info-left">
        <svg-icon icon-class="profile-expert" class-name="icon" />
      </div>
      <div class="info-right">关注专家</div>
    </div>
    <div class="info">
      <div class="info-left">
        <svg-icon icon-class="profile-score" class-name="icon" />
      </div>
      <div class="info-right">我的积分</div>
    </div>
    <div class="info">
      <div class="info-left">
        <svg-icon icon-class="profile-contact" class-name="icon" />
      </div>
      <div class="info-right">联系我们</div>
    </div>
    <div class="info">
      <div class="info-left">
        <svg-icon icon-class="profile-info" class-name="icon" />
      </div>
      <div class="info-right">设置</div>
    </div>
    <div class="gap"/>
    <div class="logout" @click="handleLogOut">退出登录</div>
    <div class="gap"/>
    <app-footer/>
  </div>
</template>

<script>
import appFooter from '../components/footer'

export default {
  components: { appFooter },
  data() {
    return {
      imgUrl: '/static/mayi.png',
      isLogin: false,
      userName: ''
    }
  },
  created() {
    this.setLogin()
  },
  methods: {
    setLogin() {
      if (this.$store.getters.name) {
        this.isLogin = true
        this.userName = this.$store.getters.name
      }
    },
    handleLogin() {
      this.$router.push({ name: 'appLogin' })
    },
    handleUserInfo() {
      this.$router.push({ name: 'appUserInfo' })
    },
    handleLogOut() {
      this.$store.dispatch('LogOut').then(res => {
        this.$router.replace({ name: 'appHome' })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .user-container {
    padding-bottom: 2rem;
    background-color: #f1f1f1;
    height: 100%;
    .login {
      height: 5rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background-color: #ffffff;
      border-bottom: 0.025rem solid #f1f1f1;
      .login-left {
        width: 5rem;
        height: 5rem;
        padding: 1rem;
        img {
          width: 3rem;
          height: 3rem;
        }
      }
      .login-right {
        font-size: .768rem;
      }
      .right {
        width: 100%;
        padding-right: 1rem;
        display: flex;
        justify-content: space-between;
        .right-icon {
          width: .8rem;
          height: .8rem;
          color: #000000;
        }
      }
    }
    .info {
      height: 2rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background-color: #ffffff;
      border-bottom: 0.025rem solid #f1f1f1;
      .info-left {
        width: 2rem;
        height: 2rem;
        padding: .4rem;
        .icon {
          width: 1.2rem;
          height: 1.2rem;
        }
      }
      .info-right {
        padding-left: .3rem;
        font-size: .683rem;
      }
    }
    .logout {
      height: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: .683rem;
      background-color: #ffffff;
      border-bottom: 0.025rem solid #f1f1f1;
    }
    .gap {
      height: 1rem;
    }
  }
</style>

