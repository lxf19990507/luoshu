<!--
 * @Description: 
 * @Author: linzejian
 * @Date: 2021-11-29 13:45:20
 * @LastEditTime: 2022-01-21 16:21:26
 * @LastEditors: LiuXuFei
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
  name: "customAttachment",
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