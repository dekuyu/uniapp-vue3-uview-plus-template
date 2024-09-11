<template>
  <view class="resetPwd-container">
    <text class="resetPwd-title">重置密码</text>
    <view class="resetPwd-form">
      <view class="resetPwd-form-item">
        <input type="password" placeholder="设置新密码" placeholder-class="holder-class" />
        <view class="line"></view>
      </view>
      <view class="resetPwd-form-item">
        <input type="password" placeholder="确认密码" placeholder-class="holder-class" />
        <view class="line"></view>
      </view>
      <view class="resetPwd-form-item">
        <button type="primary" @tap="confirm">确 认</button>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
// 确认修改密码
const confirm = () => {
  uni.showToast({
    title: '修改成功',
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

<style>
.holder-class {
  color: #ccc;
}
</style>
<style lang="scss" scoped>
.resetPwd-container {
  padding: 80rpx 70rpx;
  height: 100vh; // 使容器的高度为视口高度
  .resetPwd-title {
    position: absolute;
    letter-spacing: 12rpx;
    font-size: 56rpx;
    font-weight: 600;
  }
  .resetPwd-form {
    position: absolute;
    margin-top: 120rpx;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    box-sizing: border-box;
    padding: 80rpx 70rpx;
    .resetPwd-form-item {
      margin-bottom: 100rpx;
      button {
        border-radius: 40rpx;
        background-color: #465cff;
      }
      input {
        font-size: 32rpx;
        height: 32rpx;
      }
    }
  }
}
</style>
