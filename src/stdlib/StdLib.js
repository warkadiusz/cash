const Function = require('../misc/BuiltInFunction');
const RuntimeError = require("../misc/RuntimeError");
const fs = require("fs");

const StdLib = {
  stack: null,
  getValue(name) {
    return this.stack.peek().memory[name].value
  },
  setReturnValue(val) {
    this.stack.peek().returnValue = val;
  },
  functions: {}
};

StdLib.functions["print"] = new Function("print", ["msg"], function () {
  console.log(StdLib.getValue("msg"));
});

StdLib.functions["add"] = new Function("add", ["a", "b"], function () {
  StdLib.setReturnValue(StdLib.getValue("a") + StdLib.getValue("b"));
});

StdLib.functions["sub"] = new Function("sub", ["a", "b"], function () {
  StdLib.setReturnValue(StdLib.getValue("a") - StdLib.getValue("b"));
});

StdLib.functions["exit"] = new Function("exit", ["code"], function () {
  process.exit(StdLib.getValue("code"));
});

StdLib.functions["fileExists"] = new Function("fileExists", ["path"], function () {
  const filePath = StdLib.getValue("path");
  StdLib.setReturnValue(fs.existsSync(filePath));
});

StdLib.functions["readFile"] = new Function("readFile", ["path"], function (callContext) {
  const filePath = StdLib.getValue("path");
  if (fs.existsSync(filePath)) {
    StdLib.setReturnValue(fs.readFileSync(filePath).toString())
  } else {
    RuntimeError.throw("File " + filePath + " cannot be read. Call", callContext);
  }
});

StdLib.functions["writeFile"] = new Function("writeFile", ["path", "contents"], function (callContext) {
  const filePath = StdLib.getValue("path");
  try {
    fs.accessSync(filePath, fs.W_OK | fs.R_OK)
    fs.writeFileSync(filePath, StdLib.getValue("contents"))
  } catch {
    RuntimeError.throw("File " + filePath + " cannot be written to. Call", callContext);
  }
});

StdLib.functions["array"] = new Function("array", [], function() {
  StdLib.setReturnValue([])
});

StdLib.functions["arraySet"] = new Function("arraySet", ["arr", "key", "val"], function() {
  const arr = StdLib.getValue("arr");
  const key = StdLib.getValue("key");

  arr[key] = StdLib.getValue("val");

  StdLib.setReturnValue(arr);
});

StdLib.functions["arrayGet"] = new Function("arrayGet", ["arr", "key"], function(){
  const arr = StdLib.getValue("arr");
  const key = StdLib.getValue("key");
  StdLib.setReturnValue(arr[key])
});

module.exports = StdLib;
