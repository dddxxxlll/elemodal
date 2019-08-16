<template>
<div class="Modal" v-if="dialogVisible">
    <div class="wsdModal" :style="{position: ModalType=='global'?'fixed':'absolute',zIndex:1999+zIndex}"></div>
    <el-container v-bind:id="id"
        :style="{width: Width+'px',height: Height+'px',zIndex:2000+zIndex}">
        <el-header>
        <div @mousedown="mousedown">
            <h2 style="margin:0;">
                <slot name="header">
                    提示
                </slot>
            </h2>
            <div style="position: absolute;top: 0px; right: 20px;">
                <i class="el-message-box__close el-icon-close" @click="closedialog"></i>
            </div>
        </div>
        </el-header>
        <el-main>
            <slot name="body"></slot>
        </el-main>
        <el-footer>
            <slot name="footer"></slot>
        </el-footer>
    </el-container>
</div>
</template>

<script>
  export default {
    name: 'Modal',
    props: {
        id: {
            type: String,
            default: "Modal"
        },
        Width: {
            type: Number,
            default: 500,
        },
        Height: {
            type: Number,
            default: 500,
        },
        ModalType: {
            type: String,
            default: "global"
        },
        dialogVisible: {
            type: Boolean,
            default: false,
        },
        zIndex: {
            type: Number,
            default: 0
        }
    },
    data() {
      return {
        title: '标题',
        selectElement: '',
        
      }
    },
    computed: {

    },
    methods: {
      mousedown(event) {
        this.selectElement = document.getElementById(this.id)
        var div1 = this.selectElement
        this.selectElement.style.cursor = 'move'
        this.isDowm = true
        var distanceX = event.clientX - this.selectElement.offsetLeft
        var distanceY = event.clientY - this.selectElement.offsetTop
        document.onmousemove = function (ev) {
          var oevent = ev || event
          div1.style.left = oevent.clientX - distanceX + 'px'
          div1.style.top = oevent.clientY - distanceY + 'px'
        }
        document.onmouseup = function () {
          document.onmousemove = null
          document.onmouseup = null
          div1.style.cursor = 'default'
        }
      },
      closedialog() {
          this.$emit("closedialog");
      }
    }
  }
</script>

<style scoped>
  .el-container {
    position: fixed;
    border: 1px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 2px;
    background-color: #FFFFFF;
    z-index: 2000;
    opacity: 1.5;
  }
  .wsdModal{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #000;
    opacity: 0.5;
    z-index: 1999;
  }

  .dialog-footer {
    text-align: right;
  }

  .el-main {
    background-color: white;
  }

  .el-footer {
    background-color: white;
    text-align: right;
  }

  .el-header {
    background-color: white;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
  .el-icon-close{
    cursor: pointer;
  }
</style>