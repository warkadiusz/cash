// Generated from Cash.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var CashListener = require('./CashListener').CashListener;
var CashVisitor = require('./CashVisitor').CashVisitor;

var grammarFileName = "Cash.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003%\u00ad\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0003\u0002\u0007",
    "\u0002(\n\u0002\f\u0002\u000e\u0002+\u000b\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0005\u00035\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0007\tR\n\t\f\t\u000e\tU\u000b\t\u0003\t\u0003\t",
    "\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0005\nb\n\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0007\nv\n\n\f\n\u000e\ny\u000b\n\u0003\u000b\u0003",
    "\u000b\u0005\u000b}\n\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u0081",
    "\n\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003",
    "\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0006\u0010\u008d\n\u0010",
    "\r\u0010\u000e\u0010\u008e\u0003\u0010\u0003\u0010\u0003\u0010\u0005",
    "\u0010\u0094\n\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0007\u0011\u009e\n",
    "\u0011\f\u0011\u000e\u0011\u00a1\u000b\u0011\u0003\u0011\u0003\u0011",
    "\u0005\u0011\u00a5\n\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0002\u0003\u0012\u0014\u0002",
    "\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e",
    " \"$\u0002\b\u0003\u0002\"#\u0003\u0002\u0014\u0015\u0003\u0002\u0016",
    "\u001a\u0003\u0002\r\u000e\u0003\u0002\n\u000b\u0003\u0002\u000f\u0010",
    "\u0002\u00b2\u0002)\u0003\u0002\u0002\u0002\u00044\u0003\u0002\u0002",
    "\u0002\u00066\u0003\u0002\u0002\u0002\b;\u0003\u0002\u0002\u0002\n@",
    "\u0003\u0002\u0002\u0002\fD\u0003\u0002\u0002\u0002\u000eF\u0003\u0002",
    "\u0002\u0002\u0010L\u0003\u0002\u0002\u0002\u0012a\u0003\u0002\u0002",
    "\u0002\u0014\u0080\u0003\u0002\u0002\u0002\u0016\u0082\u0003\u0002\u0002",
    "\u0002\u0018\u0084\u0003\u0002\u0002\u0002\u001a\u0086\u0003\u0002\u0002",
    "\u0002\u001c\u0088\u0003\u0002\u0002\u0002\u001e\u0093\u0003\u0002\u0002",
    "\u0002 \u0095\u0003\u0002\u0002\u0002\"\u00a6\u0003\u0002\u0002\u0002",
    "$\u00aa\u0003\u0002\u0002\u0002&(\u0005\u0004\u0003\u0002\'&\u0003\u0002",
    "\u0002\u0002(+\u0003\u0002\u0002\u0002)\'\u0003\u0002\u0002\u0002)*",
    "\u0003\u0002\u0002\u0002*\u0003\u0003\u0002\u0002\u0002+)\u0003\u0002",
    "\u0002\u0002,5\u0005\u0006\u0004\u0002-5\u0005\b\u0005\u0002.5\u0005",
    "\n\u0006\u0002/5\u0005 \u0011\u000205\u0005\"\u0012\u000215\u0005\u000e",
    "\b\u000225\u0005\f\u0007\u000235\u0005\u0012\n\u00024,\u0003\u0002\u0002",
    "\u00024-\u0003\u0002\u0002\u00024.\u0003\u0002\u0002\u00024/\u0003\u0002",
    "\u0002\u000240\u0003\u0002\u0002\u000241\u0003\u0002\u0002\u000242\u0003",
    "\u0002\u0002\u000243\u0003\u0002\u0002\u00025\u0005\u0003\u0002\u0002",
    "\u000267\u0007\u0004\u0002\u000278\u0005$\u0013\u000289\u0007\f\u0002",
    "\u00029:\u0005\u0012\n\u0002:\u0007\u0003\u0002\u0002\u0002;<\u0007",
    "\u0005\u0002\u0002<=\u0005$\u0013\u0002=>\u0007\f\u0002\u0002>?\u0005",
    "\u0012\n\u0002?\t\u0003\u0002\u0002\u0002@A\u0005$\u0013\u0002AB\u0007",
    "\f\u0002\u0002BC\u0005\u0012\n\u0002C\u000b\u0003\u0002\u0002\u0002",
    "DE\t\u0002\u0002\u0002E\r\u0003\u0002\u0002\u0002FG\u0007\b\u0002\u0002",
    "GH\u0007\u001f\u0002\u0002HI\u0007\u001b\u0002\u0002IJ\u0005\u0002\u0002",
    "\u0002JK\u0007\u001c\u0002\u0002K\u000f\u0003\u0002\u0002\u0002LM\u0005",
    "\u001c\u000f\u0002MS\u0007\u001d\u0002\u0002NO\u0005\u0012\n\u0002O",
    "P\u0007\u0003\u0002\u0002PR\u0003\u0002\u0002\u0002QN\u0003\u0002\u0002",
    "\u0002RU\u0003\u0002\u0002\u0002SQ\u0003\u0002\u0002\u0002ST\u0003\u0002",
    "\u0002\u0002TV\u0003\u0002\u0002\u0002US\u0003\u0002\u0002\u0002VW\u0005",
    "\u0012\n\u0002WX\u0007\u001e\u0002\u0002X\u0011\u0003\u0002\u0002\u0002",
    "YZ\b\n\u0001\u0002Z[\u0007\u001d\u0002\u0002[\\\u0005\u0012\n\u0002",
    "\\]\u0007\u001e\u0002\u0002]b\u0003\u0002\u0002\u0002^b\u0005\u0010",
    "\t\u0002_b\u0005$\u0013\u0002`b\u0005\u0014\u000b\u0002aY\u0003\u0002",
    "\u0002\u0002a^\u0003\u0002\u0002\u0002a_\u0003\u0002\u0002\u0002a`\u0003",
    "\u0002\u0002\u0002bw\u0003\u0002\u0002\u0002cd\f\u000b\u0002\u0002d",
    "e\u0005\u0016\f\u0002ef\u0005\u0012\n\ffv\u0003\u0002\u0002\u0002gh",
    "\f\n\u0002\u0002hi\u0005\u0018\r\u0002ij\u0005\u0012\n\u000bjv\u0003",
    "\u0002\u0002\u0002kl\f\t\u0002\u0002lm\u0005\u001a\u000e\u0002mn\u0005",
    "\u0012\n\nnv\u0003\u0002\u0002\u0002op\f\u0005\u0002\u0002pq\t\u0003",
    "\u0002\u0002qv\u0005\u0012\n\u0006rs\f\u0004\u0002\u0002st\t\u0004\u0002",
    "\u0002tv\u0005\u0012\n\u0005uc\u0003\u0002\u0002\u0002ug\u0003\u0002",
    "\u0002\u0002uk\u0003\u0002\u0002\u0002uo\u0003\u0002\u0002\u0002ur\u0003",
    "\u0002\u0002\u0002vy\u0003\u0002\u0002\u0002wu\u0003\u0002\u0002\u0002",
    "wx\u0003\u0002\u0002\u0002x\u0013\u0003\u0002\u0002\u0002yw\u0003\u0002",
    "\u0002\u0002z\u0081\u0007 \u0002\u0002{}\t\u0005\u0002\u0002|{\u0003",
    "\u0002\u0002\u0002|}\u0003\u0002\u0002\u0002}~\u0003\u0002\u0002\u0002",
    "~\u0081\u0007!\u0002\u0002\u007f\u0081\t\u0006\u0002\u0002\u0080z\u0003",
    "\u0002\u0002\u0002\u0080|\u0003\u0002\u0002\u0002\u0080\u007f\u0003",
    "\u0002\u0002\u0002\u0081\u0015\u0003\u0002\u0002\u0002\u0082\u0083\u0007",
    "\u0011\u0002\u0002\u0083\u0017\u0003\u0002\u0002\u0002\u0084\u0085\t",
    "\u0007\u0002\u0002\u0085\u0019\u0003\u0002\u0002\u0002\u0086\u0087\t",
    "\u0005\u0002\u0002\u0087\u001b\u0003\u0002\u0002\u0002\u0088\u0089\u0007",
    "\u001f\u0002\u0002\u0089\u001d\u0003\u0002\u0002\u0002\u008a\u008c\u0007",
    "\u001b\u0002\u0002\u008b\u008d\u0005\u0004\u0003\u0002\u008c\u008b\u0003",
    "\u0002\u0002\u0002\u008d\u008e\u0003\u0002\u0002\u0002\u008e\u008c\u0003",
    "\u0002\u0002\u0002\u008e\u008f\u0003\u0002\u0002\u0002\u008f\u0090\u0003",
    "\u0002\u0002\u0002\u0090\u0091\u0007\u001c\u0002\u0002\u0091\u0094\u0003",
    "\u0002\u0002\u0002\u0092\u0094\u0005\u0004\u0003\u0002\u0093\u008a\u0003",
    "\u0002\u0002\u0002\u0093\u0092\u0003\u0002\u0002\u0002\u0094\u001f\u0003",
    "\u0002\u0002\u0002\u0095\u0096\u0007\u0006\u0002\u0002\u0096\u0097\u0005",
    "\u0012\n\u0002\u0097\u009f\u0005\u001e\u0010\u0002\u0098\u0099\u0007",
    "\t\u0002\u0002\u0099\u009a\u0007\u0006\u0002\u0002\u009a\u009b\u0005",
    "\u0012\n\u0002\u009b\u009c\u0005\u001e\u0010\u0002\u009c\u009e\u0003",
    "\u0002\u0002\u0002\u009d\u0098\u0003\u0002\u0002\u0002\u009e\u00a1\u0003",
    "\u0002\u0002\u0002\u009f\u009d\u0003\u0002\u0002\u0002\u009f\u00a0\u0003",
    "\u0002\u0002\u0002\u00a0\u00a4\u0003\u0002\u0002\u0002\u00a1\u009f\u0003",
    "\u0002\u0002\u0002\u00a2\u00a3\u0007\t\u0002\u0002\u00a3\u00a5\u0005",
    "\u001e\u0010\u0002\u00a4\u00a2\u0003\u0002\u0002\u0002\u00a4\u00a5\u0003",
    "\u0002\u0002\u0002\u00a5!\u0003\u0002\u0002\u0002\u00a6\u00a7\u0007",
    "\u0007\u0002\u0002\u00a7\u00a8\u0005\u0012\n\u0002\u00a8\u00a9\u0005",
    "\u001e\u0010\u0002\u00a9#\u0003\u0002\u0002\u0002\u00aa\u00ab\u0007",
    "\u001f\u0002\u0002\u00ab%\u0003\u0002\u0002\u0002\u000e)4Sauw|\u0080",
    "\u008e\u0093\u009f\u00a4"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "','", "'let'", "'const'", "'if'", "'while'", 
                     "'func'", "'else'", "'true'", "'false'", "'='", "'+'", 
                     "'-'", "'*'", "'/'", "'^^'", "'++'", "'--'", "'&&'", 
                     "'||'", "'=='", "'>'", "'>='", "'<'", "'<='", "'{'", 
                     "'}'", "'('", "')'" ];

