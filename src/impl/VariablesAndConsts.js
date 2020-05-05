const Variable = require('../misc/Variable')
const RuntimeError = require('../misc/RuntimeError');

class VariablesAndConsts {
  constructor(stack) {
    this.stack = stack;
  }

  visitVarAssignment(ctx, globalCtx) {
    let newVarName = ctx.vlabel.getText();

    if (typeof this.stack.peek()["memory"][newVarName] !== "undefined") {
      RuntimeError.throw("Cannot redeclare variable " + newVarName, ctx);
    }
    let value = globalCtx.visit(ctx.value);

    this.stack.peek()["memory"][newVarName] = new Variable(newVarName, value, false);
  }

  visitConstAssignment(ctx, globalCtx) {
    let newConstName = ctx.clabel.getText();

    if (typeof this.stack.peek()["memory"][newConstName] !== "undefined") {
      RuntimeError.throw("Cannot redeclare variable/constant \"" + newConstName +"\"", ctx);
    }

    this.stack.peek()["memory"][newConstName] = new Variable(newConstName, globalCtx.visit(ctx.value), true);
  }

  visitAssignToLabel(ctx, globalCtx) {
    let name = ctx.llabel.getText();

    if (typeof this.stack.peek()["memory"][name] === "undefined") {
      RuntimeError.throw("Undefined variable \"" + name + "\"", ctx);
    }

    if (this.stack.peek()["memory"][name].is_const === true) {
      RuntimeError.throw("Cannot re-assign the constant " + name, ctx);
    }

    this.stack.peek()["memory"][name].value = globalCtx.visit(ctx.value);
  }
}

module.exports = VariablesAndConsts;
