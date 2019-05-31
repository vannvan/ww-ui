<style>
.demo-modal{
  margin-top: 10px;
}

</style>
<script>
 export default {
    data(){
      return{
        showModal:false,
        showModal1:false
      }
    },
    methods: {
      hello() {
        alert('Hello World!');
      },
      clickOk(){
        alert('clicked Ok')
      },

      showConfim(type){
        const title = 'Title';
        const content = '<p>Content of dialog</p><p>Content of dialog</p>';
        switch (type) {
            case 'info':
                this.$Modal.info({
                    title: title,
                    content: content
                });
                break;
            case 'success':
                this.$Modal.success({
                    title: title,
                    content: content
                });
                break;
            case 'warning':
                this.$Modal.warning({
                    title: title,
                    content: content
                });
                break;
            case 'error':
                this.$Modal.error({
                    title: title,
                    content: content
                });
                break;
            case 'confirm':
            this.$Modal.confirm({
                title:'警告',
                content: '数据删除后不可恢复',
                okText:'保存',
                onOk: () => {
                   this.$Message({content:'你点了保存'})
                },
                onCancel: () => {
                   this.$Message({type:'error',content:'你点了取消'})
                }
            });
        }
      }
    }
  }
</script>
# Modal 对话框
----
用于页面中展示重要的提示信息。

### 基本用法
页面中的非浮层元素，不会自动消失。
<div class="dome-modal demo-block">
  <w-button @click="showModal=!showModal">显示弹框</w-button>
  <w-button @click="showModal1=!showModal1">自由定制内容</w-button>

  <W-Modal v-model="showModal"
  title="提示"
  @on-ok="clickOk">
    <p>啦啦啦啦</p>
    <p>对p标签默认居中</p>
  </W-Modal>

  <W-Modal v-model="showModal1"
  title="可关闭的弹出层"
  width="800"
  :closable=true
  :footer-hide=true
  @on-ok="clickOk">
    <div style="height:300px;">
      <h1>制定你想显示的内容</h1>
    </div>
  </W-Modal>
</div>

::: demo
```html

<div>
  <w-button @click="showModal=!showModal">显示弹框</w-button>
  <w-button @click="showModal1=!showModal1">自由定制内容</w-button>

  <W-Modal v-model="showModal"
  title="提示"
  @on-ok="clickOk">
    <p>啦啦啦啦</p>
    <p>对p标签默认居中</p>
  </W-Modal>

  <W-Modal v-model="showModal1"
  title="我是自定义内容"
  width="800"
  closable=true
  :footer-hide=true
  @on-ok="clickOk">
    <div style="height:300px;">
      <h1>制定你想显示的内容</h1>
    </div>
  </W-Modal>
</div>
```
:::

### 通过以下形式进行调用
  ``` js
  this.$Modal.info(config)
  this.$Modal.success(config)
  this.$Modal.warning(config)
  this.$Modal.error(config)
  this.$Modal.confirm(config)
  ```
<div class="dome-modal demo-block">
  <w-button type="primary" @click="showConfim('info')">info</w-button>
  <w-button type="success" @click="showConfim('success')">success</w-button>
  <w-button type="warning" @click="showConfim('warning')">warning</w-button>
  <w-button type="danger" @click="showConfim('error')">error</w-button>
  <w-button type="info" @click="showConfim('confirm')">confirm</w-button>
</div>

::: demo
```html

<div>
  <w-button @click="showConfim()">显示弹框</w-button>
</div>
<script>
export{
  methods: {
    showConfim(){
      this.$Modal.confirm({
          title:'警告',
          content: '数据删除后不可恢复',
          width:'300',
          onOk: () => {
             console.log('点击了ok')
          },
          onCancel: () => {
            return
          }
      });
    }
  }
}

</script>

```
:::


### Attributes
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|title      |	标题，必选参数。也可通过默认 slot 传入 |	string   |	—           |	—       |
|type	      | 主题                                |	string    |	success/warning/info/error|	info |
|description |	辅助性文字                         |	string    |	—             |	—      |
|closable   |	是否可关闭                           |	boolean   |	—	            | true   |
|center     |	文字是否居中                         |	boolean  |	—            |	true  |
|close-text	| 关闭按钮自定义文本                    |	string   |	—            |	—     |
|show-icon  |	是否显示图标                         |	boolean  	| —             |	false  |

### Event
| 事件名称      | 说明       | 回调参数   |
|------------- |----------- |---------  |
|close         |关闭alert时触发的事件| —  |
