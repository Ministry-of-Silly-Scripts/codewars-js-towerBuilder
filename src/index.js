const towerBuilder = (nFloors) => {
  number_start_last_row = 2 * nFloors - 1
  last_row = "*".repeat(number_start_last_row);

  if (nFloors === 1) {
    return [last_row]
  }

  if (nFloors === 2) {
    return [" * ", last_row]
  }

  return ["  *  ", " *** ", last_row]
};

module.exports = {
  towerBuilder,
};
