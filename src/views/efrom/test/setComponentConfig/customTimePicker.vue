<!--
 * @Descripttion: 
 * @version: 
 * @Author: LiuXuFei
 * @Date: 2021-11-09 14:32:34
 * @LastEditors: LiuXuFei
 * @LastEditTime: 2022-01-21 16:22:18
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
    <el-form-item
      v-if="!$lsStore.state.selectItem.expand.isRange"
      label="占位提示"
    >
      <el-input
        v-model="$lsStore.state.selectItem.expand.placeholder"
        :placeholder="$lsStore.state.selectItem.expand.placeholder"
      />
    </el-form-item>
    <!-- 时间占位符不生效 -->
    <!-- <el-form-item
      v-if="$lsStore.state.selectItem.expand.isRange"
      label="开始占位提示"
    >
      <el-input
        v-model="$lsStore.state.selectItem.expand.startPlaceholder"
        :placeholder="$lsStore.state.selectItem.expand.startPlaceholder"
      />
    </el-form-item>
    <el-form-item
      v-if="$lsStore.state.selectItem.expand.isRange"
      label="结束占位提示"
    >
      <el-input
        v-model="$lsStore.state.selectItem.expand.endPlaceholder"
        :placeholder="$lsStore.state.selectItem.expand.endPlaceholder"
      />
    </el-form-item>
    <el-form-item label="时间格式">
      <el-input
        v-model="$lsStore.state.selectItem.expand.format"
        placeholder="请输入时间格式"
      />
    </el-form-item> -->
  </el-form>
</template>
<script>
export default {
  name: "customTimePicker",
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