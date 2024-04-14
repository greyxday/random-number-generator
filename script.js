const button = document.getElementById('lebutton');
const resultField = document.getElementById('result-field')
const clearButton = document.getElementById('clearbutton')

button.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 1000000000) + 1;

resultField.value = randomNumber;
});

clearButton.addEventListener('click', () => {
    const clearTheNumber = resultField.value = '';
});