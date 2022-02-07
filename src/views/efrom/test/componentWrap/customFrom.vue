<!--
 * @Descripttion: 
 * @version: 
 * @Author: LiuXuFei
 * @Date: 2021-11-03 11:24:34
 * @LastEditors: LiuXuFei
 * @LastEditTime: 2022-01-24 16:55:40
-->
<template>
  <el-form class="f-arrayY w100 form" ref="form" label-width="80px">
    <draggable
      v-model="config.children"
      group="drag"
      animation="300"
      dragClass="dragClass"
      ghostClass="ghostClass"
      chosenClass="chosenClass"
      class="f-space test w100 plr10"
      
      :disabled="$lsStore.state.noDrag || state != 'edit'"
      :sort="state == 'edit'"
    >
      <transition-group>
        <div v-for="(item, i) in listDate" :key="'Component' + index + i">
          <componentWrap
            :selectTrue="$lsStore.state.selectIndex === '' + index + i"
            :config="item"
            :index="'' + index + i"
            :parent="config.children"
            :state="state"
          ></componentWrap>
          <el-divider
            class="mt20"
            v-if="(i + 1) % groupLength == 0 && i != listDate.length - 1"
          ></el-divider>
        </div>
      </transition-group>
    </draggable>

    <el-form-item label-width="10px">
      <div class="ptb20">
        <el-button type="primary" @click="add">添加项目</el-button>
        <el-button @click="deleteItem">删除</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>
<script>
import draggable from "vuedraggable";
export default {
  name: "customFrom",
  components: {
    draggable,
  },
  props: {
    state: null,
    config: null,
    index: null,
  },
  data() {
    return {
      groupLength: null,
    };
  },
  computed: {
    listDate() {
      return this.config.children.filter((item) => {
        if (this.state == "edit") {
          return !item.expand.copy;
        } else {
          return item.expand.copy;
        }
      });
    },
  },
  created() {
    this.getGroupLength();
  },
  mounted() {},
  methods: {
    getGroupLength() {
      let arr = JSON.parse(JSON.stringify(this.config.children)).filter(
        (item) => {
          return !item.expand.copy;
        }
      );
      this.groupLength ? "" : (this.groupLength = arr.length);
    },
    add() {
      if (this.state == "edit") return;
      let arr = JSON.parse(JSON.stringify(this.config.children)).filter(
        (item) => {
          return !item.expand.copy;
        }
      );
      let selectOptionsArr = arr
        .filter((item) => {
          return item.component == "customSelect";
        })
        .map((item) => {
          return item.formItemId;
        });
      this.groupLength ? "" : (this.groupLength = arr.length);
      let copyArr = [];
      for (let item of arr) {
        let index = selectOptionsArr.indexOf(item.expand.selectBoxId);
        if (index != -1) {
          item.expand.selectBoxId = copyArr[index].formItemId;
        }
        item.expand.copy = true;
        item.formItemId = "buy"+Math.random().toString(36).slice(2);
        if (item.component == "customSelect") {
          item.expand.selectOptions.map((site) => {
            // site.id = Math.random().toString(36).slice(2);
            return site;
          });
        }
        copyArr.push(item);
      }
      this.config.children.push(...arr);
    },
    deleteItem() {
      if (this.state == "edit") return;
      let arr = JSON.parse(JSON.stringify(this.config.children)).filter(
        (item) => {
          return !item.expand.copy;
        }
      );
      this.groupLength ? "" : (this.groupLength = arr.length);
      if (this.config.children.length > this.groupLength) {
        this.config.children.splice(
          this.config.children.length - this.groupLength,
          this.groupLength
        );
      } else {
        return;
      }
    },
  },
  watch: {},
};
</script>
<style lang='scss' scoped>
::v-deep .el-divider--horizontal {
  margin: 10px 0;
}
.mt20 {
  margin-top: 20px !important;
}
.test {
  height: 100%;
  border: 2px solid #ebebeb;
  padding-bottom: 20px;
  &:hover {
    box-shadow: 0 0 8px 0 rgb(232 237 250 / 60%),
      0 2px 4px 0 rgb(232 237 250 / 50%);
  }
  span {
    display: block;
    width: 100%;
    height: 100%;
  }
}
.form {
  min-height: 100px;
  height: auto;
  min-height: 150px;
}
</style>