function tournamentWinner(competitions, results) {
  let maxValue = -Infinity;
  let maxKey = null;
  let outcomes = new Map();
  for (let index = 0; index < results.length; index++) {
    if (results[index] === 0) {
      if (outcomes.get(competitions[index][1]) === undefined) {
        outcomes.set(competitions[index][1], 3);
      } else {
        outcomes.set(
          competitions[index][1],
          outcomes.get(competitions[index][1]) + 3
        );
      }
    } else if (results[index] === 1) {
      if (outcomes.get(competitions[index][0]) === undefined) {
        outcomes.set(competitions[index][0], 3);
      } else {
        outcomes.set(
          competitions[index][0],
          outcomes.get(competitions[index][0]) + 3
        );
      }
    }
  }

  outcomes.forEach((value, key) => {
    if (value > maxValue) {
      maxValue = value;
      maxKey = key;
    }
    console.log(maxKey, maxValue);
    return maxKey;
  });
  return maxKey;
}

module.exports = tournamentWinner;
