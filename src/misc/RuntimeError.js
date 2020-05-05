const RuntimeError = {
  throw(err, ctx) {
    console.error(err + " at line " + ctx.start.line + " column " + ctx.start.column)
    console.error("Stack trace: ");
    console.error(this.stack.print())
    throw ""
  }
}

module.exports = RuntimeError;
