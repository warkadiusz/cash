const antlr = require('antlr4')
const CashLexer = require('./parser/CashLexer').CashLexer
const CashParser = require('./parser/CashParser').CashParser
const CashListener = require('./parser/CashListener').CashListener
const CashVisitor = require('./parser/CashVisitor').CashVisitor
const fs = require('fs')

const inputArgs = process.argv.slice(2);
let code;

if(inputArgs.length > 0) {
  if(fs.existsSync(inputArgs[0])) {
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
var tree = parser.program();

let symbolicNamesDict = {};
parser.symbolicNames.forEach((p, k) => {
  symbolicNamesDict[k] = p;
});

let variables = {};
let consts = {};

function strip_str(str) {
  return str.replace(/^"/, "").replace(/"$/, "")
}

function strip_if_str(node) {
  let type = symbolicNamesDict[node.symbol.type];
  if(type === "STR_LIT") {
    return strip_str(node.getText());
  }

  return node.getText();
}

function declare_var(data) {
  let name = data.children[1].getText();
  let value = data.children[3].getText();
  let type = symbolicNamesDict[data.children[3].symbol.type];

  if (type === "STR_LIT") {
    value = strip_str(value)
  }

  if (typeof variables[name] !== 'undefined') {
    console.error('ERR: Variable ' + name + ' already defined');
  } else {
    variables[name] = value;
  }
}

function call_func(data) {
  let func_name = data.children[0].getText();
  let args_list = data.children.slice(2, data.children.length - 1).filter(a => a.getText() !== ",");

  if(func_name === 'print') {
    
    args_list.forEach(a => console.log(strip_if_str(a)));
  }
}

class Visitor {
  visitChildren(ctx) {
    if (!ctx) {
      return;
    }
    if (ctx.children) {
      if (ctx.constructor.name === "Var_assignmentContext") {
        declare_var(ctx);
      } else if (ctx.constructor.name === "Func_callContext") {
        call_func(ctx)
      } else {

        return ctx.children.map(child => {
          if (child.children && child.children.length > 0) {
            return child.accept(this);
          } else {
            return child.getText();
          }
        });
      }
    }
  }
}

tree.accept(new Visitor());
