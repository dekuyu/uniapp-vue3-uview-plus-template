<template>
  <view class="reg-container">
    <text class="reg-title">欢迎注册</text>
    <!-- 用户注册表单 -->
    <view class="reg-form">
      <view class="reg-form-item">
        <input type="back" placeholder="请输入手机号" placeholder-class="holder-class" />
        <view class="line"></view>
      </view>
      <view class="reg-form-item">
        <view class="code-container">
          <input type="password" placeholder="验证码" placeholder-class="holder-class" />
          <button class="code-btn">获取验证码</button>
        </view>
        <view class="line"></view>
      </view>
      <view class="reg-form-item">
        <input type="text" placeholder="用户名" placeholder-class="holder-class" />
        <view class="line"></view>
      </view>
      <view class="reg-form-item">
        <input type="password" placeholder="密码" placeholder-class="holder-class" />
        <view class="line"></view>
      </view>
      <view class="reg-form-item">
        <button class="reg-btn" type="primary">注 册</button>
      </view>
      <view class="reg-form-text">
        <text class="reg-login">已有账号？</text>
        <text class="reg" @tap="goToLogin">登录</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
// 跳转到登录页面(uni.navigateTo跳转到指定页面)
const goToLogin = () => {
  uni.navigateBack()
}
</script>

<style>
.holder-class {
  color: #ccc;
}
</style>
<style lang="scss" scoped>
.reg-container {
  padding: 80rpx 70rpx;
  height: 100vh; // 使容器的高度为视口高度
  .reg-title {
    position: absolute;
    letter-spacing: 12rpx;
    font-size: 56rpx;
    font-weight: 600;
  }
  .reg-form {
    position: absolute;
    // top: 38%;
    margin-top: 120rpx;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    box-sizing: border-box;
    padding: 80rpx 70rpx;
    .reg-form-item {
      margin-bottom: 100rpx;
      .reg-btn {
        border-radius: 40rpx;
        background-color: #465cff;
      }
      input {
        font-size: 32rpx;
        height: 32rpx;
      }
    }
    .reg-form-text {
      text-align: center;
      .reg {
        color: #465cff;
      }
    }
  }
}
.line {
  margin-top: 20rpx;
  box-shadow: 0 0 0 0.5px rgba(241, 241, 241, 1);
}
.code-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .code-btn {
    background-color: transparent;
    padding: 0px;
    line-height: 32rpx;
    margin: 0;
    color: #465cff;
  }
}
</style>
