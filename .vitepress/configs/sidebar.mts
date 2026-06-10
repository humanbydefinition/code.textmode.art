import type { DefaultTheme } from "vitepress";
import typedocSidebarTextmode from "../../api/textmode.js/typedoc-sidebar.json";
import typedocSidebarSynth from "../../api/textmode.synth.js/typedoc-sidebar.json";
import typedocSidebarFilters from "../../api/textmode.filters.js/typedoc-sidebar.json";
import typedocSidebarExport from "../../api/textmode.export.js/typedoc-sidebar.json";
import typedocSidebarFiglet from "../../api/textmode.figlet.js/typedoc-sidebar.json";
import { defineBlogConfig } from "vitepress-plugin-blog/config";

export const blog = defineBlogConfig({
  sidebar: {
    recentPostsCount: 5,
  },
});

const docsSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Docs",
    items: [
      {
        text: "Start",
        items: [
          { text: "Introduction", link: "/docs/introduction" },
          { text: "Installation", link: "/docs/installation" },
          { text: "First sketch", link: "/docs/first-sketch" },
          { text: "Examples", link: "/docs/examples" },
        ],
      },
      {
        text: "Learn",
        items: [
          { text: "Sketch lifecycle", link: "/docs/sketch-lifecycle" },
          { text: "Grid and coordinates", link: "/docs/grid-and-coordinates" },
          { text: "Drawing shapes", link: "/docs/drawing-shapes" },
          {
            text: "Characters and colors",
            link: "/docs/characters-and-colors",
          },
          {
            text: "Text and glyph ramps",
            link: "/docs/text-and-glyph-ramps",
          },
          { text: "Animation and timing", link: "/docs/animation-and-timing" },
          {
            text: "Randomness, math, vectors, and noise",
            link: "/docs/randomness-math-vectors-and-noise",
          },
          { text: "Transforms", link: "/docs/transforms" },
          { text: "Input events", link: "/docs/events" },
          { text: "Fonts and tilesets", link: "/docs/fonts" },
          { text: "Media sources", link: "/docs/loadables" },
          { text: "Media conversion", link: "/docs/media-conversion" },
        ],
      },
      {
        text: "Compose",
        items: [
          {
            text: "Layers and compositing",
            link: "/docs/layers-and-compositing",
          },
          { text: "Filters", link: "/docs/filters" },
          { text: "Framebuffers", link: "/docs/framebuffers" },
          { text: "Shaders", link: "/docs/shaders" },
          { text: "3D drawing", link: "/docs/3d-drawing" },
          {
            text: "Cameras and projection",
            link: "/docs/cameras-and-projection",
          },
          { text: "Lighting", link: "/docs/lighting" },
          { text: "Loading and errors", link: "/docs/loading-and-errors" },
          { text: "Plugins", link: "/docs/plugins" },
        ],
      },
      {
        text: "Integrate and Export",
        items: [
          {
            text: "Framework integration",
            link: "/docs/framework-integration",
          },
          { text: "Exporting", link: "/docs/exporting" },
          {
            text: "Live coding",
            link: "/docs/live-coding",
            collapsed: true,
            items: [
              { text: "flok.cc", link: "/docs/live-coding-flok-cc" },
              {
                text: "synth.textmode.art",
                link: "/docs/live-coding-synth-textmode-art",
              },
            ],
          },
        ],
      },
      {
        text: "Contributing",
        items: [
          { text: "Overview", link: "/docs/contributing/" },
          {
            text: "Getting started",
            link: "/docs/contributing/getting-started",
          },
          {
            text: "Submit a sketch",
            link: "/docs/contributing/submit-a-sketch",
          },
          { text: "Improve docs", link: "/docs/contributing/improve-docs" },
          { text: "Contributors", link: "/docs/contributors" },
        ],
      },
    ],
  },
];

const apiSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "API",
    items: [{ text: "Overview", link: "/api/" }],
  },
  {
    text: "textmode.js",
    items: [
      { text: "Index", link: "/api/textmode.js/" },
      ...typedocSidebarTextmode,
    ],
  },
  {
    text: "textmode.synth.js",
    items: [
      { text: "Index", link: "/api/textmode.synth.js/" },
      ...typedocSidebarSynth,
    ],
  },
  {
    text: "textmode.filters.js",
    items: [
      { text: "Index", link: "/api/textmode.filters.js/" },
      ...typedocSidebarFilters,
    ],
  },
  {
    text: "textmode.export.js",
    items: [
      { text: "Index", link: "/api/textmode.export.js/" },
      ...typedocSidebarExport,
    ],
  },
  {
    text: "textmode.figlet.js",
    items: [
      { text: "Index", link: "/api/textmode.figlet.js/" },
      ...typedocSidebarFiglet,
    ],
  },
];

export const sidebar: DefaultTheme.Sidebar = {
  "/docs/": docsSidebar,
  "/api/": apiSidebar,
  "/blog/": blog.sidebar,
};
