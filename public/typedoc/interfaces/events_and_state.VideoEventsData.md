[thumbplayer-miniprogram - v2.0.11](../README.md) / [events-and-state](../modules/events_and_state.md) / VideoEventsData

# Interface: VideoEventsData

[events-and-state](../modules/events_and_state.md).VideoEventsData

## Table of contents

### Properties

- [ended](events_and_state.VideoEventsData.md#ended)
- [error](events_and_state.VideoEventsData.md#error)
- [fullscreenchange](events_and_state.VideoEventsData.md#fullscreenchange)
- [loadedmetadata](events_and_state.VideoEventsData.md#loadedmetadata)
- [pause](events_and_state.VideoEventsData.md#pause)
- [play](events_and_state.VideoEventsData.md#play)
- [progress](events_and_state.VideoEventsData.md#progress)
- [seekcomplete](events_and_state.VideoEventsData.md#seekcomplete)
- [timeupdate](events_and_state.VideoEventsData.md#timeupdate)

## Properties

### ended

• **ended**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `isAd` | `boolean` |

___

### error

• **error**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `error` | [`IError`](events_and_state.IError.md) |
| `isAd` | `boolean` |

___

### fullscreenchange

• **fullscreenchange**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `direction` | ``"vertical"`` \| ``"horizontal"`` |
| `fullScreen` | `boolean` |

___

### loadedmetadata

• **loadedmetadata**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `duration` | `number` |
| `isAd` | `boolean` |

___

### pause

• **pause**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `isAd` | `boolean` |

___

### play

• **play**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `isAd` | `boolean` |
| `isFirst` | `boolean` |

___

### progress

• **progress**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `buffered` | `number` |
| `isAd` | `boolean` |

___

### seekcomplete

• **seekcomplete**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `isAd` | `boolean` |
| `position` | `number` |

___

### timeupdate

• **timeupdate**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `currentTime` | `number` |
| `duration` | `number` |
| `isAd` | `boolean` |
