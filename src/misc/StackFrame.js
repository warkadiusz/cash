class StackFrame {
  constructor(name, depth) {
    this.name = name;
    this.depth = depth;
    this.memory = {};
    this.returnValue = true;
  }

  print() {
    let msg = "Name: " + this.name + "\n";
    msg += "\tVariables/consts definitions: \n";
    for (const k in this.memory) {
      msg += "\t\t" + k + ": " + this.memory[k].value +"\n";
    }

    return msg;
  }
}

module.exports = StackFrame
