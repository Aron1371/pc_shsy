<template>
  <div
    class="top"
    :style="{
      display: state.isChannel ? 'none' : 'block',
    }"
  >
    <div class="logo_bg">
      <div class="logo">
        <h1 class="logo_area"><img src="./assets/images/logo.png" /></h1>
      </div>
    </div>
    <div class="navigation1">
      <div
        class="navigation_tab"
        :class="{
          navigation_tab_now: $route.path === '/' || $route.path === '/index',
        }"
      >
        <RouterLink to="/">首页</RouterLink>
      </div>
      <div class="navigation_tab">
        <RouterLink to="/channel">下载专区</RouterLink>
        <ul class="navigation_tab_menu" style="display: none"></ul>
      </div>
      <div
        class="navigation_tab"
        :class="{ navigation_tab_now: $route.path === '/news' }"
      >
        <RouterLink to="/news">公司新闻</RouterLink>
        <ul class="navigation_tab_menu" style="display: none"></ul>
      </div>
      <div
        class="navigation_tab"
        :class="{ navigation_tab_now: $route.path === '/about' }"
      >
        <RouterLink to="/about">关于我们</RouterLink>
        <ul class="navigation_tab_menu" style="display: none"></ul>
      </div>
    </div>
  </div>

  <RouterView />

  <div
    class="foot_bg"
    :style="{
      display: state.isChannel ? 'none' : 'block',
    }"
  >
    <div class="centent1">
      <!--友情链接-->
      <div class="link_bg">
        <div class="foot_tlt">合作伙伴</div>
        <div class="link_1">
          <a class="link">马拉松原油公司</a>
          <a class="link">道达尔能源公司</a>
          <a class="link">康菲石油公司‌</a>
          <a class="link">壳牌集团</a>
        </div>
        <div class="link_2">
          <a class="link">中国石油</a>
          <a class="link">中国石化</a>
          <a class="link">中国海油</a>
          <a class="link">国家管网</a>
        </div>
        <div class="link_2">
          <a class="link">申能集团</a>
          <a class="link">北京燃气</a>
          <a class="link">港华燃气</a>
          <a class="link">ENN新奥</a>
        </div>
        <div class="link_2">
          <a class="link">中国燃气</a>
          <a class="link">中国华能</a>
          <a class="link">好气网</a>
        </div>
      </div>
      <!--版权所有-->
      <!--  <div class="foot_copyright">©版权所有 2019 上海石油天然气交易中心 沪ICP备15013792号</div> -->
      <div class="foot_copyright">
        <a
          style="
            color: #fff;
            font-size: 13px;
            display: inline-block;
            line-height: 20px;
            margin-right: 20px;
          "
          >法律声明</a
        ><a
          style="
            color: #fff;
            font-size: 13px;
            display: inline-block;
            line-height: 20px;
          "
          ><br />©版权所有 2019 上海石油天然气交易中心 沪ICP备15013792号-1</a
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, watch,onMounted } from "vue";
import { useRoute } from "vue-router";
import config from "./config";
const state = reactive({
  isChannel: false,
});
const route = useRoute();
watch(
  () => route.fullPath,
  (newPath, oldPath) => {
    if (newPath == "/channel") {
      state.isChannel = true;
    } else {
      state.isChannel = false;
    }
  }
);

onMounted(() => {
  document.title = config.TITLE;
});
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

/* 确保RouterLink样式正确 */
.navigation_tab a {
  text-decoration: none;
  color: inherit;
  display: block;
  padding: 0;
  line-height: 38px;
}

.navigation_tab a:hover {
  text-decoration: none;
}
a:hover {
  cursor: pointer;
}
</style>
