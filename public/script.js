function caesarCipher(text, shift, mode) {
    let result = "";
    shift = shift % 26;

    if (mode === "decrypt") shift = 26 - shift;

    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (char.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);
            let base = (code >= 65 && code <= 90) ? 65 : 97;
            result += String.fromCharCode(((code - base + shift) % 26) + base);
        } else {
            result += char;
        }
    }

    return result;
}

function encrypt() {
    let message = document.getElementById('message').value;
    let shift = parseInt(document.getElementById('shift').value) || 0;
    let result = caesarCipher(message, shift, "encrypt");
    document.getElementById('result').value = result;
}

function decrypt() {
    let message = document.getElementById('message').value;
    let shift = parseInt(document.getElementById('shift').value) || 0;
    let result = caesarCipher(message, shift, "decrypt");
    document.getElementById('result').value = result;
}
