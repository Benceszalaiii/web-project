
function getDriverById(driverId) {
  return fetch(`https://api.openf1.org/v1/drivers?driver_number=${driverId}&session_key=latest`)
    .then((response) => response.json())
    .catch((error) => console.error("Error fetching driver by ID:", error));
}

function drawDriverCard(data, side) {
  const sideElement = document.getElementById(side);
  if (!sideElement) return;

  sideElement.innerHTML = `
    <div>
      <h2 class="font-semibold text-red-500">${data.full_name}</h2>
      <p>Team: ${data.team_name}</p>
      <p>Points: ${data.points}</p>
    </div>
  `;
}

// Scroll handler to update navbar style on scroll
function scrollHandler() {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 75) {
    navbar?.classList.add("bg-black/90", "border-b", "border-white");
  } else {
    navbar?.classList.remove("bg-black/90", "border-b");
  }
}

window.addEventListener("scroll", scrollHandler);
