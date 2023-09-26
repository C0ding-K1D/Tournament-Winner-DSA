const tournamentWinner = require("../tournamentWinner");

describe("tournamentWinner", () => {
  it("should return the winning team in a round-robin scenario", () => {
    const competitions = [
      ["A", "B"],
      ["B", "C"],
      ["C", "A"],
    ];
    const results = [0, 0, 1];

    expect(tournamentWinner(competitions, results)).toBe("B");
  });

  it("should handle two teams with different outcomes", () => {
    const competitions = [["A", "B"]];
    const results = [1];

    expect(tournamentWinner(competitions, results)).toBe("A");
  });

  it("should handle multiple competitions with a clear winner", () => {
    const competitions = [
      ["A", "B"],
      ["B", "C"],
      ["C", "D"],
      ["D", "E"],
    ];
    const results = [0, 1, 1, 1];

    expect(tournamentWinner(competitions, results)).toBe("D");
  });
});
