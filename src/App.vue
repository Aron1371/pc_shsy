<template>
  <div
    class="top"
    :style="{
      display: state.isChannel ? 'none' : 'block',
    }"
  >
    <div class="logo_bg">
      <div class="logo">
        <h1 class="logo_area"><img src="/img/logo.png" /></h1>
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
        <div class="foot_tlt">友情链接</div>
        <div class="link_1">
          <a href="http://www.ndrc.gov.cn" class="link" target="_blank"
            >国家发展和改革委员会</a
          >
          <a href="http://www.nea.gov.cn/" class="link" target="_blank"
            >国家能源局</a
          >
          <a href="https://fgw.sh.gov.cn/" class="link" target="_blank"
            >上海市发展和改革委员会</a
          >
          <a href="http://ceis.xinhua08.com/" class="link" target="_blank"
            >中国经济信息社</a
          >
        </div>
        <div class="link_2">
          <a
            href="http://www.cnpc.com.cn/cnpc/index.shtml"
            class="link"
            target="_blank"
            >中国石油</a
          >
          <a href="http://www.sinopec.com" class="link" target="_blank"
            >中国石化</a
          >
          <a href="http://www.cnooc.com.cn/" class="link" target="_blank"
            >中国海油</a
          >
          <a href="https://www.pipechina.com.cn/" class="link" target="_blank"
            >国家管网</a
          >
        </div>
        <div class="link_2">
          <a href="http://www.shenergy.com.cn/" class="link" target="_blank"
            >申能集团</a
          >
          <a href="http://www.bjgas.com/" class="link" target="_blank"
            >北京燃气</a
          >
          <a href="http://www.towngas.com.cn/" class="link" target="_blank"
            >港华燃气</a
          >
          <a
            href="https://www.enn.cn/business/energy.html"
            class="link"
            target="_blank"
            >ENN新奥</a
          >
        </div>
        <div class="link_2">
          <a
            href="http://www.chinagasholdings.com/"
            class="link"
            target="_blank"
            >中国燃气</a
          >
          <a href="https://www.chng.com.cn/" class="link" target="_blank"
            >中国华能</a
          >
          <a href="https://www.greatgas.cn" class="link" target="_blank"
            >好气网</a
          >
        </div>
      </div>
      <!--版权所有-->
      <!--  <div class="foot_copyright">©版权所有 2019 上海石油天然气交易中心 沪ICP备15013792号</div> -->
      <div class="foot_copyright">
        <a
          href="https://www.shpgx.com/html/qtgg/20240806/6640.html"
          style="
            color: #fff;
            font-size: 13px;
            display: inline-block;
            line-height: 20px;
            margin-right: 20px;
          "
          target="_blank"
          >法律声明</a
        ><a
          href="https://beian.miit.gov.cn/"
          style="
            color: #fff;
            font-size: 13px;
            display: inline-block;
            line-height: 20px;
          "
          target="_blank"
          ><br />©版权所有 2019 上海石油天然气交易中心 沪ICP备15013792号-1</a
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, watch } from "vue";
import { useRoute } from "vue-router";
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
</style>
