/*
Now that I’m done with the arguments to 'amountFor' , I look back at where it’s
called. It’s being used to set a temporary variable that’s not updated again, so I
apply (Inline Variable):
*/

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
    let volumeCredits = 0;
    let result = `Statement for ${invoice.customer}\n`;
    const format = new Intl.NumberFormat("en-­US", 
      { style: "currency",
        currency: "USD",
        minimumFractionDigits: 2
      }).format;
  
      for (let perf of invoice.performances) {
        //let thisAmount = amountFor(perf); // -> [-]

        volumeCredits += Math.max(perf.audience - 30, 0);
        if ("comedy" === playFor(perf).type) volumeCredits += Math.floor(perf.audience / 5);

        //result += ` ${playFor(perf).name}: ${format(thisAmount / 100)} (${perf.audience} seats)\n`; // -> [-]
        result += ` ${playFor(perf).name}: ${format(amountFor(perf) / 100)} (${perf.audience} seats)\n`; // -> [+]

        //totalAmount += thisAmount; // -> [-]
        totalAmount += amountFor(perf); // -> [+]
      }
    result += `Amount owed is ${format(totalAmount / 100)}\n`;
    result += `You earned ${volumeCredits} credits\n`;
    return result;
}