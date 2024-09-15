// Lower Case
function toLowerCase() {
    const wordInput = document.getElementById('wordInput');
    wordInput.value = wordInput.value.toLowerCase();
}

// Upper Case
function toUpperCase() {
    const wordInput = document.getElementById('wordInput');
    wordInput.value = wordInput.value.toUpperCase();
}

// Reverse the Text
function reverseText() {
    const wordInput = document.getElementById('wordInput');
    wordInput.value = wordInput.value.split('').reverse().join('');
}

// Speak the Text
function speakText() {
    const wordInput = document.getElementById('wordInput').value;
    const speech = new SpeechSynthesisUtterance(wordInput);
    speech.lang = 'en-US';
    window.speechSynthesis.speak(speech);
}

// Copy Text to Clipboard
function copyText() {
    const wordInput = document.getElementById('wordInput');
    wordInput.select();
    document.execCommand('copy');
    alert('Copied to clipboard!');
}

// Add Word to List
function addWord() {
    const wordInput = document.getElementById('wordInput').value;
    if (wordInput) {
        const addedWords = document.getElementById('addedWords');
        addedWords.innerHTML += wordInput + ', ';
        document.getElementById('wordInput').value = ''; // Clear the input
    } else {
        alert('Please enter a word or sentence first.');
    }
}

// Remove Extra Spaces
function removeExtraSpaces() {
    const wordInput = document.getElementById('wordInput');
    wordInput.value = wordInput.value.replace(/\s+/g, ' ').trim(); // Remove extra spaces
}

// Clear Input Field
function clearInput() {
    document.getElementById('wordInput').value = ''; // Clear the textarea
}
