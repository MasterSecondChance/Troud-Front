# 👔 Troud - Modern Clothing Exchange Platform

<div align="center">

![Troud Preview](preview.png)

[![Netlify Status](https://api.netlify.com/api/v1/badges/1615fde3-6155-4136-9aab-ab6f500f34aa/deploy-status)](https://app.netlify.com/sites/troud/deploys)
[![Node.js](https://img.shields.io/badge/Node.js-20.19.2-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![Webpack](https://img.shields.io/badge/Webpack-5.99.9-blue.svg)](https://webpack.js.org/)

**Troud** - The app to search, find, and exchange clothes! 🔄

</div>

---

## 📝 Description

Troud is a modern web application designed to help users search, find, and exchange both used and new clothes. Built with cutting-edge technologies and a user-friendly interface, Troud makes clothing exchange simple and sustainable.

### 🎯 Features

By visiting this website, users can:

- ✅ **Register or Login** - Secure authentication system
- 🖼️ **Upload Profile Images** - Personalized user profiles  
- 👕 **Upload Clothes & Accessories** - Share items you no longer use
- 💖 **Like, Dislike, or Super-like** - Interactive clothing rating system
- 💬 **Chat via WhatsApp** - Connect with users when there's a match
- ✏️ **Edit Information** - Update user and clothing details
- 🏙️ **Location-based** - Find clothes in your city
- 📱 **Responsive Design** - Works on all devices

---

## 🚀 Technology Stack

### **Frontend (Modernized 2024)**
- **React** `18.3.1` - Modern UI library with Hooks & Concurrent Features
- **React Router** `6.30.1` - Modern routing with latest navigation APIs
- **Webpack** `5.99.9` - Modern bundling with asset modules
- **Sass** `1.89.2` - Modern CSS preprocessing (Dart Sass)
- **Axios** `1.10.0` - HTTP client for API calls
- **React Toastify** `6.0.8` - Beautiful notifications
- **FontAwesome** `5.13.1` - Icon library

### **Backend**
- **Express.js** - Fast, minimalist web framework
- **MongoDB** - NoSQL database for flexible data storage
- **Passport.js** - Authentication middleware
- **Cloudinary** - Image hosting and optimization
- **UUID** - Unique identifier generation

### **Development Tools**
- **Node.js** `20.19.2 LTS` - JavaScript runtime
- **Jest** `29.7.0` - Modern testing framework  
- **ESLint** `9.29.0` - Code linting with modern rules
- **Babel** `7.x` - JavaScript transpilation
- **Webpack Dev Server** `5.2.2` - Hot reload development server

---

## 📋 Prerequisites

Before starting, ensure you have the following installed:

- **Node.js** `20.19.2` or higher (LTS recommended)
- **npm** `10.9.2` or higher
- **Git** for version control

### System Requirements

- **OS:** macOS, Linux, or Windows 10+
- **RAM:** 4GB minimum (8GB recommended)
- **Storage:** 500MB free space

---

## ⚡ Quick Start

### 1. Clone the Repository

```bash
# Frontend
git clone https://github.com/MasterSecondChance/Troud-Front.git
cd Troud-Front

# Backend (if needed)
git clone https://github.com/MasterSecondChance/SecondChance_Back.git
```

### 2. Install Dependencies

```bash
# Install all dependencies
npm install

# For legacy compatibility (if needed)
npm install --legacy-peer-deps
```

### 3. Environment Setup

Create a `.env` file in the root directory:

```env
# API Configuration
REACT_APP_API_URL=http://localhost:3000/api
REACT_APP_ENVIRONMENT=development

# Firebase Configuration (if using)
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_domain
```

### 4. Start Development Server

```bash
# Start the development server
npm start

# The app will open at http://localhost:8080
```

---

## 🛠️ Available Scripts

### **Development**
```bash
npm start              # Start development server with hot reload
npm run build          # Build for production
npm run build:quiet    # Build with minimal output
```

### **Code Quality**
```bash
npm run eslint         # Lint and fix JavaScript/React code
npm run format         # Format code with Prettier
```

### **Testing**
```bash
npm test               # Run test suite
npm run test:watch     # Run tests in watch mode
npm run test:coverage  # Generate coverage report
npm run test:update    # Update test snapshots
```

---

## 📁 Project Structure

```
Troud-Front/
├── 📁 public/              # Static files
│   └── index.html          # HTML template
├── 📁 src/                 # Source code
│   ├── 📁 components/      # React components
│   │   ├── Card/           # Clothing card component
│   │   ├── Header/         # Navigation header
│   │   ├── FullCard/       # Detailed clothing view
│   │   ├── MyClothes/      # User's clothing management
│   │   ├── ProfilePersonal/# User profile management
│   │   └── ...             # Other components
│   ├── 📁 pages/           # Route pages
│   │   ├── Home.jsx        # Home page
│   │   ├── Details.jsx     # Clothing details
│   │   ├── SignIn.jsx      # Authentication
│   │   └── ...             # Other pages
│   ├── 📁 routes/          # React Router configuration
│   ├── 📁 utils/           # Utility functions & context
│   ├── 📁 assets/          # Styles and static assets
│   ├── 📁 __test__/        # Test files
│   └── index.js            # App entry point
├── 📁 api/                 # API integration
├── 📁 dist/                # Production build output
├── package.json            # Dependencies & scripts
├── webpack.config.js       # Webpack configuration
├── firebase.json           # Firebase hosting config
└── README.md              # This file
```

---

## 🚢 Deployment

### **Firebase Hosting**

The project is configured for Firebase hosting:

```bash
# Build the project
npm run build

# Deploy to Firebase (if configured)
firebase deploy
```

### **Netlify Deployment**

Current deployment: [https://troud.netlify.app/](https://troud.netlify.app/)

### **Docker Deployment**

```dockerfile
# Dockerfile example
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8080
CMD ["npm", "start"]
```

---

## 🧪 Modern Features

### **React 18 Features**
- ✅ **Concurrent Rendering** - Improved performance
- ✅ **createRoot API** - Modern root creation
- ✅ **Automatic Batching** - Optimized state updates
- ✅ **Suspense** - Ready for future data fetching

### **Webpack 5 Features**
- ✅ **Asset Modules** - Built-in asset handling
- ✅ **Tree Shaking** - Optimized bundle size
- ✅ **Module Federation** - Ready for micro-frontends
- ✅ **Persistent Caching** - Faster rebuilds

### **Modern JavaScript**
- ✅ **ES2022+ Features** - Latest JavaScript syntax
- ✅ **Optional Chaining** - Safe property access
- ✅ **Nullish Coalescing** - Better default values
- ✅ **Dynamic Imports** - Code splitting ready

---

## 🔧 Development Tips

### **Hot Reload Development**
The development server supports hot reloading for instant feedback:

```bash
npm start
# Changes to React components will update instantly
# Changes to styles will inject without page refresh
```

### **Debugging**
- Use React DevTools browser extension
- Modern source maps are enabled for debugging
- Console warnings are helpful for development

### **Performance Optimization**
- Images are automatically optimized by Webpack
- Bundle analysis available with webpack-bundle-analyzer
- Code splitting recommendations in build output

---

## 🐛 Troubleshooting

### **Common Issues**

**Port 8080 already in use:**
```bash
# Kill the process using port 8080
lsof -ti:8080 | xargs kill -9
```

**Node.js version issues:**
```bash
# Use Node Version Manager
nvm use 20.19.2
```

**Dependency conflicts:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

**Build failures:**
```bash
# Clean build
rm -rf dist
npm run build
```

---

## 🎨 Design Resources

- **Wireframes & MockUps:** [Figma Project](https://www.figma.com/file/TxD8bIGgXi1UTRwy9BVsA7/Troud?node-id=24%3A3)
- **Color Palette:** Modern, accessible colors
- **Typography:** Clean, readable fonts
- **Icons:** FontAwesome icons for consistency

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### **Code Standards**
- Follow ESLint configuration
- Use Prettier for formatting
- Write tests for new features
- Update documentation

---

## 📊 Project Status

**Current Version:** `1.0.0` (Modernized 2024)

**Modernization Status:** ✅ **COMPLETED**
- **Node.js:** 16.20.2 → 20.19.2 LTS ✅
- **React:** 16.13.1 → 18.3.1 ✅
- **Webpack:** 4.47.0 → 5.99.9 ✅
- **React Router:** 5.3.4 → 6.30.1 ✅
- **All Dependencies:** Updated to 2024 standards ✅

**Performance Metrics:**
- **Bundle Size:** ~318KB (optimized)
- **Build Time:** ~5 seconds
- **Development Server:** Hot reload enabled
- **Test Coverage:** Available with `npm run test:coverage`

---

## 👥 Authors

- **Alexander Alvarez** - Lead Developer
- **Andrés Felipe Carrión** - Frontend Developer
- **Andrés Felipe Chávez** - Backend Developer
- **Felipe Merchán** - UI/UX Designer
- **Luis Ruiz** - Quality Assurance

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE.md](https://gist.github.com/PurpleBooth/LICENSE.md) file for details.

---

## 🌐 Live Demo

**Production:** [https://troud.netlify.app/](https://troud.netlify.app/)

---

<div align="center">

**Made with ❤️ by the Troud Team**

*Contributing to a more sustainable future through clothing exchange*

</div>
