/*
Now I’d like the play name to come from the intermediate data. To do this, I
need to enrich the performance record with data from the play.
At the moment, I’m just making a copy of the performance object, but I’ll
shortly add data to this new record. I take a copy because I don’t want to modify
the data passed into the function. I prefer to treat data as immutable as much as
I can—mutable state quickly becomes something rotten.
*/

function statement(invoice, plays) {
  const statementData = {};
  statementData.customer = invoice.customer;
  // statementData.performances = invoice.performances;   // -> [-]
  statementData.performances = invoice.performances.map(enrichPerformance);   // -> [+]
  return renderPlainText(statementData, plays);

  function enrichPerformance(aPerformance) {   // -> [+]
    const result = Object.assign({}, aPerformance);   // -> [+]
    return result;   // -> [+]
  }
}

function renderPlainText(data, plays) {
  let result = `Statement for ${data.customer}\n`;
  for (let perf of data.performances) { 
    result += ` ${playFor(perf).name}: ${usd(amountFor(perf) / 100)} (${perf.audience} seats)\n`; // -> [+]
  }
  result += `Amount owed is ${usd(totalAmount() / 100)}\n`;
  result += `You earned ${totalVolumeCredits()} credits\n`;
  return result;

  function totalAmount() {
    let result = 0;
    for (let perf of data.performances) { 
      result += amountFor(perf);
    }
    return result;
  }

  function totalVolumeCredits() {
    let result = 0;
    for (let perf of data.performances) { 
      result += volumeCreditsFor(perf);
    }
    return result;
  }

  function usd(aNumber) {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 }).format(
      aNumber
    );
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

  function amountFor(aPerformance) {
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
}
