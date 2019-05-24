<style>
.demo-notice{
  margin-top: 10px;
}

</style>
<script>
 export default {
    methods:{
      showNotice(type){
        switch(type){
          case 'base':
          this.$Notice({content:'这是一条没有标题也没有icon的通知'})
          break;
        }
      },
      showNotice2(type){
        switch(type){
          case 'info':
            this.$Notice.info('这是一条有icon的info通知')
          break;
          case 'warning':
            this.$Notice.warning('这是一条有icon的warning通知')
          break;
          case 'success':
            this.$Notice.success('这是一条有icon的success通知')
          break;
          case 'error':
            this.$Notice.error('这是一条有icon的error通知')
          break;

        }
      },
      showNotice3(){
        this.$Notice.warning({
          title:'警告',
          content:'这是一条警告这是一条警告这是一条警告这是一条警告这是一条警告'
        })
      },
      showNotice4(){
        this.$Notice.error({
          title:'提示',
          content:'这是一条没有关闭按钮的消息',
          closable:false
        })
      }
    }
 }
</script>


# Notice 全局通知
----

### 基本用法

### 通过以下形式进行调用

```js
  this.$Notice(config)
  this.$Notile.info({config})
  this.$Notile.success({config})
  this.$Notile.warning({config})
  this.$Notile.error({config})
```

### this.$Notice(config)形式

<div class="dome-notice demo-block">
  <w-button  @click="showNotice('base')">显示info</w-button>
</div>

::: demo
```html  

<script>
 export default {
    methods:{
      showNotice(type){
        switch(type){
          case 'base':
          this.$Notice({content:'这是一条没有标题也没有icon的通知'})
          break;
        }
      }
    }
 }
</script>

```
:::

### this.$Notile.xxx(config)形式

<div class="dome-notice demo-block">
  <w-button type="info"  @click="showNotice2('info')">显示info</w-button>
  <w-button type="warning"  @click="showNotice2('warning')">显示warning</w-button>
  <w-button type="success" @click="showNotice2('success')">显示success</w-button>
  <w-button type="danger"  @click="showNotice2('error')">显示error</w-button>
  <w-button type="danger"  @click="showNotice3()">显示error有标题</w-button>
  <w-button type="warning"  @click="showNotice4()">不可关闭</w-button>
</div>
