# Hover Tooltip 🎯

A modern, highly customizable tooltip component for React applications featuring smooth animations, multiple themes, and flexible positioning options. Built with Framer Motion and Tailwind CSS.

## ✨ Features

- **Rich Themes** - 6 beautiful pre-built themes (Modern, Elegant, Frost, Neon, Soft, Glass)
- **Smart Positioning** - Automatic positioning with 4 placement options
- **Enhanced Animations** - 6 smooth animation styles powered by Framer Motion
- **Interaction Options** - Support for hover, click, and persistent tooltips
- **Rich Content** - Support for HTML content in tooltips
- **Mobile Friendly** - Responsive design that works across all devices
- **Developer Experience** - Simple API with TypeScript support
- **Zero Dependencies** - Lightweight with only peer dependencies

## 📦 Installation

```bash
npm install hover-tooltip

# or with yarn
yarn add hover-tooltip

# or with pnpm
pnpm add hover-tooltip
```

## 🚀 Quick Start

```jsx
import { Tooltip } from "hover-tooltip";

function App() {
  return (
    <Tooltip text="This is a tooltip!" position="top" theme="modern">
      <button>Hover me</button>
    </Tooltip>
  );
}
```

## 🎨 Available Themes

The component comes with six carefully crafted themes:

- **Modern** - Clean, dark theme with subtle shadows
- **Elegant** - Light theme with glass effect
- **Frost** - Frosted glass effect with white text
- **Neon** - Dark theme with vibrant neon borders
- **Soft** - Subtle light theme with soft shadows
- **Glass** - Modern backdrop blur effect with translucent background

```jsx
// Theme examples
<Tooltip text="Glass theme" theme="glass">
  <button>Glass</button>
</Tooltip>

<Tooltip text="Neon theme" theme="neon">
  <button>Neon</button>
</Tooltip>
```

## ⚙️ Props

| Prop        | Type                                                            | Default  | Description                                |
| ----------- | --------------------------------------------------------------- | -------- | ------------------------------------------ |
| children    | ReactNode                                                       | required | Element that triggers the tooltip          |
| text        | string                                                          | required | Tooltip content                            |
| position    | 'top' \| 'bottom' \| 'left' \| 'right'                          | 'top'    | Tooltip position                           |
| theme       | 'modern' \| 'elegant' \| 'frost' \| 'neon' \| 'soft' \| 'glass' | 'modern' | Visual theme                               |
| delay       | number                                                          | 0.1      | Show delay (seconds)                       |
| arrow       | boolean                                                         | true     | Show/hide arrow pointer                    |
| maxWidth    | string                                                          | '250px'  | Maximum tooltip width                      |
| className   | string                                                          | ''       | Custom CSS classes                         |
| animation   | 'smooth' \| 'pop' \| 'shift' \| 'elastic' \| 'fade' \| 'scale'  | 'smooth' | Animation style                            |
| duration    | number                                                          | 0.3      | Animation duration (seconds)               |
| distance    | number                                                          | 8        | Distance from trigger (pixels)             |
| showOnClick | boolean                                                         | false    | Show tooltip on click instead of hover     |
| persistent  | boolean                                                         | false    | Keep tooltip visible until clicked outside |
| fontSize    | 'sm' \| 'base' \| 'lg'                                          | 'sm'     | Text size                                  |
| rich        | boolean                                                         | false    | Allow HTML content in tooltip              |

## 🎬 Animations

Six animation styles are available:

```jsx
// Smooth - Enhanced spring animation
<Tooltip animation="smooth">
  <button>Smooth</button>
</Tooltip>

// Pop - Improved scale and fade effect
<Tooltip animation="pop">
  <button>Pop</button>
</Tooltip>

// Elastic - Bouncy spring animation
<Tooltip animation="elastic">
  <button>Elastic</button>
</Tooltip>

// Fade - Simple fade in/out
<Tooltip animation="fade">
  <button>Fade</button>
</Tooltip>

// Scale - Smooth scale animation
<Tooltip animation="scale">
  <button>Scale</button>
</Tooltip>
```

## 🎯 Advanced Usage

### Click Trigger

Create tooltips that show on click instead of hover:

```jsx
<Tooltip text="Click-triggered tooltip" showOnClick persistent theme="glass">
  <button>Click me</button>
</Tooltip>
```

### Rich Content

Use HTML content in your tooltips:

```jsx
<Tooltip
  text="<strong>Bold</strong> and <em>italic</em> text"
  rich
  fontSize="base"
>
  <button>Rich Content</button>
</Tooltip>
```

### Custom Styling

Override default styles using the `className` prop:

```jsx
<Tooltip
  text="Custom styled tooltip"
  className="my-custom-tooltip"
  theme="modern"
>
  <button>Custom Style</button>
</Tooltip>
```

### Dynamic Content

Tooltips can contain dynamic content:

```jsx
<Tooltip
  text={`Last updated: ${new Date().toLocaleDateString()}`}
  position="bottom"
  theme="frost"
>
  <span>Hover for timestamp</span>
</Tooltip>
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Author

**Karan**

- GitHub: [@itsmeekaran](https://github.com/itsmeekaran)

## ⭐️ Show your support

Give a ⭐️ if this project helped you!
