import { describe, it, expect } from "vitest";
import { calculateTotal } from "./calculateTotal";

describe("calcuateTotal", () => {
  it("multiplies price by quantity", () => {
    expect(calculateTotal(100, 3)).toBe(300);
  });

  it("returns zero when quantity is zero", () => {
    expect(calculateTotal(100, 0)).toBe(0);
  });
});
