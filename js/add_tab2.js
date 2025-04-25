
function add_tab2(rank, isMyRank) {
  // const rankId = isMyRank ? `myRank${rank}` : `tekiRank${rank}`;
  const rankId = (isMyRank ? `myRank${rank}` : `tekiRank${rank}`) + "_tab2";
  const rankElement = document.getElementById(rankId);
  let rankValue = parseInt(rankElement.innerHTML);
  rankValue = Math.min(rankValue + 1, 6);
  rankElement.innerHTML = (rankValue >= 0 ? "+" : "") + rankValue;
}

function subtract_tab2(rank, isMyRank) {
  // const rankId = isMyRank ? `myRank${rank}` : `tekiRank${rank}`;
  const rankId = (isMyRank ? `myRank${rank}` : `tekiRank${rank}`) + "_tab2";
  const rankElement = document.getElementById(rankId);
  let rankValue = parseInt(rankElement.innerHTML);
  rankValue = Math.max(rankValue - 1, -6);
  rankElement.innerHTML = (rankValue >= 0 ? "+" : "") + rankValue;
}
