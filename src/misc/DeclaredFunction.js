class DeclaredFunction {
  constructor(name, argsList, bodyContext) {
    this.name = name;
    this.argsList = argsList;
    this.bodyContext = bodyContext;
  }

  call(callContext, visitor) {
    return visitor.visit(this.bodyContext)
  }
}

module.exports = DeclaredFunction;
