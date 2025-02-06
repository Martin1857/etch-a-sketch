function createGrid(size) {
    const container = document.getElementById('gridContainer');
    container.innerHTML = ''; 
    
    let squareSize = 500 / size;
    
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.opacity = 0;
        
        square.addEventListener('mouseenter', () => {
            let opacity = parseFloat(square.style.opacity);
            if (opacity < 1) {
                square.style.opacity = opacity + 0.1;
            }
            square.style.backgroundColor = randomColor();
        });
        
        container.appendChild(square);
    }
}

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function setGridSize() {
    let size = parseInt(prompt("Enter grid size (max 100):"));
    if (size > 100) size = 100;
    if (size && size > 0) createGrid(size);
}

createGrid(16); 