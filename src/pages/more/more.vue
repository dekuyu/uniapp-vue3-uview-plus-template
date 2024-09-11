<template>
  <view>
    <button type="primary" @tap="logout">退出登录</button>
  </view>
</template>

<script lang="ts" setup>
const logout = () => {
  uni.showToast({
    title: '退出成功',
    icon: 'none',
  })
  // 使用 setTimeout 确保提示能够被看到
  setTimeout(() => {
    uni.navigateTo({
      url: '/pages/login/login',
    })
  }, 500) // 延迟 1000 毫秒后进行跳转
}
</script>

<style lang="scss" scoped>
button {
  border-radius: 40rpx;
  background-color: #465cff;
}
</style>
