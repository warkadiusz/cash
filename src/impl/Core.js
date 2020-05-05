const StackFrame = require('../misc/StackFrame');

class Core {
  constructor(stack) {
    this.stack = stack;
  }

  visitProgram(ctx, globalCtx) {
    this.stack.push(new StackFrame("Main", 1))
    return ctx.children.forEach(c => globalCtx.visit(c))
  }

  visitStatement(ctx, globalCtx) {
    return ctx.children.forEach(c => globalCtx.visit(c))
  }

  visitAtom(ctx) {
    return parseFloat(ctx.getText())
  }
}

module.exports = Core;
