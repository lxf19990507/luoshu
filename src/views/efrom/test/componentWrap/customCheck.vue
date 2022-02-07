<!--
 * @Descripttion: 
 * @version: 
 * @Author: LiuXuFei
 * @Date: 2021-11-09 14:12:32
 * @LastEditors: LiuXuFei
 * @LastEditTime: 2022-01-24 16:55:06
-->
<template>
  <el-checkbox-group
    v-model="config.expand.defaultValue"
    :class="config.expand.err"
  >
    <el-checkbox
      v-for="site in config.expand.checkOptions"
      :key="site.value"
      :label="site.value"
      >{{ site.value }}</el-checkbox
    >
  </el-checkbox-group>
</template>
<script>
export default {
  name: "customCheck",
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