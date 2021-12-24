import { getLines } from "../../utils/fileHelper.js";

const lines = getLines();
const coordinates = lines.map((arr) => {
    const [x1, y1] = arr[0].split(",").map(Number);
    const [x2, y2] = arr[2].split(",").map(Number);
    return { x1, x2, y1, y2 };
});
const table = [];

const add = (cell) => (cell !== undefined ? cell + 1 : 1);

for (const coordinate of coordinates) {
    const { x1, x2, y1, y2 } = coordinate;
    if (!table[x1]) table[x1] = [];
    if (!table[x2]) table[x2] = [];
    const minY = Math.min(y1, y2);
    const maxY = Math.max(y1, y2);
    const minX = Math.min(x1, x2);
    const maxX = Math.max(x1, x2);
    const isInLine = (x, y) => (y - y1) * (x2 - x1) === (x - x1) * (y2 - y1);
    for (let x = minX; x <= maxX; x++) {
        if (!table[x]) table[x] = [];
        for (let y = minY; y <= maxY; y++) {
            if (isInLine(x, y)) {
                table[x][y] = add(table[x][y]);
            }
        }
    }
}

const result = table.flat().filter(item => item > 1).length;
console.log(result);
