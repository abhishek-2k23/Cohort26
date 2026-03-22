# Litewind

A lightweight, pure JavaScript CSS utility engine inspired by Tailwind CSS. Build responsive, utility-first user interfaces without the overhead of full framework dependencies.

## 📋 Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Usage Examples](#usage-examples)
- [Color Reference](#color-reference)
- [Spacing System](#spacing-system)
- [Typography](#typography)
- [Flexbox Utilities](#flexbox-utilities)
- [Grid System](#grid-system)
- [API Reference](#api-reference)
- [Performance](#performance)
- [Browser Support](#browser-support)
- [Use Cases](#use-cases)
- [License](#license)

## ✨ Features

- **Lightweight**: Minimal footprint with zero external dependencies
- **Pure JavaScript**: No compilation step required
- **Utility-First**: Build complex layouts with simple utility classes
- **Responsive Design**: Built-in responsive breakpoint support
- **Tailwind-Compatible**: Familiar class naming conventions
- **Easy Integration**: Works with vanilla HTML, React, Vue, and more
- **Customizable**: Extend with your own utilities and colors

## 📦 Installation

Install litewind via npm:

```bash
npm install litewind
```

Or via yarn:

```bash
yarn add litewind
```

Or via pnpm:

```bash
pnpm add litewind
```

## 🚀 Quick Start

### 1. Import in Your Project

```javascript
import { applyStyles } from 'litewind';

// Call this after your DOM is ready
applyStyles();
```

### 2. Use in HTML

Simply add class names to your HTML elements, and Litewind will automatically parse them and apply inline styles:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Litewind Demo</title>
</head>
<body>
  <div class="p-4 bg-blue text-white">
    Hello, Litewind!
  </div>

  <script type="module">
    import { applyStyles } from 'litewind';
    
    // Apply styles to all elements with classes
    applyStyles();
  </script>
</body>
</html>
```

### 3. No Configuration Needed

Litewind works out-of-the-box with zero configuration. Just import `applyStyles()` and you're ready to build!

```javascript
// That's it! No config, no build step required
import { applyStyles } from 'litewind';
applyStyles();
```

### With Framework Integration (React Example)

```jsx
import { useEffect } from 'react';
import { applyStyles } from 'litewind';

function App() {
  useEffect(() => {
    // Apply styles when component mounts
    applyStyles();
  }, []);

  return (
    <div className="flex items-center justify-center p-8 bg-white">
      <div className="p-6 bg-blue text-white">
        <h1 className="font-bold">Welcome to Litewind</h1>
        <p>Build beautiful UIs with utility-first CSS</p>
        <button className="p-2 m-2 bg-green text-white">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
```

## 📚 Usage Examples

### Button Component

```html
<button class="p-2 m-2 bg-blue text-white font-bold">
  Click Me
</button>
```

### Card Component

```html
<div class="p-4 m-4 bg-white">
  <div class="w-48 h-32 bg-blue text-white"></div>
  <div class="p-4">
    <h2 class="font-bold">Card Title</h2>
    <p>This is a sample card built with Litewind utilities.</p>
    <button class="p-2 m-2 bg-green text-white">Learn More</button>
  </div>
</div>
```

### Flexbox Layout

```html
<nav class="flex p-4 bg-black text-white">
  <div class="font-bold">Litewind</div>
  <div class="flex p-2">
    <a class="p-2 m-2" href="#home">Home</a>
    <a class="p-2 m-2" href="#features">Features</a>
    <a class="p-2 m-2" href="#docs">Docs</a>
  </div>
</nav>
```

### Grid Layout

```html
<div class="grid">
  <div class="grid-cols-3 gap-4">
    <div class="p-4 bg-blue text-white">Item 1</div>
    <div class="p-4 bg-green text-white">Item 2</div>
    <div class="p-4 bg-red text-white">Item 3</div>
  </div>
</div>
```

### Form Group

```html
<div class="m-4">
  <label class="font-bold p-2">Email Address</label>
  <input 
    type="email" 
    class="w-48 p-2 m-2"
    placeholder="you@example.com"
  />
</div>
```

## 🎨 Color Reference

Litewind provides a simple yet powerful color palette. All colors are applied instantly as inline styles.

### Available Colors

| Color Name | Hex Value | Usage |
|---|---|---|
| **red** | `#ef4444` | Errors, alerts, dangers |
| **blue** | `#3b82f6` | Primary action, CTAs, links |
| **green** | `#22c55e` | Success, confirmed actions |
| **white** | `#ffffff` | Light backgrounds, text on dark |
| **black** | `#000000` | Dark backgrounds, text on light |

### Color Usage Examples

```html
<!-- Text Colors -->
<p class="text-red">Error message</p>
<p class="text-green">Success message</p>
<p class="text-blue">Info message</p>

<!-- Background Colors -->
<div class="bg-red p-2">Alert background</div>
<div class="bg-blue text-white p-4">Primary button</div>
<div class="bg-green text-white p-3">Success box</div>

<!-- Combinations -->
<button class="p-2 m-2 bg-blue text-white font-bold">
  Click Me
</button>

<div class="p-4 bg-green text-white">
  Success message
</div>
```

## 📏 Spacing System

Litewind includes a flexible spacing scale for margins and padding. Spacing values are calculated as `value × 4px`.

### Spacing Values

| Class | Calculation | Pixels |
|---|---|---|
| `p-1`, `m-1` | 1 × 4 | 4px |
| `p-2`, `m-2` | 2 × 4 | 8px |
| `p-3`, `m-3` | 3 × 4 | 12px |
| `p-4`, `m-4` | 4 × 4 | 16px |
| `p-5`, `m-5` | 5 × 4 | 20px |
| `p-6`, `m-6` | 6 × 4 | 24px |
| `p-8`, `m-8` | 8 × 4 | 32px |
| `p-10`, `m-10` | 10 × 4 | 40px |
| `p-12`, `m-12` | 12 × 4 | 48px |

### Padding Examples

```html
<!-- All sides padding -->
<div class="p-4">Padding on all sides</div>

<!-- Apply custom padding -->
<div class="p-3">Small padding</div>
<div class="p-6">Medium padding</div>
<div class="p-8">Large padding</div>

<!-- Combine with other utilities -->
<div class="p-4 bg-blue text-white">
  Padded container
</div>
```

### Margin Examples

```html
<!-- All sides margin -->
<div class="m-4">Margin on all sides</div>

<!-- Apply custom margins -->
<div class="m-2">Small margin</div>
<div class="m-6">Medium margin</div>

<!-- Objects with margins -->
<button class="p-2 m-2 bg-blue text-white">Button with margin</button>
<button class="p-2 m-2 bg-green text-white">Another button</button>
```

## 🔤 Typography

### Font Sizes

Litewind supports standard font sizes for responsive text:

| Class | Size |
|---|---|
| `text-sm` | 12px |
| `text-base` | 16px |
| `text-lg` | 20px |
| `text-xl` | 24px |

### Font Weights

```html
<p class="font-light">Light text (weight: 300)</p>
<p class="font-bold">Bold text (weight: 700)</p>
```

### Text Examples

```html
<!-- Different sizes -->
<p class="text-sm">Small text</p>
<p class="text-base">Base text</p>
<p class="text-lg">Large text</p>
<p class="text-xl">Extra large text</p>

<!-- Text decorations -->
<p class="underline">Underlined text</p>
<p class="line-through">Strikethrough text</p>

<!-- Combining with colors -->
<h1 class="text-xl font-bold text-blue">Heading</h1>
<p class="text-base text-black">Paragraph text</p>
<p class="text-sm text-red">Error message</p>

<!-- Typography example -->
<div class="p-4 bg-white">
  <h1 class="text-xl font-bold text-blue">Welcome</h1>
  <p class="text-base p-2">This is a paragraph with base size text.</p>
  <button class="p-2 m-2 bg-green text-white font-bold">Click Me</button>
</div>
```

## 🎯 Flexbox Utilities

### Display

```html
<div class="flex">Flex container</div>
```

### Direction

```html
<div class="flex">Row direction (default)</div>
<div class="flex flex-col">Column direction</div>
```

### Alignment

```html
<!-- Center content -->
<div class="flex justify-center items-center p-4 bg-white">
  Content is centered
</div>

<!-- Other alignments -->
<div class="flex p-4 bg-blue text-white">
  <span>Left item</span>
</div>
```

### Flexbox Examples

```html
<!-- Horizontal layout -->
<nav class="flex p-4 bg-black text-white">
  <div>Logo</div>
  <div class="flex">
    <a class="p-2">Home</a>
    <a class="p-2">About</a>
    <a class="p-2">Contact</a>
  </div>
</nav>

<!-- Centered content -->
<div class="flex justify-center items-center p-8">
  <div class="p-4 bg-blue text-white">
    Centered box
  </div>
</div>

<!-- Vertical layout -->
<div class="flex flex-col p-4">
  <h1 class="font-bold">Title</h1>
  <p>Description</p>
  <button class="p-2 m-2 bg-green text-white">Action</button>
</div>

<!-- Multiple items -->
<div class="flex p-4">
  <button class="p-2 m-2 bg-blue text-white">Button 1</button>
  <button class="p-2 m-2 bg-green text-white">Button 2</button>
  <button class="p-2 m-2 bg-red text-white">Button 3</button>
</div>
```

## 🔲 Grid System

### Grid Display & Columns

Create grid layouts with simple column definitions:

```html
<!-- Single column -->
<div class="grid grid-cols-1">Full width</div>

<!-- Two columns -->
<div class="grid grid-cols-2">Two column layout</div>

<!-- Three columns -->
<div class="grid grid-cols-3">Three column layout</div>

<!-- Four columns -->
<div class="grid grid-cols-4">Four column layout</div>
```

### Grid Examples

```html
<!-- Two column layout -->
<div class="grid grid-cols-2 p-4">
  <div class="p-4 bg-blue text-white">Box 1</div>
  <div class="p-4 bg-green text-white">Box 2</div>
  <div class="p-4 bg-red text-white">Box 3</div>
  <div class="p-4 bg-blue text-white">Box 4</div>
</div>

<!-- Three column grid -->
<div class="grid grid-cols-3 p-4">
  <div class="p-4 bg-white">
    <h3 class="font-bold">Card 1</h3>
    <p>Content</p>
  </div>
  <div class="p-4 bg-white">
    <h3 class="font-bold">Card 2</h3>
    <p>Content</p>
  </div>
  <div class="p-4 bg-white">
    <h3 class="font-bold">Card 3</h3>
    <p>Content</p>
  </div>
</div>

<!-- Responsive grid - starts with 1 column -->
<div class="grid grid-cols-1 p-4">
  <div class="p-4 m-2 bg-white">Card 1</div>
  <div class="p-4 m-2 bg-white">Card 2</div>
  <div class="p-4 m-2 bg-white">Card 3</div>
</div>

<!-- Four column grid for images -->
<div class="grid grid-cols-4 p-4">
  <div class="p-4 bg-blue text-white text-center">Image 1</div>
  <div class="p-4 bg-green text-white text-center">Image 2</div>
  <div class="p-4 bg-red text-white text-center">Image 3</div>
  <div class="p-4 bg-blue text-white text-center">Image 4</div>
</div>
```

## 📖 API Reference

### applyStyles()

The main function to initialize Litewind. Call this function once your DOM is ready to parse and apply all utility classes.

```javascript
import { applyStyles } from 'litewind';

// Apply styles to all elements with classes
applyStyles();
```

**Usage:**
```javascript
// In vanilla JavaScript
document.addEventListener('DOMContentLoaded', () => {
  applyStyles();
});

// In React
useEffect(() => {
  applyStyles();
}, []);

// In Vue
onMounted(() => {
  applyStyles();
});
```

### Supported Utilities

Litewind automatically parses and applies these utility classes:

#### Colors
- `bg-{color}` - Background color (red, blue, green, white, black)
- `text-{color}` - Text color (red, blue, green, white, black)

#### Spacing
- `p-{value}` - Padding (value × 4px)
- `m-{value}` - Margin (value × 4px)

#### Sizing
- `w-{value}` - Width (value × 4px)
- `h-{value}` - Height (value × 4px)

#### Display & Layout
- `flex` - Flexbox container
- `flex-col` - Column direction
- `justify-center` - Center along main axis
- `items-center` - Center along cross axis
- `grid` - Grid container
- `grid-cols-{n}` - Grid with N columns

#### Typography
- `text-{size}` - Font size (sm, base, lg, xl)
- `font-bold` - Bold text
- `font-light` - Light text
- `underline` - Underlined text
- `line-through` - Strikethrough text

### Example: Complete Layout

```javascript
import { applyStyles } from 'litewind';

// Initialize when page loads
window.addEventListener('load', applyStyles);
```

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Litewind App</title>
</head>
<body>
  <!-- Navigation -->
  <nav class="flex p-4 bg-black text-white">
    <div class="font-bold text-lg">Litewind</div>
    <div class="flex">
      <a class="p-2 m-2">Home</a>
      <a class="p-2 m-2">Docs</a>
    </div>
  </nav>

  <!-- Hero Section -->
  <div class="flex flex-col justify-center items-center p-8 bg-blue text-white">
    <h1 class="text-xl font-bold">Welcome to Litewind</h1>
    <p class="text-base p-2">Zero-config CSS utility engine</p>
    <button class="p-2 m-2 bg-green text-white font-bold">Get Started</button>
  </div>

  <!-- Grid Section -->
  <div class="grid grid-cols-3 p-4">
    <div class="p-4 m-2 bg-white">
      <h3 class="font-bold">Fast</h3>
      <p>Lightweight and optimized</p>
    </div>
    <div class="p-4 m-2 bg-white">
      <h3 class="font-bold">Simple</h3>
      <p>No configuration needed</p>
    </div>
    <div class="p-4 m-2 bg-white">
      <h3 class="font-bold">Powerful</h3>
      <p>All utilities included</p>
    </div>
  </div>

  <script type="module">
    import { applyStyles } from 'litewind';
    applyStyles();
  </script>
</body>
</html>
```

## ⚡ Performance

Litewind uses an **LRU (Least Recently Used) cache** to maximize performance:

- **Cache Size**: 1000 parsed utility classes (default)
- **Cache Strategy**: Frequently used utilities are kept in memory
- **One-time Parsing**: Each utility class is parsed only once per session
- **Inline Styles**: Direct CSS application bypasses stylesheet overhead

This means:
- ✅ Fast initial load
- ✅ Minimal memory footprint  
- ✅ Instant style application
- ✅ No compilation step required

## 🔧 Browser Support

Litewind works with all modern browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📱 Use Cases

### Landing Pages
```html
<div class="flex flex-col justify-center items-center p-8">
  <h1 class="text-xl font-bold text-blue mb-4">Welcome</h1>
  <button class="p-3 m-2 bg-green text-white">Learn More</button>
</div>
```

### Dashboards
```html
<div class="grid grid-cols-4 gap-4 p-4">
  <div class="p-4 bg-white">Stat 1</div>
  <div class="p-4 bg-white">Stat 2</div>
  <div class="p-4 bg-white">Stat 3</div>
  <div class="p-4 bg-white">Stat 4</div>
</div>
```

### Forms
```html
<div class="flex flex-col p-4">
  <label class="font-bold p-2">Username</label>
  <input class="p-2 m-2 w-48" type="text" />
  <button class="p-2 m-2 bg-blue text-white">Submit</button>
</div>
```

### Cards & Components
```html
<div class="p-4 m-2 bg-white">
  <h3 class="font-bold text-lg">Title</h3>
  <p class="text-base p-2">Description text here</p>
  <button class="p-2 m-2 bg-green text-white">Action</button>
</div>
```

## 📄 License

Litewind is released under the MIT License. See LICENSE file for details.

---

**Built with ❤️ for developers who value simplicity and performance.**

Have questions? Feel free to open an issue or contribute to the project!

### Quick Links

- [GitHub Repository](https://github.com)
- [NPM Package](https://www.npmjs.com/package/litewind)
- [Report Issues](https://github.com)
- [Contribute](https://github.com)

### Version

**v1.0.0** - MIT License | Made with ❤️
