<!--
 * @Descripttion: 
 * @version: 
 * @Author: LiuXuFei
 * @Date: 2021-11-03 11:24:21
 * @LastEditors: LiuXuFei
 * @LastEditTime: 2022-01-21 16:22:13
-->
<template>
  <el-form
    ref="form"
    :model="$lsStore.state.selectItem"
    label-width="80px"
    :disabled="!$lsStore.state.selectItem.label"
  >
    <el-form-item label="最小值">
      <el-input-number v-model="$lsStore.state.selectItem.expand.min"></el-input-number>
    </el-form-item>
    <el-form-item label="最大值">
      <el-input-number v-model="$lsStore.state.selectItem.expand.max"></el-input-number>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  name: "customNumber",
  components: {},
  props: {},
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