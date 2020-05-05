const RuntimeError = require('../misc/RuntimeError')
const StackFrame = require('../misc/StackFrame')

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

    this.stack.push(new StackFrame(funcName, this.stack.getCurrentDepth()+1))

    /** Declared function */
    if (this.functions[funcName].constructor.name === "Statement_blockContext") {
      let ret = globalCtx.visit(this.functions[funcName]);
      this.stack.pop();
      return ret;
    }

    /** Built-in function */
    let ret = this.functions[funcName](ctx.args_l.args, globalCtx);
    this.stack.pop();
    return ret;
  }
}

module.exports = FunctionsImpl;
