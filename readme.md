# 腾讯视频小程序播放插件

只需要一个vid！！把[视频上传](https://v.qq.com/u/upload.html)到腾讯视频之后得到vid！！就可以在自己的小程序上播放视频了！！流畅到爆！！
```
// 在app.json里面引入插件，注意插件版本号填最新的版本号
"plugins": {
  "tencentvideo": {
    "version": "1.3.18",
    "provider": "wxa75efa648b60994b"
  }
}
```
```
// 在你们的json里面插入
"usingComponents": {
  // 点播组件
  "txv-video": "plugin://tencentvideo/video"
  // 直播组件
  "txv-live": "plugin://tencentvideo/video"
}
```
```
// 在你们的wxml上这样插入视频元素
<txv-video vid="e0354z3cqjp" playerid="txv1"></txv-video>
// 直播
<txv-live pid="" sid="" playerid="txv1"></txv-live>
```

[付费去广告](http://v.qq.com/open)，过程中遇到任何问题，欢迎加群反馈

本github仓库就是一个示例项目，包含[feed列表（不卡顿）](https://github.com/tvfe/txv-miniprogram-plugin/tree/master/pages/feed)、单视频、多视频场景

## QQ小程序接入方式
QQ小程序也支持用视频播放插件啦，接入步骤与微信小程序类似，只是appid和版本号不一样，详见[官方文档](https://q.qq.com/wiki/develop/miniprogram/frame/plugins/plugins_use_plugin.html)，尽量使用最新版本插件，如有问题，可在开发社区下查找或者到github提交[issues](https://github.com/tvfe/txv-miniprogram-plugin/issues)
```
// 在app.json里面引入插件，注意插件版本号填最新的版本号
"plugins": {
  "tencentvideo": {
    "version": "1.0.0",        // QQ小程序插件版本号
    "provider": "1109840991"   // QQ小程序的APPID
  }
}
```
播放器组件的使用方式与微信小程序一致，具体属性和事件请看下方

## 微信小程序接入方式
### 申请使用插件 appid:wxa75efa648b60994b
首先，参见微信官方的[插件使用文档](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/plugin/using.html)申请插件权限，在申请使用插件的使用时，填写以下appid:`wxa75efa648b60994b`

### 引入插件代码
参见[官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/using.html)与[示例项目](https://github.com/tvfe/txv-miniprogram-plugin)，尽量使用最新版本插件，如有问题，可在开发社区下查找或者到github提交[issues](https://github.com/tvfe/txv-miniprogram-plugin/issues)

### 使用播放器组件
wxml
```
<txv-video 
  vid="e0354z3cqjp"   // 可使用vid="{{vid}}" wx:if="{{vid}}" 的方式应用data变量,要注意确保vid存在，详情可见文档最后面的tips
  playerid="txv1"     //playerid必须要全局唯一，可以设置为vid
  autoplay="{{true}}" // 是否自动播放
></txv-video>

<txv-live 
  sid=""
  pid=""   // sid和pid为必传，可以用sid="{{sid}}" pid="{{pid}}" wx:if="{{sid && pid}}" 的形式使用变量
  playerid="tx2"     //playerid必须要全局唯一，可以设置为vid
></txv-live>
```
```
// 支持slot，用于在video上显示UI，txv-live同样支持
<txv-video 
  vid="e0354z3cqjp"   // 可使用vid="{{vid}}" wx:if="{{vid}}" 的方式应用data变量,要注意确保vid存在，详情可见文档最后面的tips
  playerid="txv1" 
  width="{{100%}}"    //自定义宽度
  height="{{'auto'}}" // 自定义高度
  autoplay="{{true}}"> // 是否自动播放
  <view class='txv-video-slot'>video slot</view>
</txv-video>
```
点播组件元素支持的自定义属性：
* `vid` 视频id
* `playerid` 播放器标识符,需全局唯一，用于获取Video Context，进而手动控制播放
* `width` 视频宽度
* `height` 视频高度
* `isHiddenStop` 是否在不可见区域自动停止播放，默认false，即滑到不可见区域不停止播放
* `isNeedMutex` 是否互斥播放，默认true，即播放一个视频另一个播放的视频自动被暂停

直播组件元素支持的自定义属性：
* `sid` 流id
* `pid` 直播节目id
* `playerid` 播放器标识符,需全局唯一，用于获取Video Context，进而手动控制播放
* `width` 视频宽度
* `height` 视频高度
* `isStopPoll` 业务方希望自己进行轮询
* `beforeText` 直播未开始时的提示问题
* `afterText` 直播已结束时的提示问题
* `isHiddenStop` 是否在不可见区域自动停止播放，默认false，即滑到不可见区域不停止播放

组件元素支持的video属性，[属性取值与video一致](https://developers.weixin.qq.com/miniprogram/dev/component/video.html)（插件支持小程序video的大部分属性）
* `autoplay` 是否自动播放
* `poster` 视频海报，会根据视频vid拿一个默认值
* `usePoster` 是否使用海报图
* `direction` 视频全屏时方向
* `objectFit` 视频填充方式
* `controls` 视频播放控件
* `showCenterPlayBtn` 是否显示中间播放按钮

/* V1.2.4 */
* `enableDanmu` 是否允许弹幕，默认false
* `danmuBtn` 是否显示弹幕button，默认false
* `danmuList` 弹幕数据列表，具体数据格式请看小程序官网video组件

/* V1.2.5 */
* `defn` 视频清晰度，默认auto，可选值：流畅，标清，高清，超清，蓝光，4K，杜比

/* V1.2.6 */
* `title` 视频全屏时显示的标题

/* V1.3.3 */
* `vslideGesture` Boolean，非全屏下，上下滑动调节亮度和音量，默认false
* `vslideGestureInFullscreen` Boolean，全屏下，上下滑动调节亮度和音量，默认true
* `enablePlayGesture` Boolean，双击播放或者暂停视频，默认false
* `showMuteBtn` Boolean，是否显示静音按钮，默认false
* `playBtnPosition` String，播放按钮位置，默认bottom，可选值center

组件元素抛出的自定义事件
* `bindstatechange` 播放状态变更事件，包含loading(资源加载中), ready(资源加载完成), playing(播放中，包含广告和视频), ended(广告和视频都播放完成), error，回调函数接受两个参数newstate，oldstate

组件抛出了小程序video抛出的所有事件，[事件含义与video一致](https://developers.weixin.qq.com/miniprogram/dev/component/video.html):
* `bindplay` 播放
* `bindpause` 暂停
* `bindended` 播放结束，e.detail.isAd可以用来区分是广告还是视频
* `bindfullscreenchange` 全屏
* `bindtimeupdate` 播放进度更新事件
* `binderror` 视频播放错误信息
  
/* V1.3.9 */
* `bindmetadatachanged` 播放器加载metadata完成时回调

/* V1.3.18 */
* 直播组件新增清晰度切换功能

### 插件 js api
```
const TxvContext = requirePlugin("tencentvideo");  

let txvContext = TxvContext.getTxvContext('txv1') // txv1即播放器组件的playerid值

txvContext.play();  // 播放
txvContext.pause(); // 暂停
txvContext.requestFullScreen(); // 进入全屏
txvContext.exitFullScreen();    // 退出全屏
txvContext.playbackRate(+e.currentTarget.dataset.rate); // 设置播放速率（直播不支持）
txvContext.seek(time);  //快进到某个时间（直播不支持）


//获取当前播放视频上下文，多个实例时特别有用
var currPlayerId=TxvContext.getLastPlayId();     //获取当前播放视频的playerid
var currPlayerContxt=TxvContext.getTxvContext(currPlayerId)   //获取当前播放视频的上下文，可进行play，pause等操作

//开启和关闭播放器日志，默认关闭
TxvContext.openLog()   //开启
TxvContext.closeLog()  //关闭

/* V1.2.4 */
* `sendDanmu` 发送弹幕，具体数据格式请看小程序官网video组件
* `hideVideo` 隐藏视频插件里面的播放器
* `showVideo` 显示视频插件里面的播放器
* `showContainer` 显示视频插件里面的最外层容器
* `hideContainer` 隐藏视频插件里面的最外层容器

/* V1.2.5 */
* `hideVideoWithVoice` 隐藏视频插件，如果隐藏前正在播放，则隐藏后继续播
* `showVideoWithVoice` 显示视频插件，跟上面的hideVideoWithVoice配合使用

/* V1.2.6 */
* `replay` 视频播放完成后，调用此方法可进行重播
   用法：txvContext.replay(vid)，接受一个参数，需要重播的vid
   骚操作，可以通过给vid前面或者后面加空格触发重播而不调用replay方法，如：vid+=" ";this.setData({vid})
```

### 版本功能迭代
1. V1.2.4及之前版本
    * 全局只播放一个视频，并且视频滑出可见区域自动停止播放
    * 支持slot
    * 支持竖屏，海报
    * 支持广告暂停和全屏
2. V1.2.5
    * 支持全屏下设置亮度
    * 支持全屏下切换清晰度
3. V1.3.3
    * cover-view改为view

### 常见问题
1. 找不到playerid为txv1的txv-video组件
要注意在小程序根目录`app.json`里声明对组件的依赖，在页面的json里声明对插件的使用。详见[官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/using.html)与[示例项目](https://github.com/tvfe/txv-miniprogram-plugin)

2. 常见视频播放错误
    * 播放器提示是P.0开头表示捕获到video的binderror事件，
      可能的原因是MEDIA_ERR_SRC_NOT_SUPPORTED；MEDIA_ERR_DECODE；MEDIA_ERR_NETWORK
    * 播放器提示是G.开头，是接口错误，后面提示的数字是返回的错误码
    * 播放器提示是L开头，大概率是触发了逻辑错误

3. 直播相关的问题
    * 弹幕能力目前无法在真机上支持，已知iOS真机无法显示和发送弹幕，请使用官方的miniprogram-barrage实现
    * 安卓平台部分机型会显示进度条，iOS无显示。


### tips
1. playerid必须要全局唯一，可以设置为vid
2. 想实现点击视频任何区域，实现视频全屏，经测试发现ios下，部分机型不能正常捕获到video或者容器的tap事件，推荐视频区域不要用video，假写成一张图片和一个播放按钮，点击的时候全屏播放视频
3. ```const TxvContext = requirePlugin("tencentvideo");``` 可以打印TxvContext，插件暴露的接口都在这里面
4. 强烈建议在拿到vid后在渲染视频组件 ```<txv-video vid="{{vid}}" wx:if="{{vid}}" playerid="{{vid}}"></txv-video>``` 否则会报错，因为视频组件初始化一定要给vid

### Q&A
- Q. 谁不能使用这个插件?
- A. 个人开发者不能使用视频插件，即使使用了，按理说提审会被拒绝
- Q. 视频播放资质问题？
- A. 使用视频插件播放不要求小程序主体具有文娱=》视频资质是因为视频插件具有文娱=》视频资质了，如果小程序主体还有用其他方式播放视频，那也需要文娱=》视频资质的。需要注意，如果小程序主体还有其他的需要资质功能，需要自己去办理，[详细资质请看](https://developers.weixin.qq.com/miniprogram/product/material/)
- Q. 视频来源
- A. 禁止盗播腾讯视频版权视频，盗播是不能正常播放的，其他视频可以免费播放