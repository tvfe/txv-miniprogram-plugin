[thumbplayer-miniprogram - v2.0.0](../README.md) / [legacy-player-adapter](../modules/legacy_player_adapter.md) / LegacyPlayerAdapter

# Class: LegacyPlayerAdapter

[legacy-player-adapter](../modules/legacy_player_adapter.md).LegacyPlayerAdapter

## Hierarchy

- [`PlayerController`](player.PlayerController.md)

  ↳ **`LegacyPlayerAdapter`**

## Table of contents

### Constructors

- [constructor](legacy_player_adapter.LegacyPlayerAdapter.md#constructor)

### Accessors

- [currentDefinition](legacy_player_adapter.LegacyPlayerAdapter.md#currentdefinition)
- [currentVideoInfo](legacy_player_adapter.LegacyPlayerAdapter.md#currentvideoinfo)
- [definitions](legacy_player_adapter.LegacyPlayerAdapter.md#definitions)
- [fullScreen](legacy_player_adapter.LegacyPlayerAdapter.md#fullscreen)
- [isAd](legacy_player_adapter.LegacyPlayerAdapter.md#isad)
- [mode](legacy_player_adapter.LegacyPlayerAdapter.md#mode)
- [playbackRate](legacy_player_adapter.LegacyPlayerAdapter.md#playbackrate)
- [played](legacy_player_adapter.LegacyPlayerAdapter.md#played)
- [playtime](legacy_player_adapter.LegacyPlayerAdapter.md#playtime)
- [state](legacy_player_adapter.LegacyPlayerAdapter.md#state)

### Methods

- [destroy](legacy_player_adapter.LegacyPlayerAdapter.md#destroy)
- [exitFullScreen](legacy_player_adapter.LegacyPlayerAdapter.md#exitfullscreen)
- [hookAfter](legacy_player_adapter.LegacyPlayerAdapter.md#hookafter)
- [hookBefore](legacy_player_adapter.LegacyPlayerAdapter.md#hookbefore)
- [pause](legacy_player_adapter.LegacyPlayerAdapter.md#pause)
- [play](legacy_player_adapter.LegacyPlayerAdapter.md#play)
- [replay](legacy_player_adapter.LegacyPlayerAdapter.md#replay)
- [requestFullScreen](legacy_player_adapter.LegacyPlayerAdapter.md#requestfullscreen)
- [seek](legacy_player_adapter.LegacyPlayerAdapter.md#seek)
- [setLevel](legacy_player_adapter.LegacyPlayerAdapter.md#setlevel)
- [start](legacy_player_adapter.LegacyPlayerAdapter.md#start)
- [stop](legacy_player_adapter.LegacyPlayerAdapter.md#stop)
- [switchDefn](legacy_player_adapter.LegacyPlayerAdapter.md#switchdefn)
- [toggleFullscreen](legacy_player_adapter.LegacyPlayerAdapter.md#togglefullscreen)

## Constructors

### constructor

• **new LegacyPlayerAdapter**(`ref`, `legacyConfig?`, `config?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | `IPlayerComponent` |
| `legacyConfig?` | `Partial`<[`LegacyParam`](../modules/legacy_player_adapter.md#legacyparam)\> |
| `config?` | `Partial`<[`IPlayerConfig`](../modules/player.md#iplayerconfig)\> |

#### Overrides

PlayerController.constructor

## Accessors

### currentDefinition

• `get` **currentDefinition**(): [`Definition`](../modules/txv_info.md#definition)

当前清晰度

#### Returns

[`Definition`](../modules/txv_info.md#definition)

___

### currentVideoInfo

• `get` **currentVideoInfo**(): [`VideoInfo`](video_info.VideoInfo.md)

当前视频信息

#### Returns

[`VideoInfo`](video_info.VideoInfo.md)

___

### definitions

• `get` **definitions**(): [`Definition`](../modules/txv_info.md#definition)[]

当前清晰度列表

#### Returns

[`Definition`](../modules/txv_info.md#definition)[]

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

[PlayerController](player.PlayerController.md).[destroy](player.PlayerController.md#destroy)

___

### exitFullScreen

▸ **exitFullScreen**(): `void`

**`deprecated`**
退出全屏，同[toggleFullscreen](legacy_player_adapter.LegacyPlayerAdapter.md#togglefullscreen)方法

#### Returns

`void`

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

#### Inherited from

[PlayerController](player.PlayerController.md).[hookAfter](player.PlayerController.md#hookafter)

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

#### Inherited from

[PlayerController](player.PlayerController.md).[hookBefore](player.PlayerController.md#hookbefore)

___

### pause

▸ **pause**(): `void`

暂停，直播模式下等同于调用stop

#### Returns

`void`

#### Inherited from

[PlayerController](player.PlayerController.md).[pause](player.PlayerController.md#pause)

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

#### Inherited from

[PlayerController](player.PlayerController.md).[play](player.PlayerController.md#play)

___

### replay

▸ **replay**(): `void`

重播

#### Returns

`void`

#### Inherited from

[PlayerController](player.PlayerController.md).[replay](player.PlayerController.md#replay)

___

### requestFullScreen

▸ **requestFullScreen**(): `void`

**`deprecated`**
进入全屏，同[toggleFullscreen](legacy_player_adapter.LegacyPlayerAdapter.md#togglefullscreen)方法

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

#### Inherited from

[PlayerController](player.PlayerController.md).[seek](player.PlayerController.md#seek)

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

#### Inherited from

[PlayerController](player.PlayerController.md).[setLevel](player.PlayerController.md#setlevel)

___

### start

▸ **start**(): `Promise`<`void`\>

开启流程，只在[autoplay](../modules/legacy_player_adapter.md#autoplay)为false时生效。使用组件上的vid开启播放流程。

#### Returns

`Promise`<`void`\>

#### Inherited from

[PlayerController](player.PlayerController.md).[start](player.PlayerController.md#start)

___

### stop

▸ **stop**(): `void`

停止播放。停止后重播请调用replay接口

#### Returns

`void`

#### Inherited from

[PlayerController](player.PlayerController.md).[stop](player.PlayerController.md#stop)

___

### switchDefn

▸ **switchDefn**(`defn`): `Promise`<`void`\>

**`deprecated`**
设定清晰度，同[setLevel](legacy_player_adapter.LegacyPlayerAdapter.md#setlevel)方法

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `defn` | `string` | 清晰度名称；sd/hd/fhd等 |

#### Returns

`Promise`<`void`\>

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

#### Inherited from

[PlayerController](player.PlayerController.md).[toggleFullscreen](player.PlayerController.md#togglefullscreen)
