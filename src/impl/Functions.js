const RuntimeError = require('../misc/RuntimeError');
const StackFrame = require('../misc/StackFrame');
const Function = require('../misc/Function');

class FunctionsImpl {
  constructor(stack, functions) {
    this.stack = stack;
    this.functions = functions;
  }

  visitFuncDeclaration(ctx, globalCtx) {
    const funcName = ctx.name.getText();

    if (typeof this.functions[funcName] !== "undefined") {
      RuntimeError.throw("Cannot redeclare function " + funcName, ctx);
    }

    const argsList = [];
    for (const k in ctx.args_l.args) {
      const parameterName = ctx.args_l.args[k].getText();
      argsList.push(parameterName);
    }

    this.functions[funcName] = new Function(funcName, argsList, ctx.body);
  }

  visitFuncCall(ctx, globalCtx) {
    const funcName = ctx.name.getText();

    if (typeof this.functions[funcName] === "undefined") {
      RuntimeError.throw("Calling undeclared function " + funcName, ctx);
    }
    const funcParameters = this.functions[funcName].argsList;
    const actualParameters = ctx.args_l.args;

    if (actualParameters.length !== funcParameters.length) {
      return this.argumentsMiscount(actualParameters.length, funcParameters.length, ctx);
    }

    const stackFrame = new StackFrame(funcName, this.stack.getCurrentDepth() + 1);
    for (const arg in funcParameters) {
      let actualParameter = globalCtx.visit(actualParameters[arg])
      if (typeof actualParameter === "undefined") {
        actualParameter = this.stack.peek().memory[actualParameters[arg].getText()];
      }

      if (typeof actualParameter === "undefined") {
        RuntimeError.throw("Cannot establish parameter \"" + funcParameters[arg] + "\" value at function \"" + funcName + "\" call.", ctx);
      }

      stackFrame.memory[funcParameters[arg]] = actualParameter;
    }

    this.stack.push(stackFrame);

    /** Declared function */
    if (this.functions[funcName].bodyContext.constructor.name === "Statement_blockContext") {
      let ret = globalCtx.visit(this.functions[funcName].bodyContext);
      this.stack.pop();
      return ret;
    }

    /** Built-in function */
    let ret = this.functions[funcName].bodyContext(globalCtx, this.stack);
    this.stack.pop();
    return ret;
  }

  argumentsMiscount(expected, provided, ctx) {
    RuntimeError.throw("Function arguments miscount. Provided "
      + provided
      + " arguments while function expects "
      + expected,
      ctx
    );
  }
}

module.exports = FunctionsImpl;
