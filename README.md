<p align="center">
  <a href="https://at.aotu.io/">
    <img width="200" src="https://raw.githubusercontent.com/vannvan/w-ui/master/src/assets/logo.png">
  </a>
</p>

![](https://badgen.net/npm/node/next)
![](https://img.shields.io/badge/Vue.js-=2.0-blue)
![](https://img.shields.io/badge/npm->=3.0-blue)

[演示地址](https://vannvan.github.io/ww-ui/dist/#/)

> `ww-ui`是一款基于vue.js  2.0的前端UI组件库，适用于PC网站中后台产品。  

![](https://p.ipic.vip/dav1qt.png)

## 关于

此组件库的主要目的是为了了解如何从0到1实现一个组件库，虽然目前仅实现了8个组件，但其实已基本覆盖了开发一个`Vue.js`通用型组件的常用技巧和方法，通过自己造轮子以切身感受市面上主流UI框架在设计时的考量(当然此组件库的考量还远远达不到)，但其实原理大相径庭。  

曾尝试作为企业内部通用组件开发的“架子”，因此可以在此基础之上去完善更多的能力。

相比很多UI组件库海量的代码去了解实现过程而言，此组件库更能让你在短时间掌握这一项能力，再去看主流组件库的详细设计就比较简单了。

希望能够帮助到你！

## 特性

- 组件思想较易理解
- 提供友好的API,使用灵活

## 开发

> npm i --force 由于开发比较早了有些包比较旧会提示不兼容
> npm start

`.npmrc`已注释，如有需要可开启`taobao`源

## 使用

``` js
import Wui from 'wwui' // 引入组件库
import 'wwui/dist/styles/wwui.css'; // 引入样式库
Vue.use(Wui)
```

## 最后

如果对你有帮助欢迎点个激励的⭐️
