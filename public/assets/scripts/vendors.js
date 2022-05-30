// Vendors Filters
const filtersToggle = document.querySelector(".filters i");
filtersToggle.onclick = () => {
    filtersToggle.parentElement.parentElement.classList.toggle("closed");
}