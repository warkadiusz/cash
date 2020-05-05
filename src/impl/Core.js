const StackFrame = require('../misc/StackFrame');

class Core {
  constructor(stack) {
    this.stack = stack;
  }

  visitProgram(ctx, globalCtx) {
    this.stack.push(new StackFrame("Main", 1))
    let ret = ctx.children.forEach(c => globalCtx.visit(c))
    this.stack.pop();
    return ret;
  }

  visitStatement(ctx, globalCtx) {
    return ctx.children.forEach(c => globalCtx.visit(c))
  }

  visitAtom(ctx) {
    return ctx.getText()
  }
}

module.exports = Core;
