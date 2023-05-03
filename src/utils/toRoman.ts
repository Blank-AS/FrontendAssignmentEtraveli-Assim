const toRoman = (num: number): string => {
  if (num < 1 || num > 3999) {
    throw new Error(
      "The number must be between 1 and 3999, since the Romans didn't have a symbol for 0 or a combination of symbols for numbers greater than 3999."
    );
  }

  const romanSymbols: [number, string][] = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  let roman: string = "";

  for (const [value, symbol] of romanSymbols) {
    while (num >= value) {
      roman += symbol;
      num -= value;
    }
  }

  return roman;
};

export default toRoman;