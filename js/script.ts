

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

window.addEventListener("scroll", scrollHandler)