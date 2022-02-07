<!--
 * @Descripttion: 
 * @version: 
 * @Author: LiuXuFei
 * @Date: 2021-04-06 15:00:04
 * @LastEditors: LiuXuFei
 * @LastEditTime: 2022-01-21 16:19:57
-->
<template>
  <!-- multipleTable -->
  <el-table
    :default-sort="{ prop: 'date', order: 'descending' }"
    v-loading="$lsStore.state.isLoading"
    ref="myTable"
    :data="tableData"
    tooltip-effect="dark"
    height="0"
    :border="border"
    @row-click="rowClick"
    @row-dblclick="rowDblclick"
    @selection-change="handleSelectionChange"
  >
    <el-table-column v-if="isMultiple" type="selection" width="55">
    </el-table-column>
    <template v-for="(site, i) in guide">
      <el-table-column
      :label="site.label"
      :width="site.width || 'auto'"
      :min-width="site.minWidth || minWidth"
      :align="site.align || 'center'"
      :prop="site.key"
      :sortable="site.sortable"
      :fixed="site.fixed"
      v-if="!site.hidden"
      :key="i"
      show-overflow-tooltip 
    >
      <template slot-scope="scope">
        <div class="cursor ellipsis">
          <slot :name="site.label" :row="scope.row" :$index="scope.$index">
            <label class="cursor">{{
              scope.row[site.key] === 0?"0":scope.row[site.key] || "--"
            }}</label></slot
          >
        </div>
      </template>
    </el-table-column>
    </template>
    
  </el-table>
</template>
<script>
export default {
  name: "",
  components: {},
  props: {
    minWidth: null,
    isMultiple: {
      type: Boolean,
      default: true,
    },
    border: {
      type: Boolean,
      default: false,
    },
    tableData: {
      type: null,
      default: () => {
        return [];
      },
    },
    guide: {
      type: null,
      default: () => {
        return [];
      },
    },
    multipleSelection: {
      type: null,
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
  methods: {
    handleSelectionChange(val) {
      // this.multipleSelection = val;
      this.$emit("update:multipleSelection", val);
    },
    rowClick(val) {
      this.$emit("rowClick", val);
    },
    rowDblclick(val) {
      this.$emit("row-dblclick", val);
    },
  },
  watch: {},
};
</script>
<style lang='scss' scoped>
.el-table::before {
    content: "";
    position: absolute;
    background-color: rgba(0,0,0,0); 
    z-index: 1;
}
::v-deep .el-table__fixed-right::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0);
    z-index: 4;
}
</style>