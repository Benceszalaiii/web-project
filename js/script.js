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
exports.getSessionByDriver = getSessionByDriver;
exports.getDriverById = getDriverById;
exports.updateDriverCard = updateDriverCard;
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
function getSessionByDriver(driver) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(``);
    });
}
function getDriverById(driverId) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`https://api.openf1.org/v1/drivers?driver_number=${driverId}&session_key=9158`);
        const driver = yield res.json();
        if (!driver) {
            throw new Error("Driver not found by driver id");
        }
    });
}
function updateDriverCard(dropdown, card) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("json/drivers.json");
        const data = yield response.json();
        const drivers = data.drivers;
        const selectedDriver = drivers.find((driver) => driver.driver_id === parseInt(dropdown.value, 10));
        if (selectedDriver) {
            card.innerHTML = `
      <div class="flex items-center w-full justify-center">
      <img src="${selectedDriver.headshot_url}" alt="${selectedDriver.full_name}" class="size-48 mt-2 rounded-lg mx-auto" />
      </div>
      <h2 class="text-4xl font-semibold">${selectedDriver.full_name} (${selectedDriver.name_acronym})</h2>
      <p><strong>Team:</strong> ${selectedDriver.team}</p>
      `;
        }
        else {
            card.innerHTML = "Select a driver";
        }
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
