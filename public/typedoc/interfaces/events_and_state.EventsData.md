[thumbplayer-miniprogram - v2.0.11](../README.md) / [events-and-state](../modules/events_and_state.md) / EventsData

# Interface: EventsData

[events-and-state](../modules/events_and_state.md).EventsData

播放流程事件数据

## Table of contents

### Properties

- [adAssetsLoaded](events_and_state.EventsData.md#adassetsloaded)
- [adAssetsStart](events_and_state.EventsData.md#adassetsstart)
- [adEnd](events_and_state.EventsData.md#adend)
- [adPause](events_and_state.EventsData.md#adpause)
- [adPlaying](events_and_state.EventsData.md#adplaying)
- [adReqInfoEnd](events_and_state.EventsData.md#adreqinfoend)
- [adReqInfoStart](events_and_state.EventsData.md#adreqinfostart)
- [adTimeupdate](events_and_state.EventsData.md#adtimeupdate)
- [playContentChange](events_and_state.EventsData.md#playcontentchange)
- [sessionEnd](events_and_state.EventsData.md#sessionend)
- [sessionStart](events_and_state.EventsData.md#sessionstart)
- [videoBuffering](events_and_state.EventsData.md#videobuffering)
- [videoCanplay](events_and_state.EventsData.md#videocanplay)
- [videoDurationChange](events_and_state.EventsData.md#videodurationchange)
- [videoEnd](events_and_state.EventsData.md#videoend)
- [videoLoadProgress](events_and_state.EventsData.md#videoloadprogress)
- [videoLoadStart](events_and_state.EventsData.md#videoloadstart)
- [videoMetadataChange](events_and_state.EventsData.md#videometadatachange)
- [videoPause](events_and_state.EventsData.md#videopause)
- [videoPlaying](events_and_state.EventsData.md#videoplaying)
- [videoRateChange](events_and_state.EventsData.md#videoratechange)
- [videoReqInfoEnd](events_and_state.EventsData.md#videoreqinfoend)
- [videoReqInfoStart](events_and_state.EventsData.md#videoreqinfostart)
- [videoSeeked](events_and_state.EventsData.md#videoseeked)
- [videoSeeking](events_and_state.EventsData.md#videoseeking)
- [videoSetLevelEnd](events_and_state.EventsData.md#videosetlevelend)
- [videoSetLevelStart](events_and_state.EventsData.md#videosetlevelstart)
- [videoTimeupdate](events_and_state.EventsData.md#videotimeupdate)

## Properties

### adAssetsLoaded

• **adAssetsLoaded**: `undefined`

___

### adAssetsStart

• **adAssetsStart**: `undefined`

___

### adEnd

• **adEnd**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `message?` | `string` |

___

### adPause

• **adPause**: `undefined`

___

### adPlaying

• **adPlaying**: `Object`

isFirst - 是否第一次开播

#### Type declaration

| Name | Type |
| :------ | :------ |
| `isFirst` | `boolean` |

___

### adReqInfoEnd

• **adReqInfoEnd**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `adInfo?` | `any` |
| `code` | `string` |

___

### adReqInfoStart

• **adReqInfoStart**: `undefined`

___

### adTimeupdate

• **adTimeupdate**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `time` | `number` |

___

### playContentChange

• **playContentChange**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `isAd` | `boolean` |

___

### sessionEnd

• **sessionEnd**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `isUserStop` | `boolean` |
| `message?` | `string` |

___

### sessionStart

• **sessionStart**: `undefined`

___

### videoBuffering

• **videoBuffering**: `undefined`

___

### videoCanplay

• **videoCanplay**: `undefined`

___

### videoDurationChange

• **videoDurationChange**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `duration` | `number` |

___

### videoEnd

• **videoEnd**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `message?` | `string` |

___

### videoLoadProgress

• **videoLoadProgress**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `progress` | `number` |

___

### videoLoadStart

• **videoLoadStart**: `undefined`

___

### videoMetadataChange

• **videoMetadataChange**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `height` | `number` |
| `width` | `number` |

___

### videoPause

• **videoPause**: `undefined`

___

### videoPlaying

• **videoPlaying**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `isFirst` | `boolean` |

___

### videoRateChange

• **videoRateChange**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `rate` | `number` |

___

### videoReqInfoEnd

• **videoReqInfoEnd**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `message?` | `string` |

___

### videoReqInfoStart

• **videoReqInfoStart**: `undefined`

___

### videoSeeked

• **videoSeeked**: `undefined`

___

### videoSeeking

• **videoSeeking**: `undefined`

___

### videoSetLevelEnd

• **videoSetLevelEnd**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `level` | `string` |

___

### videoSetLevelStart

• **videoSetLevelStart**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `currentLevel` | `string` |
| `level` | `string` |

___

### videoTimeupdate

• **videoTimeupdate**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `time` | `number` |
