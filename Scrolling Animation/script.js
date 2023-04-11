
const boxes = document.querySelectorAll('.box')
var head = document.getElementsByTagName('head')[0];

// boxes.forEach((b, idx) => {

//     if (idx % 2 == 0)
//         b.innerHTML = "Hello from Ironman";
//     else
//         b.innerHTML = "Hello from Thanos";
// })

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBotttom = window.innerHeight / 5 * 4;

    boxes.forEach(b => {
        const boxTop = b.getBoundingClientRect().top;

        if (boxTop < triggerBotttom) {
            b.classList.add('show');
        }
        else {
            b.classList.remove('show');
        }
    })
}