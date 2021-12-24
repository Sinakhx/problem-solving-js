import { getLines } from "../../utils/fileHelper.js";

const [initialTimers] = getLines({ delimiter: "," });
let fishes = initialTimers.slice();
const divisor = 7;
const duration = 80;

const mod = (a, b) => {
    if (a == b + 2) return b + 1;
    if (a == b + 1) return b + 1;
    if (a == b) return b;
    return ((a % b) + b) % b;
}

let zeroes = 0;
for (let i = 0; i < duration; i++) {    
    const newFishes = fishes.slice();
    for (let j = 0; j < zeroes; j++){
        newFishes.push(divisor + 3);
    }
    zeroes = 0;
    fishes = newFishes.map(fish => {
        const res = mod(fish - 1, divisor);
        if (res === 0) zeroes++;
        return res;
    });
}

console.log(fishes.length)