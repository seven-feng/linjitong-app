<template>
  <div class="footer-container">
    <section class="footer-item" @click="$router.push({ name: 'appHome'})">
      <svg-icon :icon-class="$route.path.indexOf('home') === -1 ? 'home-inactive': 'home-active'" class="icon"/>
      <span :class="$route.path.indexOf('home') === -1 ? 'inactive': 'active'">首页</span>
    </section>
    <section class="footer-item" @click="$router.push({ name: 'appSystemMessageList'})">
      <svg-icon :icon-class="$route.path.indexOf('sysmessage') === -1 ? 'message-inactive' : 'message-active'" class="icon"/>
      <span>消息</span>
    </section>
    <section class="footer-item" @click="$router.push({ name: 'appProfile'})">
      <svg-icon :icon-class="$route.path.indexOf('profile') === -1 ? 'user-inactive' : 'user-active'" class="icon"/>
      <span>我的</span>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  .footer-container {
    background-color: #fff;
    z-index: 100;
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    height: 2em;
    width: 100%;
    border-top: 1px solid #ebeef5;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .footer-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    .icon {
      width: 1.2rem;
      height: 1.2rem;
      fill: #c0c0c0;
    }
    span {
      font-size: .5rem;
      &.active {
        color: #67C23A;
      }
      &.inactive {
        color: #606060;
      }
    }
  }
</style>
