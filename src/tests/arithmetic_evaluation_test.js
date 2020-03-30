const TestCase = require('./TestCase')
const Assert = require('assert');

class ArithmeticEvaluationTest extends TestCase {
  testAddition() {
    super.executeCode("print(2+5)", (err, stdout, stderr) => {
      Assert.equal(stderr, "");
      Assert.equal(stdout.trim(), "7");
    })
  }

  testMultipleAdditions() {
    super.executeCode("print(2+5 + 10 +17 +100)", (err, stdout, stderr) => {
      Assert.equal(stderr, "");
      Assert.equal(stdout.trim(), "134");
    })
  }

  testMultiplication() {
    super.executeCode("print(2*5)", (err, stdout, stderr) => {
      Assert.equal(stderr, "");
      Assert.equal(stdout.trim(), "10");
    })
  }

  testMultiMultiplication() {
    super.executeCode("print(2*5 * 100)", (err, stdout, stderr) => {
      Assert.equal(stderr, "");
      Assert.equal(stdout.trim(), "1000");
    })
  }

  testOrderOfOperations() {
    super.executeCode("print(2+5 * 100)", (err, stdout, stderr) => {
      Assert.equal(stderr, "");
      Assert.equal(stdout.trim(), "502");
    })

    super.executeCode("print(2*7 + 5*100 / 2 - 8)", (err, stdout, stderr) => {
      Assert.equal(stderr, "");
      Assert.equal(stdout.trim(), "256");
    })
  }
};

ArithmeticEvaluationTest.prototype.run()
