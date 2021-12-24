/*
Now I’ll turn my attention to the next feature change: supporting more categories
of plays, each with its own charging and volume credits calculations.
in this case a natural approach is type polymorphism.
My overall plan is to set up an inheritance hierarchy with comedy and tragedy
subclasses that contain the calculation logic for those cases. Callers call a poly-
morphic amount function that the language will dispatch to the different calcula-
tions for the comedies and tragedies. I’ll make a similar structure for the volume
credits calculation. To do this, I utilize a couple of refactorings. The core refactor-
ing is Replace Conditional with Polymorphism (272).
*/
import createStatementData from './createStatementData.js';

function statement(invoice, plays) {
  return renderPlainText(createStatementData((invoice, plays)));
}

function renderPlainText(data) {
  let result = `Statement for ${data.customer}\n`;
  for (let perf of data.performances) { 
    result += ` ${perf.play.name}: ${usd(perf.amount / 100)} (${perf.audience} seats)\n`;
  }
  result += `Amount owed is ${usd(data.totalAmount / 100)}\n`;
  result += `You earned ${data.totalVolumeCredits} credits\n`;
  return result;
}

function htmlStatement(invoice, plays) {
  return renderHtml(createStatementData(invoice, plays));
}

function renderHtml (data) {
  let result = `<h1>Statement for ${data.customer}</h1>\n`;
  result += "<table>\n";
  result += "<tr><th>play</th><th>seats</th><th>cost</th></tr>";
  for (let perf of data.performances) {
    result += ` <tr><td>${perf.play.name}</td><td>${perf.audience}</td>`;
    result += `<td>${usd(perf.amount)}</td></tr>\n`;
  }
  result += "</table>\n";
  result += `<p>Amount owed is <em>${usd(data.totalAmount)}</em></p>\n`;
  result += `<p>You earned <em>${data.totalVolumeCredits}</em> credits</p>\n`;
  return result;
}

function usd(aNumber) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 }).format(
    aNumber
  );
}

