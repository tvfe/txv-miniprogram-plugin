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
参见官方文档即可，目前最新版本为：*1.0.2*

### 使用播放器组件
wxml
```
<txv-video 
  vid="e0354z3cqjp"   // 可使用vid="{{vid}}"的方式应用data变量
  playerid="txv1" 
  autoplay="{{true}}" // 是否自动播放
></txv-video>
```
组件元素支持的属性:
* `vid` 视频id
* `playerid` 播放器标识符
* `autoplay` 是否自动播放
* `bindtimeupdate` 播放进度更新事件，`1.0.2`后支持
* `bindstatechange` 播放状态变更事件，`1.0.2`后支持
* `binderror` 错误信息，`1.0.2`后支持

### 插件 js api
```
const TxvContext = requirePlugin("tencentvideo");

let txvContext = TxvContext.getTxvContext('txv1') // txv1即播放器组件的playerid值

txvContext.play();  // 播放
txvContext.pause(); // 暂停
txvContext.requestFullScreen(); // 进入全屏
txvContext.exitFullScreen();    // 退出全屏
txvContext.playbackRate(+e.currentTarget.dataset.rate); // 设置播放速率
```