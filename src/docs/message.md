<style>
.demo-message{
  margin-top: 10px;
}

</style>
<script>
 export default {
    data(){
      return{
        showModal:false
      }
    },
    methods:{
      showMessage(type){
        switch(type){
          case 'info':
            this.$Message({content:'this is info'})
          break;
          case 'warning':
            this.$Message({type:'warning',content:'this is warning'})
          break;
          case 'error':
            this.$Message({type:'error',content:'this is error'})
          break;
          case 'success':
            this.$Message({type:'success',content:'this is success'})
          break;
          case 'closable':
            this.$Message({type:'info',content:'this is closable info',closable:true})
          break;
          case 'ten':
            this.$Message({type:'info',content:'this is ten minutes info',duration:10})
          break;
          case 'unauto':
            this.$Message({type:'info',content:'this is unauto close info',duration:0})
          break;
          case 'closeTxt':
            this.$Message({type:'info',content:'this is custom closeTxt info',closeTxt:'朕知道了',duration:10})
          break;
        }
      }
    }
 }
</script>

# Message 全局提示
----

### 基本用法

### 通过以下形式进行调用
  ``` js
  this.$Message(config)
  ```
  页面中的非浮层元素，不会自动消失。
  <div class="dome-message demo-block">
    <w-button type="info" @click="showMessage('info')">显示info</w-button>
    <w-button type="warning" @click="showMessage('warning')">显示warning</w-button>
    <w-button type="danger" @click="showMessage('error')">显示error</w-button>
    <w-button type="success" @click="showMessage('success')">显示success</w-button>
    <w-button  @click="showMessage('closable')">可关闭</w-button>
    <w-button  @click="showMessage('ten')">显示10秒</w-button>
    <w-button  @click="showMessage('unauto')">不自动关闭</w-button>
    <w-button  @click="showMessage('closeTxt')">自定义关闭文字</w-button>
    <!-- <w-button  @click="showMessage('isLink')">支持链接</w-button> -->
  </div>

  ::: demo
  ```html  

  <div>
    <w-button type="info" @click="showMessage('info')">显示info</w-button>
    <w-button type="warning" @click="showMessage('warning')">显示warning</w-button>
    <w-button type="danger" @click="showMessage('error')">显示error</w-button>
    <w-button type="success" @click="showMessage('success')">显示success</w-button>
    <w-button  @click="showMessage('closable')">可关闭</w-button>
    <w-button  @click="showMessage('ten')">显示10秒</w-button>
    <w-button  @click="showMessage('unauto')">不自动关闭</w-button>
    <w-button  @click="showMessage('closeTxt')">自定义关闭文字</w-button>
  </div>
  <script>
   export default {
      methods:{
        showMessage(type){
          switch(type){
            case 'info':
              this.$Message({type:'info',content:'this is info'})
            break;
            case 'warning':
              this.$Message({type:'warning',content:'this is warning'})
            break;
            case 'error':
              this.$Message({type:'error',content:'this is error'})
            break;
            case 'success':
              this.$Message({type:'success',content:'this is success'})
            break;
            case 'closable':
              this.$Message({type:'info',content:'this is closable info',closable:true})
            break;
            case 'ten':
              this.$Message({type:'info',content:'this is ten minutes info',duration:10})
            break;
            case 'unauto':
              this.$Message({type:'info',content:'this is unauto close info',duration:0})
            break;
            break;
            case 'closeTxt':
              this.$Message({type:'info',content:'this is custom closeTxt info',closeTxt:'我知道了',duration:10})
            break;
          }
        }
      }
   }
  </script>


  ```
  :::

  ### Attributes
  | 参数      | 说明    | 类型      | 可选值       | 默认值   |
  |---------- |-------- |---------- |-------------  |-------- |
  | type     | 类型   | string    |   info,success,warning,error |     info    |
  | content     | 内容   | String    | — | --------   |
  | closable  | 是否可可关闭    | boolean   | —   | false   |
  | duration  | 显示时长 | Number   |  —  |  3(秒)  |
