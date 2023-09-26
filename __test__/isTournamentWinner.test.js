const tournamentWinner = require("../tournamentWinner");

describe("tournamentWinner", () => {
  it("should return the winning team", () => {
    const competitions = [
      ["A", "B"],
      ["C", "D"],
      ["E", "F"],
    ];
    const results = [0, 1, 0];

    expect(tournamentWinner(competitions, results)).toBe("D");
  });

  it("should handle ties", () => {
    const competitions = [
      ["A", "B"],
      ["C", "D"],
      ["E", "F"],
    ];
    const results = [0, 0, 1];

    expect(tournamentWinner(competitions, results)).toBe("F");
  });

  it("should return the only team if there is only one competition", () => {
    const competitions = [["A", "B"]];
    const results = [1];

    expect(tournamentWinner(competitions, results)).toBe("A");
  });

  it("should handle multiple competitions", () => {
    const competitions = [
      ["A", "B"],
      ["C", "D"],
      ["E", "F"],
      ["G", "H"],
    ];
    const results = [0, 1, 1, 0];

    expect(tournamentWinner(competitions, results)).toBe("G");
  });
});
