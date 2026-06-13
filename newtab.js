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

  // Animated birds background (Vanta.js)
  if (window.VANTA && window.VANTA.BIRDS) {
    VANTA.BIRDS({
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
    });
  }
});
