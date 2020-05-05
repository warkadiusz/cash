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

  visitCompExpression(ctx, visitor) {
    const leftValue = visitor.visit(ctx.left);
    const rightValue = visitor.visit(ctx.right);

    switch (ctx.op.getText()) {
      case Operators.Equal:
        return leftValue == rightValue;
      case Operators.NotEqual:
        return leftValue != rightValue;
      case Operators.GreaterEqual:
        return leftValue >= rightValue;
      case Operators.GreaterThan:
        return leftValue > rightValue;
      case Operators.LessEqual:
        return leftValue <= rightValue;
      case Operators.LessThan:
        return leftValue < rightValue;
    }

    RuntimeError.throw("Unsupported operator '" + op + "'", ctx);
  }

  visitLogicExpression(ctx, visitor) {
    const leftValue = visitor.visit(ctx.left);
    const rightValue = visitor.visit(ctx.right);

    switch (ctx.op.getText()) {
      case Operators.And:
        return leftValue && rightValue;
      case Operators.Or:
        return leftValue || rightValue;
    }

    RuntimeError.throw("Unsupported operator '" + op + "'", ctx);
  }

  visitParExpression(ctx, visitor) {
    return visitor.visit(ctx.exprx);
  }

  visitAtomExpression(ctx, visitor) {
    return visitor.visit(ctx.children[0])
  }
}

module.exports = ExpressionEvaluator;
