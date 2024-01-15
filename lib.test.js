import { vowelShift } from "./lib";

describe("vowelShift tests", () => {
  it.each([
    { s: "foo", n: 1, expected: "foo" },
    { s: "hello", n: 1, expected: "holle" },
    { s: "hello child", n: 1, expected: "hille chold" },
    { s: "star nosed mole", n: 2, expected: "stor nesad mole" },
    { s: "funnily enough", n: 4, expected: "finnely onuugh" },
  ])("$s shifted by $n => $expected", ({ s, n, expected }) => {
    expect(vowelShift(s, n)).toBe(expected);
  });
});
