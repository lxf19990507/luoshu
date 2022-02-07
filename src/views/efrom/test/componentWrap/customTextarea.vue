<!--
 * @Descripttion: 
 * @version: 
 * @Author: LiuXuFei
 * @Date: 2021-11-03 11:24:21
 * @LastEditors: LiuXuFei
 * @LastEditTime: 2022-01-24 16:57:42
-->
<template>
  <el-input
    v-model="config.expand.defaultValue"
    :autosize="{ minRows: config.expand.minRow, maxRows: config.expand.maxRow}"
    :readonly="config.expand.readonly"
    :maxlength="config.expand.maxlength"
    :show-word-limit="config.expand.showWordLimit"
    type="textarea"
    :placeholder="config.expand.placeholder"
    :key="config.expand.minRow+config.expand.maxRow"
    @blur="verification"
    :class="config.expand.err"
  ></el-input>
</template>
<script>
export default {
  name: "customTextarea",
  components: {
  },
  props: {
    config:null
  },
  data() {
    return {
      err:''
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