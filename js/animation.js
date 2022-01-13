document.getElementById("animation-main").addEventListener("click", mouseOver);
document.getElementById("animation-pic").style.transition = "all 1.2s";
document.getElementById("animation-text").style.transition = "all 1.2s";
let count = 0;

function mouseOver() {
    document.getElementById("animation-pic").style.marginLeft = "5rem";
    document.getElementById("animation-text").style.marginRight = "7rem";
    if (count === 1) {
        document.getElementById("animation-pic").style.marginLeft = "0rem";
        document.getElementById("animation-text").style.marginRight = "0rem";
        count = -1;
    }
    count += 1;
}
