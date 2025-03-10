"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrollHandler = scrollHandler;
exports.getDriverById = getDriverById;
exports.drawDriverCard = drawDriverCard;
function scrollHandler(a) {
    var _a, _b;
    if (window.scrollY > 75) {
        (_a = document.getElementById("navbar")) === null || _a === void 0 ? void 0 : _a.classList.add("bg-black/90", "border-b", "border-white");
    }
    else {
        (_b = document.getElementById("navbar")) === null || _b === void 0 ? void 0 : _b.classList.remove("bg-black/90", "border-b");
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
    const sideElement = document.getElementById(side);
    if (!sideElement) {
        return;
    }
    sideElement.innerHTML = `
    <div>
    <h2 class="font-semibold text-red-500">${data.full_name}</h2>
    </div>
    
    `;
}
window.addEventListener("scroll", scrollHandler);
