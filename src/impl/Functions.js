const RuntimeError = require('../misc/RuntimeError')

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

    this.functions[funcName] = ctx.body;
  }

  visitFuncCall(ctx, globalCtx) {
    const funcName = ctx.name.getText();

    if (typeof this.functions[funcName] === "undefined") {
      RuntimeError.throw("Calling undeclared function " + funcName, ctx);
    }

    if (this.functions[funcName].constructor.name === "ProgramContext") {
      return globalCtx.visit(this.functions[funcName]);
    }

    return this.functions[funcName](ctx.args_l.args, globalCtx);
  }
}

module.exports = FunctionsImpl;
