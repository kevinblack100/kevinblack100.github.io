
var currentToken = "";
function setToken(value) {
    currentToken = value;
    const tokenMsg = document.getElementById('tokenMsg');
    tokenMsg.innerHTML = 'Current token: "' + currentToken + '"';
}

function getToken() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == XMLHttpRequest.DONE && xhttp.status == 200) {
            const resObj = JSON.parse(xhttp.responseText);
            setToken(resObj.token);
        }
    };
    xhttp.open('GET', 'token_as_json', true);
    xhttp.send();
}

function validateToken() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == XMLHttpRequest.DONE && xhttp.status == 200) {
            const resObj = JSON.parse(xhttp.responseText);
            const validMsg = document.getElementById('validMsg');
            validMsg.innerHTML = 'Token valid: ' + resObj.valid;
        }
    };
    const url = 'token_as_json_validator/' + currentToken;
    console.log('Sending request GET ' + url);
    xhttp.open('GET', url, true);
    xhttp.send();
}

window.addEventListener('load', function() {
    const getTokenBtn = document.getElementById('getTokenBtn');
    getTokenBtn.onclick = getToken;
    
    setToken("");
    
    const validateTokenBtn = document.getElementById('validateTokenBtn');
    validateTokenBtn.onclick = validateToken;
});