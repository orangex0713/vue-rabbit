import httpInstance from '@/utils/http'

// get banner

export function getBannerAPI(){
  return httpInstance({
    url: '/home/banner'
  })
}
