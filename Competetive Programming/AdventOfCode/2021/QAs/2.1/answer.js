import { getLines } from "../../utils/fileHelper.js";

const lines = getLines({ keys: ["direction", "number"] });

let HPosition = 0;
let depth = 0;

for (let i = 0; i < lines.length; i++) {
    const { direction, number } = lines[i];
    if (direction === "up") depth -= number;
    if (direction === "down") depth += number;
    if (direction === "forward") HPosition += number;
}

console.log(HPosition * depth);
