<!--
 * @Descripttion: 
 * @version: 
 * @Author: LiuXuFei
 * @Date: 2021-09-13 11:07:00
 * @LastEditors: LiuXuFei
 * @LastEditTime: 2021-10-19 14:10:43
-->
<!--
 * @Descripttion: 
 * @version: 
 * @Author: LiuXuFei
 * @Date: 2021-04-06 14:41:51
 * @LastEditors: LiuXuFei
 * @LastEditTime: 2021-04-23 16:24:46
-->
<template>
  <div class="block plr20">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="pageSize"
      :layout="layout"
      :page-sizes="[10, 20, 30, 40]"
      :total="localTotal"
    >
    </el-pagination>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  props: {
    layout:{
      type:null,
      default:"total, prev, pager, next"
    },
    pageSize: {
      type: Number,
      default: 1,
    },
    total: {
      type: null,
      default: 5,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {};
  },
  computed: {
    localTotal(){
      return parseInt(this.total)
    }
  },
  created() {},
  mounted() {},
  methods: {
    handleSizeChange(val) {
      this.$emit("update:pageSize", val);
    },
    handleCurrentChange(val) {
      this.$emit("update:currentPage", val);
    },
  },
  watch: {},
};
</script>
<style lang='scss' scoped>
</style>