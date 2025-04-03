# Mountain Stories 🏔️

A minimalist web application that brings mountain adventures to life through clean design and modern technology. Built with a focus on content and accessibility, this project showcases how simplicity and innovation can work together.

## Philosophy 🧠

- **Content First**: Clean, readable layouts that put the focus on the stories 📖
- **Accessibility by Design**: Built-in screen reader support and semantic structure ♿
- **Progressive Enhancement**: Modern features enhance the experience without compromising core functionality ⚡
- **Minimalist Aesthetic**: Uncluttered design that lets the content speak for itself 🎨

## Tech Stack 🛠️

- **Core**: React + TypeScript + Vite ⚛️
- **Styling**: Pure CSS3 with modern features (CSS Grid, Flexbox, Custom Properties) 🎨
- **Accessibility**: AWS Polly for natural-sounding text-to-speech 🔊
- **Development**: ESLint for code quality, Vite for fast builds 🚀

## Project Structure 📁

```
src/
├── components/         # Reusable UI components
│   ├── ScreenReader.tsx    # AWS Polly integration
│   ├── Navbar.tsx          # Navigation component
│   └── Footer.tsx          # Footer component
│
├── pages/              # Page components
│   ├── Home.tsx            # Landing page
│   ├── About.tsx           # About section
│   ├── AlpineJournal.tsx   # Alpine Journal section
│   ├── TravelStories.tsx   # Travel Stories section
│   └── Blog_posts/         # Blog post components
│       ├── AlpineEntries/  # Technical climbing content
│       └── TravelEntries/  # Personal mountain adventures
│
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

### Key Components 🎯

- **ScreenReader**: AWS Polly integration for natural text-to-speech 🔊
- **Blog Posts**: Consistent structure with hero sections and semantic content 📝
- **Navigation**: Clean, accessible navigation system 🧭
- **Styling**: Modern CSS with custom properties and responsive design 🎨

### Screen Reader Feature 🎧

- Powered by AWS Polly's "Danielle" voice 🗣️
- Natural-sounding narration for all content 🎵
- Simple play/pause controls ⏯️
- Visual feedback during playback 👀

## Design Principles 🎨

- **Typography**: Clean, readable fonts with proper hierarchy ✒️
- **Spacing**: Generous whitespace for better readability 📏
- **Color**: Subtle, nature-inspired palette 🎨
- **Responsiveness**: Fluid layouts that work on all devices 📱
- **Performance**: Optimized assets and minimal dependencies ⚡

## Development Approach 💻

- **Component-Based**: Reusable, focused components 🔄
- **Type Safety**: Full TypeScript support 🛡️
- **Modern CSS**: Using native CSS features instead of frameworks 🎯
- **Accessibility First**: Built-in screen reader and semantic markup ♿

## Acknowledgments 🙏

- AWS Polly for providing natural-sounding text-to-speech 🔊
- The mountain community for inspiration and stories 🏔️
