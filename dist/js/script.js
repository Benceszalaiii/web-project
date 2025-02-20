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
    fetch(`../json/drivers.json`).then(response => response.json()).then((data) => {
        const driver = data.drivers.find((i) => i.driver_id == id);
        drawDriverCard(driver, side);
    });
}
function drawDriverCard(data, side) {
    document.getElementById(side).innerHTML = `
  <div>
    <h2 class="font-semibold text-red-500">${data.full_name}</h2>
  </div>

  `;
}
window.addEventListener("scroll", scrollHandler);
//# sourceMappingURL=script.js.map