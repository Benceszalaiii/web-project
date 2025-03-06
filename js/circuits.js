document.addEventListener('DOMContentLoaded', () => {
    fetch('./json/circuits.json')
      .then(response => response.json())
      .then(circuits => {
        const circuitsSection = document.getElementById('circuits-section');
        Object.values(circuits).forEach(circuit => {
          const circuitCard = document.createElement('article');
          circuitCard.className = 'circuit-card';
          circuitCard.innerHTML = `
            <h2 class="circuit-name">${circuit.circuit_name}</h2>
            <p class="circuit-location">${circuit.location}</p>
            <p class="circuit-length">Length: ${circuit.length}</p>
            <p class="circuit-turns">Turns: ${circuit.turns}</p>
            <p class="circuit-laps">Laps: ${circuit.laps}</p>
            <p class="circuit-race-distance">Race Distance: ${circuit.race_distance}</p>
            <p class="circuit-lap-record">Lap Record: ${circuit.lap_record}</p>
          `;
          circuitsSection.appendChild(circuitCard);
        });
      })
      .catch(error => console.error('Error loading circuits:', error));
  });