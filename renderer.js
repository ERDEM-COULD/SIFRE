// Buradaki fonksiyonlar yukarıdaki HTML dosyasında belirtilen işlemleri gerçekleştirecek.
function startProcess() {
    document.getElementById('questions').style.display = 'block';
}

function askCharacterType() {
    const length = document.getElementById('length').value;
    if (length >= 6 && length <= 20) {
        document.getElementById('lengthQuestion').style.display = 'none';
        document.getElementById('charTypeQuestion').style.display = 'block';
    } else {
        alert('Lütfen 6 ile 20 arasında bir uzunluk giriniz.');
    }
}

function enableUppercaseQuestion() {
    document.getElementById('uppercaseQuestion').style.display = 'block';
}

function disableUppercaseQuestion() {
    document.getElementById('uppercaseQuestion').style.display = 'none';
}

function askSpecialChar() {
    document.getElementById('charTypeQuestion').style.display = 'none';
    document.getElementById('uppercaseQuestion').style.display = 'none';
    document.getElementById('specialCharQuestion').style.display = 'block';
}

function generatePassword() {
    const length = document.getElementById('length').value;
    const useLetters = document.getElementById('letters').checked || document.getElementById('both').checked;
    const useNumbers = document.getElementById('numbers').checked || document.getElementById('both').checked;
    const useUppercase = document.getElementById('uppercaseYes') && document.getElementById('uppercaseYes').checked;
    const useSpecialChar = document.getElementById('specialCharYes') && document.getElementById('specialCharYes').checked;

    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';

    let charPool = '';
    if (useLetters) charPool += lowerCaseLetters;
    if (useNumbers) charPool += numbers;
    if (useUppercase) charPool += upperCaseLetters;
    if (useSpecialChar) charPool += specialChars;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charPool.length);
        password += charPool[randomIndex];
    }

    document.getElementById('specialCharQuestion').style.display = 'none';
    document.getElementById('passwordResult').style.display = 'block';
    document.getElementById('generatedPassword').innerText = password;
}
