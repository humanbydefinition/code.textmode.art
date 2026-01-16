[textmode.js](../index.md) / TextmodeGrid

# Class: TextmodeGrid

Manages the grid of each `TextmodeLayer` instance.

## Accessors

### cellHeight

#### Get Signature

```ts
get cellHeight(): number;
```

Returns the height of each cell in the grid.

##### Returns

`number`

***

### cellWidth

#### Get Signature

```ts
get cellWidth(): number;
```

Returns the width of each cell in the grid.

##### Returns

`number`

***

### cols

#### Get Signature

```ts
get cols(): number;
```

Returns the number of columns in the grid.

##### Returns

`number`

#### Set Signature

```ts
set cols(newCols): void;
```

Sets the number of columns and locks grid sizing until `responsive()` is called.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `newCols` | `number` |

##### Returns

`void`

***

### height

#### Get Signature

```ts
get height(): number;
```

Returns the total height of the grid.

##### Returns

`number`

***

### offsetX

#### Get Signature

```ts
get offsetX(): number;
```

Returns the offset to the outer canvas borders on the x-axis when centering the grid.

##### Returns

`number`

***

### offsetY

#### Get Signature

```ts
get offsetY(): number;
```

Returns the offset to the outer canvas borders on the y-axis when centering the grid.

##### Returns

`number`

***

### rows

#### Get Signature

```ts
get rows(): number;
```

Returns the number of rows in the grid.

##### Returns

`number`

#### Set Signature

```ts
set rows(newRows): void;
```

Sets the number of rows and locks grid sizing until `responsive()` is called.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `newRows` | `number` |

##### Returns

`void`

***

### width

#### Get Signature

```ts
get width(): number;
```

Returns the total width of the grid.

##### Returns

`number`

## Methods

### responsive()

```ts
responsive(): void;
```

Restores responsive sizing so subsequent `t.resizeCanvas` calls recompute cols/rows.

A grid becomes non-responsive when either `cols` or `rows` is manually set.

#### Returns

`void`
