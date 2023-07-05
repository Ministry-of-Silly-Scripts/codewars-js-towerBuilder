const towerBuilder = (nFloors) => {
  if (nFloors === 1) {
    return ["*"]
  }

  return [" * ", "***"]
};

module.exports = {
  towerBuilder,
};
