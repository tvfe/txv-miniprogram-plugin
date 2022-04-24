[thumbplayer-miniprogram - v2.0.11](../README.md) / [plugin-js-exports](../modules/plugin_js_exports.md) / Store

# Class: Store

[plugin-js-exports](../modules/plugin_js_exports.md).Store

thumbplayer-miniprogram 全局实例管理和api
@

## Table of contents

### Constructors

- [constructor](plugin_js_exports.Store.md#constructor)

### Properties

- [report](plugin_js_exports.Store.md#report)

### Methods

- [attach](plugin_js_exports.Store.md#attach)
- [closeLog](plugin_js_exports.Store.md#closelog)
- [detach](plugin_js_exports.Store.md#detach)
- [existTxvContext](plugin_js_exports.Store.md#existtxvcontext)
- [get](plugin_js_exports.Store.md#get)
- [getAllContext](plugin_js_exports.Store.md#getallcontext)
- [getCookie](plugin_js_exports.Store.md#getcookie)
- [getCookieAsString](plugin_js_exports.Store.md#getcookieasstring)
- [getLastPlayId](plugin_js_exports.Store.md#getlastplayid)
- [getNetworkType](plugin_js_exports.Store.md#getnetworktype)
- [getPlayerVersion](plugin_js_exports.Store.md#getplayerversion)
- [getSystemInfo](plugin_js_exports.Store.md#getsysteminfo)
- [getTxvContext](plugin_js_exports.Store.md#gettxvcontext)
- [isDrmSupported](plugin_js_exports.Store.md#isdrmsupported)
- [openLog](plugin_js_exports.Store.md#openlog)
- [setCookie](plugin_js_exports.Store.md#setcookie)
- [setLastPlayId](plugin_js_exports.Store.md#setlastplayid)
- [setRequest](plugin_js_exports.Store.md#setrequest)
- [setTvpPlayState](plugin_js_exports.Store.md#settvpplaystate)
- [txvAttached](plugin_js_exports.Store.md#txvattached)
- [txvDetached](plugin_js_exports.Store.md#txvdetached)

## Constructors

### constructor

• **new Store**()

## Properties

### report

▪ `Static` **report**: `Object`

**`deprecated`**
全局上报接口，已废弃

#### Type declaration

| Name | Type |
| :------ | :------ |
| `checkState` | () => `void` |
| `on` | () => `void` |
| `release` | () => `void` |
| `restoreState` | () => `void` |
| `saveState` | () => `void` |

## Methods

### attach

▸ `Static` **attach**(`id`, `player`): `void`

注册播放器实例

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | 播放器实例关联的id，用于获取实例 |
| `player` | [`PlayerController`](player.PlayerController.md) | 播放器实例 |

#### Returns

`void`

___

### closeLog

▸ `Static` **closeLog**(): `void`

**`deprecated`**
关闭debug模式，建议通过config配置

#### Returns

`void`

___

### detach

▸ `Static` **detach**(`id`): `void`

注销播放器实例

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | 需要注销的播放器实例的id，如果id不存在则不会做任何操作 |

#### Returns

`void`

___

### existTxvContext

▸ `Static` **existTxvContext**(`playerId`): `void`

**`deprecated`**
检查是否有对应id的播放器实例。已废弃，建议使用get接口检查

#### Parameters

| Name | Type |
| :------ | :------ |
| `playerId` | `string` |

#### Returns

`void`

___

### get

▸ `Static` **get**(`id`): [`PlayerController`](player.PlayerController.md)

获取播放器实例，如果不存在对应id的播放器则返回undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | 需要获取的播放器实例id |

#### Returns

[`PlayerController`](player.PlayerController.md)

___

### getAllContext

▸ `Static` **getAllContext**(): `void`

**`deprecated`**

#### Returns

`void`

___

### getCookie

▸ `Static` **getCookie**(): `Record`<`string`, `string`\>

获取cookie

#### Returns

`Record`<`string`, `string`\>

cookie

___

### getCookieAsString

▸ `Static` **getCookieAsString**(): `string`

获取拼接好的cookie字符串

#### Returns

`string`

cookie

___

### getLastPlayId

▸ `Static` **getLastPlayId**(): `void`

**`deprecated`**

#### Returns

`void`

___

### getNetworkType

▸ `Static` **getNetworkType**(): `Promise`<`string`\>

网络类型

#### Returns

`Promise`<`string`\>

___

### getPlayerVersion

▸ `Static` **getPlayerVersion**(): `string`

获取播放器版本号

#### Returns

`string`

播放器版本号

___

### getSystemInfo

▸ `Static` **getSystemInfo**(): `Object`

环境信息

#### Returns

`Object`

Object {osPlatform, libVer, clientVer, deviceModel, host}

| Name | Type |
| :------ | :------ |
| `clientVer` | `string` |
| `deviceModel` | `string` |
| `host` | `string` |
| `libVer` | `string` |
| `osPlatform` | `string` |

___

### getTxvContext

▸ `Static` **getTxvContext**(`playerId`): [`PlayerController`](player.PlayerController.md)

**`deprecated`**
获取插件实例。已废弃，建议使用get接口

#### Parameters

| Name | Type |
| :------ | :------ |
| `playerId` | `string` |

#### Returns

[`PlayerController`](player.PlayerController.md)

___

### isDrmSupported

▸ `Static` **isDrmSupported**(): `void`

当前环境是否支持加密播放

#### Returns

`void`

___

### openLog

▸ `Static` **openLog**(): `void`

**`deprecated`**
打开debug模式，建议通过config配置

#### Returns

`void`

___

### setCookie

▸ `Static` **setCookie**(`cookie`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cookie` | `Record`<`string`, `string`\> |

#### Returns

`void`

___

### setLastPlayId

▸ `Static` **setLastPlayId**(`id`): `void`

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

___

### setRequest

▸ `Static` **setRequest**(`requestor`): `void`

**`deprecated`**
设定插件使用的request函数

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestor` | <T\>(`option`: `RequestOption`<`T`\>) => `RequestTask` |

#### Returns

`void`

___

### setTvpPlayState

▸ `Static` **setTvpPlayState**(`id`, `isPlaying`): `void`

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `isPlaying` | `any` |

#### Returns

`void`

___

### txvAttached

▸ `Static` **txvAttached**(`playerId`, `obj`): `void`

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `playerId` | `string` |
| `obj` | `any` |

#### Returns

`void`

___

### txvDetached

▸ `Static` **txvDetached**(`playerId`): `void`

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `playerId` | `string` |

#### Returns

`void`
