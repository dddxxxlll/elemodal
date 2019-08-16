<template>
  <div id="app">
    <el-button class="m_add" type="primary" icon="el-icon-circle-plus-outline" @click="opendialog">打开弹出框</el-button>
    <Modal 
      :id="'123'"
      :dialogVisible="dialogVisible"
      :Width="600"
      :Height="600"
      :ModalType="'global'"
      :zIndex="0"
      @closedialog="dialogVisible=false"
    >
      <slot slot="header">
        标题
      </slot>
      <slot slot="body">
        <!-- 这里可以放html代码 -->
        <div style="line-height:40px;">
          内容
        </div>
      </slot>
      <slot slot="footer">
        <span class="dialog-footer">
          <el-button @click="dialogVisible=false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible=false">确 定</el-button>
        </span>
      </slot>
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      dialogVisible: false,
    }
  },
  methods: {
    opendialog() {
      // 打开弹出框
      this.dialogVisible = true;
    },
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
