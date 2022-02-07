<!--
 * @Descripttion: 
 * @version: 
 * @Author: LiuXuFei
 * @Date: 2021-11-09 14:50:36
 * @LastEditors: LiuXuFei
 * @LastEditTime: 2022-01-21 16:22:10
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
    <el-form-item
      v-if="$lsStore.state.selectItem.expand.isRange"
      label="开始占位提示"
    >
      <el-input
        v-model="$lsStore.state.selectItem.expand.startPlaceholder"
        :placeholder="$lsStore.state.selectItem.expand.startPlaceholder"
      /> </el-form-item
    ><el-form-item
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
    </el-form-item>
    <el-form-item label="时间类型">
      <el-select
        v-model="$lsStore.state.selectItem.expand.type"
        :style="{ width: '100%' }"
        placeholder="请选择时间类型"
        @change="dateTypeChange"
      >
        <el-option
          v-for="(item, index) in dateOptions"
          :key="index"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>
  </el-form>
</template>
<script>

const dateTimeFormat = {
  date: "yyyy-MM-dd",
  week: "yyyy 第 WW 周",
  month: "yyyy-MM",
  year: "yyyy",
  datetime: "yyyy-MM-dd HH:mm:ss",
  daterange: "yyyy-MM-dd",
  monthrange: "yyyy-MM",
  datetimerange: "yyyy-MM-dd HH:mm:ss",
};

export default {
  name: "customDatePicker",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {
    dateOptions() {
      if (this.$lsStore.state.selectItem.type === "DATE") {
        return this.$lsStore.state.selectItem.expand.dateTypeOptions;
      } else {
        return this.$lsStore.state.selectItem.expand.dateRangeTypeOptions;
      }
    },
  },
  created() {},
  mounted() {},
  methods: {
    dateTypeChange(val) {
      this.$lsStore.state.selectItem.expand.format = dateTimeFormat[val]
    },
  },
  watch: {},
};
</script>
<style lang='scss' scoped>
</style>