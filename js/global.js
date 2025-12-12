// =============================================
// ASHWIN UTILITY HUB - GLOBAL JAVASCRIPT
// =============================================

// ========== THEME SWITCHER ==========
class ThemeManager {
  constructor() {
    this.currentTheme = localStorage.getItem('theme') || 'light';
    this.applyTheme(this.currentTheme);
    // Stats will be updated after statsTracker is initialized
  }

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    this.currentTheme = theme;
    localStorage.setItem('theme', theme);
    this.updateThemeIcons();
  }

  toggle() {
    const themes = ['light', 'dark', 'neon'];
    const currentIndex = themes.indexOf(this.currentTheme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    this.applyTheme(nextTheme);
    window.updateStats('themeChanges', nextTheme);
  }

  updateThemeIcons() {
    const icons = {
      light: '☀️',
      dark: '🌙',
      neon: '⚡'
    };
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
      themeBtn.innerHTML = icons[this.currentTheme];
    }
  }
}

// ========== CUSTOM CURSOR ==========
class CustomCursor {
  constructor() {
    this.cursor = document.createElement('div');
    this.cursor.className = 'custom-cursor';
    document.body.appendChild(this.cursor);
    
    this.trails = [];
    for (let i = 0; i < 5; i++) {
      const trail = document.createElement('div');
      trail.className = 'custom-cursor-trail';
      document.body.appendChild(trail);
      this.trails.push(trail);
    }
    
    this.positions = [];
    this.init();
  }

  init() {
    document.addEventListener('mousemove', (e) => {
      this.cursor.style.left = e.clientX + 'px';
      this.cursor.style.top = e.clientY + 'px';
      
      this.positions.push({ x: e.clientX, y: e.clientY });
      if (this.positions.length > 5) {
        this.positions.shift();
      }
      
      this.trails.forEach((trail, index) => {
        const pos = this.positions[this.positions.length - 1 - index];
        if (pos) {
          trail.style.left = pos.x + 'px';
          trail.style.top = pos.y + 'px';
        }
      });
    });
  }
}

// ========== LOADER ==========
class Loader {
  constructor() {
    this.loaderElement = document.getElementById('loader');
  }

  hide() {
    if (this.loaderElement) {
      this.loaderElement.classList.add('hidden');
      setTimeout(() => {
        this.loaderElement.style.display = 'none';
      }, 500);
    }
  }

  show() {
    if (this.loaderElement) {
      this.loaderElement.style.display = 'flex';
      this.loaderElement.classList.remove('hidden');
    }
  }
}

// ========== VOICE COMMANDS ==========
class VoiceCommands {
  constructor() {
    this.recognition = null;
    this.isListening = false;
    this.init();
  }

