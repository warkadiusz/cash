class StackFrame {
  constructor(name, depth) {
    this.name = name;
    this.depth = depth;
    this.memory = {};
  }
}

module.exports = StackFrame
