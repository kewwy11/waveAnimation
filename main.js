const labels = document.querySelectorAll('.form-content label');

labels.forEach(label => {
    console.log(label)
    label.innerHTML = label.innerText
    .split('')
    .map((letter, index) => `<span style="transition-delay:${index*50}ms">${letter}</span>`)
    .join('')
});