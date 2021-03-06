/*
Now I have a spot for the play, I need to add it. To do that, I need to apply
Move Function (198) to playFor and statement.
I then replace all the references to playFor in renderPlainText to use the data instead.
*/

function statement(invoice, plays) {
  const statementData = {};
  statementData.customer = invoice.customer;
  statementData.performances = invoice.performances.map(enrichPerformance);
  return renderPlainText(statementData, plays);

  function enrichPerformance(aPerformance) {
    const result = Object.assign({}, aPerformance);
    result.play = playFor(result);
    return result;
  }

  function playFor(aPerformance) {   // -> [+]
    return plays[aPerformance.playID];   // -> [+]
  }   // -> [+]
}

function renderPlainText(data, plays) {
  let result = `Statement for ${data.customer}\n`;
  for (let perf of data.performances) { 
    // result += ` ${playFor(perf).name}: ${usd(amountFor(perf) / 100)} (${perf.audience} seats)\n`; // -> [+]
    result += ` ${perf.play.name}: ${usd(amountFor(perf) / 100)} (${perf.audience} seats)\n`; // -> [+]
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
    // if ("comedy" === playFor(aPerformance).type) result += Math.floor(aPerformance.audience / 5);
    if ("comedy" === aPerformance.play.type) result += Math.floor(aPerformance.audience / 5);
    return result;
  }

  // function playFor(aPerformance) {   // -> [-]
  //   return plays[aPerformance.playID];   // -> [-]
  // }   // -> [-]

  function amountFor(aPerformance) {
    let result = 0;
    // switch (playFor(aPerformance).type) {
    switch (aPerformance.play.type) {
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
        // throw new Error(`unknown type: ${playFor(aPerformance).type}`);
        throw new Error(`unknown type: ${aPerformance.play.type}`);
    }
    return result;
  }
}
