function toggleMethod() {
    const method = document.getElementById('method').value;
    const cesarOptions = document.getElementById('cesar-options');
    if (method === 'cesar') {
        cesarOptions.style.display = 'block';
    } else {
        cesarOptions.style.display = 'none';
    }
}

function encryptMessage() {
    const method = document.getElementById('method').value;
    const message = document.getElementById('message').value;
    let encryptedMessage = '';

    if (method === 'cesar') {
        const rotations = parseInt(document.getElementById('rotations').value);
        encryptedMessage = caesarCipher(message, rotations);
        simulateWheel(rotations);
    } else {
        // Aquí puedes agregar la lógica para el cifrado RSA
        encryptedMessage = 'Cifrado RSA no implementado aún';
    }

    document.getElementById('encrypted-message').value = encryptedMessage;
}

function caesarCipher(str, shift) {
    return str.replace(/[a-z]/gi, function (char) {
        const start = char <= 'Z' ? 65 : 97;
        return String.fromCharCode(((char.charCodeAt(0) - start + shift) % 26) + start);
    });
}

function clearFields() {
    document.getElementById('message').value = '';
    document.getElementById('encrypted-message').value = '';
    if (document.getElementById('rotations')) {
        document.getElementById('rotations').value = '';
    }
    document.getElementById('inner-wheel').style.transform = 'rotate(0deg)';
}

function simulateWheel(rotations) {
    const innerWheel = document.getElementById('inner-wheel');
    const degrees = rotations * (360 / 26);
    innerWheel.style.transform = `rotate(${degrees}deg)`;
}