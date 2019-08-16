# elemodal
## 简介
都9102年了，element-ui的模态框还是不能拖动。。。真的没有人有这种需求吗？？
既然没人做只好我做了。。。

## 安装
```
npm install elemodal --save
```

## 依赖
vue，element-ui

## 使用说明
**调用格式：**<br>
```
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
    弹出框：
  </slot>
  <slot slot="body">
    <!-- 这里可以放html代码 -->
  </slot>
  <slot slot="footer">
    <span class="dialog-footer">
      <el-button @click="dialogVisible=false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible=false">确 定</el-button>
    </span>
  </slot>
</Modal>
```
**参数说明：**<br>
id（可选）:为弹出框赋予辨识用的id,type为字符串，不赋值默认为"model"<br>
dialogVisible（必须）: 控制弹出框开关，布尔值，默认为false<br>
Width（可选）:宽度，数字，默认500<br>
Height（可选）:高度，数字，默认500<br>
ModalType（可选）:遮罩层类型，字符串，global为全屏遮罩，part为部分遮罩。默认为global。
如果要部分遮罩的话给父元素或者祖先元素加上css属性position:relative;<br>
zIndex（可选）:弹出框层级，数字，默认为0，越大层级越高<br>
closedialog（必填）:点击右上角关闭按钮的回调函数，函数或者js语句。需要在里边将dialogVisible设为false才能关闭模态框。<br>
slot标签下可以放html代码或者文字，header为标题，body为内容，footer为按钮<br><br>