# Mountain Stories

A modern web application showcasing mountain adventures, travel stories, and alpine experiences.

## Features

- **Responsive Design**: Beautifully crafted UI that works seamlessly across all devices
- **Accessibility**: Built with accessibility in mind, including:
  - Screen reader support using AWS Polly for natural-sounding text-to-speech
  - Semantic HTML structure
  - ARIA labels and roles
  - Keyboard navigation support
- **Modern Tech Stack**:
  - React with TypeScript
  - Vite for fast development and building
  - Tailwind CSS for styling
  - AWS Polly for text-to-speech functionality

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- AWS account with Polly service access

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/mountain-stories.git
   cd mountain-stories
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory with your AWS credentials:

   ```
   VITE_AWS_REGION=your-region
   VITE_AWS_ACCESS_KEY_ID=your-access-key
   VITE_AWS_SECRET_ACCESS_KEY=your-secret-key
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Project Structure

```
mountain-stories/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   │   ├── Blog_posts/
│   │   │   ├── AlpineEntries/  # Alpine Journal articles
│   │   │   └── TravelEntries/  # Travel Stories articles
│   ├── App.tsx        # Main application component
│   └── main.tsx       # Application entry point
├── public/            # Static assets
└── index.html         # HTML template
```

## Features in Detail

### Screen Reader Integration

The application includes a screen reader feature powered by AWS Polly, providing natural-sounding text-to-speech for all blog posts. The screen reader:

- Uses the "Danielle" voice for a natural reading experience
- Supports play/pause functionality
- Works across all blog posts in both Alpine Journal and Travel Stories sections
- Provides visual feedback during playback

### Blog Sections

1. **Alpine Journal**

   - Technical climbing articles
   - Mountain weather patterns
   - Safety and equipment guides
   - First ascent stories

2. **Travel Stories**
   - Personal mountain adventures
   - Cultural experiences
   - Hidden valleys and ancient paths
   - Local traditions and cuisine

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- AWS Polly for providing natural-sounding text-to-speech
- The mountain community for inspiration and stories
- All contributors who help make this project better
