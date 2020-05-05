// Generated from Cash.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by CashParser.

function CashVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

CashVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
CashVisitor.prototype.constructor = CashVisitor;

// Visit a parse tree produced by CashParser#program.
CashVisitor.prototype.visitProgram = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CashParser#statement.
CashVisitor.prototype.visitStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CashParser#var_assignment.
CashVisitor.prototype.visitVar_assignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CashParser#const_assignment.
CashVisitor.prototype.visitConst_assignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CashParser#assign_to_label.
CashVisitor.prototype.visitAssign_to_label = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CashParser#comment.
CashVisitor.prototype.visitComment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CashParser#func_declaration.
CashVisitor.prototype.visitFunc_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CashParser#func_call.
CashVisitor.prototype.visitFunc_call = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CashParser#args_list.
CashVisitor.prototype.visitArgs_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CashParser#args_decl_list.
CashVisitor.prototype.visitArgs_decl_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CashParser#addExpression.
CashVisitor.prototype.visitAddExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CashParser#compExpression.
CashVisitor.prototype.visitCompExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CashParser#atomExpression.
CashVisitor.prototype.visitAtomExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CashParser#powExpression.
CashVisitor.prototype.visitPowExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CashParser#multiExpression.
CashVisitor.prototype.visitMultiExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CashParser#binExpression.
CashVisitor.prototype.visitBinExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CashParser#labelExpression.
CashVisitor.prototype.visitLabelExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CashParser#parExpression.
CashVisitor.prototype.visitParExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CashParser#funcExpression.
CashVisitor.prototype.visitFuncExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CashParser#atom.
CashVisitor.prototype.visitAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CashParser#op_pow.
CashVisitor.prototype.visitOp_pow = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CashParser#op_multi.
CashVisitor.prototype.visitOp_multi = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CashParser#op_add.
CashVisitor.prototype.visitOp_add = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CashParser#func_name.
CashVisitor.prototype.visitFunc_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CashParser#statement_block.
CashVisitor.prototype.visitStatement_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CashParser#if_statement.
CashVisitor.prototype.visitIf_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CashParser#while_statement.
CashVisitor.prototype.visitWhile_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CashParser#label.
CashVisitor.prototype.visitLabel = function(ctx) {
  return this.visitChildren(ctx);
};



exports.CashVisitor = CashVisitor;