const colors = [
    'blue',
    'red',
    'green',
    'purple',
    'yellow',
    'cyan'
];

var currentColor = colors[0];

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

window.addEventListener('load', function() {
    setupButtons();
}, false);