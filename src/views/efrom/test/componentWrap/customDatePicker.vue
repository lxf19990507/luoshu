<!--
 * @Descripttion: 
 * @version: 
 * @Author: LiuXuFei
 * @Date: 2021-11-09 14:50:09
 * @LastEditors: LiuXuFei
 * @LastEditTime: 2022-01-24 16:55:16
-->
<template>
  <el-date-picker
    v-model="config.expand.defaultValue"
    :type="config.expand.type"
    :start-placeholder="config.expand.startPlaceholder"
    :end-placeholder="config.expand.endPlaceholder"
    :placeholder="config.expand.placeholder"
    :value-format="config.expand.format"
    :class="config.expand.err"
  >
  </el-date-picker>
</template>
<script>
export default {
  name: "customDatePicker",
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