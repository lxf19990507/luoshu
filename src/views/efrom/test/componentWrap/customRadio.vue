<!--
 * @Descripttion: 
 * @version: 
 * @Author: LiuXuFei
 * @Date: 2021-11-09 14:03:04
 * @LastEditors: LiuXuFei
 * @LastEditTime: 2022-01-24 16:56:49
-->
<template>
    <el-radio-group v-model="config.expand.defaultValue">
      <el-radio
        v-for="site in config.expand.radioOptions"
        :key="site.value"
        :label="site.value"
        :class="config.expand.err"
        >{{ site.value }}</el-radio
      >
    </el-radio-group>
</template>
<script>
export default {
  name: "customRadio",
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