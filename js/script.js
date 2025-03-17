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
