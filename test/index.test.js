const { towerBuilder } = require("../src/index");

describe('the towerBuilder canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe('towerBuilder', () => {
  it('it should return ["*"] for 1 floor', () => {
    expect(towerBuilder(1)).toStrictEqual(["*"]);
  });

  it('it should return [" * ", "***"] for 2 floors', () => {
    expect(towerBuilder(2)).toStrictEqual([" * ", "***"]);
  });
});
