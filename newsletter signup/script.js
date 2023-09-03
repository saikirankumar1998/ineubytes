const toggleBtn = document.getElementById("toggle-btn");
const closeIcon = document.getElementById("close-icon");
const menu = document.querySelector(".nav-links");



toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
   
    toggleCloseIcon();
});

closeIcon.addEventListener("click", () => {
  menu.classList.remove("show");
  toggleCloseIcon();
});

document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && !toggleBtn.contains(event.target)) {
        menu.classList.remove("show");
        
        toggleCloseIcon();
    }
});

function toggleCloseIcon() {
  if (menu.classList.contains("show")) {
    closeIcon.style.display = "block";
  } else {
    closeIcon.style.display = "none";
  }
}

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 0) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});













