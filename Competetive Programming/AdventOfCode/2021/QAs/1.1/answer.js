import { getLines } from "../../utils/fileHelper.js";

const lines = getLines();

let count = 0;
for (let i = 1; i < lines.length; i++) {
    if (lines[i] > lines[i - 1]) count++;
}

console.log(count);
