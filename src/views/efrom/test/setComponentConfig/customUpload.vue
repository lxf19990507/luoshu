<!--
 * @Descripttion: 
 * @version: 
 * @Author: LiuXuFei
 * @Date: 2021-11-09 15:03:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-10 10:35:44
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
    <el-form-item label="文件类型">
      <el-select
        v-model="$lsStore.state.selectItem.expand.accept"
        :style="{ width: '100%' }"
        clearable
        placeholder="请选择文件类型"
      >
        <el-option label="图片" value="image/*" />
        <el-option label="视频" value="video/*" />
        <el-option label="音频" value="audio/*" />
        <el-option label="excel" value=".xls,.xlsx" />
        <el-option label="word" value=".doc,.docx" />
        <el-option label="pdf" value=".pdf" />
        <el-option label="txt" value=".txt" />
      </el-select>
    </el-form-item>
    <el-form-item label="文件大小">
      <el-input
        v-model.number="$lsStore.state.selectItem.expand.fileSize"
        placeholder="请输入文件大小"
      >
        <el-select
          slot="append"
          v-model="$lsStore.state.selectItem.expand.sizeUnit"
          :style="{ width: '66px' }"
        >
          <el-option label="KB" value="KB" />
          <el-option label="MB" value="MB" />
          <el-option label="GB" value="GB" />
        </el-select>
      </el-input>
    </el-form-item>
    <el-form-item label="按钮文字">
      <el-input
        v-model="$lsStore.state.selectItem.expand.buttonText"
        placeholder="请输入按钮文字"
      />
    </el-form-item>
    <el-form-item label="显示提示">
      <el-switch v-model="$lsStore.state.selectItem.expand.showTip" />
    </el-form-item>
    <el-form-item label="多选文件">
      <el-switch v-model="$lsStore.state.selectItem.expand.multiple" />
    </el-form-item>
    <el-form-item label="文件个数">
      <el-input-number v-model="$lsStore.state.selectItem.expand.limit" />
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  name: "customUpload",
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