var symbolicNames = [ null, null, "KW_LET", "KW_CONST", "KW_IF", "KW_WHILE", 
                      "KW_FUNC", "KW_ELSE", "KW_TRUE", "KW_FALSE", "OP_ASSIGN", 
                      "OP_PLUS", "OP_SUB", "OP_MULTIPLY", "OP_DIVIDE", "OP_POW", 
                      "OP_INCREMENT", "OP_DECREMENT", "OP_AND", "OP_OR", 
                      "OP_EQ", "OP_GT", "OP_GE", "OP_LT", "OP_LE", "L_BRACE", 
                      "R_BRACE", "L_PAR", "R_PAR", "LABEL", "STR_LIT", "NUM_LIT", 
                      "COMMENT", "BLOCK_COMMENT", "WS", "EOL" ];

var ruleNames =  [ "program", "statement", "var_assignment", "const_assignment", 
                   "assign_to_label", "comment", "func_declaration", "func_call", 
                   "expr", "atom", "op_pow", "op_multi", "op_add", "func_name", 
                   "statement_block", "if_statement", "while_statement", 
                   "label" ];

function CashParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

CashParser.prototype = Object.create(antlr4.Parser.prototype);
CashParser.prototype.constructor = CashParser;

Object.defineProperty(CashParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

CashParser.EOF = antlr4.Token.EOF;
CashParser.T__0 = 1;
CashParser.KW_LET = 2;
CashParser.KW_CONST = 3;
CashParser.KW_IF = 4;
CashParser.KW_WHILE = 5;
CashParser.KW_FUNC = 6;
CashParser.KW_ELSE = 7;
CashParser.KW_TRUE = 8;
CashParser.KW_FALSE = 9;
CashParser.OP_ASSIGN = 10;
CashParser.OP_PLUS = 11;
CashParser.OP_SUB = 12;
CashParser.OP_MULTIPLY = 13;
CashParser.OP_DIVIDE = 14;
CashParser.OP_POW = 15;
CashParser.OP_INCREMENT = 16;
CashParser.OP_DECREMENT = 17;
CashParser.OP_AND = 18;
CashParser.OP_OR = 19;
CashParser.OP_EQ = 20;
CashParser.OP_GT = 21;
CashParser.OP_GE = 22;
CashParser.OP_LT = 23;
CashParser.OP_LE = 24;
CashParser.L_BRACE = 25;
CashParser.R_BRACE = 26;
CashParser.L_PAR = 27;
CashParser.R_PAR = 28;
CashParser.LABEL = 29;
CashParser.STR_LIT = 30;
CashParser.NUM_LIT = 31;
CashParser.COMMENT = 32;
CashParser.BLOCK_COMMENT = 33;
CashParser.WS = 34;
CashParser.EOL = 35;

CashParser.RULE_program = 0;
CashParser.RULE_statement = 1;
CashParser.RULE_var_assignment = 2;
CashParser.RULE_const_assignment = 3;
CashParser.RULE_assign_to_label = 4;
CashParser.RULE_comment = 5;
CashParser.RULE_func_declaration = 6;
CashParser.RULE_func_call = 7;
CashParser.RULE_expr = 8;
CashParser.RULE_atom = 9;
CashParser.RULE_op_pow = 10;
CashParser.RULE_op_multi = 11;
CashParser.RULE_op_add = 12;
CashParser.RULE_func_name = 13;
CashParser.RULE_statement_block = 14;
CashParser.RULE_if_statement = 15;
CashParser.RULE_while_statement = 16;
CashParser.RULE_label = 17;


function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CashParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.exitProgram(this);
	}
};

ProgramContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CashVisitor ) {
        return visitor.visitProgram(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CashParser.ProgramContext = ProgramContext;

CashParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, CashParser.RULE_program);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 39;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 2)) & ~0x1f) == 0 && ((1 << (_la - 2)) & ((1 << (CashParser.KW_LET - 2)) | (1 << (CashParser.KW_CONST - 2)) | (1 << (CashParser.KW_IF - 2)) | (1 << (CashParser.KW_WHILE - 2)) | (1 << (CashParser.KW_FUNC - 2)) | (1 << (CashParser.KW_TRUE - 2)) | (1 << (CashParser.KW_FALSE - 2)) | (1 << (CashParser.OP_PLUS - 2)) | (1 << (CashParser.OP_SUB - 2)) | (1 << (CashParser.L_PAR - 2)) | (1 << (CashParser.LABEL - 2)) | (1 << (CashParser.STR_LIT - 2)) | (1 << (CashParser.NUM_LIT - 2)) | (1 << (CashParser.COMMENT - 2)) | (1 << (CashParser.BLOCK_COMMENT - 2)))) !== 0)) {
            this.state = 36;
            this.statement();
            this.state = 41;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CashParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.var_assignment = function() {
    return this.getTypedRuleContext(Var_assignmentContext,0);
};

StatementContext.prototype.const_assignment = function() {
    return this.getTypedRuleContext(Const_assignmentContext,0);
};

StatementContext.prototype.assign_to_label = function() {
    return this.getTypedRuleContext(Assign_to_labelContext,0);
};

StatementContext.prototype.if_statement = function() {
    return this.getTypedRuleContext(If_statementContext,0);
};

StatementContext.prototype.while_statement = function() {
    return this.getTypedRuleContext(While_statementContext,0);
};

StatementContext.prototype.func_declaration = function() {
    return this.getTypedRuleContext(Func_declarationContext,0);
};

StatementContext.prototype.comment = function() {
    return this.getTypedRuleContext(CommentContext,0);
};

StatementContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.exitStatement(this);
	}
};

StatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CashVisitor ) {
        return visitor.visitStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CashParser.StatementContext = StatementContext;

CashParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, CashParser.RULE_statement);
    try {
        this.state = 50;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 42;
            this.var_assignment();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 43;
            this.const_assignment();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 44;
            this.assign_to_label();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 45;
            this.if_statement();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 46;
            this.while_statement();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 47;
            this.func_declaration();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 48;
            this.comment();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 49;
            this.expr(0);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Var_assignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CashParser.RULE_var_assignment;
    this.vlabel = null; // LabelContext
    this.value = null; // ExprContext
    return this;
}

Var_assignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Var_assignmentContext.prototype.constructor = Var_assignmentContext;

Var_assignmentContext.prototype.KW_LET = function() {
    return this.getToken(CashParser.KW_LET, 0);
};

Var_assignmentContext.prototype.OP_ASSIGN = function() {
    return this.getToken(CashParser.OP_ASSIGN, 0);
};

Var_assignmentContext.prototype.label = function() {
    return this.getTypedRuleContext(LabelContext,0);
};

Var_assignmentContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Var_assignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.enterVar_assignment(this);
	}
};

Var_assignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.exitVar_assignment(this);
	}
};

Var_assignmentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CashVisitor ) {
        return visitor.visitVar_assignment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CashParser.Var_assignmentContext = Var_assignmentContext;

CashParser.prototype.var_assignment = function() {

    var localctx = new Var_assignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, CashParser.RULE_var_assignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 52;
        this.match(CashParser.KW_LET);
        this.state = 53;
        localctx.vlabel = this.label();
        this.state = 54;
        this.match(CashParser.OP_ASSIGN);
        this.state = 55;
        localctx.value = this.expr(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Const_assignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CashParser.RULE_const_assignment;
    this.clabel = null; // LabelContext
    this.value = null; // ExprContext
    return this;
}

Const_assignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Const_assignmentContext.prototype.constructor = Const_assignmentContext;

Const_assignmentContext.prototype.KW_CONST = function() {
    return this.getToken(CashParser.KW_CONST, 0);
};

Const_assignmentContext.prototype.OP_ASSIGN = function() {
    return this.getToken(CashParser.OP_ASSIGN, 0);
};

Const_assignmentContext.prototype.label = function() {
    return this.getTypedRuleContext(LabelContext,0);
};

Const_assignmentContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Const_assignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.enterConst_assignment(this);
	}
};

Const_assignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.exitConst_assignment(this);
	}
};

Const_assignmentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CashVisitor ) {
        return visitor.visitConst_assignment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CashParser.Const_assignmentContext = Const_assignmentContext;

CashParser.prototype.const_assignment = function() {

    var localctx = new Const_assignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, CashParser.RULE_const_assignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 57;
        this.match(CashParser.KW_CONST);
        this.state = 58;
        localctx.clabel = this.label();
        this.state = 59;
        this.match(CashParser.OP_ASSIGN);
        this.state = 60;
        localctx.value = this.expr(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Assign_to_labelContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CashParser.RULE_assign_to_label;
    this.llabel = null; // LabelContext
    this.value = null; // ExprContext
    return this;
}

Assign_to_labelContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Assign_to_labelContext.prototype.constructor = Assign_to_labelContext;

Assign_to_labelContext.prototype.OP_ASSIGN = function() {
    return this.getToken(CashParser.OP_ASSIGN, 0);
};

Assign_to_labelContext.prototype.label = function() {
    return this.getTypedRuleContext(LabelContext,0);
};

Assign_to_labelContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Assign_to_labelContext.prototype.enterRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.enterAssign_to_label(this);
	}
};

Assign_to_labelContext.prototype.exitRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.exitAssign_to_label(this);
	}
};

Assign_to_labelContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CashVisitor ) {
        return visitor.visitAssign_to_label(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CashParser.Assign_to_labelContext = Assign_to_labelContext;

CashParser.prototype.assign_to_label = function() {

    var localctx = new Assign_to_labelContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, CashParser.RULE_assign_to_label);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 62;
        localctx.llabel = this.label();
        this.state = 63;
        this.match(CashParser.OP_ASSIGN);
        this.state = 64;
        localctx.value = this.expr(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CommentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CashParser.RULE_comment;
    return this;
}

CommentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CommentContext.prototype.constructor = CommentContext;

CommentContext.prototype.COMMENT = function() {
    return this.getToken(CashParser.COMMENT, 0);
};

CommentContext.prototype.BLOCK_COMMENT = function() {
    return this.getToken(CashParser.BLOCK_COMMENT, 0);
};

CommentContext.prototype.enterRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.enterComment(this);
	}
};

CommentContext.prototype.exitRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.exitComment(this);
	}
};

CommentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CashVisitor ) {
        return visitor.visitComment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CashParser.CommentContext = CommentContext;

CashParser.prototype.comment = function() {

    var localctx = new CommentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, CashParser.RULE_comment);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 66;
        _la = this._input.LA(1);
        if(!(_la===CashParser.COMMENT || _la===CashParser.BLOCK_COMMENT)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Func_declarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CashParser.RULE_func_declaration;
    return this;
}

Func_declarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Func_declarationContext.prototype.constructor = Func_declarationContext;

Func_declarationContext.prototype.KW_FUNC = function() {
    return this.getToken(CashParser.KW_FUNC, 0);
};

Func_declarationContext.prototype.LABEL = function() {
    return this.getToken(CashParser.LABEL, 0);
};

Func_declarationContext.prototype.L_BRACE = function() {
    return this.getToken(CashParser.L_BRACE, 0);
};

Func_declarationContext.prototype.program = function() {
    return this.getTypedRuleContext(ProgramContext,0);
};

Func_declarationContext.prototype.R_BRACE = function() {
    return this.getToken(CashParser.R_BRACE, 0);
};

Func_declarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.enterFunc_declaration(this);
	}
};

