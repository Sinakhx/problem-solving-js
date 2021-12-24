import { getLines } from "../../utils/fileHelper.js";

const lines = getLines({ keys: ["direction", "number"] });

let HPosition = 0;
let depth = 0;
let aim = 0;

for (let i = 0; i < lines.length; i++) {
    const { direction, number } = lines[i];
    if (direction === "up") {
        aim -= number;
    }
    if (direction === "down") {
        aim += number;
    }
    if (direction === "forward") {
        HPosition += number;
        depth += aim * number;
    }
}

console.log(HPosition * depth);
