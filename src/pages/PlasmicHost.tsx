import { PlasmicCanvasHost, registerComponent } from '@plasmicapp/host';
import { CelestialButton } from '../components/decorative/CelestialButton';
import { CornerVine, CenterMandala, MysticalStar } from '../components/decorative';

// Register your existing components so they appear in Plasmic Studio

registerComponent(CelestialButton, {
  name: 'CelestialButton',
  importPath: './components/decorative/CelestialButton',
  props: {
    children: {
      type: 'slot',
      defaultValue: 'Click me',
    },
    onClick: {
      type: 'eventHandler',
      argTypes: [],
    },
    disabled: {
      type: 'boolean',
      defaultValue: false,
    },
    className: {
      type: 'string',
    },
  },
});

registerComponent(CornerVine, {
  name: 'CornerVine',
  importPath: './components/decorative',
  props: {
    className: {
      type: 'string',
      defaultValue: 'w-32 h-32 text-amber-900/60',
    },
  },
});

registerComponent(CenterMandala, {
  name: 'CenterMandala',
  importPath: './components/decorative',
  props: {
    className: {
      type: 'string',
      defaultValue: 'w-20 h-20 text-fuchsia-900/30',
    },
  },
});

registerComponent(MysticalStar, {
  name: 'MysticalStar',
  importPath: './components/decorative',
  props: {
    className: {
      type: 'string',
      defaultValue: 'w-6 h-6 text-amber-100',
    },
  },
});

export function PlasmicHost() {
  return <PlasmicCanvasHost />;
}
