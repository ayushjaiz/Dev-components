const labels = document.querySelectorAll(".form-control label");

labels.forEach((l) => {
  console.log(l.innerText);
  l.innerHTML = l.innerText
    .split('')
    .map(
      (letter, idx) => `<span
        style="transition-delay:${idx * 50}ms">
        ${letter}
        </span>`
    )
    .join('');
});