Func_declarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.exitFunc_declaration(this);
	}
};

Func_declarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CashVisitor ) {
        return visitor.visitFunc_declaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CashParser.Func_declarationContext = Func_declarationContext;

CashParser.prototype.func_declaration = function() {

    var localctx = new Func_declarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, CashParser.RULE_func_declaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 68;
        this.match(CashParser.KW_FUNC);
        this.state = 69;
        this.match(CashParser.LABEL);
        this.state = 70;
        this.match(CashParser.L_BRACE);
        this.state = 71;
        this.program();
        this.state = 72;
        this.match(CashParser.R_BRACE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Func_callContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CashParser.RULE_func_call;
    this.name = null; // Func_nameContext
    this._expr = null; // ExprContext
    this.args = []; // of ExprContexts
    return this;
}

Func_callContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Func_callContext.prototype.constructor = Func_callContext;

Func_callContext.prototype.L_PAR = function() {
    return this.getToken(CashParser.L_PAR, 0);
};

Func_callContext.prototype.R_PAR = function() {
    return this.getToken(CashParser.R_PAR, 0);
};

Func_callContext.prototype.func_name = function() {
    return this.getTypedRuleContext(Func_nameContext,0);
};

Func_callContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

Func_callContext.prototype.enterRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.enterFunc_call(this);
	}
};

Func_callContext.prototype.exitRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.exitFunc_call(this);
	}
};

Func_callContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CashVisitor ) {
        return visitor.visitFunc_call(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CashParser.Func_callContext = Func_callContext;

CashParser.prototype.func_call = function() {

    var localctx = new Func_callContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, CashParser.RULE_func_call);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 74;
        localctx.name = this.func_name();
        this.state = 75;
        this.match(CashParser.L_PAR);
        this.state = 81;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 76;
                localctx._expr = this.expr(0);
                localctx.args.push(localctx._expr);
                this.state = 77;
                this.match(CashParser.T__0); 
            }
            this.state = 83;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
        }

        this.state = 84;
        localctx._expr = this.expr(0);
        localctx.args.push(localctx._expr);
        this.state = 85;
        this.match(CashParser.R_PAR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CashParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;


 
ExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function AddExpressionContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.left = null; // ExprContext;
    this.op = null; // Op_addContext;
    this.right = null; // ExprContext;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AddExpressionContext.prototype = Object.create(ExprContext.prototype);
AddExpressionContext.prototype.constructor = AddExpressionContext;

CashParser.AddExpressionContext = AddExpressionContext;

AddExpressionContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

AddExpressionContext.prototype.op_add = function() {
    return this.getTypedRuleContext(Op_addContext,0);
};
AddExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.enterAddExpression(this);
	}
};

AddExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.exitAddExpression(this);
	}
};

AddExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CashVisitor ) {
        return visitor.visitAddExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function CompExpressionContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CompExpressionContext.prototype = Object.create(ExprContext.prototype);
CompExpressionContext.prototype.constructor = CompExpressionContext;

CashParser.CompExpressionContext = CompExpressionContext;

CompExpressionContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

CompExpressionContext.prototype.OP_EQ = function() {
    return this.getToken(CashParser.OP_EQ, 0);
};

CompExpressionContext.prototype.OP_GT = function() {
    return this.getToken(CashParser.OP_GT, 0);
};

CompExpressionContext.prototype.OP_GE = function() {
    return this.getToken(CashParser.OP_GE, 0);
};

CompExpressionContext.prototype.OP_LE = function() {
    return this.getToken(CashParser.OP_LE, 0);
};

CompExpressionContext.prototype.OP_LT = function() {
    return this.getToken(CashParser.OP_LT, 0);
};
CompExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.enterCompExpression(this);
	}
};

CompExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.exitCompExpression(this);
	}
};

CompExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CashVisitor ) {
        return visitor.visitCompExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AtomExpressionContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AtomExpressionContext.prototype = Object.create(ExprContext.prototype);
AtomExpressionContext.prototype.constructor = AtomExpressionContext;

CashParser.AtomExpressionContext = AtomExpressionContext;

AtomExpressionContext.prototype.atom = function() {
    return this.getTypedRuleContext(AtomContext,0);
};
AtomExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.enterAtomExpression(this);
	}
};

AtomExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.exitAtomExpression(this);
	}
};

AtomExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CashVisitor ) {
        return visitor.visitAtomExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PowExpressionContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.left = null; // ExprContext;
    this.op = null; // Op_powContext;
    this.right = null; // ExprContext;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PowExpressionContext.prototype = Object.create(ExprContext.prototype);
PowExpressionContext.prototype.constructor = PowExpressionContext;

CashParser.PowExpressionContext = PowExpressionContext;

PowExpressionContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

PowExpressionContext.prototype.op_pow = function() {
    return this.getTypedRuleContext(Op_powContext,0);
};
PowExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.enterPowExpression(this);
	}
};

PowExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.exitPowExpression(this);
	}
};

PowExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CashVisitor ) {
        return visitor.visitPowExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MultiExpressionContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.left = null; // ExprContext;
    this.op = null; // Op_multiContext;
    this.right = null; // ExprContext;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultiExpressionContext.prototype = Object.create(ExprContext.prototype);
MultiExpressionContext.prototype.constructor = MultiExpressionContext;

CashParser.MultiExpressionContext = MultiExpressionContext;

MultiExpressionContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

MultiExpressionContext.prototype.op_multi = function() {
    return this.getTypedRuleContext(Op_multiContext,0);
};
MultiExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.enterMultiExpression(this);
	}
};

MultiExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.exitMultiExpression(this);
	}
};

MultiExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CashVisitor ) {
        return visitor.visitMultiExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BinExpressionContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BinExpressionContext.prototype = Object.create(ExprContext.prototype);
BinExpressionContext.prototype.constructor = BinExpressionContext;

CashParser.BinExpressionContext = BinExpressionContext;

BinExpressionContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

BinExpressionContext.prototype.OP_AND = function() {
    return this.getToken(CashParser.OP_AND, 0);
};

BinExpressionContext.prototype.OP_OR = function() {
    return this.getToken(CashParser.OP_OR, 0);
};
BinExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.enterBinExpression(this);
	}
};

BinExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.exitBinExpression(this);
	}
};

BinExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CashVisitor ) {
        return visitor.visitBinExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LabelExpressionContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LabelExpressionContext.prototype = Object.create(ExprContext.prototype);
LabelExpressionContext.prototype.constructor = LabelExpressionContext;

CashParser.LabelExpressionContext = LabelExpressionContext;

LabelExpressionContext.prototype.label = function() {
    return this.getTypedRuleContext(LabelContext,0);
};
LabelExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.enterLabelExpression(this);
	}
};

LabelExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.exitLabelExpression(this);
	}
};

LabelExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CashVisitor ) {
        return visitor.visitLabelExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ParExpressionContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.exprx = null; // ExprContext;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParExpressionContext.prototype = Object.create(ExprContext.prototype);
ParExpressionContext.prototype.constructor = ParExpressionContext;

CashParser.ParExpressionContext = ParExpressionContext;

ParExpressionContext.prototype.L_PAR = function() {
    return this.getToken(CashParser.L_PAR, 0);
};

ParExpressionContext.prototype.R_PAR = function() {
    return this.getToken(CashParser.R_PAR, 0);
};

ParExpressionContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
ParExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.enterParExpression(this);
	}
};

ParExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.exitParExpression(this);
	}
};

ParExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CashVisitor ) {
        return visitor.visitParExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FuncExpressionContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FuncExpressionContext.prototype = Object.create(ExprContext.prototype);
FuncExpressionContext.prototype.constructor = FuncExpressionContext;

CashParser.FuncExpressionContext = FuncExpressionContext;

FuncExpressionContext.prototype.func_call = function() {
    return this.getTypedRuleContext(Func_callContext,0);
};
FuncExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.enterFuncExpression(this);
	}
};

FuncExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.exitFuncExpression(this);
	}
};

FuncExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CashVisitor ) {
        return visitor.visitFuncExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CashParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 16;
    this.enterRecursionRule(localctx, 16, CashParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 95;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            localctx = new ParExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 88;
            this.match(CashParser.L_PAR);
            this.state = 89;
            localctx.exprx = this.expr(0);
            this.state = 90;
            this.match(CashParser.R_PAR);
            break;

        case 2:
            localctx = new FuncExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 92;
            this.func_call();
            break;

        case 3:
            localctx = new LabelExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 93;
            this.label();
            break;

        case 4:
            localctx = new AtomExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 94;
            this.atom();
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 117;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 115;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new PowExpressionContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, CashParser.RULE_expr);
                    this.state = 97;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 98;
                    localctx.op = this.op_pow();
                    this.state = 99;
                    localctx.right = this.expr(10);
                    break;

                case 2:
                    localctx = new MultiExpressionContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, CashParser.RULE_expr);
                    this.state = 101;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 102;
                    localctx.op = this.op_multi();
                    this.state = 103;
                    localctx.right = this.expr(9);
                    break;

                case 3:
                    localctx = new AddExpressionContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, CashParser.RULE_expr);
                    this.state = 105;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 106;
                    localctx.op = this.op_add();
                    this.state = 107;
                    localctx.right = this.expr(8);
                    break;

                case 4:
                    localctx = new BinExpressionContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CashParser.RULE_expr);
                    this.state = 109;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 110;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===CashParser.OP_AND || _la===CashParser.OP_OR)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 111;
                    this.expr(4);
                    break;

                case 5:
                    localctx = new CompExpressionContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CashParser.RULE_expr);
                    this.state = 112;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 113;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CashParser.OP_EQ) | (1 << CashParser.OP_GT) | (1 << CashParser.OP_GE) | (1 << CashParser.OP_LT) | (1 << CashParser.OP_LE))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 114;
                    this.expr(3);
                    break;

                } 
            }
            this.state = 119;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function AtomContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CashParser.RULE_atom;
    return this;
}

AtomContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AtomContext.prototype.constructor = AtomContext;

AtomContext.prototype.STR_LIT = function() {
    return this.getToken(CashParser.STR_LIT, 0);
};

AtomContext.prototype.NUM_LIT = function() {
    return this.getToken(CashParser.NUM_LIT, 0);
};

AtomContext.prototype.OP_PLUS = function() {
    return this.getToken(CashParser.OP_PLUS, 0);
};

