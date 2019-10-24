# abc



## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org




## 安装模板渲染
* yarn add egg-view-ejs --save-dev

## 连接mongodb
* 安装跨域设置 `yarn add egg-cors --save-dev`
* [egg+mongodb 配置](https://www.jianshu.com/p/44afea9b4607)
* 安装mongodb `yarn add egg-mongoose --save-dev`


## 安装mysql
* yarn add egg-mysql -S 暂时没用

## 插件
* yarn add egg-validate -S 验证
* [egg-validate](http://www.mamicode.com/info-detail-2719633.html)
* [egg-validate添加规则](http://www.mamicode.com/info-detail-2719633.html)
* yarn add egg-bizerror -S 业务错误处理封装成插件

* [史上最强egg框架的error处理机制](https://blog.csdn.net/qq_33589252/article/details/84350064)
*  D:\Program Files\mongodb\bin>mongod -dbpath "D:\Program Files\mongodb\data\db" 启动mongodb服务
* [Egg项目做请求字段验证-egg-validate-plus](https://blog.csdn.net/roamingcode/article/details/87815602)