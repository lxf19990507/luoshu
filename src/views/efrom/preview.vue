<!--
 * @Descripttion: 
 * @version: 
 * @Author: LiuXuFei
 * @Date: 2022-01-21 17:17:34
 * @LastEditors: LiuXuFei
 * @LastEditTime: 2022-01-21 17:29:36
-->
<template>
  <div v-if="$lsStore.state.arr2.length>0">
    <componentWrap
      :class="item.component"
      :selectTrue="$lsStore.state.selectIndex === i"
      v-for="(item, i) in $lsStore.state.arr2"
      :key="'Component' + i"
      :config="item"
      :index="i"
      :parent="$lsStore.state.arr2"
      state="preview"
    ></componentWrap>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  props: {
    formData: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
  watch: {
    formData: {
      immediate: true,
      handler(newV) {
        this.$lsStore.state.arr2 = newV;
      },
    },
    "$lsStore.state.arr2"(newV) {
      this.$emit("update:formData", newV);
    },
  },
};
</script>
<style lang='scss' scoped>
</style>