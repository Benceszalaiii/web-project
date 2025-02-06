"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrollHandler = scrollHandler;
function scrollHandler(a) {
    if (window.scrollY > 75) {
        document.getElementById("navbar").classList.add("bg-black/90", "border-b", "border-white");
    }
    else {
        document.getElementById("navbar").classList.remove("bg-black/90", "border-b");
    }
    return 23;
}
1;
window.addEventListener("scroll", scrollHandler);
