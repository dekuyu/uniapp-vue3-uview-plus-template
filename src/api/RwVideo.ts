import { http } from '@/utils/http'

/**
 * 视频去水印接口
 * @param query 原始视频的url
 * @returns 
 */
export const getRwVideoAPI = (query: string) => {
  return http({
    method: 'GET',
    url: `/v1/url?task=${query}`,
  })
}