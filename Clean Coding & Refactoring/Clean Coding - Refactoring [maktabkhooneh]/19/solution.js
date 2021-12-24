// Good
import assert from "assert";

describe("MomentJS", () => {
  it("handles 30 days months", () => {
    let date;
    date = new MomentJS("1/1/2015");
    date.addDays(30);
    assert.equal("1/31/2015", date);
  });
  it("handles leap years", () => {
    let date;
    date = new MomentJS("2/1/2016");
    date.addDays(28);
    assert.equal("02/29/2015", date);
  });
  it("handles non-leap years", () => {
    let date;
    date = new MomentJS("2/1/2015");
    date.addDays(28);
    assert.equal("03/01/2015", date);
  });
});
