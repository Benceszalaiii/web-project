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


    async function loadDrivers() {
        try {
          const response = await fetch('./json/drivers.json');
          const data = await response.json();
          
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
        } catch (error) {
          console.error("Error loading drivers data:", error);
        }
      }
  
      loadDrivers();