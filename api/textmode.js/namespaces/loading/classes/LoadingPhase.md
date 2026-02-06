---
layout: doc
editLink: true
title: LoadingPhase
description: Represents a loading phase tracked by a LoadingPhaseTracker.
category: Classes
api: true
namespace: loading
kind: Class
lastModified: 2026-02-06
hasConstructor: false
---

[textmode.js](../../../index.md) / [loading](../index.md) / LoadingPhase

# Class: LoadingPhase

Represents a loading phase tracked by a LoadingPhaseTracker.

Allows reporting progress, completion, and failure of the phase.

Also provides a method to track asynchronous tasks within the phase.

## Implements

- `ILoadingPhase`

## Properties

### id

```ts
readonly id: string;
```

The unique identifier for this loading phase

#### Implementation of

```ts
ILoadingPhase.id
```

***

### label

```ts
readonly label: string;
```

The human-readable label for this loading phase

#### Implementation of

```ts
ILoadingPhase.label
```

## Methods

### complete()

```ts
complete(): void;
```

Mark the loading phase as complete.

#### Returns

`void`

#### Example

```ts
const t = textmode.create({ width: 800, height: 600, loadingScreen: { message: 'prepping...' } });

t.setup(() => {
  const phase = t.loading.addPhase('init', 1);
  // Finish phase when work is done
  phase.complete();
});
```

#### Implementation of

```ts
ILoadingPhase.complete
```

***

### fail()

```ts
fail(error?): void;
```

Mark the loading phase as failed.

This will put the loading manager into an error state, displaying the
error on the loading screen.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `error?` | `string` \| `Error` | An optional error object or message describing the failure. |

#### Returns

`void`

#### Example

```ts
const t = textmode.create({ width: 800, height: 600 });

t.setup(async () => {
  const phase = t.loading.addPhase('fetch', 1);
  try {
    // simulate failure
    throw new Error('network error');
  } catch (err) {
    phase.fail(err instanceof Error ? err : String(err));
  }
});
```

#### Implementation of

```ts
ILoadingPhase.fail
```

***

### report()

```ts
report(progress): void;
```

Update the progress of the loading phase.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `progress` | `number` | A number between 0 and 1 representing the phase's progress. |

#### Returns

`void`

#### Example

```ts
const t = textmode.create({ width: 800, height: 600, loadingScreen: { message: 'prepping...' } });

// Create a phase and report progress as work proceeds
t.setup(async () => {
  const phase = t.loading.addPhase('assets', 1);
  phase.report(0.25);
  // ...load assets...
  phase.report(0.75);
  phase.complete();
});
```

#### Implementation of

```ts
ILoadingPhase.report
```

***

### track()

```ts
track<T>(task): Promise<T>;
```

Track a task within this loading phase.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `task` | `Promise`\<`T`\> \| () => `T` \| `Promise`\<`T`\> | A promise or function representing the task to track. |

#### Returns

`Promise`\<`T`\>

A promise that resolves with the task's result.

#### Example

```ts
const t = textmode.create({ width: 800, height: 600, loadingScreen: { message: 'loading...' } });

t.setup(async () => {
  const phase = t.loading.addPhase('video', 2);
  await phase.track(async () => {
    // do async work and report updates
    for (let i = 0; i <= 10; i++) {
      phase.report(i / 10);
      await new Promise((r) => setTimeout(r, 30));
    }
  });
});
```

#### Implementation of

```ts
ILoadingPhase.track
```
