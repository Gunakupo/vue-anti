<template>
  <div>
    <a-drawer
      placement="right"
      :closable="false"
      @close="onClose"
      :visible="visible"
      width="300px"
    >
      <template v-slot:handle>
        <div class="handle" @click="visible = !visible">
          <a-icon :type="!visible ? 'setting' : 'minus'"></a-icon>
        </div>
      </template>
      <div>
        <h2>整体风格</h2>
        <a-radio-group
          @change="e => handleSettingChange('navTheme', e.target.value)"
          :value="$route.query.navTheme || 'light'"
        >
          <a-radio :style="radioStyle" value="light">白色</a-radio>
          <a-radio :style="radioStyle" value="dark">黑色</a-radio>
        </a-radio-group>
        <h2>导航模式</h2>
        <a-radio-group
          @change="e => handleSettingChange('navMode', e.target.value)"
          :value="$route.query.navMode || 'left'"
        >
          <a-radio :style="radioStyle" value="left">左侧</a-radio>
          <a-radio :style="radioStyle" value="top">顶部</a-radio>
        </a-radio-group>
      </div>
    </a-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      radioStyle: {
        display: "block",
        height: "30px",
        lineHeight: "30px"
      }
    };
  },
  methods: {
    onClose() {
      this.visible = false;
    },
    handleSettingChange(type, value) {
      this.$router.push({ query: { ...this.$route.query, [type]: value } });
    }
  }
};
</script>
<style scoped>
.handle {
  position: absolute;
  font-size: 20px;
  top: 400px;
  right: 300px;
  width: 48px;
  height: 48px;
  background-color: cornflowerblue;
  text-align: center;
  line-height: 48px;
  color: white;
  border-radius: 5px 0 0 5px;
  box-shadow: 0 0 10px cornflowerblue;
}
</style>
