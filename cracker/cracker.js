// ========================================================
// Data

const colors = [
    'none',
    'blue',
    'red',
    'green',
    'purple',
    'yellow',
    'cyan'
];

var currentColorIndex = 1;


const codeLength = 4;
// stores completed guess
// indices into the colors array
const guesses = [
    [ 1, 2, 3, 4 ], // dummy data for testing
    [ 5, 6, 1, 2 ]
    ];
const maxNumGuesses = 10;

var currentGuess = [ 0, 1, 0, 4 ];


// ========================================================
// Buttons

function setColor(colorIndex) {
    if (colorIndex >= 0 && colorIndex < colors.length)
    {
        currentColorIndex = colorIndex;
    }
    // else, keep the current color as it is
    //alert('Current color: ' + colors[currentColorIndex]);
}

function colorSetter(colorIndex) {
    return function() {
        setColor(colorIndex);
    };
}

function setupButtons() {
    for (var i = 1, N = colors.length; i < N; ++i) {
        const btnId = colors[i] + 'Btn';
        const btn = document.getElementById(btnId);
        btn.onclick = colorSetter(i);
    }
}

// ========================================================
// Guesses

function drawGuessGrid() {
    const gridContainer = document.getElementById('guessGrid');
    gridContainer.innerHTML = "";
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
        if (guessIndex <= N) {
            // TODO end game state don't have any more guesses
            const guess = guessIndex < N ? guesses[guessIndex] : currentGuess;
            for (var c = 0, C = guess.length; c < C; ++c) {
                const cell = cells[c];
                const colorIndex = guess[c];
                const color = colors[colorIndex];
                cell.className = color;
                cell.innerHTML = color;
            }
        }
        // else, leave the row blank
        
        if (guessIndex == N) {
            // set up onclick handlers for the current guess
            for (var c = 0, C = codeLength; c < C; ++c) {
                const cell = cells[c];
                cell.onclick = currentGuessSetter(c);
            }
        }
        gridContainer.appendChild(row);
    }
}

function setCurrentGuess(index) {
    if (index >= 0 && index < codeLength) {
        currentGuess[index] = currentColorIndex;
        drawGuessGrid();
    }
    // else don't do anything
}

function currentGuessSetter(index) {
    return function() {
        setCurrentGuess(index);
    };
}

// ========================================================
// General Setup

window.addEventListener('load', function() {
    setupButtons();
    drawGuessGrid();
}, false);