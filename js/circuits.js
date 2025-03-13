const getGeo = exports.getGeo;
function init(){
    fetch('./json/circuits.json')
    .then(response => response.json())
    .then(circuits => {
      const circuit1Select = document.getElementById('circuit1');
      const circuit2Select = document.getElementById('circuit2');
      
      Object.values(circuits).forEach(circuit => {
        const option1 = document.createElement('option');
        option1.value = circuit.circuit_name;
        option1.textContent = circuit.circuit_name;
        circuit1Select.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = circuit.circuit_name;
        option2.textContent = circuit.circuit_name;
        circuit2Select.appendChild(option2);
      });
      
      circuit1Select.addEventListener('change', () => {
        displayCircuit(circuit1Select.value, 'left', circuits);
      });
      
      circuit2Select.addEventListener('change', () => {
        displayCircuit(circuit2Select.value, 'right', circuits);
      });
    })
    .catch(error => console.error('Error loading circuits:', error));
  };
  
  function displayCircuit(circuitName, side, circuits) {
    const circuit = Object.values(circuits).find(c => c.circuit_name === circuitName);
    if (circuit) {
      getGeo(circuit.geo_id, side); 
      const circuitCard = document.getElementById(side);
      circuitCard.innerHTML = `
      <h2 class="circuit-name">${circuit.circuit_name}</h2>
      <p class="circuit-location">${circuit.location}</p>
      <p class="circuit-length">Length: ${circuit.length}</p>
      <p class="circuit-turns">Turns: ${circuit.turns}</p>
      <p class="circuit-laps">Laps: ${circuit.laps}</p>
      <p class="circuit-race-distance">Race Distance: ${circuit.race_distance}</p>
      <p class="circuit-lap-record">Lap Record: ${circuit.lap_record}</p>
      `;
    }
  
  
}

document.addEventListener("DOMContentLoaded", init)