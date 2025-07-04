const rightSide = document.querySelector(".right-side");
const leftSide = document.querySelector(".left-side");
const briefInfo = document.querySelector(".brief-info");

function reorderOnResize() {
    if (window.outerWidth < 830) {
        briefInfo.insertAdjacentElement("afterend", rightSide);
    } else {
        leftSide.insertAdjacentElement("afterend", rightSide);
    }
    if (window.outerWidth >= 410) {
        burgerSections.classList.add("hidden");
    }
}

window.addEventListener("resize", reorderOnResize);
window.addEventListener("DOMContentLoaded", reorderOnResize);
