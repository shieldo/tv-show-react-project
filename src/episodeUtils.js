function episodeCode({ season, number }) {
  return `S${padToTwoDigits(season)}E${padToTwoDigits(number)}`;
}

function padToTwoDigits(number) {
  return number.toString().padStart(2, "0");
}

export { episodeCode };
