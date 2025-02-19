# Hover Tooltip 🎯

A lightweight, customizable React tooltip component featuring smooth animations, multiple themes, and flexible positioning. Built with Framer Motion and Tailwind CSS.

## Features ✨

- 🎨 **6 Beautiful Themes** - Modern, Elegant, Frost, Neon, Soft, and Glass
- 📍 **Smart Positioning** - Automatic positioning with 4 placement options
- 🎬 **Smooth Animations** - 6 fluid animation styles powered by Framer Motion
- 📱 **Mobile Ready** - Responsive design that works across all devices
- 🌗 **Dark Mode** - Seamless integration with dark mode
- 🔧 **Highly Customizable** - Easy styling with CSS variables and class names
- 📦 **Lightweight** - Only peer dependencies required

## Installation 📥

```bash
npm install hover-tooltip framer-motion

# or with yarn
yarn add hover-tooltip framer-motion

# or with pnpm
pnpm add hover-tooltip framer-motion
```

## Quick Start 🚀

```jsx
import Tooltip from "hover-tooltip";

function App() {
  return (
    <Tooltip text="Hello World!" position="top" theme="modern">
      <button>Hover me</button>
    </Tooltip>
  );
}
```

## Examples 💡

### Basic Usage

```jsx
// Simple tooltip
<Tooltip text="Basic tooltip">
  <button>Hover me</button>
</Tooltip>

// With position
<Tooltip text="Bottom tooltip" position="bottom">
  <button>Hover me</button>
</Tooltip>

// With theme
<Tooltip text="Glass theme" theme="glass">
  <button>Hover me</button>
</Tooltip>
```

### Advanced Usage

```jsx
// Click trigger with persistence
<Tooltip
  text="Click-triggered tooltip"
  showOnClick
  persistent
  theme="neon"
>
  <button>Click me</button>
</Tooltip>

// Rich HTML content
<Tooltip
  text="<strong>Bold</strong> and <em>italic</em> text"
  rich
  theme="elegant"
>
  <button>Rich Content</button>
</Tooltip>

// Custom styling
<Tooltip
  text="Custom styled tooltip"
  className="my-custom-tooltip"
  animation="elastic"
>
  <button>Custom Style</button>
</Tooltip>
```

## Props ⚙️

| Prop        | Type                                                            | Default  | Description                        |
| ----------- | --------------------------------------------------------------- | -------- | ---------------------------------- |
| text        | string                                                          | required | Tooltip content                    |
| children    | ReactNode                                                       | required | Trigger element                    |
| position    | 'top' \| 'bottom' \| 'left' \| 'right'                          | 'top'    | Placement                          |
| theme       | 'modern' \| 'elegant' \| 'frost' \| 'neon' \| 'soft' \| 'glass' | 'modern' | Visual theme                       |
| animation   | 'smooth' \| 'pop' \| 'shift' \| 'elastic' \| 'fade' \| 'scale'  | 'smooth' | Animation style                    |
| delay       | number                                                          | 0.1      | Show delay (seconds)               |
| duration    | number                                                          | 0.3      | Animation duration                 |
| distance    | number                                                          | 8        | Distance from trigger (px)         |
| maxWidth    | string                                                          | '250px'  | Maximum width                      |
| arrow       | boolean                                                         | true     | Show/hide arrow                    |
| showOnClick | boolean                                                         | false    | Click trigger                      |
| persistent  | boolean                                                         | false    | Stay visible until clicked outside |
| rich        | boolean                                                         | false    | Allow HTML content                 |
| className   | string                                                          | ''       | Custom CSS classes                 |
| fontSize    | 'sm' \| 'base' \| 'lg'                                          | 'sm'     | Text size                          |

## Themes 🎨

```jsx
// Modern (Default)
<Tooltip theme="modern">Clean, dark theme</Tooltip>

// Elegant
<Tooltip theme="elegant">Light theme with glass effect</Tooltip>

// Frost
<Tooltip theme="frost">Frosted glass effect</Tooltip>

// Neon
<Tooltip theme="neon">Dark theme with neon borders</Tooltip>

// Soft
<Tooltip theme="soft">Subtle light theme</Tooltip>

// Glass
<Tooltip theme="glass">Modern blur effect</Tooltip>
```

## Animations 🎬

```jsx
// Smooth (Default)
<Tooltip animation="smooth">Spring animation</Tooltip>

// Pop
<Tooltip animation="pop">Scale and fade</Tooltip>

// Elastic
<Tooltip animation="elastic">Bouncy spring</Tooltip>

// Fade
<Tooltip animation="fade">Simple fade</Tooltip>

// Scale
<Tooltip animation="scale">Smooth scaling</Tooltip>

// Shift
<Tooltip animation="shift">Directional slide</Tooltip>
```

## Styling 🎯

### Custom CSS

```css
.my-custom-tooltip {
  --tooltip-bg: #2563eb;
  --tooltip-text: #ffffff;
  --tooltip-border-radius: 8px;
  --tooltip-arrow-size: 8px;
}
```

### Dark Mode

```jsx
// Automatically adapts to dark mode
<Tooltip theme="elegant">
  <button>Dark mode ready</button>
</Tooltip>
```

## TypeScript Support 📘

```tsx
import Tooltip from "hover-tooltip";
import type { TooltipProps } from "hover-tooltip";

const MyComponent: React.FC = () => {
  return (
    <Tooltip text="TypeScript enabled" position="top" theme="modern">
      <button>Typed Props</button>
    </Tooltip>
  );
};
```

## Troubleshooting 🔧

### Common Issues

1. **Tooltip not showing**

   - Verify framer-motion installation
   - Check tooltip text prop
   - Look for z-index conflicts

2. **Animation issues**

   - Confirm framer-motion compatibility
   - Check for transform conflicts

3. **Styling problems**
   - Verify Tailwind CSS setup
   - Check CSS specificity
   - Inspect custom theme variables

## Contributing 🤝

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License 📝

MIT © [Karan](https://github.com/itsmeekaran)

## Author 👨‍💻

**Karan**

- GitHub: [@itsmeekaran](https://github.com/itsmeekaran)
- Email: ansh.tsx@gmail.com

## Support ⭐

If you find this project helpful, please give it a star! ⭐
