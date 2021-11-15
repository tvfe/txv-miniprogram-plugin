[thumbplayer-miniprogram - v2.0.0](../README.md) / [events-and-state](../modules/events_and_state.md) / EventsData

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

#### Defined in

plugin/enums.ts:145

___

### adAssetsStart

• **adAssetsStart**: `undefined`

#### Defined in

plugin/enums.ts:144

___

### adEnd

• **adEnd**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `message?` | `string` |

#### Defined in

plugin/enums.ts:149

___

### adPause

• **adPause**: `undefined`

#### Defined in

plugin/enums.ts:148

___

### adPlaying

• **adPlaying**: `Object`

isFirst - 是否第一次开播

#### Type declaration

| Name | Type |
| :------ | :------ |
| `isFirst` | `boolean` |

#### Defined in

plugin/enums.ts:147

___

### adReqInfoEnd

• **adReqInfoEnd**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `adInfo?` | `any` |
| `code` | `string` |

#### Defined in

plugin/enums.ts:143

___

### adReqInfoStart

• **adReqInfoStart**: `undefined`

#### Defined in

plugin/enums.ts:142

___

### adTimeupdate

• **adTimeupdate**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `time` | `number` |

#### Defined in

plugin/enums.ts:150

___

### playContentChange

• **playContentChange**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `isAd` | `boolean` |

#### Defined in

plugin/enums.ts:168

___

### sessionEnd

• **sessionEnd**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `isUserStop` | `boolean` |
| `message?` | `string` |

#### Defined in

plugin/enums.ts:141

___

### sessionStart

• **sessionStart**: `undefined`

#### Defined in

plugin/enums.ts:140

___

### videoBuffering

• **videoBuffering**: `undefined`

#### Defined in

plugin/enums.ts:162

___

### videoCanplay

• **videoCanplay**: `undefined`

#### Defined in

plugin/enums.ts:159

___

### videoDurationChange

• **videoDurationChange**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `duration` | `number` |

#### Defined in

plugin/enums.ts:155

___

### videoEnd

• **videoEnd**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `message?` | `string` |

#### Defined in

plugin/enums.ts:167

___

### videoLoadProgress

• **videoLoadProgress**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `progress` | `number` |

#### Defined in

plugin/enums.ts:154

___

### videoLoadStart

• **videoLoadStart**: `undefined`

#### Defined in

plugin/enums.ts:153

___

### videoMetadataChange

• **videoMetadataChange**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `height` | `number` |
| `width` | `number` |

#### Defined in

plugin/enums.ts:156

___

### videoPause

• **videoPause**: `undefined`

#### Defined in

plugin/enums.ts:161

___

### videoPlaying

• **videoPlaying**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `isFirst` | `boolean` |

#### Defined in

plugin/enums.ts:160

___

### videoRateChange

• **videoRateChange**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `rate` | `number` |

#### Defined in

plugin/enums.ts:158

___

### videoReqInfoEnd

• **videoReqInfoEnd**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `message?` | `string` |

#### Defined in

plugin/enums.ts:152

___

### videoReqInfoStart

• **videoReqInfoStart**: `undefined`

#### Defined in

plugin/enums.ts:151

___

### videoSeeked

• **videoSeeked**: `undefined`

#### Defined in

plugin/enums.ts:164

___

### videoSeeking

• **videoSeeking**: `undefined`

#### Defined in

plugin/enums.ts:163

___

### videoSetLevelEnd

• **videoSetLevelEnd**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `level` | `string` |

#### Defined in

plugin/enums.ts:166

___

### videoSetLevelStart

• **videoSetLevelStart**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `currentLevel` | `string` |
| `level` | `string` |

#### Defined in

plugin/enums.ts:165

___

### videoTimeupdate

• **videoTimeupdate**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `time` | `number` |

#### Defined in

plugin/enums.ts:157
