let points = 100;

const games = [
  {
    teamA: "Lakers",
    teamB: "Warriors",
    winner: "Lakers",
    video: "https://www.youtube.com/embed/aqz-KE-bpKQ"
    j
  },
  {
    teamA: "Celtics",
    teamB: "Bulls",
    winner: "Bulls",
    video: "https://www.youtube.com/embed/1a2b3c4d5e6"
  }
];

function renderGames() {
  const container = document.getElementById("games");
  container.innerHTML = "";

  games.forEach((game, index) => {
    const div = document.createElement("div");
    div.className = "game";

    div.innerHTML = `
      <h3>${game.teamA} vs ${game.teamB}</h3>

      <iframe src="${game.video}" frameborder="0" allowfullscreen></iframe>

      <br>

      <input type="number" id="bet-${index}" placeholder="Enter points">

      <br>

      <button onclick="confirmBet(${index}, '${game.teamA}')">${game.teamA}</button>
      <button onclick="confirmBet(${index}, '${game.teamB}')">${game.teamB}</button>

      <div id="result-${index}"></div>
    `;

    container.appendChild(div);
  });
}

function confirmBet(index, team) {
  const betInput = document.getElementById(`bet-${index}`);
  const bet = parseInt(betInput.value);

  if (!bet || bet > points) {
    alert("Invalid bet");
    return;
  }

  // Deduct immediately
  points -= bet;
  updatePoints();

  const resultDiv = document.getElementById(`result-${index}`);

  resultDiv.innerHTML = `
    <p>Bet placed on ${team} for ${bet} points</p>
    <button onclick="showResult(${index}, '${team}', ${bet})">See Result</button>
  `;
}

function showResult(index, team, bet) {
  const game = games[index];
  const resultDiv = document.getElementById(`result-${index}`);

  if (team === game.winner) {
    points += bet * 2; // win = double
    resultDiv.innerHTML += `<p>✅ You won! +${bet}</p>`;
  } else {
    resultDiv.innerHTML += `<p>❌ You lost!</p>`;
  }

  updatePoints();
}

function updatePoints() {
  document.getElementById("points").innerText = "Points: " + points;
}

renderGames();
