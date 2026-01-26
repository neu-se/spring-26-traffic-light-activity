import { describe, it, expect } from "vitest";
import { TrafficLight, type Color } from "./TrafficLight.ts";

describe("tests for timer", () => {
  it("after 17, time should be 16", () => {
    const light = new TrafficLight();
    light.setTime(17);
    light.tick();
    expect(light.timeLeft).toBe(16);
  });

  it("after 1, time should be 15", () => {
    const light = new TrafficLight();
    light.setTime(1);
    light.tick();
    expect(light.timeLeft).toBe(15);
  });
});

function testcolor(color: Color, time: number, expectedColor: Color) {
  it(`after ${time}, ${color} should change to ${expectedColor}`, () => {
    const light = new TrafficLight();
    light.setTime(time);
    light.color = color;
    light.tick();
    expect(light.getColor()).toEqual(expectedColor);
  });
}

describe("tests for colors", () => {
  testcolor("red", 7, "red");
  testcolor("red", 1, "green");
  testcolor("green", 1, "yellow");
  testcolor("yellow", 1, "red");
});
