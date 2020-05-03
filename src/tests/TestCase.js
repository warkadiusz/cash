const fs = require('fs');
const Assert = require('assert');
const exec = require('child_process').exec;

const fmt = {
  Reset: "\x1b[0m",
  FgGreen: "\x1b[32m",
  FgRed: "\x1b[31m",
}

class TestCase {
  executeCode(programCode, callback) {
    let randomFileName = (new Date().getTime()).toString(16) + Math.random();
    fs.writeFileSync("./test_temp_" + randomFileName + ".cash", programCode)
    exec('node ../cash.js test_temp_' + randomFileName + '.cash', function (err, stdout, stderr) {
      callback(err, stdout, stderr);
      fs.unlink("./test_temp_" + randomFileName + ".cash", () => {
      })
    });
  }

  run() {
    Object.getOwnPropertyNames(this)
      .filter(i => typeof this[i] == "function")
      .filter(i => i.match(/^test.*$/))
      .forEach(i => {
        console.log('Running test ' + i + '...')
        this[i]()
        console.log(fmt.FgGreen + "Success. " + fmt.Reset + " Next...")
      })
  }
}

module.exports = TestCase
