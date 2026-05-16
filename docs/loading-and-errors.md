---
title: Loading and Errors
description: Configure textmode.js loading screens, customize internal overlay rendering, and understand runtime error display behavior.
---

# Loading and errors

`textmode.js` includes internal layers for boot-time loading and runtime errors. They use the same renderer and textmode drawing API as your sketch, but are managed separately from user layers. (⌒_⌒;)

## Loading screen options

Configure the loading screen through [`TextmodeOptions.loadingScreen`](/api/textmode.js/type-aliases/TextmodeOptions#loadingscreen):

```js
const t = textmode.create({
  width: 800,
  height: 600,
  loadingScreen: {
    transition: "fade",
    transitionDuration: 400,
  },
});
```

Set `transition: 'none'` or `transitionDuration: 0` when you do not want a fade.

## Custom loading rendering

Use [`t.loading.draw()`](/api/textmode.js/namespaces/loading/classes/LoadingLayerController.md#draw) to customize the loading screen:

```js
t.setup(async () => {
  t.loading.draw(({ textmodifier: tm }) => {
    tm.background(6, 10, 18);
    tm.char("*");
    tm.charColor(255, 220, 120);
    tm.point();
  });

  await loadLargeAsset();
});
```

The callback receives a [`LoadingScreenRendererContext`](/api/textmode.js/namespaces/loading/interfaces/LoadingScreenRendererContext.md) with the active `textmodifier` and `grid`.

## When loading completes

The loading layer is active while setup is running. When setup resolves, it transitions out according to the configured loading screen options and the main sketch becomes visible.

If setup throws, the loading layer finishes and the error layer displays the failure.

## Error layer

Runtime errors thrown from setup or draw are captured and displayed through the internal error layer:

```js
t.draw(() => {
  if (shouldFail) {
    throw new Error("Something went wrong in draw().");
  }
});
```

Access the controller with [`t.errors`](/api/textmode.js/classes/Textmodifier#errors). You can customize the visual renderer with [`t.errors.draw()`](/api/textmode.js/namespaces/errors/classes/ErrorLayerController.md#draw):

```js
t.errors.draw(({ textmodifier: tm, errorTitle, errorMessage }) => {
  tm.background(24, 8, 12);
  tm.charColor(255, 180, 180);

  const label = `${errorTitle}: ${errorMessage}`;
  for (let i = 0; i < label.length; i++) {
    tm.push();
    tm.translate(i - label.length / 2, 0);
    tm.char(label[i]);
    tm.point();
    tm.pop();
  }
});
```

The callback receives an [`ErrorScreenRendererContext`](/api/textmode.js/namespaces/errors/interfaces/ErrorScreenRendererContext.md).

## Error levels

Use [`textmode.setErrorLevel()`](/api/textmode.js/classes/textmode#seterrorlevel) to control global validation/error reporting:

```js
import { textmode, TextmodeErrorLevel } from "textmode.js";

textmode.setErrorLevel(TextmodeErrorLevel.WARNING);
```

Available levels are documented in [`TextmodeErrorLevel`](/api/textmode.js/namespaces/errors/enumerations/TextmodeErrorLevel.md).

## Related APIs

- [`Textmodifier.loading`](/api/textmode.js/classes/Textmodifier#loading)
- [`LoadingLayerController`](/api/textmode.js/namespaces/loading/classes/LoadingLayerController.md)
- [`LoadingScreenOptions`](/api/textmode.js/namespaces/loading/interfaces/LoadingScreenOptions.md)
- [`Textmodifier.errors`](/api/textmode.js/classes/Textmodifier#errors)
- [`ErrorLayerController`](/api/textmode.js/namespaces/errors/classes/ErrorLayerController.md)
- [`textmode.setErrorLevel()`](/api/textmode.js/classes/textmode#seterrorlevel)
