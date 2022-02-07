
<template>
  <div class="h100 f-arrayX ptb20">
    <div class="leftMenu-wrap plr10">
      <div v-for="(site, key) in $luoShu.lsLeftMenu" :key="key" class="ptb10">
        <p>{{ key }}</p>
        <draggable
          v-model="$luoShu.lsLeftMenu[key]"
          :clone="cloneComponent"
          :group="{ name: 'drag', pull: 'clone', put: false }"
          :sort="false"
          animation="300"
          dragClass="dragClass"
          ghostClass="ghostClass"
          chosenClass="chosenClass"
          @start="onStart"
          @end="onEnd"
        >
          <label v-for="(item, i) in site" :key="'menuButton' + i">
            <el-button class="menuButton" type="primary" size="mini" plain>{{
              item.label
            }}</el-button>
            <componentWrap
              :config="item"
              v-show="false"
              class="components"
              state="edit"
            ></componentWrap>
          </label>
        </draggable>
      </div>
    </div>

    <div class="f-space h100 f-arrayY plr10">
      <draggable
        v-model="$lsStore.state.arr2"
        group="drag"
        animation="300"
        dragClass="dragClass"
        ghostClass="ghostClass"
        chosenClass="chosenClass"
        class="f-space test"
        @start="onStart"
      >
        <!-- <transition-group> -->
        <componentWrap
          :class="item.component"
          :selectTrue="$lsStore.state.selectIndex === i"
          v-for="(item, i) in $lsStore.state.arr2"
          :key="'Component' + i"
          :config="item"
          :index="i"
          :parent="$lsStore.state.arr2"
          state="edit"
        ></componentWrap>
        <!-- </transition-group> -->
      </draggable>
      <el-button @click="updateModel" type="primary">模板保存</el-button>
    </div>

    <setComponentConfig class="h100" style="width: 350px"></setComponentConfig>
  </div>
</template>
<script>
import setComponentConfig from "./test/setComponentConfig.vue";
import draggable from "vuedraggable";
export default {
  name: "lsEfrom",
  components: {
    setComponentConfig,
    draggable,
  },
  props: {
    formData: {
      type:Array,
      default:()=>{
        return []
      }
    },
  },
  data() {
    return {
      selectItem: {},
      selectIndex: null,
      drag: false,
      dataValue: Date.parse(new Date()),

    };
  },
  computed: {
  },
  async created() {
    await this.getTableData();
  },
  async mounted() {
  },
  methods: {
    updateModel(){
      this.$emit("updateModel",this.$lsStore.state.arr2)
    },
    onStart(e) {
      if (e.item.className.indexOf("customFrom") != -1) {
        this.$lsStore.state.noDrag = true;
      }
    },
    async onEnd() {
      this.$lsStore.state.noDrag = false;
    },
    async getTableData() {
    },
    cloneComponent(row) {
      //禁止子表单嵌套子表单
      if (row.component == "customFrom") {
        this.$lsStore.state.noDrag = true;
      }
      let obj = JSON.parse(JSON.stringify(row));
      obj.expand.show = true;
      obj.formItemId = "buy"+Math.random().toString(36).slice(4);
      obj.defaultValue = obj.defaultValue;
      if (obj.expand.selectOptions) {
        for (let item of obj.expand.selectOptions) {
          item.id = Math.random().toString(36).slice(2);
        }
      }
      this.selectItem = obj;
      return obj;
    },
  },
  watch: {
    formData:{
      immediate:true,
      handler(newV){
        this.$lsStore.state.arr2 = newV
      }
    },
    "$lsStore.state.arr2"(newV){
      this.$emit("update:formData",newV)
    }
  },
};
</script>
<style lang='scss' scoped>
::v-deep .el-radio,
::v-deep .el-checkbox {
  display: block;
  min-height: 23px;
  line-height: 23px;
}

.leftMenu-wrap {
  width: 240px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  .menuButton {
    width: calc(50% - 15px) !important;
    margin-left: 10px !important;
    margin-right: 0px !important;
  }
}
::v-deep .el-button {
  margin-left: 0px !important;
  margin-right: 10px !important;
  margin-top: 10px !important;
}
.test {
  overflow: auto;
  .menuButton {
    display: none;
  }
  .components {
    display: block !important;
  }
}
.notComponents {
  position: absolute;
  top: 0;
}
</style>