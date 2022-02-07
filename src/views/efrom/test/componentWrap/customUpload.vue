<!--
 * @Descripttion: 
 * @version: 
 * @Author: LiuXuFei
 * @Date: 2021-11-09 15:00:52
 * @LastEditors: LiuXuFei
 * @LastEditTime: 2022-01-24 16:58:12
-->
<template>
  <el-upload
    class="upload-demo"
    :action="config.expand.uploadUrl"
    :multiple="config.expand.multiple"
    :accept="config.expand.accept"
    :limit="config.expand.limit"
    :on-exceed="handleExceed"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :on-success="handleSuccess"
    :file-list="config.expand.fileList"
    :class="config.expand.err"
  >
    <el-button size="small" type="primary">{{
      config.expand.buttonText
    }}</el-button>
    <div slot="tip" class="el-upload__tip" v-if="config.expand.showTip">
      只能上传不超过 {{ config.expand.fileSize
      }}{{ config.expand.sizeUnit }} 的{{ config.expand.accept }}文件,最多不超过
      {{ config.expand.limit }} 个文件
    </div>
  </el-upload>
</template>
<script>
export default {
  name: "customUpload",
  props: {
    config: null,
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 ${this.config.expand.defaultValue.limit} 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
      let url = file.response.data;
      let newArr = this.config.expand.defaultValue.filter((item) => {
        return item.url != url;
      });
      this.config.expand.defaultValue = newArr;
    },
    handlePreview(file) {
      console.log(file, 1);
    },
    handleSuccess(file, fileList) {
      this.config.expand.defaultValue.push({
        name: fileList.name,
        url: fileList.response.data,
      });

    },
  },
  watch: {},
};
</script>
<style lang='scss' scoped>
</style>