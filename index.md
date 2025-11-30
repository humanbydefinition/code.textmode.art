---
layout: home

hero:
  actions:
    - theme: brand
      text: Get started
      link: /docs/introduction
    - theme: alt
      text: View examples
      link: /docs/examples

features:
  - icon: 
      src: /svg/realtime.svg
    title: Real-time performance
    details: Blazing fast ASCII conversion powered by an optimized WebGL2 rendering pipeline specifically designed for textmode art.
  - icon: 
      src: /svg/agnostic.svg
    title: Framework-agnostic
    details: Apply textmode conversion to any existing &lt;canvas&gt; and &lt;video&gt; context. Compatible with p5.js, Three.js, and much more.
  - icon: 
      src: /svg/dependencies.svg
    title: Zero dependencies
    details: Lightweight and self-contained. No external libraries required - just import and start creating.
  - icon: 
      src: /svg/crossplatform.svg
    title: Cross-platform
    details: Runs everywhere the web runs - desktop, mobile, tablets. Full TypeScript support with comprehensive type definitions.
  - icon: 
      src: /svg/easytouse.svg
    title: Easy integration
    details: Simple and intuitive API designed for quick setup and seamless integration into your projects.
  - icon: 
      src: /svg/export.svg
    title: Export anything
    details: Export your creations as TXT, SVG, GIF, video, and image. Perfect for sharing on social media, printing, or integrating into other projects.

---

<HomeCta />

## What is `textmode.js`?

<TextmodeWhatIs>

**textmode.js** brings the art of ASCII and textmode graphics into the modern web. Built for developers from all corners and skill levels of the creative coding world - it's the tool I wished existed when I started exploring textmode art.

### Ready for production, built for creativity

A library designed for building generative art installations, retro games, interactive visualizations, live coding performances, and experimental web experiences. Whether you're prototyping an idea or shipping a production app, textmode.js has you covered.

**Shape the future of textmode graphics.** Your feedback, ideas, and creations help drive development. Join our [Discord](https://discord.gg/sjrw8QXNks) to share what you're building, get support, and connect with fellow textmode enthusiasts.

### From zero to textmode in minutes

```javascript
const tm = textmode.create();

tm.draw(() => {
  tm.background(0, 0, 0, 0);
  
  const halfCols = tm.grid.cols / 2;
  const halfRows = tm.grid.rows / 2;
  
  for (let y = -halfRows; y < halfRows; y++) {
    for (let x = -halfCols; x < halfCols; x++) {
      const dist = Math.sqrt(x * x + y * y);
      const wave = Math.sin(dist * 0.2 - tm.frameCount * 0.1);
      
      tm.push();
      tm.translate(x, y, 0);
      tm.char(wave > 0.5 ? '▓' : wave > 0 ? '▒' : '░');
      tm.charColor(0, 150 + wave * 100, 255);
      tm.point();
      tm.pop();
    }
  }
});
```

Simple, powerful, and ready for your wildest ideas.

</TextmodeWhatIs>

## Built with `#textmodejs`

**Make something amazing. Share it with `#textmodejs`.** Every pattern, every animation, every experiment adds to the growing tapestry of textmode art. Your sketch could be the one that sparks someone else's creativity.

Dive into the interactive examples below - view source, tweak parameters, and break things *(it's encouraged!)*. Then show the world what you made. The community is watching. (｡◕‿‿◕｡)

<!--@include: ./docs/examples/showcase/wave-interference.md-->
---
<!--@include: ./docs/examples/showcase/digital-rain.md-->
---
<!--@include: ./docs/examples/showcase/plasma-field.md-->

## Community and support

**You're not coding alone.** Join a vibrant community of creative developers pushing the boundaries of textmode art. Whether you're debugging your first sketch or sharing your latest masterpiece, we're here to help.

### Resources

**Documentation** - [Complete guides and tutorials](/docs/introduction)  
**API Reference** - [Full API documentation with examples](/api/)  
**Examples** - [Interactive demos you can remix](/docs/examples)

### Connect

**Discord** - [Real-time chat and support](https://discord.gg/sjrw8QXNks)  
**GitHub** - [Bug reports and feature requests](https://github.com/humanbydefinition/textmode.js/issues)

### Get involved

**Your work matters.** Sketches shared with `#textmodejs` inspire the next wave of creators. Bug reports strengthen the foundation. Answered questions build collective knowledge. Jump in wherever your passion leads.

## What will you create?

Every sketch starts with an empty file. Your next masterpiece starts the same way.

<HomeCta :actions="[{ text: 'Begin your journey', link: '/docs/introduction' }]" />