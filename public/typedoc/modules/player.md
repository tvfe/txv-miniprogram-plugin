[thumbplayer-miniprogram - v2.0.11](../README.md) / player

# Module: player

播放器实例，包含事件广播及播控api。

## Table of contents

### Classes

- [PlayerController](../classes/player.PlayerController.md)

### Type aliases

- [IPlayerConfig](player.md#iplayerconfig)
- [LivePlayItem](player.md#liveplayitem)
- [PlayItem](player.md#playitem)
- [VodPlayItem](player.md#vodplayitem)

## Type aliases

### IPlayerConfig

Ƭ **IPlayerConfig**: `Object`

播放器配置参数

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `debugConfig?` | `Partial`<`Object`\> | debug配置 |
| `defn?` | `string` | 起播指定的清晰度 |
| `hooks?` | `Record`<[`HookType`](../enums/events_and_state.HookType.md), `Object`\> | - |
| `maxRetryCount?` | `number` | 最大重试次数 |

___

### LivePlayItem

Ƭ **LivePlayItem**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cnlid` | `string` |
| `livepid` | `string` |

___

### PlayItem

Ƭ **PlayItem**: [`VodPlayItem`](player.md#vodplayitem) \| [`LivePlayItem`](player.md#liveplayitem)

___

### VodPlayItem

Ƭ **VodPlayItem**: `string`
