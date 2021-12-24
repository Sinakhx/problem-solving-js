import { getLines } from "../../utils/fileHelper.js";

const lines = getLines({ delimiter: "" });

const find = (type) => {
    let idx = 0;
    let newLines = lines;
    const findRating = (lines) => {
        const half = lines.length / 2;
        const onesArr = lines.reduce((prevLine, line) => line.map((n, i) => n + prevLine[i]));
        const arr = onesArr.map((onesCount) => Number(type === "O2" ? onesCount >= half : onesCount < half));
        newLines = newLines.filter((line) => line[idx] === arr[idx]);
        if (newLines.length > 1) {
            idx++;
            findRating(newLines);
        }
    };
    findRating(newLines);
    const Binary = newLines[0].reduce((str, num) => str + num, "");
    return parseInt(+Binary, 2);
};

console.log(find("O2") * find("CO2"));
