<!--
 * @Descripttion: 
 * @version: 
 * @Author: LiuXuFei
 * @Date: 2021-11-03 11:23:44
 * @LastEditors: LiuXuFei
 * @LastEditTime: 2022-01-24 16:56:07
-->
<template>
  <el-input
    v-model="config.expand.defaultValue"
    :readonly="config.expand.readonly"
    :clearable="config.expand.clearable"
    :placeholder="config.expand.placeholder"
    :suffix-icon="config.expand.suffixIcon"
    :prefix-icon="config.expand.prefixIcon"
    :maxlength="config.expand.maxlength"
    :show-word-limit="config.expand.showWordLimit"
    :disabled="config.expand.disabled"
    :class="config.expand.err"
    @blur="verification"
  >
    <template v-if="config.expand.prepend" slot="prepend">{{
      config.expand.prepend
    }}</template>
    <template v-if="config.expand.append" slot="append">{{ config.expand.append }}</template>
  </el-input>
</template>
<script>
export default {
  name: "customInput",
  props: {
    config: null,
  },
  data() {
    return {
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    verification(){
      if(this.config?.expand?.required && !this.config?.defaultValue){
        this.$set(this.config.expand,'err','err')
      }else{
        this.$set(this.config.expand,'err','')
      }
    }
  },
  watch: {},
};
</script>
<style lang='scss' scoped>
</style>