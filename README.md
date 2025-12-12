# ⚡ Ashwin Utility Hub

A stunning, feature-rich multi-tool dashboard with glassmorphism UI, neon effects, and powerful utilities designed for productivity and daily task management.

![Project Banner](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Usage](#-usage)
- [Screenshots](#-screenshots)
- [Tools & Utilities](#-tools--utilities)
- [Future Enhancements](#-future-enhancements)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

## 🌟 Overview

**Ashwin Utility Hub** is a comprehensive web-based productivity suite designed as a 2nd-year college mini project. It combines multiple essential utilities into a single, beautifully designed interface with modern UI/UX principles including glassmorphism effects, theme switching, and responsive design.

### Purpose
- Centralized platform for daily productivity tools
- Showcase of modern web development techniques
- Educational project demonstrating full-stack frontend capabilities

## ✨ Features

### Core Features
- 🎨 **Multiple Themes**: Light, Dark, and Neon modes
- 📱 **Fully Responsive**: Works on all devices (mobile, tablet, desktop)
- 🎤 **Voice Commands**: Navigate using voice (Ctrl+V to toggle)
- ⌨️ **Keyboard Shortcuts**: Quick navigation with number keys
- 💾 **Local Storage**: All data persists in browser
- 📊 **Statistics Tracking**: Monitor your usage patterns
- ✨ **Glassmorphism UI**: Modern frosted glass design
- 🌈 **Smooth Animations**: Engaging user experience
- 🎯 **Custom Cursor**: Enhanced visual feedback

### Advanced Features
- **Theme Persistence**: Your theme choice is saved
- **Daily Streak Tracking**: Track consecutive usage days
- **Visit Counter**: Monitor total application visits
- **Auto-save**: All changes saved automatically
- **Print Optimization**: Clean printing without decorative elements

## 🛠 Technologies Used

### Frontend
- **HTML5**: Semantic markup and structure
- **CSS3**: 
  - Custom CSS Variables for theming
  - Flexbox & Grid for layouts
  - CSS Animations & Transitions
  - Media Queries for responsiveness
- **JavaScript (Vanilla)**:
  - ES6+ features (Classes, Arrow functions, Template literals)
  - LocalStorage API
  - Web Speech API for voice commands
  - Chart.js for data visualization

### External Libraries
- **Particles.js**: Animated background particles
- **Chart.js**: Beautiful charts for statistics
- **Google Fonts**: Inter & Outfit typefaces

### Design Principles
- Mobile-first responsive design
- Glassmorphism & Neumorphism
- Accessibility best practices
- Progressive enhancement

## 📁 Project Structure

```
ashwin-utility-hub/
├── index.html              # Main dashboard
├── README.md              # Project documentation
├── DOCUMENTATION.md       # Detailed technical documentation
│
├── css/
│   └── global.css         # Global styles and themes
│
├── js/
│   └── global.js          # Core JavaScript functionality
│
├── pages/
│   ├── student.html       # Student form validator
│   ├── timer.html         # Timer & Stopwatch
│   ├── products.html      # Product explorer
│   ├── mood.html          # Mood tracker
│   ├── todo.html          # Smart todo manager
│   └── stats.html         # Usage statistics
│
└── assets/
    └── (images, icons)
```

## 🚀 Installation

### Prerequisites
- Modern web browser (Chrome, Firefox, Edge, Safari)
- Basic understanding of HTML/CSS/JavaScript (for development)

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ashwin-utility-hub.git
   ```

2. **Navigate to project directory**
   ```bash
   cd ashwin-utility-hub
   ```

3. **Open in browser**
   - Simply open `index.html` in your web browser
   - OR use Live Server in VS Code for development

### Using Live Server (Recommended for Development)
```bash
# Install Live Server globally
npm install -g live-server

# Run in project directory
live-server
```

## 📖 Usage

### Navigation

**Keyboard Shortcuts:**
- `1` - Student Form Validator
- `2` - Timer & Stopwatch
- `3` - Product Explorer
- `4` - Mood Tracker
- `5` - Smart Todo
- `0` - Return to Home
- `Ctrl+V` - Toggle Voice Commands
- `Ctrl+Shift+J` - Easter Egg

**Voice Commands:**
Say commands like:
- "Open timer"
- "Show todo"
- "Mood tracker"
- "Go home"

### Theme Switching
Click the theme button in navbar to cycle through:
1. ☀️ Light Theme
2. 🌙 Dark Theme
3. ⚡ Neon Theme

## 📸 Screenshots

### Dashboard
![Dashboard View](screenshots/dashboard.png)

### Tools Overview
![Tools Grid](screenshots/tools.png)

### Dark Theme
![Dark Theme](screenshots/dark-theme.png)

### Neon Theme
![Neon Theme](screenshots/neon-theme.png)

## 🧰 Tools & Utilities

### 1. Student Validator 📘
- Real-time form validation
- AI-like feedback messages
- Fields: Name, Age, Roll Number, Email, Department
- Visual progress indicator

### 2. Timer & Stopwatch ⏱️
- Circular countdown timer
- Precision stopwatch with lap tracking
- Keyboard shortcuts (Space, R, L)
- Audio alarm when timer completes

### 3. Product Explorer 🛒
- Product search and filtering
- Category-based organization
- Compare mode (select 2 products)
- Wishlist functionality
- Sort by price/name

### 4. Mood Tracker 😊
- Daily mood logging (Happy, Sad, Angry, Neutral, Excited)
- Activity tracking
- Monthly heatmap calendar
- Motivational quotes based on mood

### 5. Smart Todo ✅
- Add, edit, delete tasks
- Priority levels (High, Medium, Low)
- Categories (Work, Personal, Shopping, Health)
- Search and filter
- Focus mode
- Progress tracking

### 6. Usage Statistics 📊
- Total visits counter
- Daily streak tracking
- Most used features
- Theme preferences
- Mood trends
- Activity patterns

## 🎯 Future Enhancements

- [ ] Cloud sync for data
- [ ] Export data as PDF/CSV
- [ ] More themes and customization
- [ ] Calendar integration
- [ ] Note-taking feature
- [ ] Weather widget
- [ ] Calculator utility
- [ ] Currency converter
- [ ] Pomodoro technique timer
- [ ] Habit tracker

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ashwin Jauhary**
- 2nd Year Engineering Student
- Project: Mini Project for Web Development Course
- Year: 2024-2025

---

## 🙏 Acknowledgments

- Google Fonts for beautiful typography
- Chart.js for data visualization
- Particles.js for background effects
- Unsplash for placeholder images
- All open-source contributors

## 📞 Contact

For queries and suggestions:
- Email: your.email@example.com
- GitHub: [@yourusername](https://github.com/yourusername)

---

<div align="center">
  Made with ❤️ by Ashwin Jauhary
  <br>
  ⭐ Star this repo if you find it helpful!
</div>
