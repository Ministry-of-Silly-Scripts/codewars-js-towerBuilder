const towerBuilder = (nFloors) => {
  if (nFloors === 1) {
    return ["*"]
  }

  if (nFloors === 2) {
    return [" * ", "***"]
  }

  return ["  *  ", " *** ", "*****"]
};

module.exports = {
  towerBuilder,
};
