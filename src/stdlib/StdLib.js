const RuntimeError = require("../misc/RuntimeError");
const Function = require('../misc/BuiltInFunction');
const readlineSync = require('readline-sync');
const fs = require("fs");

const StdLib = {
  stack: null,
  getValue(name) {
    return this.stack.peek().memory[name].value
  },
  setReturnValue(val) {
    this.stack.peek().returnValue = val;
  },
  getGlobalValue(name) {
    return this.stack.getRoot().memory[name].value;
  },
  setGlobalValue(name, value) {
    this.stack.getRoot().memory[name].value = value;
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

StdLib.functions["array"] = new Function("array", [], function () {
  StdLib.setReturnValue([])
});

StdLib.functions["arraySet"] = new Function("arraySet", ["arr", "key", "val"], function () {
  const arr = StdLib.getValue("arr");
  const key = StdLib.getValue("key");

  arr[key] = StdLib.getValue("val");

  StdLib.setReturnValue(arr);
});

StdLib.functions["arrayGet"] = new Function("arrayGet", ["arr", "key"], function () {
  const arr = StdLib.getValue("arr");
  const key = StdLib.getValue("key");
  StdLib.setReturnValue(arr[key]);
});

StdLib.functions["arrayPush"] = new Function("arrayPush", ["arr", "val"], function () {
  const arr = StdLib.getValue("arr");
  const val = StdLib.getValue("val");
  arr.push(val)
  StdLib.setReturnValue(arr);
});

StdLib.functions["arraySize"] = new Function("arraySize", ["arr"], function () {
  const arr = StdLib.getValue("arr");
  StdLib.setReturnValue(arr.length);
})

StdLib.functions["concat"] = new Function("concat", ["a", "b"], function () {
  const a = StdLib.getValue("a");
  const b = StdLib.getValue("b");

  StdLib.setReturnValue(a + "" + b)
});

StdLib.functions["readLine"] = new Function("readLine", [], function () {
  StdLib.setReturnValue(readlineSync.question())
});

StdLib.functions["call"] = new Function("call", ["funcName", "data"], function (callContext, visitor) {
  const funcName = StdLib.getValue("funcName");
  const data = StdLib.getValue("data");

  if(!StdLib.functions[funcName]) {
    RuntimeError.throw("Calling undeclared function " + funcName, callContext);
  }
  StdLib.functions[funcName].argsList = {data : data};
  StdLib.functions[funcName].call(callContext, visitor)
});

StdLib.functions["getGlobalVar"] = new Function("getGlobalVar", ["varName"], function() {
  const varName = StdLib.getValue("varName");
  StdLib.setReturnValue(StdLib.getGlobalValue(varName));
});

StdLib.functions["setGlobalVar"] = new Function("setGlobalVar", ["varName", "value"], function () {
  const varName = StdLib.getValue("varName");
  const value = StdLib.getValue("value");

  StdLib.setGlobalValue(varName, value)
});

module.exports = StdLib;
