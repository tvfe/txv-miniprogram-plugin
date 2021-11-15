[thumbplayer-miniprogram - v2.0.0](../README.md) / player-wx-component

# Module: player-wx-component

播放器组件类型声明

## Table of contents

### Type aliases

- [IProperty](player_wx_component.md#iproperty)

## Type aliases

### IProperty

Ƭ **IProperty**: `SupportedVideoProperties` & { `autoplay`: { `type`: `BooleanConstructor` ; `value`: `boolean`  } ; `config`: { `type`: `ObjectConstructor` ; `value`: `Object`  } ; `customLayerData`: { `type`: `ObjectConstructor` ; `value`: `Object`  } ; `customToastData`: { `type`: `ObjectConstructor` ; `value`: `Object`  } ; `extraParam`: { `type`: `ObjectConstructor` ; `value`: `Object`  } ; `height`: { `type`: `StringConstructor` ; `value`: `string`  } ; `isHiddenStop`: { `type`: `BooleanConstructor` ; `value`: `boolean`  } ; `maxVideoNode`: { `type`: `NumberConstructor` ; `value`: `number`  } ; `playerid`: { `observer`: `any` ; `type`: `StringConstructor` ; `value`: `string`  } ; `useLegacyAdapter`: { `type`: `BooleanConstructor` ; `value`: `boolean`  } ; `useNativeUI`: { `type`: `BooleanConstructor` ; `value`: `boolean`  } ; `vid`: { `observer`: `any` ; `type`: `StringConstructor` ; `value`: `string`  } ; `width`: { `type`: `StringConstructor` ; `value`: `string`  }  }

播放器可以接受的属性。

支持部分video标签属性透传，这部分的默认值及定义请参考官方文档 https://developers.weixin.qq.com/miniprogram/dev/component/video.html

#### Defined in

plugin/components/player/types.d.ts:28
