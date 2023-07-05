const towerBuilder = (nFloors) => {
  number_stars_last_row = 2 * nFloors - 1
  tower = []

  for (let i = 0; i < number_stars_last_row; i += 2) {
    nspaces = (number_stars_last_row - i - 1)/2
    nstars = number_stars_last_row - 2 * nspaces 
    spaces = " ".repeat(nspaces)
    stars = spaces + "*".repeat(nstars) + spaces 
    tower.push(stars)
  }

  return tower;
};

module.exports = {
  towerBuilder,
};
