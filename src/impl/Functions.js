const RuntimeError = require('../misc/RuntimeError');
const StackFrame = require('../misc/StackFrame');
const Function = require('../misc/DeclaredFunction');
const Variable = require('../misc/Variable');

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

  visitFuncCall(callContext, visitor) {
    const funcName = callContext.name.getText();

    if (typeof this.functions[funcName] === "undefined") {
      RuntimeError.throw("Calling undeclared function " + funcName, callContext);
    }

    const funcParameters = this.functions[funcName].argsList;
    const actualParameters = callContext.args_l.args;

    if (actualParameters.length !== funcParameters.length) {
      return this.argumentsMiscount(actualParameters.length, funcParameters.length, callContext);
    }

    const stackFrame = new StackFrame(funcName, this.stack.getCurrentDepth() + 1);
    for (const arg in funcParameters) {
      let actualParameter = visitor.visit(actualParameters[arg])
      if (typeof actualParameter === "undefined") {
        actualParameter = this.stack.peek().memory[actualParameters[arg].getText()];
      }

      if (typeof actualParameter === "undefined") {
        RuntimeError.throw("Cannot establish parameter \"" + funcParameters[arg] + "\" value at function \"" + funcName + "\" call.", callContext);
      }

      stackFrame.memory[funcParameters[arg]] = new Variable(funcParameters[arg], actualParameter, true);
    }

    this.stack.push(stackFrame);
    this.functions[funcName].call(callContext, visitor);
    const frame = this.stack.pop();
    return frame.returnValue;
  }

  visitStatementBlock(ctx, visitor) {
    for (const k in ctx.children) {
      if (ctx.children[k].constructor.name === "Return_statementContext") {
        this.stack.peek().returnValue = visitor.visit(ctx.children[k])
        return;
      }

      visitor.visit(ctx.children[k]);
    }
  }

  visitReturnStatement(ctx, visitor) {
    return visitor.visit(ctx.val);
  }

  argumentsMiscount(provided, expected, ctx) {
    RuntimeError.throw("Function arguments miscount. Provided "
      + provided
      + " arguments while function expects "
      + expected,
      ctx
    );
  }
}

module.exports = FunctionsImpl;
