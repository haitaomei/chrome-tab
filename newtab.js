document.addEventListener('DOMContentLoaded', function() {
  // Dynamic greeting based on time of day
  const greetingElement = document.getElementById('greeting');
  const hour = new Date().getHours();
  let greeting;

  if (hour < 12) {
    greeting = 'Good morning';
  } else if (hour < 18) {
    greeting = 'Good afternoon';
  } else {
    greeting = 'Good evening';
  }

  if (greetingElement) {
    greetingElement.textContent = `${greeting} Haitao`;
  }

  // Search functionality
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');

  if (searchForm) {
    searchForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const query = searchInput.value;
      if (query) {
        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.location.href = googleSearchUrl;
      }
    });
  }

  // Animated background (Vanta.js) — randomly pick one of three effects
  if (window.VANTA) {
    const effects = {
      DOTS: {
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x203aff,
        color2: 0x3e3eca,
        showLines: false,
        backgroundColor: 0x141313,
      },
      HALO: {
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        backgroundColor: 0xb0c16,
        amplitudeFactor: 1.10,
        xOffset: 0.02,
        yOffset: 0.02,
        size: 1.30
      },
      BIRDS: {
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x50505,
        color1: 0x4a00ff,
        color2: 0x8ac5ff,
        colorMode: "lerp",
        birdSize: 0.50,
        wingSpan: 10.00,
        speedLimit: 4.00,
        separation: 41.00,
        cohesion: 100.00,
        backgroundAlpha: 0.01
      },
      RINGS: {
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x151718,
        color: 0x0,
        backgroundAlpha: 0.91
      }
    };

    const available = Object.keys(effects).filter(name => typeof VANTA[name] === 'function');

    let vantaInstance = null;
    function applyEffect(name) {
      if (vantaInstance) {
        vantaInstance.destroy();
        vantaInstance = null;
      }
      if (name && effects[name] && typeof VANTA[name] === 'function') {
        vantaInstance = VANTA[name](effects[name]);
      }
    }

    function resolveChoice(pref) {
      if (pref === 'none') return null;
      if (pref && pref !== 'auto') return pref;
      // auto: random among available effects plus a "none" option
      const pool = available.concat([null]);
      return pool[Math.floor(Math.random() * pool.length)];
    }

    const picker = document.getElementById('bg-picker');
    const saved = localStorage.getItem('bgEffect') || 'auto';
    if (picker) {
      picker.value = saved;
      picker.addEventListener('change', function() {
        localStorage.setItem('bgEffect', picker.value);
        applyEffect(resolveChoice(picker.value));
      });
    }

    applyEffect(resolveChoice(saved));
  }
});
