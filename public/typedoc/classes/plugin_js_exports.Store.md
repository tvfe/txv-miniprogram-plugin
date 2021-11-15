[thumbplayer-miniprogram - v2.0.0](../README.md) / [plugin-js-exports](../modules/plugin_js_exports.md) / Store

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
全局上报接口，已废弃

#### Type declaration

| Name | Type |
| :------ | :------ |
| `checkState` | () => `void` |
| `on` | () => `void` |
| `release` | () => `void` |
| `restoreState` | () => `void` |
| `saveState` | () => `void` |

#### Defined in

plugin/index.ts:23

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

#### Defined in

plugin/index.ts:61

___

### closeLog

▸ `Static` **closeLog**(): `void`

**`deprecated`**
关闭debug模式，建议通过config配置

#### Returns

`void`

#### Defined in

plugin/index.ts:187

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

#### Defined in

plugin/index.ts:70

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

#### Defined in

plugin/index.ts:150

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

#### Defined in

plugin/index.ts:78

___

### getAllContext

▸ `Static` **getAllContext**(): `void`

**`deprecated`**

#### Returns

`void`

#### Defined in

plugin/index.ts:162

___

### getCookie

▸ `Static` **getCookie**(): `Record`<`string`, `string`\>

获取cookie

#### Returns

`Record`<`string`, `string`\>

cookie

#### Defined in

plugin/index.ts:118

___

### getCookieAsString

▸ `Static` **getCookieAsString**(): `string`

获取拼接好的cookie字符串

#### Returns

`string`

cookie

#### Defined in

plugin/index.ts:125

___

### getLastPlayId

▸ `Static` **getLastPlayId**(): `void`

**`deprecated`**

#### Returns

`void`

#### Defined in

plugin/index.ts:166

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

#### Defined in

plugin/index.ts:46

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

#### Defined in

plugin/index.ts:142

___

### isDrmSupported

▸ `Static` **isDrmSupported**(): `void`

当前环境是否支持加密播放

#### Returns

`void`

#### Defined in

plugin/index.ts:85

___

### openLog

▸ `Static` **openLog**(): `void`

**`deprecated`**
打开debug模式，建议通过config配置

#### Returns

`void`

#### Defined in

plugin/index.ts:179

___

### setCookie

▸ `Static` **setCookie**(`cookie`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cookie` | `Record`<`string`, `string`\> |

#### Returns

`void`

#### Defined in

plugin/index.ts:88

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

#### Defined in

plugin/index.ts:170

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

#### Defined in

plugin/index.ts:135

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

#### Defined in

plugin/index.ts:174

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

#### Defined in

plugin/index.ts:154

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

#### Defined in

plugin/index.ts:158