AtomContext.prototype.OP_SUB = function() {
    return this.getToken(CashParser.OP_SUB, 0);
};

AtomContext.prototype.KW_TRUE = function() {
    return this.getToken(CashParser.KW_TRUE, 0);
};

AtomContext.prototype.KW_FALSE = function() {
    return this.getToken(CashParser.KW_FALSE, 0);
};

AtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.enterAtom(this);
	}
};

AtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.exitAtom(this);
	}
};

AtomContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CashVisitor ) {
        return visitor.visitAtom(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CashParser.AtomContext = AtomContext;

CashParser.prototype.atom = function() {

    var localctx = new AtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, CashParser.RULE_atom);
    var _la = 0; // Token type
    try {
        this.state = 126;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CashParser.STR_LIT:
            this.enterOuterAlt(localctx, 1);
            this.state = 120;
            this.match(CashParser.STR_LIT);
            break;
        case CashParser.OP_PLUS:
        case CashParser.OP_SUB:
        case CashParser.NUM_LIT:
            this.enterOuterAlt(localctx, 2);
            this.state = 122;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===CashParser.OP_PLUS || _la===CashParser.OP_SUB) {
                this.state = 121;
                _la = this._input.LA(1);
                if(!(_la===CashParser.OP_PLUS || _la===CashParser.OP_SUB)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
            }

            this.state = 124;
            this.match(CashParser.NUM_LIT);
            break;
        case CashParser.KW_TRUE:
        case CashParser.KW_FALSE:
            this.enterOuterAlt(localctx, 3);
            this.state = 125;
            _la = this._input.LA(1);
            if(!(_la===CashParser.KW_TRUE || _la===CashParser.KW_FALSE)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Op_powContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CashParser.RULE_op_pow;
    return this;
}

Op_powContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Op_powContext.prototype.constructor = Op_powContext;

Op_powContext.prototype.OP_POW = function() {
    return this.getToken(CashParser.OP_POW, 0);
};

Op_powContext.prototype.enterRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.enterOp_pow(this);
	}
};

Op_powContext.prototype.exitRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.exitOp_pow(this);
	}
};

Op_powContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CashVisitor ) {
        return visitor.visitOp_pow(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CashParser.Op_powContext = Op_powContext;

CashParser.prototype.op_pow = function() {

    var localctx = new Op_powContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, CashParser.RULE_op_pow);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 128;
        this.match(CashParser.OP_POW);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Op_multiContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CashParser.RULE_op_multi;
    return this;
}

Op_multiContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Op_multiContext.prototype.constructor = Op_multiContext;

Op_multiContext.prototype.OP_MULTIPLY = function() {
    return this.getToken(CashParser.OP_MULTIPLY, 0);
};

Op_multiContext.prototype.OP_DIVIDE = function() {
    return this.getToken(CashParser.OP_DIVIDE, 0);
};

Op_multiContext.prototype.enterRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.enterOp_multi(this);
	}
};

Op_multiContext.prototype.exitRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.exitOp_multi(this);
	}
};

Op_multiContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CashVisitor ) {
        return visitor.visitOp_multi(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CashParser.Op_multiContext = Op_multiContext;

CashParser.prototype.op_multi = function() {

    var localctx = new Op_multiContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, CashParser.RULE_op_multi);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 130;
        _la = this._input.LA(1);
        if(!(_la===CashParser.OP_MULTIPLY || _la===CashParser.OP_DIVIDE)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Op_addContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CashParser.RULE_op_add;
    return this;
}

Op_addContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Op_addContext.prototype.constructor = Op_addContext;

Op_addContext.prototype.OP_PLUS = function() {
    return this.getToken(CashParser.OP_PLUS, 0);
};

Op_addContext.prototype.OP_SUB = function() {
    return this.getToken(CashParser.OP_SUB, 0);
};

Op_addContext.prototype.enterRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.enterOp_add(this);
	}
};

Op_addContext.prototype.exitRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.exitOp_add(this);
	}
};

Op_addContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CashVisitor ) {
        return visitor.visitOp_add(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CashParser.Op_addContext = Op_addContext;

CashParser.prototype.op_add = function() {

    var localctx = new Op_addContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, CashParser.RULE_op_add);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 132;
        _la = this._input.LA(1);
        if(!(_la===CashParser.OP_PLUS || _la===CashParser.OP_SUB)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Func_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CashParser.RULE_func_name;
    return this;
}

Func_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Func_nameContext.prototype.constructor = Func_nameContext;

Func_nameContext.prototype.LABEL = function() {
    return this.getToken(CashParser.LABEL, 0);
};

Func_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.enterFunc_name(this);
	}
};

Func_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.exitFunc_name(this);
	}
};

Func_nameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CashVisitor ) {
        return visitor.visitFunc_name(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CashParser.Func_nameContext = Func_nameContext;

CashParser.prototype.func_name = function() {

    var localctx = new Func_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, CashParser.RULE_func_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 134;
        this.match(CashParser.LABEL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Statement_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CashParser.RULE_statement_block;
    return this;
}

Statement_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Statement_blockContext.prototype.constructor = Statement_blockContext;

Statement_blockContext.prototype.L_BRACE = function() {
    return this.getToken(CashParser.L_BRACE, 0);
};

Statement_blockContext.prototype.R_BRACE = function() {
    return this.getToken(CashParser.R_BRACE, 0);
};

Statement_blockContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

Statement_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.enterStatement_block(this);
	}
};

Statement_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.exitStatement_block(this);
	}
};

