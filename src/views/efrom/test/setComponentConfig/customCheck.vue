<!--
 * @Descripttion: 
 * @version: 
 * @Author: LiuXuFei
 * @Date: 2021-11-09 14:11:23
 * @LastEditors: LiuXuFei
 * @LastEditTime: 2022-01-21 16:22:08
-->
<template>
  <el-form
    ref="form"
    :model="$lsStore.state.selectItem"
    label-width="80px"
    :disabled="!$lsStore.state.selectItem.label"
  >
    <el-form-item label="是否必填">
      <el-switch
        v-model="$lsStore.state.selectItem.expand.required"
        active-color="#409EFF"
        inactive-color="#EAECF0"
      >
      </el-switch>
    </el-form-item>
    <el-form-item label-width="0px">
      <template>
        <el-divider>选项</el-divider>
        <draggable
          :animation="340"
          :list="$lsStore.state.selectItem.expand.checkOptions"
          group="selectItem"
          handle=".option-drag"
        >
          <div
            v-for="(item, index) in $lsStore.state.selectItem.expand.checkOptions"
            :key="index"
            class="select-item"
          >
            <div class="select-line-icon option-drag move">
              <i class="el-icon-s-operation" />
            </div>
            <el-input v-model="item.value" placeholder="选项名" size="small" />
            <!--                <el-input-->
            <!--                  placeholder="选项值"-->
            <!--                  size="small"-->
            <!--                  :value="item.value"-->
            <!--                  @input="setOptionValue(item, $event)"-->
            <!--                />-->
            <div
              class="close-btn select-line-icon"
              @click="
                $lsStore.state.selectItem.expand.checkOptions.splice(index, 1)
              "
            >
              <i class="el-icon-remove-outline" />
            </div>
          </div>
        </draggable>
        <div style="margin-left: 20px">
          <el-button
            icon="el-icon-circle-plus-outline"
            style="padding-bottom: 0"
            type="text"
            @click="addSelectItem"
          >
            添加选项
          </el-button>
          <!-- <el-button
            icon="el-icon-circle-plus-outline"
            style="padding-bottom: 0"
            type="text"
            @click="addSelectOtherItem"
          >
            添加其他
          </el-button> -->
        </div>
        <el-divider />
      </template>
    </el-form-item>
  </el-form>
</template>
<script>
import draggable from "vuedraggable";
export default {
  name: "customCheck",
  components: {
    draggable,
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    addSelectItem() {
      this.$lsStore.state.selectItem.expand.checkOptions.push({
        value: "",
      });
    },
    addSelectOtherItem() {
      let item = this.$lsStore.state.selectItem.expand.checkOptions.find(
        (item) => {
          return item.value == 0;
        }
      );
      if (item) {
        return;
      }
      this.$lsStore.state.selectItem.expand.checkOptions.push({
        label: "其他",
        value: 0,
      });
    },
  },
  watch: {},
};
</script>
<style lang='scss' scoped>
.select-item {
  display: flex;
  border: 1px dashed #fff;
  box-sizing: border-box;
  align-items: center;
  & .close-btn {
    cursor: pointer;
    color: #f56c6c;
  }
  & .el-input + .el-input {
    margin-left: 4px;
  }
}
.select-item + .select-item {
  margin-top: 4px;
}
.select-item.sortable-chosen {
  border: 1px dashed #409eff;
}
.select-line-icon {
  line-height: 32px;
  font-size: 22px;
  padding: 0 4px;
  color: #777;
}
</style>