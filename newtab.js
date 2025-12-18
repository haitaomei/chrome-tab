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

  // Create 3D shapes in background
  create3DShapes();
});

function create3DShapes() {
  const shapesContainer = document.createElement('div');
  shapesContainer.className = 'shapes-container';

  // Create Cube
  const cube = document.createElement('div');
  cube.className = 'shape-3d cube';
  const faces = ['front', 'back', 'right', 'left', 'top', 'bottom'];
  faces.forEach(face => {
    const faceDiv = document.createElement('div');
    faceDiv.className = `cube-face ${face}`;
    cube.appendChild(faceDiv);
  });
  shapesContainer.appendChild(cube);

  // Create Cone
  const cone = document.createElement('div');
  cone.className = 'shape-3d cone';
  const coneBase = document.createElement('div');
  coneBase.className = 'cone-base';
  const coneSide = document.createElement('div');
  coneSide.className = 'cone-side';
  cone.appendChild(coneBase);
  cone.appendChild(coneSide);
  shapesContainer.appendChild(cone);

  // Create Möbius Strip
  const mobius = document.createElement('div');
  mobius.className = 'shape-3d mobius';
  const mobiusStrip = document.createElement('div');
  mobiusStrip.className = 'mobius-strip';
  mobius.appendChild(mobiusStrip);
  shapesContainer.appendChild(mobius);

  // Add container to body
  document.body.insertBefore(shapesContainer, document.body.firstChild);
}
