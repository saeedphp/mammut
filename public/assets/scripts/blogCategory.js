const categories = Array.from(document.querySelectorAll(".categories li button"));

for (let category of categories) {
    category.onclick = () => {
        for (let other of categories) {
            other.classList.remove("active");
        }
        category.classList.add("active");
    }
}