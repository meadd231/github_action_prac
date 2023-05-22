const Calculate = require('../../calculate');
const calculate = new Calculate();

describe("Function Class", () => {

  beforeEach(() => {

  });

  test("addFunction Test", async () => {
    const x = 1;
    const y = 2;
    const result = 3;

    expect(calculate.add(x, y)).toEqual(result);
  });

  test("calculate Test", async () => {

  });
});