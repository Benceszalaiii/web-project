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
    drivers.forEach((driver) => {
      const option1 = document.createElement("option");
      option1.value = driver.driver_id;
      option1.textContent = driver.full_name;
      // option1.className = "bg-black border rounded-none";
      driverDropdown1.appendChild(option1);

      const option2 = document.createElement("option");
      option2.value = driver.driver_id;
      option2.textContent = driver.full_name;

      driverDropdown2.appendChild(option2);
    });

    // Function to update driver card
    function updateDriverCard(dropdown, card) {
      const selectedDriver = drivers.find(
        (driver) => driver.driver_id === dropdown.value
      );

      async function getData() {
        const session = await (
          await fetch(
            `https://api.openf1.org/v1/sessions?session_key=latest&driver_id=${selectedDriver.driver_id}`,
            {
              method: "GET",
              mode: "no-cors",
              allowedHeaders: [
                "Content-Type",
                "Authorization",
                "X-Requested-With",
                "device-remember-token",
                "Access-Control-Allow-Origin",
                "Origin",
                "Accept",
              ],
            }
          )
        ).json();
        const car_data = await (
          await fetch(
            `https://api.openf1.org/v1/car_data?driver_number=${selectedDriver.driver_id}&session_key=latest`,
            {
              method: "GET",
              allowedHeaders: [
                "Content-Type",
                "Authorization",
                "X-Requested-With",
                "device-remember-token",
                "Access-Control-Allow-Origin",
                "Origin",
                "Accept",
              ],
            }
          )
        ).json();
        const position = await (
          await fetch(
            `https://api.openf1.org/v1/position?session_key=latest&driver_number=${selectedDriver.driver_id}`,
            {
              method: "GET",
              mode: "no-cors",
              allowedHeaders: [
                "Content-Type",
                "Authorization",
                "X-Requested-With",
                "device-remember-token",
                "Access-Control-Allow-Origin",
                "Origin",
                "Accept",
              ],
            }
          )
        ).json();
        return { session, car_data, position };
      }
      if (selectedDriver) {
        const res = getData();
        res.then((data) => {
          if (selectedDriver) {
            card.innerHTML = `
              <div class="flex items-center w-full justify-center">
              <img src="${selectedDriver.headshot_url}" alt="${
              selectedDriver.full_name
            }" class="size-48 mt-2 rounded-lg mx-auto" />
              </div>
              <h2 class="text-4xl font-semibold">${selectedDriver.full_name} (${
              selectedDriver.name_acronym
            })</h2>
              <p><strong>Team:</strong> ${selectedDriver.team}</p>

              <p>${data.session.circuit_name}</p>
              <p>${
                data.position.sort((a, b) => {
                  return new Date(b.date) - new Date(a.date);
                })[0].position
              }</p>
              `;
          } else {
            card.innerHTML = "Select a driver";
          }
        });
      }

    }

    // Add event listeners for dropdown changes
    driverDropdown1.addEventListener("change", () =>
      updateDriverCard(driverDropdown1, driverCard1)
    );
    driverDropdown2.addEventListener("change", () =>
      updateDriverCard(driverDropdown2, driverCard2)
    );
  } catch (error) {
    console.error("Error loading driver data:", error);
  }
});
