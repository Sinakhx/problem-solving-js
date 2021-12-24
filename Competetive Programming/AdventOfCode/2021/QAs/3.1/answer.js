import { getLines } from "../../utils/fileHelper.js";

const lines = getLines({ delimiter: "" });

let gamma = "";
let epsilon = "";

const half = lines.length / 2;
const onesArr = lines.reduce((prevLine, line) => line.map((n, i) => n + prevLine[i]));
onesArr.forEach((onesCount) => {
    if (Number(onesCount > half)) {
        gamma += "1";
        epsilon += "0";
    } else {
        gamma += "0";
        epsilon += "1";
    }
});
console.log(parseInt(+gamma, 2) * parseInt(+epsilon, 2));
