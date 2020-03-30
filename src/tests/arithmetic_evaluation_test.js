const TestCase = require('./TestCase')
const Assert = require('assert');

class ArithmeticEvaluationTest extends TestCase {
  testAddition() {
    super.executeCode("print(2+5)", (err, stdout, stderr) => {
      Assert.equal(stderr, "");
      Assert.equal(stdout.trim(), "7");
    })
  }
};

ArtihmeticEvaluationTest.prototype.run()
