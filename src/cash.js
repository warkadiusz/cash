const antlr = require('antlr4')
const CashLexer = require('./parser/CashLexer').CashLexer
const CashParser = require('./parser/CashParser').CashParser
const CashVisitor = require('./parser/CashVisitor').CashVisitor
const fs = require('fs')
const Operators = require('./Operators.js')
const Variable = require('./Variable.js')

const inputArgs = process.argv.slice(2);
let code;

if (inputArgs.length > 0) {
  if (fs.existsSync(inputArgs[0])) {
    code = fs.readFileSync(inputArgs[0], 'utf8');
  } else {
    console.error("Given file doesn't exist. Exit.");
    process.exit(1);
  }
} else {
  console.error("Usage: cash file-name.cash");
  process.exit(1);
}


let inputStream = new antlr.InputStream(code);
let lexer = new CashLexer(inputStream);
let tokens = new antlr.CommonTokenStream(lexer);
let parser = new CashParser(tokens);
parser.buildParseTrees = true;
let tree = parser.program();

let vars_n_consts = {};
let functions = {};

function throwRuntimeError(err, ctx) {
  throw new Error(err + " at line " + ctx.start.line + " column " + ctx.start.column)
}

function declare_var_or_const(data) {
  /*const is_assigning = data.children.length !== 4;

  let is_const = false;
  let name = null;
  let value = null;
  let type = null;

  if (!is_assigning) { // new variable declaration
    is_const = data.children[0].getText() === 'const';
    name = data.children[1].getText();
    value = data.children[3].getText();
    if (typeof data.children[3].children !== "undefined") {
      // evaluate expression
    } else {
      type = get_symbol_type(data.children[3].children[0])
    }
  } else { // "assign to label"/assigning
    name = data.children[0].getText();
    value = data.children[2].getText();
    type = symbolicNamesDict[data.children[2].children[0].symbol.type];
  }

  if (type === DATA_TYPES.STR_LIT) {
    value = strip_str(value)
  }

  if (typeof vars_n_consts[name] !== 'undefined' && vars_n_consts[name].is_const) {
    console.error("Error: const " + name + " already defined and it can't be changed!");
  } else if (typeof vars_n_consts[name] !== 'undefined' && !is_assigning) {
    console.error("Error: variable " + name + " already defined.");
  } else if (typeof vars_n_consts[name] !== "undefined" && is_assigning) {
    vars_n_consts[name].value = value;
  } else if (is_assigning) {
    console.error("Error: unknown variable " + name);
  } else {
    new_obj = new variable(name, value, type, is_const);
    vars_n_consts[name] = new_obj;
  }*/
}

CashVisitor.prototype.visitVar_assignment = function (ctx) {
  let newVarName = ctx.vlabel.getText();

  if (typeof vars_n_consts[newVarName] !== "undefined") {
    throwRuntimeError("Cannot redeclare variable " + newVarName, ctx);
  }
  let value = this.visit(ctx.value);
  value = Array.isArray(value) ? value[0] : value;

  vars_n_consts[newVarName] = new Variable(newVarName, value, false);
};

CashVisitor.prototype.visitConst_assignment = function (ctx) {
  let newConstName = ctx.clabel.getText();

  if (typeof vars_n_consts[newConstName] !== "undefined") {
    throwRuntimeError("Cannot redeclare variable/constant " + newConstName, ctx);
  }

  vars_n_consts[newConstName] = new Variable(newConstName, this.visit(ctx.value)[0], true);
}

CashVisitor.prototype.visitAssign_to_label = function (ctx) {
  let name = ctx.llabel.getText();

  if (typeof vars_n_consts[name] === "undefined") {
    throwRuntimeError("Undefined variable " + name, ctx);
  }

  if(vars_n_consts[name].is_const === true) {
    throwRuntimeError("Cannot re-assign the constant " + name, ctx);
  }

  vars_n_consts[name].value = this.visit(ctx.value)[0];
}

CashVisitor.prototype.visitLabelExpression = function (ctx) {
  const varConstName = ctx.getText();
  if (typeof vars_n_consts[varConstName] == "undefined") {
    throwRuntimeError("Undefined variable/constant " + varConstName, ctx);
  }

  return vars_n_consts[varConstName].value
}

CashVisitor.prototype.visitParExpression = function (ctx) {
  return this.visit(ctx.exprx);
}

CashVisitor.prototype.visitFunc_call = function (ctx) {
  let funcName = ctx.name.getText();

  if (funcName === "print") {
    ctx.args.forEach(c => {
      console.log(this.visit(c))
      // console.log(this.visit(c))
    })
  }
};

CashVisitor.prototype.visitAtom = function (ctx) {
  return parseFloat(ctx.getText())
}

CashVisitor.prototype.visitAddExpression = function (ctx) {
  let op = ctx.op.getText();
  let left = parseFloat(this.visit(ctx.left));
  let right = parseFloat(this.visit(ctx.right));

  switch (op) {
    case Operators.Minus:
      return left - right;
    case Operators.Plus:
      return left + right;
  }

  throwRuntimeError("Unsupported operator '" + op + "'", ctx);
}

CashVisitor.prototype.visitMultiExpression = function (ctx) {
  let op = ctx.op.getText();
  let left = parseFloat(this.visit(ctx.left));
  let right = parseFloat(this.visit(ctx.right));

  switch (op) {
    case Operators.Multiply:
      return left * right;
    case Operators.Divide:
      return left / right;
  }

  throwRuntimeError("Unsupported operator '" + op + "'", ctx)
}

CashVisitor.prototype.visitStatement = function (ctx) {
  return ctx.children.forEach(c => this.visit(c))
}

CashVisitor.prototype.visitProgram = function (ctx) {
  return ctx.children.forEach(c => this.visit(c))
}

visitor = new CashVisitor();
try {
  visitor.visit(tree)
} catch (e) {
  console.error(e)
  process.exit(1)
}
