const cities = document.querySelectorAll(".cities li a");
const paths = Array.from(document.querySelectorAll("#iranMap a"));
for (let path of paths) {
    path.onmouseenter = () => {
        for (let c of cities) {
            if (c.innerText === path.getAttribute("title")) {
                c.classList.add("hovered")
            }
        }
    }
    path.onmouseleave = () => {
        for (let c of cities) {
            if (c.innerText ===  path.getAttribute("title")) {
                c.classList.remove("hovered")
            }
        }
    }
}
for (let city of cities) {
    city.onmouseenter = () => {
        for (let p of paths) {
            if (p.getAttribute("title") === city.innerText) {
                p.children[0].classList.add("hovered")
            }
        }
    }
    city.onmouseleave = () => {
        for (let p of paths) {
            if (p.getAttribute("title") === city.innerText) {
                p.children[0].classList.remove("hovered")
            }
        }
    }
}