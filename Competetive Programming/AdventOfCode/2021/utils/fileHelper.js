import nReadlines from "n-readlines";

/**
 * 
 * @param {object} param
 * @returns {any[]}
 */
export const getLines = ({ filename = "input.txt", encoding = "ascii", delimiter = " ", keys = [], raw = false } = {}) => {
    const broadbandLines = new nReadlines(filename);
    let line;
    const lines = [];
    while ((line = broadbandLines.next())) {
        const foundLine = line.toString(encoding);
        if (raw) {
            lines.push(foundLine);
            continue;
        }
        if (foundLine.trim() === "") {
            continue;
        }
        const arr = foundLine.split(delimiter).map(item => item && typeof +item === "number" && !Number.isNaN(+item) ? +item : item).filter(item => item !== "" && item !== " ");
        const obj = {};
        for (let i = 0; i < keys.length; i++) {
            obj[keys[i]] = arr[i];
        }
        const finalArr = keys.length ? obj : arr;
        const result = arr.length === 1 && keys.length === 0 ? arr[0] : finalArr;
        lines.push(result);
    }
    return lines;
};
