/*
I compile-test-commit. With that inlined, I can then apply (Change Function
Declaration) to 'amountFor' to remove the 'play' parameter.
*/

function playFor(aPerformance) {
  return plays[aPerformance.playID];
}

//function amountFor(aPerformance, play){ // -> [-]
function amountFor(aPerformance){ // -> [+]
    let result = 0;
    //switch (play.type) { // -> [-]
    switch (playFor(aPerformance).type) { // -> [+]
      case "tragedy":
        result = 40000;
        if (aPerformance.audience > 30) {
          result += 1000 * (aPerformance.audience - 30);
        }
        break;
      case "comedy":
        result = 30000;
        if (aPerformance.audience > 20) {
          result += 10000 + 500 * (aPerformance.audience - 20);
        }
        result += 300 * aPerformance.audience;
        break;
      default:
        //throw new Error(`unknown type: ${play.type}`); // -> [-]
        throw new Error(`unknown type: ${playFor(aPerformance).type}`); // -> [+]
    }
    return result;
}

function statement(invoice, plays) {
    let totalAmount = 0;
    let volumeCredits = 0;
    let result = `Statement for ${invoice.customer}\n`;
    const format = new Intl.NumberFormat("en-­US", 
      { style: "currency",
        currency: "USD",
        minimumFractionDigits: 2
      }).format;
  
      for (let perf of invoice.performances) {
        //let thisAmount = amountFor(perf, playFor(perf)); // -> [-]
        let thisAmount = amountFor(perf); // -> [+]

        volumeCredits += Math.max(perf.audience - 30, 0);
        if ("comedy" === playFor(perf).type) volumeCredits += Math.floor(perf.audience / 5);
        result += ` ${playFor(perf).name}: ${format(thisAmount / 100)} (${perf.audience} seats)\n`;
        totalAmount += thisAmount;
      }
    result += `Amount owed is ${format(totalAmount / 100)}\n`;
    result += `You earned ${volumeCredits} credits\n`;
    return result;
}

/*
The great benefit of removing local variables is that it makes it much easier to
do extractions, since there is less local scope to deal with. Indeed, usually I’ll
take out local variables before I do any extractions.
*/