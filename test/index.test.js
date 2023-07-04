const { towerBuilder } = require("../src/index");

test("test towerBuilder", () => {
  expect(towerBuilder(0)).toBe(true);
});
