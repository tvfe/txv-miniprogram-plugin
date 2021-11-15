[thumbplayer-miniprogram - v2.0.0](../README.md) / [player](../modules/player.md) / PlayerController

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
- [start](player.PlayerController.md#start)
- [stop](player.PlayerController.md#stop)
- [toggleFullscreen](player.PlayerController.md#togglefullscreen)

## Accessors

### currentDefinition

• `get` **currentDefinition**(): [`Definition`](../modules/txv_info.md#definition)

当前清晰度

#### Returns

[`Definition`](../modules/txv_info.md#definition)

#### Defined in

plugin/components/player/controller.ts:203

___

### currentVideoInfo

• `get` **currentVideoInfo**(): [`VideoInfo`](video_info.VideoInfo.md)

当前视频信息

#### Returns

[`VideoInfo`](video_info.VideoInfo.md)

#### Defined in

plugin/components/player/controller.ts:216

___

### definitions

• `get` **definitions**(): [`Definition`](../modules/txv_info.md#definition)[]

当前清晰度列表

#### Returns

[`Definition`](../modules/txv_info.md#definition)[]

#### Defined in

plugin/components/player/controller.ts:196

___

### fullScreen

• `get` **fullScreen**(): `boolean`

是否全屏

#### Returns

`boolean`

#### Defined in

plugin/components/player/controller.ts:234

___

### isAd

• `get` **isAd**(): `boolean`

当前播放内容是否为广告

#### Returns

`boolean`

#### Defined in

plugin/components/player/controller.ts:257

___

### mode

• `get` **mode**(): ``"vod"`` \| ``"live"``

模式

#### Returns

``"vod"`` \| ``"live"``

#### Defined in

plugin/components/player/controller.ts:181

___

### playbackRate

• `get` **playbackRate**(): `number`

当前播放倍速

#### Returns

`number`

#### Defined in

plugin/components/player/controller.ts:244

• `set` **playbackRate**(`val`): `void`

设定当前播放倍速

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `number` | 倍速，支持0.5, 0.8, 1, 1.25, 1.5, 2 |

#### Returns

`void`

#### Defined in

plugin/components/player/controller.ts:252

___

### played

• `get` **played**(): `boolean`

当前session是否起播过

#### Returns

`boolean`

#### Defined in

plugin/components/player/controller.ts:262

___

### playtime

• `get` **playtime**(): `number`

当前播放时间

#### Returns

`number`

#### Defined in

plugin/components/player/controller.ts:229

___

### state

• `get` **state**(): [`VideoState`](../enums/events_and_state.VideoState.md)

当前播放器状态

#### Returns

[`VideoState`](../enums/events_and_state.VideoState.md)

#### Defined in

plugin/components/player/controller.ts:239

## Methods

### destroy

▸ **destroy**(): `void`

销毁

#### Returns

`void`

#### Overrides

EventProxy.destroy

#### Defined in

plugin/components/player/controller.ts:311

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

#### Defined in

plugin/components/player/controller.ts:334

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

#### Defined in

plugin/components/player/controller.ts:326

___

### pause

▸ **pause**(): `void`

暂停，直播模式下等同于调用stop

#### Returns

`void`

#### Defined in

plugin/components/player/controller.ts:425

___

### play

▸ **play**(`vid?`, `config?`): `Promise`<`void`\>

播放
1. 无参数时等同于videoContext.play()
2. 传入vid时：先调用stop(), 然后请求新的vid进行播放

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vid?` | `string` | 点播视频vid，直播流cnlid |
| `config?` | `Object` | 播放配置参数 |
| `config.startTime?` | `number` | 起播时间，单位秒。 |

#### Returns

`Promise`<`void`\>

#### Defined in

plugin/components/player/controller.ts:364

___

### replay

▸ **replay**(): `void`

重播

#### Returns

`void`

#### Defined in

plugin/components/player/controller.ts:339

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

#### Defined in

plugin/components/player/controller.ts:435

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

#### Defined in

plugin/components/player/controller.ts:473

___

### start

▸ **start**(): `Promise`<`void`\>

开启流程，只在[autoplay](../modules/legacy_player_adapter.md#autoplay)为false时生效。使用组件上的vid开启播放流程。

#### Returns

`Promise`<`void`\>

#### Defined in

plugin/components/player/controller.ts:349

___

### stop

▸ **stop**(): `void`

停止播放。停止后重播请调用replay接口

#### Returns

`void`

#### Defined in

plugin/components/player/controller.ts:443

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

#### Defined in

plugin/components/player/controller.ts:463
