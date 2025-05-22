// Função para simular fetch de dados reais
async function fetchGames() {
  // Aqui você deveria usar uma API real ou método de scraping com backend.
  // Para demo, retorno dados fixos que se encaixam no método Lay 0x1:
  return [
    {
      homeTeam: "Time A",
      awayTeam: "Time B",
      homeAvgGoals: 2.0,
      awayAvgGoalsAway: 0.5,
      oddsLay01: 12,
      lastMatchesFavorable: true,
      matchDate: "2025-05-21 19:00"
    },
    {
      homeTeam: "Time C",
      awayTeam: "Time D",
      homeAvgGoals: 2.1,
      awayAvgGoalsAway: 0.6,
      oddsLay01: 10,
      lastMatchesFavorable: true,
      matchDate: "2025-05-21 21:00"
    }
  ];
}

function renderGames(games) {
  const container = document.getElementById("games-list");
  if (!games.length) {
    container.innerHTML = "<p>Nenhum jogo pré-live encontrado.</p>";
    return;
  }
  container.innerHTML = "";
  games.forEach(game => {
    const div = document.createElement("div");
    div.classList.add("game-item");
    div.innerHTML = `
      <h2>${game.homeTeam} x ${game.awayTeam}</h2>
      <p><strong>Data:</strong> ${game.matchDate}</p>
      <p><strong>Média gols casa (mandante):</strong> ${game.homeAvgGoals.toFixed(2)}</p>
      <p><strong>Média gols fora (visitante):</strong> ${game.awayAvgGoalsAway.toFixed(2)}</p>
      <p><strong>Odds Lay 0x1:</strong> ${game.oddsLay01}</p>
      <p><strong>Histórico favorável ao método:</strong> ${game.lastMatchesFavorable ? "Sim" : "Não"}</p>
    `;
    container.appendChild(div);
  });
}

async function init() {
  const games = await fetchGames();
  renderGames(games);
}

init();
