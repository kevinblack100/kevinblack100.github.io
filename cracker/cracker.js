// ========================================================
// Data

const colors = [
    'blue',
    'red',
    'green',
    'purple',
    'yellow',
    'cyan'
];

var currentColor = colors[0];


const codeLength = 4;
// indices into the colors array
const guesses = [
    [ 0, 1, 2, 3 ] // dummy data for testing
    ];
const maxNumGuesses = 10;


// ========================================================
// Buttons

function setColor(colorIndex) {
    if (colorIndex > 0 && colorIndex < colors.length)
    {
        currentColor = colors[colorIndex];
    }
    // else, keep the current color as it is
    alert('Current color: ' + currentColor);
}

function colorSetter(colorIndex) {
    return function() {
        setColor(colorIndex);
    };
}

function setupButtons() {
    for (var i = 0, N = colors.length; i < N; ++i) {
        const btnId = colors[i] + 'Btn';
        const btn = document.getElementById(btnId);
        btn.onclick = colorSetter(i);
    }
}

// ========================================================
// Grid

function drawGuessGrid() {
    const gridContainer = document.getElementById('guessGrid');
    const N = guesses.length;
    for (var r = 0, M = maxNumGuesses; r < M; ++r) {
        const row = document.createElement('tr');
        const cells = [];
        for (var c = 0, C = codeLength; c < C; ++c) {
            const cell = document.createElement('td');
            // TODO: take out debug string
            cell.innerHTML = 'r: ' + r + ' c: ' + c;
            row.appendChild(cell);
            
            cells.push(cell);
        }
        const guessIndex = (M - r - 1);
        if (guessIndex < N) {
            const guess = guesses[guessIndex];
            for (var c = 0, C = guess.length; c < C; ++c) {
                const cell = cells[c];
                const colorIndex = guess[c];
                const color = colors[colorIndex];
                cell.className = color;
                cell.innerHTML = color;
            }
        }
        else {
            // leave the row blank
            // TODO set up onclick handlers
        }
        gridContainer.appendChild(row);
    }
}

// ========================================================
// General Setup

window.addEventListener('load', function() {
    setupButtons();
    drawGuessGrid();
}, false);