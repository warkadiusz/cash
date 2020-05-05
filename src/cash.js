const antlr = require('antlr4')
const CashLexer = require('./parser/CashLexer').CashLexer
const CashParser = require('./parser/CashParser').CashParser
const CashVisitor = require('./parser/CashVisitor').CashVisitor
const fs = require('fs')
const StackClass = require('./misc/Stack')

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

const stack = new StackClass;
let functionsDefinitions = {};

functionsDefinitions["print"] = function (argsList, context) {
  argsList.forEach(arg => {
    console.log(context.visit(arg));
  })
}

global.throwRuntimeError = function(err, ctx) {
}

const CoreClass = require('./impl/Core');
const FunctionsClass = require('./impl/Functions');
const VariablesAndConstsClass = require('./impl/VariablesAndConsts');
const ExpressionEvaluatorClass = require('./impl/ExpressionEvaluator');
const CoreImpl = new CoreClass(stack);
const FunctionsImpl = new FunctionsClass(stack, functionsDefinitions);
const VariablesAndConstsImpl = new VariablesAndConstsClass(stack);
const ExpressionEvaluatorImpl = new ExpressionEvaluatorClass(stack);

/** Core */
CashVisitor.prototype.visitStatement = function(ctx) { return CoreImpl.visitStatement(ctx, this); }
CashVisitor.prototype.visitProgram = function(ctx) { return CoreImpl.visitProgram(ctx, this); }
CashVisitor.prototype.visitAtom = function(ctx) { return CoreImpl.visitAtom(ctx, this); }

/** Vars and constants */
CashVisitor.prototype.visitVar_assignment = function (c) { return VariablesAndConstsImpl.visitVarAssignment(c, this) };
CashVisitor.prototype.visitConst_assignment = function (c) { return VariablesAndConstsImpl.visitConstAssignment(c, this) };
CashVisitor.prototype.visitAssign_to_label = function (c) { return VariablesAndConstsImpl.visitAssignToLabel(c, this) };

/** Expression evaluator */
CashVisitor.prototype.visitMultiExpression = function (c) { return ExpressionEvaluatorImpl.visitMultiExpression(c, this); };
CashVisitor.prototype.visitAddExpression = function (c) { return ExpressionEvaluatorImpl.visitAddExpression(c, this); };
CashVisitor.prototype.visitLabelExpression = function (c) { return ExpressionEvaluatorImpl.visitLabelExpression(c, this); };
CashVisitor.prototype.visitParExpression = function (c) { return ExpressionEvaluatorImpl.visitParExpression(c, this); };

/** Functions implementations */
CashVisitor.prototype.visitFunc_declaration = function (c) { return FunctionsImpl.visitFuncDeclaration(c, this); };
CashVisitor.prototype.visitFunc_call = function (c) { return FunctionsImpl.visitFuncCall(c, this); };

visitor = new CashVisitor();
try {
  visitor.visit(tree)
} catch (e) {
  console.error(e)
  process.exit(1)
}
