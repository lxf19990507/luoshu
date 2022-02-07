<!--
 * @Descripttion: 
 * @version: 
 * @Author: LiuXuFei
 * @Date: 2021-11-04 17:27:53
 * @LastEditors: LiuXuFei
 * @LastEditTime: 2022-01-21 16:22:14
-->
<template>
  <div>
    <el-divider>选项</el-divider>
    <draggable
      v-model="$lsStore.state.selectItem.expand.selectOptions"
      group="selectOptionsDrag"
      animation="300"
      dragClass="dragClass"
      ghostClass="ghostClass"
      chosenClass="chosenClass"
      class="f-space test"
      handle=".el-icon-s-operation"
    >
      <transition-group>
        <div
          class="f-baseX mt10 mb10"
          v-for="(site, i) in $lsStore.state.selectItem.expand.selectOptions"
          :key="'set' + i"
        >
          <i class="el-icon-s-operation mr8 size23 move"></i>
          <el-input v-model="site.value"></el-input>
          <i class="el-icon-remove-outline ml8 size23" style="color: red"
            @click="
              $lsStore.state.selectItem.expand.selectOptions.splice(index, 1)
            "></i>
        </div>
      </transition-group>
    </draggable>
    <div class="addOptions f-baseX cursor">
      <i class="el-icon-circle-plus mr8"></i>
      <p @click="addOptions">添加选项</p>
    </div>
    <el-form
      ref="form"
      :model="$lsStore.state.selectItem"
      label-width="80px"
      :disabled="!$lsStore.state.selectItem.label"
    >
      <el-form-item label="能否清空">
        <el-switch
          v-model="$lsStore.state.selectItem.expand.clearable"
          active-color="#409EFF"
          inactive-color="#EAECF0"
        >
        </el-switch>
      </el-form-item>
      <el-form-item label="能否多选">
        <el-switch
          v-model="$lsStore.state.selectItem.expand.multiple"
          active-color="#409EFF"
          inactive-color="#EAECF0"
        >
        </el-switch>
      </el-form-item>
      <el-form-item label="能否搜索">
        <el-switch
          v-model="$lsStore.state.selectItem.expand.filterable"
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
  </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
  name: "customSelect",
  components: {
    draggable,
  },
  props: {
    index: "",
    config: null,
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    addOptions() {
      this.$lsStore.state.selectItem.expand.selectOptions.push({
        value: "",
        id: Math.random().toString(36).slice(2),
      });
    },
  },
  watch: {},
};
</script>
<style lang='scss' scoped>
.addOptions {
  color: #409eff;
}
.chosenClass{
  border: 1px dashed #409eff;
}
</style>