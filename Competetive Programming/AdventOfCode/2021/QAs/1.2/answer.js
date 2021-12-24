import { getLines } from "../../utils/fileHelper.js";

const lines = getLines();

const sums = [];
for (let i = 0; i < lines.length - 2; i++) {
    sums.push(lines[i] + lines[i + 1] + lines[i + 2]);
}
let count = 0;
for (let i = 1; i < sums.length; i++) {
    if (sums[i] > sums[i - 1]) count++;
}

console.log(count);
