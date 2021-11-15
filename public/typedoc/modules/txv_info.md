[thumbplayer-miniprogram - v2.0.0](../README.md) / txv-info

# Module: txv-info

视频资源信息

## Table of contents

### Type aliases

- [Definition](txv_info.md#definition)
- [GetInfoResult](txv_info.md#getinforesult)

## Type aliases

### Definition

Ƭ **Definition**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `displayName` | `string` | 清晰度前端展示名 |
| `format` | `string` | id |
| `limited` | `boolean` | 是否付费限播 |
| `name` | `string` | 清晰度名，hd/shd/fhd |
| `resolution` | `string` | 清晰度 720p/1080p |
| `selected` | `boolean` | 是否当前选中 |

___

### GetInfoResult

Ƭ **GetInfoResult**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `definitions` | [`Definition`](txv_info.md#definition)[] | 清晰度列表 |
| `duration` | `number` | 视频时长 |
| `fileSize` | `number` | 文件大小 |
| `height` | `number` | 视频高度 |
| `title` | `string` | 视频标题 |
| `urls` | `string`[] | 地址列表，第一个为默认加载 |
| `watermarks` | `any`[] | 水印列表，未实现 |
| `width` | `number` | 视频宽度 |
