const rightSide = document.querySelector(".right-side");
const leftSide = document.querySelector(".left-side");
const briefInfo = document.querySelector(".brief-info");

function reorderOnResize() {
    const width = window.innerWidth;

    if (width < 960) {
        briefInfo.insertAdjacentElement("afterend", rightSide);
    } else {
        leftSide.insertAdjacentElement("afterend", rightSide);
    }
    if (width >= 480) {
        burgerSections.classList.add("hidden");
    }
}

window.addEventListener("resize", reorderOnResize);
window.addEventListener("DOMContentLoaded", reorderOnResize);
