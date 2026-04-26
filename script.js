let points = 100;

const games = [
  {
    teamA: "Fire Hawks",
    teamB: "Shadow Wolves",
    winner: "Fire Hawks",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    teamA: "Steel Titans",
    teamB: "Sky Kings",
    winner: "Sky Kings",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
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
      <iframe width="300" height="170" src="${game.video}" frameborder="0"></iframe>
      <br>
      <input type="number" id="bet-${index}" placeholder="Bet points">
      <br>
      <button onclick="placeBet(${index}, '${game.teamA}')">${game.teamA}</button>
      <button onclick="placeBet(${index}, '${game.teamB}')">${game.teamB}</button>
    `;

    container.appendChild(div);
  });
}

function placeBet(index, team) {
  const betInput = document.getElementById(`bet-${index}`);
  const bet = parseInt(betInput.value);

  if (!bet || bet > points) {
    alert("Invalid bet");
    return;
  }

  const game = games[index];

  if (team === game.winner) {
    points += bet; // win = double your bet
    alert("You won!");
  } else {
    points -= bet;
    alert("You lost!");
  }

  document.getElementById("points").innerText = "Points: " + points;
}

renderGames();
