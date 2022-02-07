<!--
 * @Descripttion: 
 * @version: 
 * @Author: LiuXuFei
 * @Date: 2021-11-03 11:24:21
 * @LastEditors: LiuXuFei
 * @LastEditTime: 2022-01-24 16:56:38
-->
<template>
  <el-input-number
    v-model="config.expand.defaultValue"
    :min="config.expand.min"
    :max="config.expand.max"
    :class="config.expand.err"
  ></el-input-number>
</template>
<script>

export default {
  name: "customNumber",
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