<template>
  <div style="width: 100%">
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
      :before-upload="beforeUpload"
      :file-list="config.expand.fileList"
      :class="config.expand.err"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip" v-if="config.expand.showTip">
        注：上传.docx后缀文档时会同步成员签名到文档
      </div>
    </el-upload>
  </div>
</template>
<script>
export default {
  name: "customAttachment",
  props: {
    config: null,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 ${
          this.config.expand.defaultValue.limit
        } 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
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
    beforeUpload(file) {
      console.log(file);
      var testmsg = file.name.substring(file.name.lastIndexOf(".") + 1);
      const extension = testmsg === "doc";
      const extension2 = testmsg === "docx";
      if (!extension && !extension2) {
        this.$message({
          message: "上传文件只能是 doc、docx格式!",
          type: "warning",
        });
      }
      return extension || extension2;
    },
    handleSuccess(file, fileList) {
      this.config.expand.defaultValue.push({
        name: fileList.name,
        url: fileList.response.data,
      });
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

ul > li {
  display: flex;
  margin: 5px 0;
  border: 1px rgba(255, 255, 255, 0) solid;
  font-size: 13px;
  border-bottom: 1px dashed #3b6484;
}
ul > li > div {
  flex: 1;
  padding: 5px 0;
}
ul > li > div:last-child {
  text-align: right;
}

ul > li:hover {
  border: 1px dashed #3b6484;
  background: #efefef;
}

li > div > p {
  margin: 0;
  padding-left: 10px;
  font-size: 14px;
}
.my-button {
  color: #747474;
  margin: 0 5px;
}

ul > li > div > span:hover {
  color: #1994e7;
}
</style>
