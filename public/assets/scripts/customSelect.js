
const customSelects = Array.from(document.querySelectorAll(".customSelect"));

for (let customSelect of customSelects) {
    const options = customSelect.children[1].children;
    const selected = customSelect.children[0].children[0];
    const arrow = customSelect.children[0].children[1];

    selected.innerHTML = options[0].innerHTML;

    for (let option of options) {
        option.onclick = () => {
            selected.innerHTML = option.innerHTML;
            customSelect.children[1].classList.toggle("opened");
            arrow.classList.toggle("rotated");
        }
    }
    arrow.onclick = () => {
        customSelect.children[1].classList.toggle("opened");
        arrow.classList.toggle("rotated");
    }
}