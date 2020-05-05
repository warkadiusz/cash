const RuntimeError = {
  throw(err, ctx) {
    throw new Error(err + " at line " + ctx.start.line + " column " + ctx.start.column)
  }
}

module.exports = RuntimeError;
