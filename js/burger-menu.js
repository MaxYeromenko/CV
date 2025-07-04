const burgerMenuButton = document.getElementById("burger-menu-button");
const burgerSections = document.querySelector(".burger-menu");

burgerMenuButton.addEventListener("click", (e) => {
    e.stopPropagation();
    burgerSections.classList.toggle("hidden");
});

document.addEventListener("click", (e) => {
    const isClickInsideMenu = burgerSections.contains(e.target);
    const isClickOnButton = burgerMenuButton.contains(e.target);

    if (!isClickInsideMenu && !isClickOnButton) {
        burgerSections.classList.add("hidden");
    }
});
