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
├── assets/            # Static assets and images
│
├── components/        # Reusable UI components
│   ├── ArticleCard.tsx    # Blog post card component
│   ├── GlobeScene.tsx     # 3D globe visualization
│   ├── Navigation.tsx     # Main navigation component
│   ├── ScreenReader.tsx   # AWS Polly integration
│   └── SpinningGlobe.tsx  # Animated globe component
│
├── content_data/      # Meta data management
│   ├── alpineArticles/    # Alpine Journal content
│   └── travelArticles/    # Travel Stories content
│
├── pages/             # Page components
│   ├── Home.tsx           # Landing page with globe
│   ├── About.tsx          # About section
│   ├── AlpineJournal.tsx  # Alpine Journal section
│   ├── Poetry.tsx         # Poetry section
│   ├── TravelStories.tsx  # Travel Stories section
│   ├── Blog_posts/        # Individual blog posts
│   └── poems/        # Individual poems
│
├── App.tsx            # Main application component
├── main.tsx           # Application entry point
├── index.css          # Global styles
```

### Key Components 🎯

- **ScreenReader**: AWS Polly integration for natural text-to-speech 🔊
- **GlobeScene**: Interactive 3D globe visualization 🌍
- **ArticleCard**: Consistent blog post preview cards 📝
- **Navigation**: Clean, accessible navigation system 🧭
- **Content Data**: Organized content management system 📚

### Screen Reader Feature 🎧

- Powered by AWS Polly's "Danielle" voice 🗣️
- Natural-sounding narration for all content 🎵
- Simple play/pause controls ⏯️
- Visual feedback during playback 👀
- Downloadable MP3 file for later use![floppy disk icon]
- Dynamic file name to match story title

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
