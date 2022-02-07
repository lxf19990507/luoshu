<!--
 * @Descripttion: 
 * @version: 
 * @Author: LiuXuFei
 * @Date: 2021-11-04 17:27:53
 * @LastEditors: LiuXuFei
 * @LastEditTime: 2022-01-24 16:57:13
-->
<template>
  <el-select
    @visible-change="selectObj"
    v-model="config.expand.defaultValue"
    placeholder="请选择"
    :filterable="config.expand.filterable"
    :clearable="config.expand.clearable"
    :multiple="config.expand.multiple"
    :class="config.expand.err"
    @blur="verification"
  >
    <el-option
      v-for="item in config.expand.selectOptions"
      :key="item.value"
      :label="item.value"
      :value="item.value"
    >
    </el-option>
  </el-select>
</template>
<script>
export default {
  name: "customSelect",
  props: {
    index: "",
    config: null,
  },
  data() {
    return {
      err:''
    };
  },
  computed: {},
  created() {},
  mounted() {
  },
  methods: {
    selectObj(row) {
      this.$lsStore.state.selectIndex = this.index;
      this.$lsStore.state.selectItem = this.config;
    },
    verification(){
      if(this.config?.expand?.required && !this.config?.defaultValue){
        this.$set(this.config.expand,'err','err')
      }else{
        this.$set(this.config.expand,'err','')
      }
    }
  },
  watch: {
  },
};
</script>
<style lang='scss' scoped>
</style>