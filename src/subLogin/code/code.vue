<template>
  <view class="code-container">
    <text class="code-title">输入验证码</text>
    <view class="tips">已发送验证码至 <text class="phone-number"> 18888888888</text></view>
    <view class="verification-code">
      <VerificationCodeInput />
    </view>
    <view class="confirm-btn">
      <button v-if="!isForgetPwd" type="primary" @tap="confirm">确 定</button>
      <button v-if="isForgetPwd" type="primary" @tap="confirmChangePwd">确 定</button>
    </view>
    <view class="time-tips"> <text class="time">30s</text>重新发送 </view>
  </view>
</template>

<script lang="ts" setup>
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import VerificationCodeInput from './components/VerificationCodeInput.vue'

// 是否显示忘记密码
const isForgetPwd = ref(false)
// 确认登录
const confirm = () => {
  uni.showToast({
    title: '登录成功',
    icon: 'success',
    duration: 2000,
  })
  uni.switchTab({ url: '/pages/index/index' })
}

// 确认修改密码
const confirmChangePwd = () => {
  uni.navigateTo({
    url: '/subLogin/resetPwd/resetPwd',
  })
}

onLoad((options: any) => {
  if (options.type === 'forgetPwd') {
    isForgetPwd.value = true
  } else {
    isForgetPwd.value = false
  }
})
</script>

<style lang="scss" scoped>
.code-container {
  padding: 80rpx 70rpx;
  .code-title {
    position: absolute;
    letter-spacing: 12rpx;
    font-size: 56rpx;
    font-weight: 600;
  }
  .tips {
    position: absolute;
    margin-top: 120rpx;
    .phone-number {
      color: rgb(176, 176, 176);
    }
  }
  .verification-code {
    margin-top: 240rpx;
    margin-bottom: 100rpx;
  }

  .confirm-btn {
    margin-bottom: 100rpx;
    button {
      border-radius: 40rpx;
      background-color: #465cff;
    }
  }

  .time-tips {
    text-align: center;
    color: rgb(176, 176, 176);
    .time {
      color: rgb(207, 25, 25);
    }
  }
}
</style>
