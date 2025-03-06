

interface DriverLocal {
  driver_id: number,
  full_name: string,
  name_acronym: string,
  team: string,
  headshot_url: string
}



export function scrollHandler(a: Event) {
  if (window.scrollY > 75) {
    document.getElementById("navbar")?.classList.add("bg-black/90", "border-b", "border-white")
  }
  else {
    document.getElementById("navbar")?.classList.remove("bg-black/90", "border-b")
  }
  return 23
}

enum Side {
  LEFT = "left",
  RIGHT = "right"
}

export function getDriverById(id: number, side: Side) {
  fetch(`../json/drivers.json`).then(response => response.json()).then((data) => {
    const driver: DriverLocal = data.drivers.find((i) => i.driver_id == id);
    drawDriverCard(driver, side)
  });
}

export function drawDriverCard(data: DriverLocal, side: Side) {
  const sideElement = document.getElementById(side);
  if (!sideElement) {
    return;
  }
  sideElement.innerHTML = `
    <div>
    <h2 class="font-semibold text-red-500">${data.full_name}</h2>
    </div>
    
    `
}
export async function loadDrivers() {
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
window.addEventListener("scroll", scrollHandler)