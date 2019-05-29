<script>
import iconList from '@/assets/js/icon.json'
 export default {
    data(){
      return{
        iconList:iconList
      }
    },
    computed:{
      RandomColor() {
        return function(){
          let r, g, b;
          r = Math.floor(Math.random() * 256);
          g = Math.floor(Math.random() * 256);
          b = Math.floor(Math.random() * 256);
          return "rgb(" +r + ',' +g+ ',' +b+ ")";
        }
      }
    }
 }
</script>
<style lang="scss">
.demo-icon{
  margin-top:10px;
  i{
    margin-right:15px
  }
}
.iconBox{
  width: 100%;
  height: auto;
  margin: 0 auto;
  .iconItem{
    height: 64px;
    width: 120px;
    padding: 10px;
    margin:5px;
    float: left;
    i{
      font-size: 24px;
    }
    p{
      font-size: 10px;
    }
  }
}
</style>
# w-icon图标
----
### 基础用法
使用```type```、```size```和```color```属性来定义 Icon 的样式。
### 其中type有三个便捷的尺寸定义参数```s(表示small)```、```m(表示middle)```、```l(表示large)```。
### 代码示例
```
<w-icon size='s' type="icon-close"></w-icon>  小
<w-icon size='m' type="icon-close"></w-icon>  中
<w-icon size='l' type="icon-close"></w-icon>  大
```

<div class="demo-block demo-icon">
  <div>
    <w-icon size='s' type="icon-close"></w-icon>
    <w-icon size='m' type="icon-close"></w-icon>
    <w-icon size='l' type="icon-close"></w-icon>
    <w-icon size=16 type="icon-close"></w-icon>
    <w-icon size="18" type="icon-close"></w-icon>
    <w-icon size="24" type="icon-camera2"></w-icon>
  </div>
</div>

::: demo
```html

<div>
  <w-icon size='s' type="icon-close"></w-icon>
  <w-icon size='m' type="icon-close"></w-icon>
  <w-icon size='l' type="icon-close"></w-icon>
  <w-icon size=16 type="icon-close"></w-icon>
  <w-icon size="18" type="icon-close"></w-icon>
  <w-icon size="24" type="icon-camera2"></w-icon>
</div>

```
:::

### Attributes
| 参数      | 说明    | 类型      | 默认值   |
|---------- |-------- |----------|-------- |
| size     | 尺寸   | String,number  |       —     |
| type     | 类型   | String   |     —    |
| color     | 颜色   | String    | — | -   |

### All icons

<div class="iconBox">
  <div class="iconItem" v-for="(item, index) in iconList">
    <i :class="item" :style="{color:RandomColor()}"></i>
    <p>{{item}}</p>
  </div>
</div>
