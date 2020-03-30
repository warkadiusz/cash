// Generated from Cash.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by CashParser.
function CashListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

CashListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
CashListener.prototype.constructor = CashListener;

// Enter a parse tree produced by CashParser#program.
CashListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by CashParser#program.
CashListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by CashParser#statement.
CashListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by CashParser#statement.
CashListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by CashParser#var_assignment.
CashListener.prototype.enterVar_assignment = function(ctx) {
};

// Exit a parse tree produced by CashParser#var_assignment.
CashListener.prototype.exitVar_assignment = function(ctx) {
};


// Enter a parse tree produced by CashParser#const_assignment.
CashListener.prototype.enterConst_assignment = function(ctx) {
};

// Exit a parse tree produced by CashParser#const_assignment.
CashListener.prototype.exitConst_assignment = function(ctx) {
};


// Enter a parse tree produced by CashParser#assign_to_label.
CashListener.prototype.enterAssign_to_label = function(ctx) {
};

// Exit a parse tree produced by CashParser#assign_to_label.
CashListener.prototype.exitAssign_to_label = function(ctx) {
};


// Enter a parse tree produced by CashParser#comment.
CashListener.prototype.enterComment = function(ctx) {
};

// Exit a parse tree produced by CashParser#comment.
CashListener.prototype.exitComment = function(ctx) {
};


// Enter a parse tree produced by CashParser#func_declaration.
CashListener.prototype.enterFunc_declaration = function(ctx) {
};

// Exit a parse tree produced by CashParser#func_declaration.
CashListener.prototype.exitFunc_declaration = function(ctx) {
};


// Enter a parse tree produced by CashParser#func_call.
CashListener.prototype.enterFunc_call = function(ctx) {
};

// Exit a parse tree produced by CashParser#func_call.
CashListener.prototype.exitFunc_call = function(ctx) {
};


// Enter a parse tree produced by CashParser#addExpression.
CashListener.prototype.enterAddExpression = function(ctx) {
};

// Exit a parse tree produced by CashParser#addExpression.
CashListener.prototype.exitAddExpression = function(ctx) {
};


// Enter a parse tree produced by CashParser#compExpression.
CashListener.prototype.enterCompExpression = function(ctx) {
};

// Exit a parse tree produced by CashParser#compExpression.
CashListener.prototype.exitCompExpression = function(ctx) {
};


// Enter a parse tree produced by CashParser#atomExpression.
CashListener.prototype.enterAtomExpression = function(ctx) {
};

// Exit a parse tree produced by CashParser#atomExpression.
CashListener.prototype.exitAtomExpression = function(ctx) {
};


// Enter a parse tree produced by CashParser#powExpression.
CashListener.prototype.enterPowExpression = function(ctx) {
};

// Exit a parse tree produced by CashParser#powExpression.
CashListener.prototype.exitPowExpression = function(ctx) {
};


// Enter a parse tree produced by CashParser#multiExpression.
CashListener.prototype.enterMultiExpression = function(ctx) {
};

// Exit a parse tree produced by CashParser#multiExpression.
CashListener.prototype.exitMultiExpression = function(ctx) {
};


// Enter a parse tree produced by CashParser#binExpression.
CashListener.prototype.enterBinExpression = function(ctx) {
};

// Exit a parse tree produced by CashParser#binExpression.
CashListener.prototype.exitBinExpression = function(ctx) {
};


// Enter a parse tree produced by CashParser#labelExpression.
CashListener.prototype.enterLabelExpression = function(ctx) {
};

// Exit a parse tree produced by CashParser#labelExpression.
CashListener.prototype.exitLabelExpression = function(ctx) {
};


// Enter a parse tree produced by CashParser#parExpression.
CashListener.prototype.enterParExpression = function(ctx) {
};

// Exit a parse tree produced by CashParser#parExpression.
CashListener.prototype.exitParExpression = function(ctx) {
};


// Enter a parse tree produced by CashParser#funcExpression.
CashListener.prototype.enterFuncExpression = function(ctx) {
};

// Exit a parse tree produced by CashParser#funcExpression.
CashListener.prototype.exitFuncExpression = function(ctx) {
};


// Enter a parse tree produced by CashParser#atom.
CashListener.prototype.enterAtom = function(ctx) {
};

// Exit a parse tree produced by CashParser#atom.
CashListener.prototype.exitAtom = function(ctx) {
};


// Enter a parse tree produced by CashParser#op_pow.
CashListener.prototype.enterOp_pow = function(ctx) {
};

// Exit a parse tree produced by CashParser#op_pow.
CashListener.prototype.exitOp_pow = function(ctx) {
};


// Enter a parse tree produced by CashParser#op_multi.
CashListener.prototype.enterOp_multi = function(ctx) {
};

// Exit a parse tree produced by CashParser#op_multi.
CashListener.prototype.exitOp_multi = function(ctx) {
};


// Enter a parse tree produced by CashParser#op_add.
CashListener.prototype.enterOp_add = function(ctx) {
};

// Exit a parse tree produced by CashParser#op_add.
CashListener.prototype.exitOp_add = function(ctx) {
};


// Enter a parse tree produced by CashParser#func_name.
CashListener.prototype.enterFunc_name = function(ctx) {
};

// Exit a parse tree produced by CashParser#func_name.
CashListener.prototype.exitFunc_name = function(ctx) {
};


// Enter a parse tree produced by CashParser#statement_block.
CashListener.prototype.enterStatement_block = function(ctx) {
};

// Exit a parse tree produced by CashParser#statement_block.
CashListener.prototype.exitStatement_block = function(ctx) {
};


// Enter a parse tree produced by CashParser#if_statement.
CashListener.prototype.enterIf_statement = function(ctx) {
};

// Exit a parse tree produced by CashParser#if_statement.
CashListener.prototype.exitIf_statement = function(ctx) {
};


// Enter a parse tree produced by CashParser#while_statement.
CashListener.prototype.enterWhile_statement = function(ctx) {
};

// Exit a parse tree produced by CashParser#while_statement.
CashListener.prototype.exitWhile_statement = function(ctx) {
};



exports.CashListener = CashListener;