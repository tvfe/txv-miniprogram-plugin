[thumbplayer-miniprogram - v2.0.11](../README.md) / legacy-player-adapter

# Module: legacy-player-adapter

播放器兼容性适配层，用于兼容1.x版本的配置参数、api接口、和事件。
> 如果开启了适配层，则获取到的播放器实例对象为LegacyPlayerAdapter

## Table of contents

### Classes

- [LegacyPlayerAdapter](../classes/legacy_player_adapter.LegacyPlayerAdapter.md)

### Type aliases

- [LegacyParam](legacy_player_adapter.md#legacyparam)

## Type aliases

### LegacyParam

Ƭ **LegacyParam**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `autoplay` | `boolean` |
| `chid` | `number` |
| `cid` | `string` |
| `defn` | `string` |
| `drm` | `boolean` |
| `env` | `string` |
| `from` | `string` |
| `mode` | ``"live"`` \| ``"vod"`` |
| `scene` | `number` |
| `show1080p` | `boolean` |
| `supportHEVC` | `number` |
| `getReportParam` | (...`args`: `any`[]) => `any` |
| `onAfterGetInfo` | (...`args`: `any`[]) => `Promise`<`any`\> |
| `onBeforeGetInfo` | (...`args`: `any`[]) => `Promise`<`any`\> |
| `onBeforeSwitchDefn` | (...`args`: `any`[]) => `Promise`<`any`\> |
