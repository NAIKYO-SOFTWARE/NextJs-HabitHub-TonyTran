import { sum2Number } from "../../app/twosum/sum2number";

describe("sum", () => {
  it("correctly adds two numbers", () => {
    expect(sum2Number(1, 2)).toBe(3);
    expect(sum2Number(-1, -2)).toBe(-3);
    expect(sum2Number(-1, 1)).toBe(0);
  });

  it("works with zero", () => {
    expect(sum2Number(0, 0)).toBe(0);
    expect(sum2Number(0, 5)).toBe(5);
    expect(sum2Number(-5, 0)).toBe(-5);
  });
});
