[thumbplayer-miniprogram - v2.0.11](../README.md) / [player](../modules/player.md) / PlayerController

# Class: PlayerController

[player](../modules/player.md).PlayerController

## Hierarchy

- `EventProxy`<`EventsListener`\>

  ↳ **`PlayerController`**

  ↳↳ [`LegacyPlayerAdapter`](legacy_player_adapter.LegacyPlayerAdapter.md)

## Table of contents

### Accessors

- [currentDefinition](player.PlayerController.md#currentdefinition)
- [currentVideoInfo](player.PlayerController.md#currentvideoinfo)
- [definitions](player.PlayerController.md#definitions)
- [duration](player.PlayerController.md#duration)
- [fullScreen](player.PlayerController.md#fullscreen)
- [isAd](player.PlayerController.md#isad)
- [mode](player.PlayerController.md#mode)
- [playbackRate](player.PlayerController.md#playbackrate)
- [played](player.PlayerController.md#played)
- [playtime](player.PlayerController.md#playtime)
- [state](player.PlayerController.md#state)

### Methods

- [destroy](player.PlayerController.md#destroy)
- [hookAfter](player.PlayerController.md#hookafter)
- [hookBefore](player.PlayerController.md#hookbefore)
- [pause](player.PlayerController.md#pause)
- [play](player.PlayerController.md#play)
- [replay](player.PlayerController.md#replay)
- [seek](player.PlayerController.md#seek)
- [setLevel](player.PlayerController.md#setlevel)
- [stop](player.PlayerController.md#stop)
- [toggleFullscreen](player.PlayerController.md#togglefullscreen)

## Accessors

### currentDefinition

• `get` **currentDefinition**(): `undefined` \| [`Definition`](../modules/txv_info.md#definition)

当前清晰度

#### Returns

`undefined` \| [`Definition`](../modules/txv_info.md#definition)

___

### currentVideoInfo

• `get` **currentVideoInfo**(): ``null`` \| [`VideoInfo`](video_info.VideoInfo.md)

当前视频信息

#### Returns

``null`` \| [`VideoInfo`](video_info.VideoInfo.md)

___

### definitions

• `get` **definitions**(): `undefined` \| [`Definition`](../modules/txv_info.md#definition)[]

当前清晰度列表

#### Returns

`undefined` \| [`Definition`](../modules/txv_info.md#definition)[]

___

### duration

• `get` **duration**(): `number`

当前视频时长

#### Returns

`number`

___

### fullScreen

• `get` **fullScreen**(): `boolean`

是否全屏

#### Returns

`boolean`

___

### isAd

• `get` **isAd**(): `boolean`

当前播放内容是否为广告

#### Returns

`boolean`

___

### mode

• `get` **mode**(): ``"vod"`` \| ``"live"``

模式

#### Returns

``"vod"`` \| ``"live"``

___

### playbackRate

• `get` **playbackRate**(): `number`

当前播放倍速

#### Returns

`number`

• `set` **playbackRate**(`val`): `void`

设定当前播放倍速

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | 倍速，支持0.5, 0.8, 1, 1.25, 1.5, 2 |

#### Returns

`void`

___

### played

• `get` **played**(): `boolean`

当前session是否起播过

#### Returns

`boolean`

___

### playtime

• `get` **playtime**(): `number`

当前播放时间

#### Returns

`number`

___

### state

• `get` **state**(): [`VideoState`](../enums/events_and_state.VideoState.md)

当前播放器状态

#### Returns

[`VideoState`](../enums/events_and_state.VideoState.md)

## Methods

### destroy

▸ **destroy**(): `void`

销毁

#### Returns

`void`

#### Overrides

EventProxy.destroy

___

### hookAfter

▸ **hookAfter**(`module`, `hook`): `void`

绑定after钩子

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `module` | [`HookType`](../enums/events_and_state.HookType.md) | - |
| `hook` | (...`args`: `any`[]) => `any` | 钩子回调函数，可以传入数组一次绑定多个 |

#### Returns

`void`

___

### hookBefore

▸ **hookBefore**(`module`, `hook`): `void`

绑定before钩子

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `module` | [`HookType`](../enums/events_and_state.HookType.md) | - |
| `hook` | (...`args`: `any`[]) => `any` | 钩子回调函数，可以传入数组一次绑定多个 |

#### Returns

`void`

___

### pause

▸ **pause**(): `void`

暂停，直播模式下无效

#### Returns

`void`

___

### play

▸ **play**(`playItem?`, `config?`): `Promise`<`void`\>

播放
1. 无参数时等同于videoContext.play()
2. 传入vid时：先调用stop(), 然后请求新的vid进行播放

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `playItem?` | [`PlayItem`](../modules/player.md#playitem) | 点播视频vid，直播流cnlid |
| `config?` | `Object` | 播放配置参数 |
| `config.startTime?` | `number` | 起播时间，单位秒。 |

#### Returns

`Promise`<`void`\>

___

### replay

▸ **replay**(): `void`

重播

#### Returns

`void`

___

### seek

▸ **seek**(`time`): `void`

跳转

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` | 调转到的播放时间，单位：秒 |

#### Returns

`void`

___

### setLevel

▸ **setLevel**(`defn`): `Promise`<`void`\>

设置清晰度。成功后切换传入的清晰度；失败时抛出异常并继续播放当前清晰度。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `defn` | `string` | 清晰度名称; sd/hd/fhd等 |

#### Returns

`Promise`<`void`\>

___

### stop

▸ **stop**(): `void`

停止播放。停止后重播请调用replay接口

#### Returns

`void`

___

### toggleFullscreen

▸ **toggleFullscreen**(`val?`): `void`

唤起/退出全屏

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `val` | `boolean` | `true` | true进入全屏/false退出全屏 |

#### Returns

`void`
