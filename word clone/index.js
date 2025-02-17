let ettext = document.getElementById('write');
const colorPicker = document.getElementById('colorPicker');
const numberPicker = document.getElementById('numberPicker');
const fontPicker = document.getElementById('fontPicker');

function changeAppearance() {
    ettext.style.color = colorPicker.value;
    ettext.style.fontSize = numberPicker.value + 'px';
    ettext.style.fontFamily = fontPicker.value;
}

colorPicker.addEventListener('input', changeAppearance);
numberPicker.addEventListener('input', changeAppearance);
fontPicker.addEventListener('change', changeAppearance);
