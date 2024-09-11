<template>
  <view class="login-container">
    <text class="login-title">欢迎登录</text>
    <view class="login-form">
      <view class="login-form-item">
        <input type="text" placeholder="请输入手机号" placeholder-class="holder-class" />
        <view class="line"></view>
      </view>
      <view class="login-form-item">
        <input type="password" placeholder="请输入密码" placeholder-class="holder-class" />
        <view class="line"></view>
        <text style="float: right; margin-top: 4rpx" @tap="goForgetPwdPage1">忘记密码</text>
      </view>
      <view class="login-form-item">
        <button type="primary" @tap="login">登 录</button>
      </view>
      <view class="login-form-text">
        <text class="code-login" @tap="goToCodeLogin">验证码登录</text>
        <text class="h-line"></text>
        <text class="reg" @tap="goToReg">注册</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
// 跳转到注册页面(uni.navigateTo跳转到指定页面)
const goToReg = () => {
  uni.navigateTo({
    url: '/pages/reg/reg',
  })
}

// 跳转到验证码登录页面(uni.navigateTo跳转到指定页面)
const goToCodeLogin = () => {
  uni.navigateTo({
    url: '/pages/code-login/code-login',
  })
}

// 跳转到验证码页面(uni.navigateTo跳转到指定页面)
const goForgetPwdPage1 = () => {
  uni.navigateTo({
    url: '/pages/code-login/code-login?type=forgetPwd',
  })
}

// 跳转到首页
const login = () => {
  uni.switchTab({ url: '/pages/index/index' })
}
</script>

<!-- placeholder-class这个属性如果使用了<style scoped>就不生效，所以我们可以单独再写一个style -->
<style>
.holder-class {
  color: #ccc;
}
</style>
<style lang="scss" scoped>
.login-container {
  padding: 80rpx 70rpx;
  height: 100vh; // 使容器的高度为视口高度
  .login-title {
    position: absolute;
    letter-spacing: 12rpx;
    font-size: 56rpx;
    font-weight: 600;
  }
  .login-form {
    position: absolute;
    margin-top: 120rpx;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    box-sizing: border-box;
    padding: 80rpx 70rpx;
    .login-form-item {
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
    .login-form-text {
      text-align: center;
      .h-line {
        margin: 0 20rpx;
        border: 1px solid #ccc;
      }
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
</style>
