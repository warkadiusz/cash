const TestCase = require('./TestCase')
const Assert = require('assert');

/** Little polyfill for node 10 */
if (typeof Assert.match === "undefined") {
  Assert.match = function (value, regExp) {
    if (!value.match(regExp)) {
      throw new Assert.AssertionError({
        message: "Failed asserting that \""
          + value.slice(0, 30)
          + "...\" matches expected \""
          + regExp.toString().slice(0, 30) + '..."'
      })
    }
  }
}

class VariablesAndConstsTest extends TestCase {
  async testSimpleVariableDeclaration() {
    super.executeCode("let a = 7\nprint(a)", (err, stdout, stderr) => {
      Assert.equal(stderr, "");
      Assert.equal(stdout.trim(), "7");
    })
  }

  async testVariableRedeclaration() {
    super.executeCode("let a = 7\nlet a = 15", (err, stdout, stderr) => {
      Assert.notEqual(stderr, "");
      Assert.match(stderr, /Cannot redeclare variable a at line 2 column 0/);
    })
  }

  async testVariableAssignment() {
    super.executeCode("let a = 7\na = 15\nprint(a)", (err, stdout, stderr) => {
      Assert.equal(stderr, "");
      Assert.equal(stdout.trim(), "15")
    })
  }

  async testConstantDeclaration() {
    super.executeCode("const a = 7\nprint(a)", (err, stdout, stderr) => {
      Assert.equal(stderr, "");
      Assert.equal(stdout.trim(), "7")
    })
  }

  async testConstantReDeclarationFails() {
    super.executeCode("const a = 7\na = 15\nprint(a)", (err, stdout, stderr) => {
      Assert.notEqual(stderr, "");
      Assert.match(stderr, /Cannot re-assign the constant a at line 2 column 0/);
    })
  }

  async testAssignExpressionToVariable() {
    super.executeCode("const a = 7\nlet b = 15\nlet c=a+b\nprint(c)", (err, stdout, stderr) => {
      Assert.equal(stderr, "");
      Assert.equal(stdout.trim(), "22");
    })
  }
}

VariablesAndConstsTest.prototype.run()
