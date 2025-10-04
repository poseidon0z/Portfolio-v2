# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This project showcases a clean, professional design with smooth navigation and optimized performance.

## Features

- **Modern Tech Stack**: Built with React 19, TypeScript, and Tailwind CSS 4
- **Responsive Design**: Fully responsive layout that works on all devices
- **Multi-page Navigation**: Organized sections including Landing, Experience, Projects, Skills, and more
- **Professional UI Components**: Reusable components for consistent design
- **Type Safety**: Full TypeScript implementation for robust development
- **Fast Performance**: Powered by Vite for lightning-fast development and builds

## Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Routing**: React Router 7
- **Linting**: ESLint 9

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## Using as a Template

This portfolio can be easily customized for your own use:

### 1. Personal Information
- Update content in `src/pages/` components with your information
- Replace images in `src/assets/` with your own photos and logos
- Modify the navigation structure in `src/App.tsx` if needed

### 2. Styling Customization
- Tailwind CSS configuration can be modified for your color scheme
- Update component styles in respective `.tsx` files
- Custom CSS can be added to `src/index.css`

### 3. Content Structure
- **Landing Page**: Main introduction and hero section
- **Experience**: Professional work history and achievements
- **Projects**: Showcase of your work with descriptions
- **Skills**: Technical skills and competencies
- **Connect**: Contact information and social links

### 4. Assets Organization
- `src/assets/Experience/` - Company logos and work-related images
- `src/assets/Logos/` - Technology and skill icons
- `src/assets/Projects/` - Project screenshots and demos
- `src/assets/Fonts/` - Custom font files

### 5. Component Structure
- `src/components/General/` - Reusable UI components
- `src/components/Experience/` - Experience-specific components
- `src/components/Projects/` - Project-related components
- `src/pages/` - Main page components

## Deployment

The project is configured for easy deployment on platforms like Vercel, Netlify, or any static hosting service.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── General/        # Common components (Navbar, Heading, etc.)
│   ├── Experience/     # Experience-specific components
│   └── Projects/       # Project-related components
├── pages/              # Main page components
├── assets/             # Static assets (images, fonts, icons)
├── context/            # React context providers
└── hooks/              # Custom React hooks
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.
