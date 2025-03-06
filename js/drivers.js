document.addEventListener("DOMContentLoaded", async () => {
    const driverDropdown1 = document.getElementById("driver1");
    const driverDropdown2 = document.getElementById("driver2");
    const driverCard1 = document.getElementById("left");
    const driverCard2 = document.getElementById("right");
  
    try {
      const response = await fetch("json/drivers.json");
      const data = await response.json();
      const drivers = data.drivers;
      
      // Populate dropdowns with driver names
      drivers.forEach(driver => {
        const option1 = document.createElement("option");
        option1.value = driver.driver_id;
        option1.textContent = driver.full_name;
        driverDropdown1.appendChild(option1);
        
        const option2 = document.createElement("option");
        option2.value = driver.driver_id;
        option2.textContent = driver.full_name;
        driverDropdown2.appendChild(option2);
      });
  
      // Function to update driver card
      function updateDriverCard(dropdown, card) {
        const selectedDriver = drivers.find(driver => driver.driver_id === dropdown.value);
        if (selectedDriver) {
          card.innerHTML = `
            <h2 class="text-xl font-bold">${selectedDriver.full_name} (${selectedDriver.name_acronym})</h2>
            <p><strong>Team:</strong> ${selectedDriver.team}</p>
            <img src="${selectedDriver.headshot_url}" alt="${selectedDriver.full_name}" class="w-32 h-32 mt-2 rounded-lg mx-auto" />
          `;
        } else {
          card.innerHTML = "Select a driver";
        }
      }
  
      // Add event listeners for dropdown changes
      driverDropdown1.addEventListener("change", () => updateDriverCard(driverDropdown1, driverCard1));
      driverDropdown2.addEventListener("change", () => updateDriverCard(driverDropdown2, driverCard2));
    } catch (error) {
      console.error("Error loading driver data:", error);
    }
  });