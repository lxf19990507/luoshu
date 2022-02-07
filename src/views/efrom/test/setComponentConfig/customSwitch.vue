<!--
 * @Descripttion: 
 * @version: 
 * @Author: LiuXuFei
 * @Date: 2021-11-09 14:24:35
 * @LastEditors: LiuXuFei
 * @LastEditTime: 2022-01-21 16:22:17
-->
<template>
  <el-form
    ref="form"
    :model="$lsStore.state.selectItem"
    label-width="80px"
    :disabled="!$lsStore.state.selectItem.label"
  >
    <el-form-item label="是否必填">
      <el-switch v-model="$lsStore.state.selectItem.expand.required"> </el-switch>
    </el-form-item>
    <el-form-item label="开启颜色">
      <el-color-picker v-model="$lsStore.state.selectItem.expand.activeColor" />
    </el-form-item>
    <el-form-item label="关闭颜色">
      <el-color-picker v-model="$lsStore.state.selectItem.expand.inactiveColor" />
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  name: "customSwitch",
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