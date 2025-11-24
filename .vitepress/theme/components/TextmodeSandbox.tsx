import { defineComponent, h } from 'vue';
import { Sandbox, sandboxProps } from 'vitepress-plugin-sandpack';
import sketchMetadata from '../data/sketches.json';

/**
 * Custom Sandbox component that extends the base Sandbox
 * and adds an overlay with sketch title and author
 */
export const TextmodeSandbox = defineComponent({
  name: 'TextmodeSandbox',
  props: {
    ...sandboxProps,
    sketchId: {
      type: String,
      required: false,
      default: ''
    }
  },
  setup(props, { slots }) {
    // Get metadata for the sketch
    const metadata = props.sketchId && sketchMetadata[props.sketchId as keyof typeof sketchMetadata];
    
    return () => {
      // Create wrapper div
      const wrapperProps = { class: 'textmode-sandbox-wrapper' };

      // Strip custom props before forwarding to Sandbox
      const sandboxPropsPlain = { ...props } as Record<string, unknown>;
      delete sandboxPropsPlain.sketchId;

      // Build children array
      // Pass slots directly - Vue's h() treats object with function values as slots
      const children: any[] = [
        h(Sandbox, sandboxPropsPlain as any, slots)
      ];
      
      // Add overlay if we have metadata
      if (metadata) {
        // Create author element - clickable link if URL provided
        const authorElement = metadata.authorUrl
          ? h(
              'div',
              { class: 'textmode-sketch-author' },
              [
                'by ',
                h(
                  'a',
                  {
                    class: 'textmode-sketch-author-link',
                    href: metadata.authorUrl,
                    target: '_blank',
                    rel: 'noopener noreferrer'
                  },
                  metadata.author
                )
              ]
            )
          : h('div', { class: 'textmode-sketch-author' }, `by ${metadata.author}`);

        children.push(
          h(
            'div',
            { class: 'textmode-sketch-overlay' },
            [
              h('div', { class: 'textmode-sketch-title' }, metadata.title),
              authorElement
            ]
          )
        );
      }

      return h('div', wrapperProps, children);
    };
  },
});
