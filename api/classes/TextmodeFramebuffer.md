[textmode.js](../index.md) / TextmodeFramebuffer

# Class: TextmodeFramebuffer

Framebuffer class for managing offscreen rendering targets initialized via [Textmodifier.createFramebuffer](Textmodifier.md#createframebuffer).

## Properties

| Property | Modifier | Type | Default value |
| ------ | ------ | ------ | ------ |
| <a id="_height"></a> `_height` | `protected` | `number` | `undefined` |
| <a id="_options"></a> `_options` | `protected` | `FramebufferOptions` | `undefined` |
| <a id="_pixels"></a> `_pixels` | `protected` | `null` \| `Uint8Array`\<`ArrayBufferLike`\> | `null` |
| <a id="_width"></a> `_width` | `protected` | `number` | `undefined` |

## Accessors

### height

#### Get Signature

```ts
get height(): number;
```

Get the current framebuffer height.

##### Returns

`number`

***

### textures

#### Get Signature

```ts
get textures(): WebGLTexture[];
```

Get all textures associated with this framebuffer. 

Useful for binding textures for reading in shaders.

TextmodeFramebuffers have 5 attachments:
- 0: Character colors that encode the character to display via red and green channels
- 1: Character colors
- 2: Cell background colors
- 3: Rotation of each character encoded in red and green channels
- 4: Inversion, horizontal, and vertical flip flags encoded in red, green, blue channels

##### Returns

`WebGLTexture`[]

***

### width

#### Get Signature

```ts
get width(): number;
```

Get the current framebuffer width.

##### Returns

`number`

## Methods

### begin()

```ts
begin(): void;
```

Begin rendering to this framebuffer.

#### Returns

`void`

***

### end()

```ts
end(): void;
```

End rendering to this framebuffer and restore previous state.

#### Returns

`void`

***

### resize()

```ts
resize(width, height): void;
```

Resize the framebuffer.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `width` | `number` | New width |
| `height` | `number` | New height |

#### Returns

`void`