Statement_blockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CashVisitor ) {
        return visitor.visitStatement_block(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CashParser.Statement_blockContext = Statement_blockContext;

CashParser.prototype.statement_block = function() {

    var localctx = new Statement_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, CashParser.RULE_statement_block);
    var _la = 0; // Token type
    try {
        this.state = 145;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CashParser.L_BRACE:
            this.enterOuterAlt(localctx, 1);
            this.state = 136;
            this.match(CashParser.L_BRACE);
            this.state = 138; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 137;
                this.statement();
                this.state = 140; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(((((_la - 2)) & ~0x1f) == 0 && ((1 << (_la - 2)) & ((1 << (CashParser.KW_LET - 2)) | (1 << (CashParser.KW_CONST - 2)) | (1 << (CashParser.KW_IF - 2)) | (1 << (CashParser.KW_WHILE - 2)) | (1 << (CashParser.KW_FUNC - 2)) | (1 << (CashParser.KW_TRUE - 2)) | (1 << (CashParser.KW_FALSE - 2)) | (1 << (CashParser.OP_PLUS - 2)) | (1 << (CashParser.OP_SUB - 2)) | (1 << (CashParser.L_PAR - 2)) | (1 << (CashParser.LABEL - 2)) | (1 << (CashParser.STR_LIT - 2)) | (1 << (CashParser.NUM_LIT - 2)) | (1 << (CashParser.COMMENT - 2)) | (1 << (CashParser.BLOCK_COMMENT - 2)))) !== 0));
            this.state = 142;
            this.match(CashParser.R_BRACE);
            break;
        case CashParser.KW_LET:
        case CashParser.KW_CONST:
        case CashParser.KW_IF:
        case CashParser.KW_WHILE:
        case CashParser.KW_FUNC:
        case CashParser.KW_TRUE:
        case CashParser.KW_FALSE:
        case CashParser.OP_PLUS:
        case CashParser.OP_SUB:
        case CashParser.L_PAR:
        case CashParser.LABEL:
        case CashParser.STR_LIT:
        case CashParser.NUM_LIT:
        case CashParser.COMMENT:
        case CashParser.BLOCK_COMMENT:
            this.enterOuterAlt(localctx, 2);
            this.state = 144;
            this.statement();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function If_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CashParser.RULE_if_statement;
    return this;
}

If_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
If_statementContext.prototype.constructor = If_statementContext;

If_statementContext.prototype.KW_IF = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CashParser.KW_IF);
    } else {
        return this.getToken(CashParser.KW_IF, i);
    }
};


If_statementContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

If_statementContext.prototype.statement_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Statement_blockContext);
    } else {
        return this.getTypedRuleContext(Statement_blockContext,i);
    }
};

If_statementContext.prototype.KW_ELSE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CashParser.KW_ELSE);
    } else {
        return this.getToken(CashParser.KW_ELSE, i);
    }
};


If_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.enterIf_statement(this);
	}
};

If_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.exitIf_statement(this);
	}
};

If_statementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CashVisitor ) {
        return visitor.visitIf_statement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CashParser.If_statementContext = If_statementContext;

CashParser.prototype.if_statement = function() {

    var localctx = new If_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, CashParser.RULE_if_statement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 147;
        this.match(CashParser.KW_IF);
        this.state = 148;
        this.expr(0);
        this.state = 149;
        this.statement_block();
        this.state = 157;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 150;
                this.match(CashParser.KW_ELSE);
                this.state = 151;
                this.match(CashParser.KW_IF);
                this.state = 152;
                this.expr(0);
                this.state = 153;
                this.statement_block(); 
            }
            this.state = 159;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
        }

        this.state = 162;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
        if(la_===1) {
            this.state = 160;
            this.match(CashParser.KW_ELSE);
            this.state = 161;
            this.statement_block();

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function While_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CashParser.RULE_while_statement;
    return this;
}

While_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
While_statementContext.prototype.constructor = While_statementContext;

While_statementContext.prototype.KW_WHILE = function() {
    return this.getToken(CashParser.KW_WHILE, 0);
};

While_statementContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

While_statementContext.prototype.statement_block = function() {
    return this.getTypedRuleContext(Statement_blockContext,0);
};

While_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.enterWhile_statement(this);
	}
};

While_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.exitWhile_statement(this);
	}
};

While_statementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CashVisitor ) {
        return visitor.visitWhile_statement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CashParser.While_statementContext = While_statementContext;

CashParser.prototype.while_statement = function() {

    var localctx = new While_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, CashParser.RULE_while_statement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 164;
        this.match(CashParser.KW_WHILE);
        this.state = 165;
        this.expr(0);
        this.state = 166;
        this.statement_block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LabelContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CashParser.RULE_label;
    return this;
}

LabelContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LabelContext.prototype.constructor = LabelContext;

LabelContext.prototype.LABEL = function() {
    return this.getToken(CashParser.LABEL, 0);
};

LabelContext.prototype.enterRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.enterLabel(this);
	}
};

LabelContext.prototype.exitRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.exitLabel(this);
	}
};

LabelContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CashVisitor ) {
        return visitor.visitLabel(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CashParser.LabelContext = LabelContext;

CashParser.prototype.label = function() {

    var localctx = new LabelContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, CashParser.RULE_label);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 168;
        this.match(CashParser.LABEL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


CashParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 8:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

CashParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 9);
		case 1:
			return this.precpred(this._ctx, 8);
		case 2:
			return this.precpred(this._ctx, 7);
		case 3:
			return this.precpred(this._ctx, 3);
		case 4:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.CashParser = CashParser;
