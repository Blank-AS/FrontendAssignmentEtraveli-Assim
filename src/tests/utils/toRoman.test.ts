import toRoman from "../../utils/toRoman";

describe("toRoman utility function", () => {
  test("converts numbers to Roman numerals correctly", () => {
    expect(toRoman(1)).toBe("I");
    expect(toRoman(4)).toBe("IV");
    expect(toRoman(9)).toBe("IX");
    expect(toRoman(42)).toBe("XLII");
    expect(toRoman(99)).toBe("XCIX");
    expect(toRoman(456)).toBe("CDLVI");
    expect(toRoman(1987)).toBe("MCMLXXXVII");
    expect(toRoman(3999)).toBe("MMMCMXCIX");
  });

  test("throws error for numbers less than 1", () => {
    expect(() => toRoman(0)).toThrowError(
      "The number must be between 1 and 3999, since the Romans didn't have a symbol for 0 or a combination of symbols for numbers greater than 3999."
    );
  });

  test("throws error for numbers greater than 3999", () => {
    expect(() => toRoman(4000)).toThrowError(
      "The number must be between 1 and 3999, since the Romans didn't have a symbol for 0 or a combination of symbols for numbers greater than 3999."
    );
  });
});
