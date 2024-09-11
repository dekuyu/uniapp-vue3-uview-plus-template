// src/types/components.d.ts
//声明组件类型
import RwSwiper from '@/components/RwSwiper.vue'
declare module 'vue' {
  export interface GlobalComponents {
    RwSwiper: typeof RwSwiper
  }
}