"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrollHandler = scrollHandler;
exports.getDriverById = getDriverById;
exports.drawDriverCard = drawDriverCard;
exports.loadDrivers = loadDrivers;
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
function loadDrivers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('./json/drivers.json');
            const data = yield response.json();
            const driver1Select = document.getElementById('driver1');
            const driver2Select = document.getElementById('driver2');
            function populateDropdown(dropdown, drivers) {
                drivers.forEach(driver => {
                    const option = document.createElement('option');
                    option.value = driver.driver_id;
                    option.textContent = driver.full_name;
                    dropdown.appendChild(option);
                });
            }
            populateDropdown(driver1Select, data.drivers);
            populateDropdown(driver2Select, data.drivers);
        }
        catch (error) {
            console.error("Error loading drivers data:", error);
        }
    });
}
loadDrivers();
window.addEventListener("scroll", scrollHandler);
