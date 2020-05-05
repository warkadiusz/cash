class Stack {
  constructor() {
    this.frames = [];
  }

  push(stackFrame) {
    this.frames.push(stackFrame);
  }

  pop() {
    return this.frames.pop();
  }

  peek() {
    return this.frames[this.frames.length - 1];
  }

  getCurrentDepth() {
    return this.frames.length;
  }

  print() {
    let msg = "";
    for(const k in this.frames) {
      msg += this.frames[k].print()
    }
    return msg;
  }
}

module.exports = Stack;
