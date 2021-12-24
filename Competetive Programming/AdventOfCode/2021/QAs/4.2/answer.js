import lodash from "lodash";
import { getLines } from "../../utils/fileHelper.js";

const [randomNumbers, ...lines] = getLines();

const dices = randomNumbers.split(",").map((i) => +i);
const cards = lodash.chunk(lines, 5);

function find() {
    const seen = new Set();
    let lastBoard;
    for (let i = 0; i < dices.length; i++) {
        const dice = dices[i];
        for (let j = 0; j < cards.length; j++) {
            if (seen.size === cards.length) break;
            const card = cards[j];
            for (let k = 0; k < card.length; k++) {
                const row = card[k];
                for (let l = 0; l < row.length; l++) {
                    if (row[l] === dice) {
                        row[l] = false;
                    }
                }
                // checking if row wins
                if (!seen.has(j) && row.reduce((acc, n) => (n === false ? acc + 1 : acc), 0) === 5) {
                    lastBoard = {
                        sum: card.flat().reduce((acc, n) => acc + n, 0),
                        dice,
                    };
                    seen.add(j);
                }
            }
            const zippedCard = lodash.zip(...card);
            for (let k = 0; k < zippedCard.length; k++) {
                const col = zippedCard[k];
                // checking if col wins
                if (!seen.has(j) && col.reduce((acc, n) => (n === false ? acc + 1 : acc), 0) === 5) {
                    lastBoard = {
                        sum: zippedCard.flat().reduce((acc, n) => acc + n, 0),
                        dice,
                    };
                    seen.add(j);
                }
            }
        }
    }
    return lastBoard;
}

const { sum, dice } = find();
console.log(sum * dice);
