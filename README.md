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