# ThumbPlayer-Miniprogram 腾讯视频小程序播放器SDK

适用于手Q和微信小程序的播放器**插件**，开箱即用无需配置。**仅支持播放腾讯视频已上架的资源**。  
## 旧版本文档
[1.x版本文档](https://github.com/tvfe/txv-miniprogram-plugin/blob/master/archieve/readme.md)
## 使用

有关插件的使用请参考微信[官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/using.html)。

如果你希望在小程序中使用腾讯视频的播放器插件，请先在插件商店中找到并申请。

申请通过后，可以这样引入播放器组件和js接口。
```json
// app.json
{
   "plugins": {
      "player": {
         "version": "2.0.0",
         "provider": "wxa75efa648b60994b"
      }
  },
}
// page index.json
{
   //...你的其他页面配置
   "usingComponents": {
      "player-component": "plugin://player/video",
   }
}
```
```html
<!-- index.wxml -->
<view>
   <player-component vid="{{你想要播放的vid}}"/>
</view>
```
```js
// index.js
const store = requirePlugin('player')
```
## 1.x版本和2.0版本的区别

[2.0迁移指南](https://github.com/tvfe/txv-miniprogram-plugin/blob/master/public/transition.md)

由于1.x版本诞生于小程序的早期，为了实现部分功能不得不使用了一些hack逻辑且文档上比较缺失。所以播放器插件在2.0版本进行了一次彻底的重构，完全替换为`typescript`，提供完整的类型支持和接口文档。同时也提供了定制的ui、支持外部自定义组件扩展、多video标签预加载、更规范和详细的事件等改进。如果你有希望加入的功能或迁移中遇到了困难，欢迎向我们提issue！

为了方便已有用户的接入，我们也提供了适配层。在开启适配层的情况下**绝大部分**接口调用及事件监听将和1.x版本保持一致，而对于不兼容的部分我们也提供解决方案，详见[迁移文档](https://github.com/tvfe/txv-miniprogram-plugin/tree/master/public/typedoc)。同时，适配层也和新版本的接口及事件兼容，在保证使用的前提下你也可以体验2.0版本带来的新接口，新事件。

> 2.1版本后将不再进行针对适配层接口和事件的bug修复及功能补全，请尽快迁移到新版本的接口和事件上。

## API文档

完整api和类型声明请参考[typedoc](https://github.com/tvfe/txv-miniprogram-plugin/tree/master/public/typedoc)
### 常用api
下面是一些你经常会用到的api。
#### 获取播放器实例
``` js
const store = requirePlugin('player')
// index.wxml 中 <video id="tvp-id" playerId="tvp">
const player = store.get('tvp');
// 或
const player = this.selectComponent('#tvp-id');
```
> 这两个方法获取到的实例是相同的

#### 打开/关闭调试日志
``` js
store.openLog();
store.closeLog();
```
### player

#### 播放
``` js
const player = store.get('player')
player.play() // 调用小程序videoContext.play()
player.play('想播放的vid') // 播放指定vid
player.play('想播放的vid', { startTime: 5 }) // 指定起播的时间
```

#### 跳转/暂停/停止
``` js
const player = store.get('player')
player.pause(); // 暂停，同videoContext.pause()
player.stop(); // 停止，同videoContext.stop()
player.seek(5); // 跳转，同videoContext.seek()
```
> `stop()`方法会事实上停止播放流程并清空播放列表，调用后无法使用`play()`接口重新开播。如果希望重新播放请调用`replay()`接口

#### 重播
``` js
const player = store.get('player')
player.replay();
```

#### 设定清晰度
``` js
const player = store.get('player')
player.setLevel('fhd')
player.setLevel('fhd').catch(error => {
  // error处理
})
```
> 如果切换失败的话可以通过catch捕获异常，播放器会自动续播当前内容。


### 播放器支持的video标签属性
```ts
  /**
   * 指定视频初始播放位置
   */
  initialTime: {
    type: NumberConstructor,
    value: number, // 0
  }
  /**
     * 是否使用ui，这里是设置总体UI开关。
     */
  controls: {
    type: BooleanConstructor,
    value: boolean, // true
  },
  /**
     * 是否静音播放
     */
  muted: {
    type: BooleanConstructor,
    value: boolean, // false
  },
  /**
     * 设置全屏时视频的方向，不指定则根据宽高比自动判断
     */
  direction: {
    type: NumberConstructor,
    value: number, // -1
  },
  /**
     * 屏幕锁
     */
  showScreenLockButton: {
    type: BooleanConstructor,
    value: boolean, // false
  }
  /**
     * 当视频大小与 video 容器大小不一致时，视频的表现形式
     */
  objectFit: {
    type: StringConstructor,
    value: string, // 'contain'
  },
  /**
     * 是否开启播放手势，即双击切换播放/暂停
     */
  enablePlayGesture: {
    type: BooleanConstructor,
    value: boolean, // false
  },
  /**
     * 当跳转到本小程序的其他页面时，是否自动暂停本页面的视频播放
     */
  autoPauseIfNavigate: {
    type: BooleanConstructor,
    value: boolean, // true
  },
  /**
     * 当跳转到其它微信原生页面时，是否自动暂停本页面的视频
     */
  autoPauseIfOpenNative: {
    type: BooleanConstructor,
    value: boolean, // true
  },
  /**
     * 是否开启手机横屏时自动全屏，当系统设置开启自动旋转时生效
     */
  enableAutoRotation: {
    type: BooleanConstructor,
    value: boolean, // false
  },
  /**
     * 是否开启投屏
     */
  showCastingButton: {
    type: BooleanConstructor,
    value: boolean, // false
  },
  /**
     * 非全屏模式下音量/亮度手势
     */
  vslideGesture: {
    type: BooleanConstructor,
    value: boolean, // false
  },
  /** 全屏下模式下音量/亮度手势 */
  vslideGestureInFullscreen: {
    type: BooleanConstructor,
    value: boolean, // true
  },
  /**
     * 是否使用进度条手势
     */
  enableProgressGesture: {
    type: BooleanConstructor,
    value: boolean, // true
  },
  /**
   * 是否自动播放
   */
  autoplay: {
    type: BooleanConstructor,
    value: boolean, // true
  },
  /** 是否显示进度条 */
  showProgress: {
    type: BooleanConstructor,
    value: boolean, // true
  },
  ```

## 常见问题及说明

1. 组件层级（z-index）
   1. 正在播放的video标签`z-index: 1`
   2. 用于预加载的后台video标签`z-index: 0`
   3. 唤起控制栏/手势操作的捕获层`z-index: 3`
   4. 错误页`z-index: 10`
   5. 左上角返回按钮`z-index: 2`
   6. 上方toast区域`z-index: 1`