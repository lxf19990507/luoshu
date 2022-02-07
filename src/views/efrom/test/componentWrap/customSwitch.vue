<!--
 * @Descripttion: 
 * @version: 
 * @Author: LiuXuFei
 * @Date: 2021-11-09 14:21:46
 * @LastEditors: LiuXuFei
 * @LastEditTime: 2022-01-24 16:57:33
-->
<template>
  <el-switch
    v-model="config.expand.defaultValue"
    :active-color="config.expand.activeColor"
    :inactive-color="config.expand.inactiveColor"
  >
  </el-switch>
</template>
<script>

export default {
  name: "customSwitch",
  components: {
  },
  props: {
    config: null,
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>
<style lang='scss' scoped>
</style>