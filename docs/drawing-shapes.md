---
title: Drawing Shapes
description: Draw points, lines, rectangles, ellipses, triangles, arcs, and Bezier curves with textmode.js.
---

# Drawing shapes

Shape functions draw into the active grid using the current character, color, transform, and shader state. 〆(・∀・＠)

For the quickest mental model: set drawing state first, then call a primitive.

```js
t.char("A");
t.charColor(255, 120, 80);
t.cellColor(0);
t.rect(10, 6);
```

## 2D primitives

[`textmode.js`](/api/textmode.js/) includes these 2D drawing methods:

- [`point()`](/api/textmode.js/classes/Textmodifier#point)
- [`rect(width, height)`](/api/textmode.js/classes/Textmodifier#rect)
- [`line(x1, y1, x2, y2)`](/api/textmode.js/classes/Textmodifier#line)
- [`ellipse(width, height)`](/api/textmode.js/classes/Textmodifier#ellipse)
- [`triangle(x1, y1, x2, y2, x3, y3)`](/api/textmode.js/classes/Textmodifier#triangle)
- [`arc(width, height, startAngle, endAngle)`](/api/textmode.js/classes/Textmodifier#arc)
- [`bezierCurve(x1, y1, cx1, cy1, cx2, cy2, x2, y2)`](/api/textmode.js/classes/Textmodifier#beziercurve)

## Example

<!--@include: ./examples/docs/primitives.md-->

## Line weight

Use [`lineWeight()`](/api/textmode.js/classes/Textmodifier#lineweight) for lines and Bezier curves:

```js
t.lineWeight(2);
t.line(-16, 0, 16, 0);
```

When called without arguments, `lineWeight()` returns the current line weight.

## State applies to future drawing

Most drawing state is sticky until changed:

```js
t.char("#");
t.charColor(255, 0, 0);
t.rect(8, 8);

t.char("*");
t.charColor(80, 200, 255);
t.ellipse(8, 8);
```

Use [`push()`](/api/textmode.js/classes/Textmodifier#push) and [`pop()`](/api/textmode.js/classes/Textmodifier#pop) to isolate style and transform changes:

```js
t.push();
t.translate(-10, 0);
t.char("@");
t.rect(6, 6);
t.pop();

t.rect(6, 6); // back to the previous state
```

## Custom shapes

Use [`beginShape()`](/api/textmode.js/classes/Textmodifier#beginshape), [`vertex()`](/api/textmode.js/classes/Textmodifier#vertex), and [`endShape()`](/api/textmode.js/classes/Textmodifier#endshape) to construct custom polygon paths and vertex geometry:

```js
t.char("■");
t.charColor(255, 200, 50);

t.beginShape(t.LINE_STRIP);
t.vertex(-10, -5);
t.vertex(0, -10);
t.vertex(10, -5);
t.vertex(8, 8);
t.vertex(-8, 8);
t.endShape("close");
```

### Shape assembly modes

Pass an assembly mode to `beginShape(mode)` to control how vertices are connected:

- `t.POINTS`: Draws each vertex as an individual point.
- `t.LINES`: Connects pairs of vertices as disconnected line segments.
- `t.LINE_STRIP`: *(Default)* Connects consecutive vertices as a polyline.
- `t.LINE_LOOP`: Connects vertices and automatically closes the loop.
- `t.TRIANGLES`: Draws each group of 3 vertices as a filled triangle.
- `t.TRIANGLE_STRIP`: Draws a connected strip of triangles.
- `t.TRIANGLE_FAN`: Draws triangles radiating from the first vertex.
- `t.QUADS`: Draws each group of 4 vertices as a quadrilateral.
- `t.QUAD_STRIP`: Draws a continuous strip of quadrilaterals.

## When to use 3D primitives

Use [3D drawing](/docs/3d-drawing) when you need volume, depth, cameras, or lighting. The 2D primitives are the most direct path for text patterns, interfaces, typography-like layouts, and grid art.

## Related APIs

- [`Textmodifier.point()`](/api/textmode.js/classes/Textmodifier#point)
- [`Textmodifier.rect()`](/api/textmode.js/classes/Textmodifier#rect)
- [`Textmodifier.line()`](/api/textmode.js/classes/Textmodifier#line)
- [`Textmodifier.ellipse()`](/api/textmode.js/classes/Textmodifier#ellipse)
- [`Textmodifier.triangle()`](/api/textmode.js/classes/Textmodifier#triangle)
- [`Textmodifier.arc()`](/api/textmode.js/classes/Textmodifier#arc)
- [`Textmodifier.bezierCurve()`](/api/textmode.js/classes/Textmodifier#beziercurve)
- [`Textmodifier.beginShape()`](/api/textmode.js/classes/Textmodifier#beginshape)
- [`Textmodifier.vertex()`](/api/textmode.js/classes/Textmodifier#vertex)
- [`Textmodifier.endShape()`](/api/textmode.js/classes/Textmodifier#endshape)
