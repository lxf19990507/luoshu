<!--
 * @Descripttion: 
 * @version: 
 * @Author: LiuXuFei
 * @Date: 2021-11-09 14:32:09
 * @LastEditors: LiuXuFei
 * @LastEditTime: 2022-01-24 17:31:26
-->
<template>
  <el-time-picker
    v-model="config.expand.defaultValue"
    :is-range="config.expand.isRange?true:false"
    :start-placeholder="config.expand.startPlaceholder"
    :end-placeholder="config.expand.endPlaceholder"
    :placeholder="config.expand.placeholder"
    :value-format='config.expand.format'
    :class="config.expand.err"
  >
  </el-time-picker>
</template>
<script>
export default {
  name: "customTimePicker",
  props: {
      config:null
  },
  data() {
    return {};
  },
  computed: {    
  },
  created() {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>
<style lang='scss' scoped>
</style>