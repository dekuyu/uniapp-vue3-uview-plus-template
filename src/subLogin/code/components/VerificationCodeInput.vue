<template>
  <view class="container">
    <view class="input-container">
      <view v-for="index in 4" :key="index" class="verify-input">
        <input
          type="number"
          class="input-field"
          :ref="`input${index - 1}`"
          :maxlength="1"
          :focus="focusIndex === index - 1"
          @input="handleInput(index - 1, $event)"
          @focus="handleFocus(index - 1)"
        />
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick } from 'vue'

// 焦点索引
const focusIndex = ref(0)
// 输入值数组
const values = ref<string[]>(['', '', '', ''])
// 输入框ref数组
const inputRefs = ref<(HTMLInputElement | null)[]>([])

/**
 * 处理每个输入值函数
 * @param index - 序号.
 * @param event - 输入事件对象.
 */
const handleInput = (index: number, event: Event) => {
  // 获取输入框的值
  const input = event.target as HTMLInputElement
  const value = input.value

  if (value) {
    // 更新输入值数组
    values.value[index] = value

    // 判断是否还有下一个输入框，如果有则聚焦
    if (index < 3) {
      nextTick(() => {
        focusIndex.value = index + 1
        const nextInput = inputRefs.value[index + 1]
        nextInput?.focus()
      })
    }

    // 判断是否所有输入框都已经有值，如果有则触发完成事件
    if (values.value.every((v) => v.length > 0)) {
      handleComplete()
    }
  } else {
    // 如果输入值为空，则聚焦前一个输入框
    if (index > 0) {
      focusIndex.value = index - 1
      nextTick(() => {
        const prevInput = inputRefs.value[index - 1]
        prevInput?.focus()
      })
    }
  }
}

// 处理焦点事件
const handleFocus = (index: number) => {
  focusIndex.value = index
}

// 处理完成事件
const handleComplete = () => {
  const code = values.value.join('')
  console.log('验证码输入完成:', code)
}

onMounted(() => {
  // 初始化焦点
  nextTick(() => {
    const firstInput = inputRefs.value[0]
    firstInput?.focus()
  })
})
</script>

<style>
.input-container {
  display: flex;
  justify-content: space-between;
}

.verify-input {
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.input-field {
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 24px;
  border: none;
  border-bottom: 2px solid #ccc;
  outline: none;
}
</style>
