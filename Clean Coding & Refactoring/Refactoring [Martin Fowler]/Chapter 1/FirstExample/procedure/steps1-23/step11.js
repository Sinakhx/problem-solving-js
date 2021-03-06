/*
Gathering together everything that updates the volumeCredits variable makes it
easier to do (Replace Temp with Query). As before, the first step is to apply
(Extract Function) to the overall calculation of the variable.
*/

function totalVolumeCredits() {
  let volumeCredits = 0;
  for (let perf of invoice.performances) {
    volumeCredits += volumeCreditsFor(perf);
  }
  return volumeCredits;
}

function usd(aNumber) {
  return new Intl.NumberFormat("en-US",
    { style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(aNumber);
}

function volumeCreditsFor(aPerformance) { 
  let result = 0;
  result += Math.max(aPerformance.audience - 30, 0);
  if ("comedy" === playFor(aPerformance).type) result += Math.floor(aPerformance.audience / 5);
  return result;
}

function playFor(aPerformance) {
  return plays[aPerformance.playID];
}

function amountFor(aPerformance){
    let result = 0;
    switch (playFor(aPerformance).type) {
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
        throw new Error(`unknown type: ${playFor(aPerformance).type}`);
    }
    return result;
}

function statement(invoice, plays) {
    let totalAmount = 0;
    let result = `Statement for ${invoice.customer}\n`;
    for (let perf of invoice.performances) {
      result += ` ${playFor(perf).name}: ${usd(amountFor(perf) / 100)} (${perf.audience} seats)\n`; // -> [+]
      totalAmount += amountFor(perf);
    }

    //let volumeCredits = 0; // -> [-]
    //for (let perf of invoice.performances) { // -> [-]
    //  volumeCredits += volumeCreditsFor(perf); // -> [-]
    //} // -> [-]

    result += `Amount owed is ${usd(totalAmount / 100)}\n`;

    /* Once everything is extracted, I can apply (Inline Variable) */
    //result += `You earned ${volumeCredits} credits\n`;// -> [-]
    result += `You earned ${totalVolumeCredits()} credits\n`;// -> [+]

    return result;
}