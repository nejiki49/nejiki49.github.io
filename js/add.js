
function add(rank, isMyRank) {
  const rankId = isMyRank ? `myRank${rank}` : `tekiRank${rank}`;
  const rankElement = document.getElementById(rankId);
  let rankValue = parseInt(rankElement.innerHTML);
  rankValue = Math.min(rankValue + 1, 6);
  rankElement.innerHTML = (rankValue >= 0 ? "+" : "") + rankValue;
}

function subtract(rank, isMyRank) {
  const rankId = isMyRank ? `myRank${rank}` : `tekiRank${rank}`;
  const rankElement = document.getElementById(rankId);
  let rankValue = parseInt(rankElement.innerHTML);
  rankValue = Math.max(rankValue - 1, -6);
  rankElement.innerHTML = (rankValue >= 0 ? "+" : "") + rankValue;
}