  init() {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.interimResults = false;
      this.recognition.lang = 'en-US';

      this.recognition.onresult = (event) => {
        const command = event.results[event.results.length - 1][0].transcript.toLowerCase().trim();
        this.processCommand(command);
      };

      this.recognition.onerror = (event) => {
        console.error('Voice recognition error:', event.error);
      };
    }
  }

  start() {
    if (this.recognition && !this.isListening) {
      this.recognition.start();
      this.isListening = true;
      this.showVoiceIndicator();
    }
  }

  stop() {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
      this.isListening = false;
      this.hideVoiceIndicator();
    }
  }

  processCommand(command) {
    console.log('Voice command:', command);

    if (command.includes('open timer') || command.includes('show timer')) {
      window.location.href = 'pages/timer.html';
    } else if (command.includes('open todo') || command.includes('add todo')) {
      window.location.href = 'pages/todo.html';
    } else if (command.includes('mood tracker') || command.includes('show mood')) {
      window.location.href = 'pages/mood.html';
    } else if (command.includes('student form') || command.includes('validation')) {
      window.location.href = 'pages/student.html';
    } else if (command.includes('products') || command.includes('shop')) {
      window.location.href = 'pages/products.html';
    } else if (command.includes('home') || command.includes('dashboard')) {
      window.location.href = '../index.html';
    } else if (command.includes('stats') || command.includes('statistics')) {
      window.location.href = 'pages/stats.html';
    }
  }

  showVoiceIndicator() {
    let indicator = document.getElementById('voice-indicator');
    if (!indicator) {
      indicator = document.createElement('div');
      indicator.id = 'voice-indicator';
      indicator.innerHTML = '🎤 Listening...';
      indicator.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 15px 25px;
        border-radius: 50px;
        font-weight: 600;
        z-index: 9999;
        animation: pulse 1s ease-in-out infinite;
      `;
      document.body.appendChild(indicator);
    }
  }

  hideVoiceIndicator() {
    const indicator = document.getElementById('voice-indicator');
    if (indicator) {
      indicator.remove();
    }
  }
}

// ========== KEYBOARD SHORTCUTS ==========
class KeyboardShortcuts {
  constructor() {
    this.init();
  }

  init() {
    document.addEventListener('keydown', (e) => {
      // Voice toggle with 'V'
      if (e.key === 'v' && e.ctrlKey) {
        e.preventDefault();
        if (window.voiceCommands) {
          if (window.voiceCommands.isListening) {
            window.voiceCommands.stop();
          } else {
            window.voiceCommands.start();
          }
        }
      }

      // Number shortcuts (only if not in input field)
      if (!e.target.matches('input, textarea')) {
        switch(e.key) {
          case '1':
            window.location.href = 'pages/student.html';
            break;
          case '2':
            window.location.href = 'pages/timer.html';
            break;
          case '3':
            window.location.href = 'pages/products.html';
            break;
          case '4':
            window.location.href = 'pages/mood.html';
            break;
          case '5':
            window.location.href = 'pages/todo.html';
            break;
          case '0':
            window.location.href = '../index.html';
            break;
        }
      }

      // Easter Egg: A + J together
      if (e.key === 'j' && e.shiftKey && e.ctrlKey) {
        this.showEasterEgg();
      }
    });
  }

  showEasterEgg() {
    const easterEgg = document.createElement('div');
    easterEgg.innerHTML = `
      <div style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 99999;
        animation: fadeIn 0.5s ease;
      ">
        <div style="text-align: center; color: white;">
          <h1 style="font-size: 4rem; margin-bottom: 1rem; animation: float 2s ease-in-out infinite;" class="neon-text">
            ✨ SECRET UNLOCKED ✨
          </h1>
          <p style="font-size: 2rem; font-family: 'Outfit', sans-serif;">
            Made by <strong>Ashwin Jauhary</strong>
          </p>
          <p style="font-size: 1.5rem; margin-top: 1rem; opacity: 0.9;">
            The Creative Beast 🔥
          </p>
          <button onclick="this.parentElement.parentElement.remove()" style="
            margin-top: 2rem;
            padding: 15px 40px;
            background: white;
            color: #667eea;
            border: none;
            border-radius: 50px;
            font-size: 1.2rem;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s ease;
          ">Close</button>
        </div>
      </div>
    `;
    document.body.appendChild(easterEgg);
  }
}

// ========== STATS TRACKER ==========
class StatsTracker {
  constructor() {
    this.stats = this.loadStats();
  }

  loadStats() {
    const defaultStats = {
      totalVisits: 0,
      totalTodos: 0,
      mostChosenMood: {},
      mostSelectedActivity: {},
      mostViewedFeature: {},
      dailyStreak: 0,
      lastVisit: null,
      themeChanges: {
        light: 0,
        dark: 0,
        neon: 0
      }
    };

    const saved = localStorage.getItem('appStats');
    return saved ? { ...defaultStats, ...JSON.parse(saved) } : defaultStats;
  }

  saveStats() {
    localStorage.setItem('appStats', JSON.stringify(this.stats));
  }

  updateStat(key, value) {
    if (typeof this.stats[key] === 'object' && !Array.isArray(this.stats[key])) {
      this.stats[key][value] = (this.stats[key][value] || 0) + 1;
    } else {
      this.stats[key] = value;
    }
    this.saveStats();
  }

  incrementStat(key) {
    this.stats[key] = (this.stats[key] || 0) + 1;
    this.saveStats();
  }

  updateStreak() {
    const today = new Date().toDateString();
    if (this.stats.lastVisit !== today) {
      const lastVisit = new Date(this.stats.lastVisit);
      const todayDate = new Date(today);
      const diffTime = Math.abs(todayDate - lastVisit);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        this.stats.dailyStreak++;
      } else if (diffDays > 1) {
        this.stats.dailyStreak = 1;
      }

      this.stats.lastVisit = today;
      this.saveStats();
    }
  }

  getStats() {
    return this.stats;
  }
}

// ========== DATE & TIME DISPLAY ==========
function updateDateTime() {
  const now = new Date();
  const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  
  const dateTimeStr = now.toLocaleDateString('en-US', options);
  const dateTimeEl = document.getElementById('current-datetime');
  
  if (dateTimeEl) {
    dateTimeEl.textContent = dateTimeStr;
  }
}

// ========== PARTICLES INITIALIZATION ==========
function initParticles() {
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#667eea'
        },
        shape: {
          type: 'circle'
        },
        opacity: {
          value: 0.5,
          random: true
        },
        size: {
          value: 3,
          random: true
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#667eea',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'repulse'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        }
      },
      retina_detect: true
    });
  }
}

// ========== SMOOTH SCROLL ==========
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// ========== NOTIFICATION SYSTEM ==========
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  const colors = {
    success: '#48bb78',
    error: '#f56565',
    warning: '#ed8936',
    info: '#4299e1'
  };

  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: ${colors[type]};
    color: white;
    padding: 15px 25px;
    border-radius: 10px;
    font-weight: 600;
    z-index: 9999;
    animation: slideInRight 0.3s ease;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  `;
  
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// ========== INITIALIZE EVERYTHING ==========
let themeManager, statsTracker, voiceCommands, loader;

document.addEventListener('DOMContentLoaded', () => {
  // Initialize core systems
  themeManager = new ThemeManager();
  statsTracker = new StatsTracker();
  voiceCommands = new VoiceCommands();
  loader = new Loader();
  
  // Initialize features
  new CustomCursor();
  new KeyboardShortcuts();
  
  // Update stats
  statsTracker.updateStreak();
  statsTracker.incrementStat('totalVisits');
  
  // Initialize UI features
  initParticles();
  initSmoothScroll();
  
  // Start date/time updates
  updateDateTime();
  setInterval(updateDateTime, 1000);
  
  // Hide loader after page loads
  window.addEventListener('load', () => {
    setTimeout(() => loader.hide(), 500);
  });
  
  // Theme toggle button
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => themeManager.toggle());
  }

  // Voice command button
  const voiceBtn = document.getElementById('voice-btn');
  if (voiceBtn) {
    voiceBtn.addEventListener('click', () => {
      if (voiceCommands.isListening) {
        voiceCommands.stop();
      } else {
        voiceCommands.start();
      }
    });
  }
});

// Export for global access
window.themeManager = themeManager;
window.statsTracker = statsTracker;
window.voiceCommands = voiceCommands;
window.showNotification = showNotification;
window.updateStats = (key, value) => {
  if (statsTracker) {
    if (value) {
      statsTracker.updateStat(key, value);
    } else {
      statsTracker.incrementStat(key);
    }
  }
};

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
