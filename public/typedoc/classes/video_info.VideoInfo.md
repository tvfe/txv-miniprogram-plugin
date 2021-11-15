[thumbplayer-miniprogram - v2.0.0](../README.md) / [video-info](../modules/video_info.md) / VideoInfo

# Class: VideoInfo

[video-info](../modules/video_info.md).VideoInfo

视频播放信息（地址，时长，加载状态等）

## Table of contents

### Constructors

- [constructor](video_info.VideoInfo.md#constructor)

### Properties

- [error](video_info.VideoInfo.md#error)
- [playtime](video_info.VideoInfo.md#playtime)
- [preloaded](video_info.VideoInfo.md#preloaded)

### Accessors

- [backupUrls](video_info.VideoInfo.md#backupurls)
- [duration](video_info.VideoInfo.md#duration)
- [loadingUrl](video_info.VideoInfo.md#loadingurl)

## Constructors

### constructor

• **new VideoInfo**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `IUrlConfig` |

#### Defined in

plugin/modules/video-info/index.ts:113

## Properties

### error

• **error**: `any` = `null`

错误信息，如果不为null则表示播放过程中出现了错误

#### Defined in

plugin/modules/video-info/index.ts:53

___

### playtime

• **playtime**: `number` = `0`

当前播放时间

#### Defined in

plugin/modules/video-info/index.ts:49

___

### preloaded

• **preloaded**: `boolean` = `false`

是否预加载完成

#### Defined in

plugin/modules/video-info/index.ts:70

## Accessors

### backupUrls

• `get` **backupUrls**(): `string`[]

备用地址

#### Returns

`string`[]

#### Defined in

plugin/modules/video-info/index.ts:110

___

### duration

• `get` **duration**(): `number`

视频时长

#### Returns

`number`

#### Defined in

plugin/modules/video-info/index.ts:97

___

### loadingUrl

• `get` **loadingUrl**(): `string`

当前播放地址

#### Returns

`string`

#### Defined in

plugin/modules/video-info/index.ts:103
