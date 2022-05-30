const items = Array.from(document.querySelectorAll(".tabs ul li"));

for (let item of items) {
  item.onclick = () => {
    for (let other of items) other.classList.remove("active");
    item.classList.add("active");
  };
}
