document.getElementById("animation-main").addEventListener("mouseover", mouseOver);
document.getElementById("animation-main").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("animation-pic").style.marginRight = "1rem";
    document.getElementById("animation-text").style.marginLeft = "1rem";
}

function mouseOut() {
    document.getElementById("animation-pic").style.marginRight = "0rem";
    document.getElementById("animation-text").style.marginLeft = "0rem";
}

