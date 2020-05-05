class BuiltInFunction {
  constructor(name, argsList, implementation) {
    this.name = name;
    this.argsList = argsList;
    this.implementation = implementation;
  }

  call(callContext, visitor) {
    return this.implementation(callContext, visitor)
  }
}

module.exports = BuiltInFunction;
