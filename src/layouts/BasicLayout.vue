<template>
  <div :class="[`nav-theme-${navTheme}`, `nav-theme-${navMode}`]">
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <a-layout-sider
        :trigger="null"
        collapsible
        v-model="collapsed"
        :theme="navTheme"
        v-if="navMode == 'left'"
      >
        <div class="logo">Ant Design Vue</div>
        <SliderMenu />
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="collapsed = !collapsed"
            class="trigger"
          ></a-icon>
          <Header />
        </a-layout-header>
        <a-layout-content style="margin: 0 16px">
          <router-view />
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          <Footer></Footer>
        </a-layout-footer>
      </a-layout>
    </a-layout>
    <SettingDrawer />
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import SliderMenu from "./SliderMenu";
import SettingDrawer from "../components/SettingDrawer";
export default {
  components: {
    Header,
    Footer,
    SliderMenu,
    SettingDrawer
  },
  data() {
    return {
      collapsed: false
    };
  },
  computed: {
    navTheme() {
      return this.$route.query.navTheme || "light";
    },
    navMode() {
      return this.$route.query.navMode || "left";
    }
  }
};
</script>

<style scoped>
.trigger {
  padding: 0 20px;
  line-height: 64px;
  font-size: 20px;
}
.trigger:hover {
  background-color: #eee;
}
.logo {
  height: 100px;
  text-align: center;
  line-height: 100px;
  font-size: 20px;
  margin: 20px;
}
.nav-theme-light >>> .logo {
  color: cornflowerblue;
}
.nav-theme-dark >>> .logo {
  color: white;
}
</style>
