const container = document.querySelector('.container');
const totalSquare = 800;

for (let index = 0; index < totalSquare; index++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        const randomColor = getRandomColor();

        square.style.backgroundColor = randomColor;

        setTimeout(() => {
            square.style.backgroundColor = 'rgb(29, 29, 29)';
        }, 1000);
    });

    container.appendChild(square);
}

function getRandomColor() {
    return `hsl(${Math.random() * 360}, 100%, 50%)`;
}
