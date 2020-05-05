const Operators = require('../misc/Operators.js');
const RuntimeError = require('../misc/RuntimeError');

class ExpressionEvaluator {
  constructor(stack) {
    this.stack = stack;
  }

  visitMultiExpression(ctx, globalCtx) {
    let op = ctx.op.getText();
    let left = parseFloat(globalCtx.visit(ctx.left));
    let right = parseFloat(globalCtx.visit(ctx.right));

    switch (op) {
      case Operators.Multiply:
        return left * right;
      case Operators.Divide:
        return left / right;
    }

    RuntimeError.throw("Unsupported operator '" + op + "'", ctx)
  }

  visitAddExpression(ctx, globalCtx) {
    let op = ctx.op.getText();
    let left = parseFloat(globalCtx.visit(ctx.left));
    let right = parseFloat(globalCtx.visit(ctx.right));

    switch (op) {
      case Operators.Minus:
        return left - right;
      case Operators.Plus:
        return left + right;
    }

    RuntimeError.throw("Unsupported operator '" + op + "'", ctx);
  }

  visitLabelExpression(ctx, globalCtx) {
    const varConstName = ctx.getText();
    if (typeof this.stack.peek()["memory"][varConstName] == "undefined") {
      RuntimeError.throw("Undefined variable/constant " + varConstName, ctx);
    }

    return this.stack.peek()["memory"][varConstName].value
  }

  visitParExpression(ctx, globalCtx) {
    return globalCtx.visit(ctx.exprx);
  }
}

module.exports = ExpressionEvaluator;