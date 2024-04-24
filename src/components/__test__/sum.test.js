import { Sum } from "../Sum";

test("calculate sum of two numbers", () => {
    const result = Sum(2,5);

    expect(result).toBe(7);
});