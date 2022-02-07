<!--
 * @Descripttion: 
 * @version: 
 * @Author: LiuXuFei
 * @Date: 2021-11-03 15:11:56
 * @LastEditors: LiuXuFei
 * @LastEditTime: 2022-02-07 14:47:56
-->
<template>
  <div class="setComponentConfig plr20 ptb20">
    <p class="fw600 mb20">唯一ID：{{ $lsStore.state.selectItem.formItemId }}</p>

    <el-form
      ref="form"
      :model="$lsStore.state.selectItem"
      label-width="80px"
      :disabled="!$lsStore.state.selectItem"
    >
      <el-form-item label="显示条件" class="show">
        <div v-for="(site, i) in showList" :key="i">
          <p>{{ site.label }}</p>
          <el-select
            clearable
            :disabled="
              $lsStore.state.selectItem.expand.selectBoxId &&
              $lsStore.state.selectItem.expand.selectBoxId !== site.formItemId
                ? true
                : false
            "
            v-model="site.expand.selectValue"
            placeholder="请选择"
            @clear="clear"
          >
            <el-option
              v-for="item in site.expand.selectOptions"
              :key="item.value"
              :label="item.value"
              :value="item.value"
              @click.native="selectShow(site, item)"
            >
            </el-option>
          </el-select>
        </div>
      </el-form-item>
      <el-form-item label="style">
        <el-input
          v-model="style"
          type="textarea"
          placeholder="请输入内容"
        ></el-input>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="$lsStore.state.selectItem.label"></el-input>
      </el-form-item>
      <el-form-item label="表单栅格">
        <el-slider v-model="span" :max="24"> </el-slider>
      </el-form-item>
      <el-form-item label="隐藏标签">
        <el-switch
          v-model="textHidden"
          active-color="#409EFF"
          inactive-color="#EAECF0"
        >
        </el-switch>
      </el-form-item>
    </el-form>
    <div
      v-if="$lsStore.state.selectItem.component"
      :config="$lsStore.state.selectItem"
      :is="'set' + $lsStore.state.selectItem.component"
    ></div>
  </div>
</template>
<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      showList: [],
      style: "",
    };
  },
  computed: {},
  created() {
    this.getStyle();
    this.$set(this.$lsStore.state.selectItem, "expand", {});
  },
  computed: {
    span: {
      get() {
        return this.$lsStore.state.selectItem?.expand?.span || 0;
      },
      set(val) {
        if (this.$lsStore.state.selectItem?.expand) {
          this.$lsStore.state.selectItem.expand.span = val;
        }
      },
    },
    textHidden: {
      get() {
        return this.$lsStore.state.selectItem?.expand?.textHidden || 0;
      },
      set(val) {
        if (this.$lsStore.state.selectItem?.expand) {
          this.$lsStore.state.selectItem.expand.textHidden = val;
        }
      },
    },
  },
  mounted() {},
  methods: {
    //清除选项
    clear() {
      this.$set(this.$lsStore.state.selectItem.expand, "selectBoxId", "");
      this.$set(this.$lsStore.state.selectItem.expand, "showId", "");
      this.$set(this.$lsStore.state.selectItem.expand, "show", true);
    },
    //获取样式解析
    getStyle() {
      let istrue = this.$lsStore.state.selectItem.expand?.style;
      if (!istrue || JSON.stringify(istrue) == "{}") {
        this.style = "";
        return;
      }
      let str = "";
      for (let key in this.$lsStore.state.selectItem.expand.style) {
        str += `${key}:${this.$lsStore.state.selectItem.expand.style[key]};\n`;
      }
      this.style = str;
    },
    //选择选项
    selectShow(val, item) {
      this.$set(
        this.$lsStore.state.selectItem.expand,
        "selectBoxId",
        val.formItemId
      );
      this.$set(this.$lsStore.state.selectItem.expand, "showId", item.id);
      this.$set(this.$lsStore.state.selectItem.expand, "show", false);
    },
  },
  watch: {
    style(newV) {
      let arr = newV;
      arr = arr.replace(/[\r\n]/g, "");
      arr = arr.split(";");
      let obj = {};
      for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split(":");
        arr[i][0] ? (obj[arr[i][0]] = arr[i][1] || "") : "";
      }
      this.$lsStore.state.selectItem.expand.style = obj;
    },
    "$lsStore.state.selectIndex"() {
      this.getStyle();
      let index = this.$lsStore.state.selectItemParent.indexOf(
        this.$lsStore.state.selectItem
      );
      let arr = this.$lsStore.state.selectItemParent
        .slice(0, index)
        .filter((item) => {
          item.expand.selectValue = "";
          if (
            this.$lsStore.state.selectItem.expand.selectBoxId == item.formItemId
          ) {
            item.expand.selectOptions.some((site) => {
              if (this.$lsStore.state.selectItem.expand.showId == site.id) {
                item.expand.selectValue = site.value;
                return true;
              }
              return false;
            });
          }
          return item.component == "customSelect";
        });
      this.showList = JSON.parse(JSON.stringify(arr));
    },
  },
};
</script>
<style lang='scss' scoped>
::v-deep .el-input-number--small {
  line-height: 28px;
}
.setComponentConfig {
  overflow: auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.show {
  border-radius: 5px;
  border: 1px solid #dcdfe6;
  padding-bottom: 10px;
}
</style>