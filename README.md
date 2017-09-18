1.npm init -y 初始化项目

#### 安装项目依赖

3、npm install --save vue 默认安装最新版vue

4、npm install --save-dev webpack webpack-dev-server 安装webpack，webpack-dev-server（是一个小型的Node.js Express服务器）

#### *拓展：
npm install 在安装 npm 包时，有两种命令参数可以把它们的信息写入 package.json 文件，
一个是npm install --save 另一个是 npm install --save-dev，
他们表面上的区别是--save 会把依赖包名称添加到 package.json 文件 dependencies 键下，
--save-dev 则添加到 package.json 文件 devDependencies 键下，
--save-dev 是你开发时候依赖的东西，--save 是你发布之后还依赖的东西。*

5、npm install --save-dev babel-core babel-loader babel-preset-es2015 安装babel，babel的作用是将es6的语法编译成浏览器认识的语法es5

6、npm install --save-dev vue-loader vue-template-compiler 用来解析vue的组件，.vue后缀的文件

7、npm install --save-dev css-loader style-loader 用来解析css

拓展：css-loader 和 style-loader，二者处理的任务不同，css-loader使你能够使用类似@import 和 url(…)的方法实现 
require()的功能,style-loader将所有的计算后的样式加入页面中，二者组合在一起使你能够把样式表嵌入webpack打包后的JS文件中。

8、npm install --save-dev url-loader file-loader 用于打包文件和图片

9、npm install --save-dev sass-loader node-sass 用于编译sass

10、npm install --save-dev vue-router 安装路由



---
##### 编辑项目目录以及添加代码

dist文件是后面执行webpack指令生产的，不用管；

webpack.config.js 配置文件，本身也是一个标准的Commonjs规范的模块；

routes.js文件放路由配置文件；

index.html首页入口文件

App.vue是项目入口文件。

main.js这是项目的核心文件。全局的配置都在这个文件里面配置。

commponents目录里面放了公共组件header文件。

views文件放详情页面；

views/views_children  子路由组件



##### 项目跑起来
```
# 安装
npm install 
# 执行
webpack-dev-server
```

浏览器打开生成的链接：如我这里是http://localhost:8080




在package.json里面配置一下运行的命令,npm支持自定义一些命令

```
"scripts": {
  "start": "webpack-dev-server --hot --inline"
},
```

则可以使用： npm start  ,在浏览器中输入http://localhost:8080 即可访问
