<!--
 * @Descripttion: 
 * @version: 
 * @Author: LiuXuFei
 * @Date: 2021-11-03 15:11:56
 * @LastEditors: LiuXuFei
 * @LastEditTime: 2022-01-24 16:28:23
-->
<template>
  <el-row v-if="config.expand.show || state == 'edit'">
    <el-col
      :span="config.expand.span || 24"
      :class="[
        state == 'edit' ? 'componentWrap' : 'mt10',
        selectTrue && state == 'edit' ? 'selectComponent' : '',
      ]"
      style="position: relative"
      :style="config.expand.style"
      @click.native.stop="selectItem"
    >
      <div
        v-if="state == 'edit'"
        class="componentFun f-baseX"
        :class="selectTrue ? '' : 'isHidden'"
      >
        <div class="f-space"></div>
        <el-button
          icon="el-icon-delete"
          circle
          @click.native.stop="deleteItem"
        ></el-button>
      </div>

      <label class="mt10 mr8" v-if="config.expand.required" style="color: red"
        >*</label
      >
      <label class="size14 fw600" v-show="!config.expand.textHidden">{{
        config.label
      }}</label>
      <div class="f-arrayX">
        <div
          class="mt10"
          :is="config.component"
          :config="config"
          :index="index"
          :state="state"
        ></div>
      </div>
    </el-col>
  </el-row>
</template>
<script>
import { Row, Col,Button } from 'element-ui';
export default {
  name: "componentWrap",
  components: {
    elRow:Row,
    elCol:Col,
    elButton:Button
  },
  props: {
    state: null,
    parent: null,
    index: null,
    selectTrue: {
      type: Boolean,
      default: false,
    },
    config: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    //点击选中当前组件
    selectItem() {
      this.$lsStore.state.selectItemParent = this.parent;
      this.$lsStore.state.selectItem = this.config;
      this.$lsStore.state.selectIndex = this.index;
    },
    deleteItem() {
      let index = this.parent.indexOf(this.config);
      this.parent.splice(index, 1);
      this.$lsStore.state.selectItem = {
        expand: {},
      };
      this.$lsStore.state.selectIndex = "";
    },
  },
  watch: {
    "$lsStore.state.arr2": {
      deep: true,
      handler(newV) {
        if (
          this.$lsStore.state.selectItem?.component != "customSelect" ||
          this.$lsStore.state.selectItem.formItemId !=
            this.config.expand.selectBoxId
        ) {
          return;
        }

        if (!this.config.expand.showId) {
          this.config.expand.show = true;
          return;
        }
        let index =
          this.$lsStore.state.selectItem.expand.selectOptions.findIndex(
            (item) => {
              return (
                this.$lsStore.state.selectItem.expand.defaultValue == item.value
              );
            }
          );
        this.config.expand.show =
          this.$lsStore.state.selectItem.expand?.selectOptions[index]?.id ==
          this.config.expand.showId;
      },
    },
  },
};
</script>
<style lang='scss' scoped>
.componentWrap {
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  margin-top: 25px;
  padding: 20px 10px 20px 10px;
}
.selectComponent {
  background-color: #ecf5ff;
}
.componentFun {
  position: absolute;
  // transform: translateY(-50%);
  top: -30px;
  right: 30px;
}
.isHidden {
  opacity: 0;
  pointer-events: none;
  cursor: default;
}
</style>