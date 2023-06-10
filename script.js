// Generate random RGB color values
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Create a mesh gradient effect
function createMeshGradient() {
    const meshBg = document.getElementById('mesh-bg');

    // Generate the CSS gradient string
    let gradient = 'linear-gradient(to right, ';
    for (let i = 0; i < 10; i++) {
        const color1 = getRandomColor();
        const color2 = getRandomColor();
        gradient += `${color1}, ${color2}`;
        if (i < 9) {
            gradient += ', ';
        }
    }
    gradient += ')';

    // Apply the gradient as the background
    meshBg.style.background = gradient;

    // Schedule the next gradient change after 3 seconds
    setTimeout(createMeshGradient, 3000);
}

// Start the mesh gradient effect
createMeshGradient();