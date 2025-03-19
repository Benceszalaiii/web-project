document.addEventListener("DOMContentLoaded", async () => {
  const driverDropdown1 = document.getElementById("driver1");
  const driverDropdown2 = document.getElementById("driver2");
  const driverCard1 = document.getElementById("left");
  const driverCard2 = document.getElementById("right");

  let driver1Data = null;
  let driver2Data = null;

  try {
    const response = await fetch("json/drivers.json");
    const data = await response.json();
    const drivers = data.drivers;

    drivers.forEach((driver) => {
      const option1 = document.createElement("option");
      option1.value = driver.driver_id;
      option1.textContent = driver.full_name;
      driverDropdown1.appendChild(option1);

      const option2 = document.createElement("option");
      option2.value = driver.driver_id;
      option2.textContent = driver.full_name;
      driverDropdown2.appendChild(option2);
    });

    function updateDriverCard(dropdown, card, side) {
      const selectedDriver = drivers.find((driver) => driver.driver_id === dropdown.value);
      if (!selectedDriver) return;

      if (side === "left") {
        driver1Data = selectedDriver;
      } else {
        driver2Data = selectedDriver;
      }

      function compareMoreIsBetter(stat1, stat2) {
        if (driver1Data && driver2Data) {
          return stat1 > stat2 ? ["text-red-500", ""] : stat1 < stat2 ? ["", "text-red-500"] : ["", ""];
        }
        return ["", ""];
      }

      function compareLessIsBetter(stat1, stat2) {
        if (driver1Data && driver2Data) {
          return stat1 < stat2 ? ["text-red-500", ""] : stat1 > stat2 ? ["", "text-red-500"] : ["", ""];
        }
        return ["", ""];
      }

      function compareBestFinish(finish1, finish2) {
        if (!finish1 || !finish2 || !finish1.includes(",") || !finish2.includes(",")) return ["", ""];
        
        const bestFinish1 = parseInt(finish1.split("x")[0]) || 0;
        const bestFinish2 = parseInt(finish2.split("x")[0]) || 0;

        if (bestFinish1 < bestFinish2) {
          return ["text-red-500", ""];
        } else if (bestFinish1 > bestFinish2) {
          return ["", "text-red-500"];
        } else {
          const times1 = parseInt(finish1.split(",")[1]?.split("x")[0]) || 0;
          const times2 = parseInt(finish2.split(",")[1]?.split("x")[0]) || 0;

          return times1 > times2 ? ["text-red-500", ""] : times1 < times2 ? ["", "text-red-500"] : ["", ""];
        }
      }

      card.innerHTML = `
        <div class="driver-card-content">
          <div style="display: flex; justify-content: center; margin-bottom: 20px;">
            <img src="${selectedDriver.headshot_url}" alt="${selectedDriver.full_name}" class="driver-img mb-4" style="height: 250px; width: auto;" />
          </div>
          <h2 class="text-2xl font-bold mb-2">${selectedDriver.full_name} (${selectedDriver.name_acronym})</h2>
          <p><strong>Team:</strong> ${selectedDriver.team}</p>
          <p><strong>Country:</strong> ${selectedDriver.country}</p>
          <p class="${compareMoreIsBetter(driver1Data?.race_starts, driver2Data?.race_starts)[side === "left" ? 0 : 1]}"><strong>Race Starts:</strong> ${selectedDriver.race_starts}</p>
          <p class="${compareMoreIsBetter(driver1Data?.wins, driver2Data?.wins)[side === "left" ? 0 : 1]}"><strong>Wins:</strong> ${selectedDriver.wins}</p>
          <p class="${compareMoreIsBetter(driver1Data?.pole_positions, driver2Data?.pole_positions)[side === "left" ? 0 : 1]}"><strong>Pole Positions:</strong> ${selectedDriver.pole_positions}</p>
          <p class="${compareMoreIsBetter(driver1Data?.podiums, driver2Data?.podiums)[side === "left" ? 0 : 1]}"><strong>Podiums:</strong> ${selectedDriver.podiums}</p>
          <p class="${compareMoreIsBetter(driver1Data?.points_scored, driver2Data?.points_scored)[side === "left" ? 0 : 1]}"><strong>Points Scored:</strong> ${selectedDriver.points_scored}</p>
          <p class="${compareMoreIsBetter(driver1Data?.world_championships, driver2Data?.world_championships)[side === "left" ? 0 : 1]}"><strong>World Championships:</strong> ${selectedDriver.world_championships}</p>
          <p class="${compareBestFinish(driver1Data?.best_finish, driver2Data?.best_finish)[side === "left" ? 0 : 1]}"><strong>Best Finish:</strong> ${selectedDriver.best_finish}</p>
          <p class="${compareLessIsBetter(driver1Data?.avarage_finish, driver2Data?.avarage_finish)[side === "left" ? 0 : 1]}"><strong>Average Finish:</strong> ${selectedDriver.avarage_finish}</p>
          <p class="${compareLessIsBetter(driver1Data?.retirements, driver2Data?.retirements)[side === "left" ? 0 : 1]}"><strong>Retirements:</strong> ${selectedDriver.retirements}</p>
          <p><strong>First GP:</strong> ${selectedDriver.first_gp}</p>
        </div>
      `;
    }

    driverDropdown1.addEventListener("change", () => updateDriverCard(driverDropdown1, driverCard1, "left"));
    driverDropdown2.addEventListener("change", () => updateDriverCard(driverDropdown2, driverCard2, "right"));

  } catch (error) {
    console.error("Error loading drivers:", error);
  }
});
