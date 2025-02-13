"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrollHandler = scrollHandler;
exports.getDriverById = getDriverById;
exports.drawDriverCard = drawDriverCard;
function scrollHandler(a) {
    if (window.scrollY > 75) {
        document.getElementById("navbar").classList.add("bg-black/90", "border-b", "border-white");
    }
    else {
        document.getElementById("navbar").classList.remove("bg-black/90", "border-b");
    }
    return 23;
}
var Side;
(function (Side) {
    Side["LEFT"] = "left";
    Side["RIGHT"] = "right";
})(Side || (Side = {}));
function getDriverById(id, side) {
    fetch("../json/drivers.json").then(function (response) { return response.json(); }).then(function (data) {
        var driver = data.drivers.find(function (i) { return i.driver_id == id; });
        drawDriverCard(driver, side);
    });
}
function drawDriverCard(data, side) {
    document.getElementById(side).innerHTML = "\n  <div>\n    <h2 class=\"font-semibold text-red-500\">".concat(data.full_name, "</h2>\n  </div>\n\n  ");
}
window.addEventListener("scroll", scrollHandler);
