

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



interface DriverData {
  driver_number: number;
  broadcast_name: string;
  full_name: string;
  name_acronym: string;
  team_name: string;
  team_colour: string;
  first_name: string;
  last_name: string;
  headshot_url: string;
  country_code: string;
  session_key: number;
  meeting_key: number;
}


export async function getSessionByDriver(driver: DriverData){
  const res = await fetch(``);
}

export async function getDriverById(driverId: number){
  const res = await fetch(`https://api.openf1.org/v1/drivers?driver_number=${driverId}&session_key=9158`)
  const driver: DriverData = await res.json();
  if (!driver){
    throw new Error("Driver not found by driver id");
  }
  
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