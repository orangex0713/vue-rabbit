<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import homeProduct from './components/HomeProduct.vue'
// import HomePanel from './components/HomePanel.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <homeProduct />
  <HomeHot />
  <!-- 测试面板组件
   <HomePanel title="新鲜好物" sub-title="新鲜好物 好多商品">
      <div>
        newgoods
      </div>
   </HomePanel>
   <HomePanel title="人气推荐" sub-title="人气推荐 好多商品">
    <div>
        hotgoods
      </div>
   </HomePanel> -->
</template>
