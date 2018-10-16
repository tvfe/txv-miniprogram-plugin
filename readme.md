# 腾讯视频小程序播放插件

只需要一个vid！！把视频上传到腾讯视频之后得到vid！！就可以在自己的小程序上播放视频了！！流畅到爆！！
```
// 在你们的wxml上这样插入视频元素
<tx-video vid="e0354z3cqjp"></tx-video>
```

本github仓库就是一个示例项目

## 接入方式

### 申请使用插件 appid:wxa75efa648b60994b
首先，参见微信官方的[插件使用文档](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/plugin/using.html)申请插件权限，在申请使用插件的使用时，填写以下appid:`wxa75efa648b60994b`

### 引入插件代码
参见[官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/using.html)与[示例项目](https://github.com/tvfe/txv-miniprogram-plugin)，尽量使用最新版本插件，如有问题，可在开发社区下查找或者到github提交[issues](https://github.com/tvfe/txv-miniprogram-plugin/issues)

### 使用播放器组件
wxml
```
<txv-video 
  vid="e0354z3cqjp"   // 可使用vid="{{vid}}"的方式应用data变量
  playerid="txv1" 
  autoplay="{{true}}" // 是否自动播放
></txv-video>
```
```
// 支持slot，用于在video上显示UI
<txv-video 
  vid="e0354z3cqjp"   // 可使用vid="{{vid}}"的方式应用data变量
  playerid="txv1" 
  width="{{100%}}"    //自定义宽度
  height="{{'auto'}}" // 自定义高度
  autoplay="{{true}}"> // 是否自动播放
  <cover-view class='txv-video-slot'>video slot</cover-view>
</txv-video>
```
组件元素支持的属性（最新版本基本上小程序的video属性都支持）:
* `vid` 视频id
* `playerid` 播放器标识符,需全局唯一，用于获取Video Context，进而手动控制播放
* `width` 视频宽度
* `height` 视频高度
* `autoplay` 是否自动播放
* `poster` 视频海报，会根据视频vid拿一个默认值
* `direction` 视频全屏时方向
* `objectFit` 视频填充方式
* `controls` 视频播放控件
* `showCenterPlayBtn` 是否显示中间播放按钮

组件元素支持的事件（最新版本基本上小程序的video事件都支持）:
* `bindplay` 播放
* `bindpause` 暂停
* `bindended` 播放结束
* `bindfullscreenchange` 全屏
* `bindtimeupdate` 播放进度更新事件
* `binderror` 视频播放错误信息
* `bindstatechange` 播放状态变更事件，包含loading, ready, playing, end, error，回调函数接受两个参数newstate，oldstate


### 插件 js api
```
const TxvContext = requirePlugin("tencentvideo");

let txvContext = TxvContext.getTxvContext('txv1') // txv1即播放器组件的playerid值

txvContext.play();  // 播放
txvContext.pause(); // 暂停
txvContext.requestFullScreen(); // 进入全屏
txvContext.exitFullScreen();    // 退出全屏
txvContext.playbackRate(+e.currentTarget.dataset.rate); // 设置播放速率
txvContext.seek(time);  //快进到某个时间
```

### 最新版本功能
1. 全局只播放一个视频，并且视频滑出可见区域自动停止播放
2. 支持slot，由于原生video组件层级限制，slot内容推荐用cover-view
3. 支持竖屏，海报
4. 支持广告暂停和全屏

### 常见问题
1. 找不到playerid为txv1的txv-video组件
要注意在小程序根目录`app.json`里声明对组件的依赖，在页面的json里声明对插件的使用。详见ps://developers.weixin.qq.com/miniprogram/dev/framework/plugin/using.html)与[示例项目](https://github.com/tvfe/txv-miniprogram-plugin)

2. 常见视频播放错误
  (1)播放器提示 ： 播放出错(P.0) 是捕获到video的binderror事件，大概率是网络断了
  (2)播放器提示 ： 啊哦，  表示获取数据失败，提示的数字是返回的错误码


### tips
1. playerid可以设置为vid
2. 想实现点击视频任何区域，实现视频全屏，经测试发现ios下，部分机型不能正常捕获到video或者容器的tap事件，推荐视频区域不要用video，假写成一张图片和一个播放按钮，点击的时候全屏播放视频
