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
}

module.exports = Stack;
