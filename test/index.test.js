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

  it('it should return ["  *  ", " *** ", "*****"] for 3 floors', () => {
    expect(towerBuilder(3)).toStrictEqual(["  *  ", " *** ", "*****"]);
  });

  it('it should return ["   *   ", "  ***  ", " ***** ", "*******"] for 4 floors', () => {
    expect(towerBuilder(4)).toStrictEqual(["   *   ", "  ***  ", " ***** ", "*******"]);
  });

  it('it should return ["     *     ", "    ***    ", "   *****   ", "  *******  ", " ********* ", "***********"] for 6 floors', () => {
    expect(towerBuilder(6)).toStrictEqual(["     *     ","    ***    ","   *****   ","  *******  "," ********* ", "***********"]);
  });

});
