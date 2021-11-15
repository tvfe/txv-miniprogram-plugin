[thumbplayer-miniprogram - v2.0.0](../README.md) / [events-and-state](../modules/events_and_state.md) / Events

# Enumeration: Events

[events-and-state](../modules/events_and_state.md).Events

播放流程事件

## Table of contents

### Enumeration members

- [AD\_ASSETS\_LOADED](events_and_state.Events.md#ad_assets_loaded)
- [AD\_ASSETS\_START](events_and_state.Events.md#ad_assets_start)
- [AD\_END](events_and_state.Events.md#ad_end)
- [AD\_PAUSE](events_and_state.Events.md#ad_pause)
- [AD\_PLAYING](events_and_state.Events.md#ad_playing)
- [AD\_REQ\_INFO\_END](events_and_state.Events.md#ad_req_info_end)
- [AD\_REQ\_INFO\_START](events_and_state.Events.md#ad_req_info_start)
- [AD\_TIMEUPDATE](events_and_state.Events.md#ad_timeupdate)
- [CONTENT\_CHANGE](events_and_state.Events.md#content_change)
- [PLAY\_SESSION\_END](events_and_state.Events.md#play_session_end)
- [PLAY\_SESSION\_START](events_and_state.Events.md#play_session_start)
- [VIDEO\_BUFFERING](events_and_state.Events.md#video_buffering)
- [VIDEO\_CANPLAY](events_and_state.Events.md#video_canplay)
- [VIDEO\_DURATION\_CHANGE](events_and_state.Events.md#video_duration_change)
- [VIDEO\_END](events_and_state.Events.md#video_end)
- [VIDEO\_LOAD\_PROGRESS](events_and_state.Events.md#video_load_progress)
- [VIDEO\_LOAD\_START](events_and_state.Events.md#video_load_start)
- [VIDEO\_METADATA\_CHANGE](events_and_state.Events.md#video_metadata_change)
- [VIDEO\_PAUSE](events_and_state.Events.md#video_pause)
- [VIDEO\_PLAYING](events_and_state.Events.md#video_playing)
- [VIDEO\_RATE\_CHANGE](events_and_state.Events.md#video_rate_change)
- [VIDEO\_REQ\_INFO\_END](events_and_state.Events.md#video_req_info_end)
- [VIDEO\_REQ\_INFO\_START](events_and_state.Events.md#video_req_info_start)
- [VIDEO\_SEEKED](events_and_state.Events.md#video_seeked)
- [VIDEO\_SEEKING](events_and_state.Events.md#video_seeking)
- [VIDEO\_SETLEVEL\_END](events_and_state.Events.md#video_setlevel_end)
- [VIDEO\_SETLEVEL\_START](events_and_state.Events.md#video_setlevel_start)
- [VIDEO\_TIMEUPDATE](events_and_state.Events.md#video_timeupdate)

## Enumeration members

### AD\_ASSETS\_LOADED

• **AD\_ASSETS\_LOADED** = `"adAssetsLoaded"`

广告资源全部加载完成

#### Defined in

plugin/enums.ts:362

___

### AD\_ASSETS\_START

• **AD\_ASSETS\_START** = `"adAssetsStart"`

广告资源加载开始

#### Defined in

plugin/enums.ts:358

___

### AD\_END

• **AD\_END** = `"adEnd"`

广告播放完成

#### Defined in

plugin/enums.ts:378

___

### AD\_PAUSE

• **AD\_PAUSE** = `"adPause"`

广告暂停

#### Defined in

plugin/enums.ts:374

___

### AD\_PLAYING

• **AD\_PLAYING** = `"adPlaying"`

广告开始播放

#### Defined in

plugin/enums.ts:370

___

### AD\_REQ\_INFO\_END

• **AD\_REQ\_INFO\_END** = `"adReqInfoEnd"`

广告信息请求结束

#### Defined in

plugin/enums.ts:354

___

### AD\_REQ\_INFO\_START

• **AD\_REQ\_INFO\_START** = `"adReqInfoStart"`

开始请求广告信息

#### Defined in

plugin/enums.ts:350

___

### AD\_TIMEUPDATE

• **AD\_TIMEUPDATE** = `"adTimeupdate"`

广告播放时间变化

#### Defined in

plugin/enums.ts:366

___

### CONTENT\_CHANGE

• **CONTENT\_CHANGE** = `"playContentChange"`

播放内容变更（切换vid）

#### Defined in

plugin/enums.ts:382

___

### PLAY\_SESSION\_END

• **PLAY\_SESSION\_END** = `"sessionEnd"`

播放流程结束

#### Defined in

plugin/enums.ts:278

___

### PLAY\_SESSION\_START

• **PLAY\_SESSION\_START** = `"sessionStart"`

播放流程开始

#### Defined in

plugin/enums.ts:274

___

### VIDEO\_BUFFERING

• **VIDEO\_BUFFERING** = `"videoBuffering"`

正片二次缓冲

#### Defined in

plugin/enums.ts:326

___

### VIDEO\_CANPLAY

• **VIDEO\_CANPLAY** = `"videoCanplay"`

正片视频资源可起播

#### Defined in

plugin/enums.ts:314

___

### VIDEO\_DURATION\_CHANGE

• **VIDEO\_DURATION\_CHANGE** = `"videoDurationChange"`

正片视频资源时长变化

#### Defined in

plugin/enums.ts:302

___

### VIDEO\_END

• **VIDEO\_END** = `"videoEnd"`

正片播放完成

#### Defined in

plugin/enums.ts:346

___

### VIDEO\_LOAD\_PROGRESS

• **VIDEO\_LOAD\_PROGRESS** = `"videoLoadProgress"`

正片视频资源缓冲变化

#### Defined in

plugin/enums.ts:294

___

### VIDEO\_LOAD\_START

• **VIDEO\_LOAD\_START** = `"videoLoadStart"`

正片视频资源开始加载

#### Defined in

plugin/enums.ts:290

___

### VIDEO\_METADATA\_CHANGE

• **VIDEO\_METADATA\_CHANGE** = `"videoMetadataChange"`

正片视频资源元信息变化

#### Defined in

plugin/enums.ts:298

___

### VIDEO\_PAUSE

• **VIDEO\_PAUSE** = `"videoPause"`

正片暂停

#### Defined in

plugin/enums.ts:322

___

### VIDEO\_PLAYING

• **VIDEO\_PLAYING** = `"videoPlaying"`

正片起播

#### Defined in

plugin/enums.ts:318

___

### VIDEO\_RATE\_CHANGE

• **VIDEO\_RATE\_CHANGE** = `"videoRateChange"`

正片播放倍速变化

#### Defined in

plugin/enums.ts:310

___

### VIDEO\_REQ\_INFO\_END

• **VIDEO\_REQ\_INFO\_END** = `"videoReqInfoEnd"`

视频资源地址请求结束

#### Defined in

plugin/enums.ts:286

___

### VIDEO\_REQ\_INFO\_START

• **VIDEO\_REQ\_INFO\_START** = `"videoReqInfoStart"`

开始请求视频资源地址

#### Defined in

plugin/enums.ts:282

___

### VIDEO\_SEEKED

• **VIDEO\_SEEKED** = `"videoSeeked"`

正片设定播放时间完成

#### Defined in

plugin/enums.ts:334

___

### VIDEO\_SEEKING

• **VIDEO\_SEEKING** = `"videoSeeking"`

正片设定播放时间点

#### Defined in

plugin/enums.ts:330

___

### VIDEO\_SETLEVEL\_END

• **VIDEO\_SETLEVEL\_END** = `"videoSetLevelEnd"`

正片设定清晰度完成

#### Defined in

plugin/enums.ts:342

___

### VIDEO\_SETLEVEL\_START

• **VIDEO\_SETLEVEL\_START** = `"videoSetLevelStart"`

正片设定清晰度

#### Defined in

plugin/enums.ts:338

___

### VIDEO\_TIMEUPDATE

• **VIDEO\_TIMEUPDATE** = `"videoTimeupdate"`

正片播放时间变化

#### Defined in

plugin/enums.ts:306
