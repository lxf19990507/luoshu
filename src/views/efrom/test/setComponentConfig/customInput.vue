<!--
 * @Descripttion: 
 * @version: 
 * @Author: LiuXuFei
 * @Date: 2021-11-03 11:23:55
 * @LastEditors: LiuXuFei
 * @LastEditTime: 2022-01-21 16:22:12
-->
<template>
  <el-form
    ref="form"
    :model="$lsStore.state.selectItem"
    label-width="80px"
    :disabled="!$lsStore.state.selectItem.label"
  >
    <el-form-item label="默认值">
      <el-input v-model="$lsStore.state.selectItem.expand.defaultValue"></el-input>
    </el-form-item>
    <el-form-item label="占位提示">
      <el-input v-model="$lsStore.state.selectItem.expand.placeholder"></el-input>
    </el-form-item>
    <el-form-item label="前缀">
      <el-input v-model="$lsStore.state.selectItem.expand.prepend"></el-input>
    </el-form-item>
    <el-form-item label="后缀">
      <el-input v-model="$lsStore.state.selectItem.expand.append"></el-input>
    </el-form-item>
    <el-form-item label="前图标">
      <el-input v-model="$lsStore.state.selectItem.expand.prefixIcon"></el-input>
    </el-form-item>
    <el-form-item label="后图标">
      <el-input v-model="$lsStore.state.selectItem.expand.suffixIcon"></el-input>
    </el-form-item>
    <el-form-item label="最多输入">
      <el-input v-model="$lsStore.state.selectItem.expand.maxlength"></el-input>
    </el-form-item>
    <el-form-item label="输入统计">
      <el-switch
        v-model="$lsStore.state.selectItem.expand.showWordLimit"
        active-color="#409EFF"
        inactive-color="#EAECF0"
      >
      </el-switch>
    </el-form-item>
    <el-form-item label="能否清空">
      <el-switch
        v-model="$lsStore.state.selectItem.expand.clearable"
        active-color="#409EFF"
        inactive-color="#EAECF0"
      >
      </el-switch>
    </el-form-item>
    <el-form-item label="是否只读">
      <el-switch
        v-model="$lsStore.state.selectItem.expand.readonly"
        active-color="#409EFF"
        inactive-color="#EAECF0"
      >
      </el-switch>
    </el-form-item>
    <el-form-item label="是否必填">
      <el-switch
        v-model="$lsStore.state.selectItem.expand.required"
        active-color="#409EFF"
        inactive-color="#EAECF0"
      >
      </el-switch>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  name: "customInput",
  components: {},
  props: {
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