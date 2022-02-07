<!--
 * @Descripttion: 
 * @version: 
 * @Author: LiuXuFei
 * @Date: 2022-01-18 15:24:00
 * @LastEditors: LiuXuFei
 * @LastEditTime: 2022-02-07 14:45:02
-->
<template>
  <div class="w100 h100">
    <ls-efrom class="preview" :formData.sync="formData"></ls-efrom>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      formData: [
      ],
    };
  },
  computed: {},
  created() {
  },
  mounted() {},
  methods: {
  },
  watch: {},
};
</script>
<style lang='scss' scoped>
</style>