// Generated from Cash.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var CashListener = require('./CashListener').CashListener;
var CashVisitor = require('./CashVisitor').CashVisitor;

var grammarFileName = "Cash.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u001ah\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0003\u0002\u0003\u0002\u0003\u0002\u0007\u0002\u0016",
    "\n\u0002\f\u0002\u000e\u0002\u0019\u000b\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0005\u0003\u001f\n\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u00073",
    "\n\u0007\f\u0007\u000e\u00076\u000b\u0007\u0003\u0007\u0003\u0007\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0007\bB",
    "\n\b\f\b\u000e\bE\u000b\b\u0003\b\u0003\b\u0003\b\u0005\bJ\n\b\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\tR\n\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0005\tX\n\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0007\tc\n\t\f\t\u000e\tf\u000b\t",
    "\u0003\t\u0002\u0003\u0010\n\u0002\u0004\u0006\b\n\f\u000e\u0010\u0002",
    "\u0004\u0003\u0002\n\u000b\u0003\u0002\f\r\u0002p\u0002\u0017\u0003",
    "\u0002\u0002\u0002\u0004\u001e\u0003\u0002\u0002\u0002\u0006 \u0003",
    "\u0002\u0002\u0002\b%\u0003\u0002\u0002\u0002\n*\u0003\u0002\u0002\u0002",
    "\f.\u0003\u0002\u0002\u0002\u000eI\u0003\u0002\u0002\u0002\u0010W\u0003",
    "\u0002\u0002\u0002\u0012\u0016\u0005\u0004\u0003\u0002\u0013\u0016\u0005",
    "\f\u0007\u0002\u0014\u0016\u0007\u0018\u0002\u0002\u0015\u0012\u0003",
    "\u0002\u0002\u0002\u0015\u0013\u0003\u0002\u0002\u0002\u0015\u0014\u0003",
    "\u0002\u0002\u0002\u0016\u0019\u0003\u0002\u0002\u0002\u0017\u0015\u0003",
    "\u0002\u0002\u0002\u0017\u0018\u0003\u0002\u0002\u0002\u0018\u0003\u0003",
    "\u0002\u0002\u0002\u0019\u0017\u0003\u0002\u0002\u0002\u001a\u001f\u0005",
    "\u0006\u0004\u0002\u001b\u001f\u0005\b\u0005\u0002\u001c\u001f\u0005",
    "\u000e\b\u0002\u001d\u001f\u0005\n\u0006\u0002\u001e\u001a\u0003\u0002",
    "\u0002\u0002\u001e\u001b\u0003\u0002\u0002\u0002\u001e\u001c\u0003\u0002",
    "\u0002\u0002\u001e\u001d\u0003\u0002\u0002\u0002\u001f\u0005\u0003\u0002",
    "\u0002\u0002 !\u0007\u0004\u0002\u0002!\"\u0007\u0015\u0002\u0002\"",
    "#\u0007\t\u0002\u0002#$\u0005\u0010\t\u0002$\u0007\u0003\u0002\u0002",
    "\u0002%&\u0007\u0005\u0002\u0002&\'\u0007\u0015\u0002\u0002\'(\u0007",
    "\t\u0002\u0002()\u0005\u0010\t\u0002)\t\u0003\u0002\u0002\u0002*+\u0007",
    "\u0015\u0002\u0002+,\u0007\t\u0002\u0002,-\u0005\u0010\t\u0002-\u000b",
    "\u0003\u0002\u0002\u0002./\u0007\b\u0002\u0002/0\u0007\u0015\u0002\u0002",
    "04\u0007\u0011\u0002\u000213\u0005\u0004\u0003\u000221\u0003\u0002\u0002",
    "\u000236\u0003\u0002\u0002\u000242\u0003\u0002\u0002\u000245\u0003\u0002",
    "\u0002\u000257\u0003\u0002\u0002\u000264\u0003\u0002\u0002\u000278\u0007",
    "\u0012\u0002\u00028\r\u0003\u0002\u0002\u00029:\u0007\u0015\u0002\u0002",
    ":;\u0007\u0013\u0002\u0002;J\u0007\u0014\u0002\u0002<=\u0007\u0015\u0002",
    "\u0002=C\u0007\u0013\u0002\u0002>?\u0005\u0010\t\u0002?@\u0007\u0003",
    "\u0002\u0002@B\u0003\u0002\u0002\u0002A>\u0003\u0002\u0002\u0002BE\u0003",
    "\u0002\u0002\u0002CA\u0003\u0002\u0002\u0002CD\u0003\u0002\u0002\u0002",
    "DF\u0003\u0002\u0002\u0002EC\u0003\u0002\u0002\u0002FG\u0005\u0010\t",
    "\u0002GH\u0007\u0014\u0002\u0002HJ\u0003\u0002\u0002\u0002I9\u0003\u0002",
    "\u0002\u0002I<\u0003\u0002\u0002\u0002J\u000f\u0003\u0002\u0002\u0002",
    "KL\b\t\u0001\u0002LM\u0007\u0013\u0002\u0002MN\u0005\u0010\t\u0002N",
    "O\u0007\u0014\u0002\u0002OX\u0003\u0002\u0002\u0002PR\t\u0002\u0002",
    "\u0002QP\u0003\u0002\u0002\u0002QR\u0003\u0002\u0002\u0002RS\u0003\u0002",
    "\u0002\u0002SX\u0007\u0017\u0002\u0002TX\u0007\u0016\u0002\u0002UX\u0005",
    "\u000e\b\u0002VX\u0007\u0015\u0002\u0002WK\u0003\u0002\u0002\u0002W",
    "Q\u0003\u0002\u0002\u0002WT\u0003\u0002\u0002\u0002WU\u0003\u0002\u0002",
    "\u0002WV\u0003\u0002\u0002\u0002Xd\u0003\u0002\u0002\u0002YZ\f\n\u0002",
    "\u0002Z[\u0007\u000e\u0002\u0002[c\u0005\u0010\t\u000b\\]\f\t\u0002",
    "\u0002]^\t\u0003\u0002\u0002^c\u0005\u0010\t\n_`\f\b\u0002\u0002`a\t",
    "\u0002\u0002\u0002ac\u0005\u0010\t\tbY\u0003\u0002\u0002\u0002b\\\u0003",
    "\u0002\u0002\u0002b_\u0003\u0002\u0002\u0002cf\u0003\u0002\u0002\u0002",
    "db\u0003\u0002\u0002\u0002de\u0003\u0002\u0002\u0002e\u0011\u0003\u0002",
    "\u0002\u0002fd\u0003\u0002\u0002\u0002\f\u0015\u0017\u001e4CIQWbd"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "','", "'let'", "'const'", "'if'", "'while'", 
                     "'func'", "'='", "'+'", "'-'", "'*'", "'\\'", "'^^'", 
                     "'++'", "'--'", "'{'", "'}'", "'('", "')'" ];

var symbolicNames = [ null, null, "KW_LET", "KW_CONST", "KW_IF", "KW_WHILE", 
                      "KW_FUNC", "OP_ASSIGN", "OP_PLUS", "OP_SUB", "OP_MULTIPLY", 
                      "OP_DIVIDE", "OP_POW", "OP_INCREMENT", "OP_DECREMENT", 
                      "L_BRACE", "R_BRACE", "L_PAR", "R_PAR", "LABEL", "STR_LIT", 
                      "NUM_LIT", "COMMENT", "WS", "EOL" ];

var ruleNames =  [ "program", "std_expr", "var_assignment", "const_assignment", 
                   "assign_to_label", "func_declaration", "func_call", "expr" ];

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
CashParser.OP_ASSIGN = 7;
CashParser.OP_PLUS = 8;
CashParser.OP_SUB = 9;
CashParser.OP_MULTIPLY = 10;
CashParser.OP_DIVIDE = 11;
CashParser.OP_POW = 12;
CashParser.OP_INCREMENT = 13;
CashParser.OP_DECREMENT = 14;
CashParser.L_BRACE = 15;
CashParser.R_BRACE = 16;
CashParser.L_PAR = 17;
CashParser.R_PAR = 18;
CashParser.LABEL = 19;
CashParser.STR_LIT = 20;
CashParser.NUM_LIT = 21;
CashParser.COMMENT = 22;
CashParser.WS = 23;
CashParser.EOL = 24;

CashParser.RULE_program = 0;
CashParser.RULE_std_expr = 1;
CashParser.RULE_var_assignment = 2;
CashParser.RULE_const_assignment = 3;
CashParser.RULE_assign_to_label = 4;
CashParser.RULE_func_declaration = 5;
CashParser.RULE_func_call = 6;
CashParser.RULE_expr = 7;

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

ProgramContext.prototype.std_expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Std_exprContext);
    } else {
        return this.getTypedRuleContext(Std_exprContext,i);
    }
};

ProgramContext.prototype.func_declaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Func_declarationContext);
    } else {
        return this.getTypedRuleContext(Func_declarationContext,i);
    }
};

ProgramContext.prototype.COMMENT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CashParser.COMMENT);
    } else {
        return this.getToken(CashParser.COMMENT, i);
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
        this.state = 21;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CashParser.KW_LET) | (1 << CashParser.KW_CONST) | (1 << CashParser.KW_FUNC) | (1 << CashParser.LABEL) | (1 << CashParser.COMMENT))) !== 0)) {
            this.state = 19;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case CashParser.KW_LET:
            case CashParser.KW_CONST:
            case CashParser.LABEL:
                this.state = 16;
                this.std_expr();
                break;
            case CashParser.KW_FUNC:
                this.state = 17;
                this.func_declaration();
                break;
            case CashParser.COMMENT:
                this.state = 18;
                this.match(CashParser.COMMENT);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 23;
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

function Std_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CashParser.RULE_std_expr;
    return this;
}

Std_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Std_exprContext.prototype.constructor = Std_exprContext;

Std_exprContext.prototype.var_assignment = function() {
    return this.getTypedRuleContext(Var_assignmentContext,0);
};

Std_exprContext.prototype.const_assignment = function() {
    return this.getTypedRuleContext(Const_assignmentContext,0);
};

Std_exprContext.prototype.func_call = function() {
    return this.getTypedRuleContext(Func_callContext,0);
};

Std_exprContext.prototype.assign_to_label = function() {
    return this.getTypedRuleContext(Assign_to_labelContext,0);
};

Std_exprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.enterStd_expr(this);
	}
};

Std_exprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.exitStd_expr(this);
	}
};

Std_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CashVisitor ) {
        return visitor.visitStd_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CashParser.Std_exprContext = Std_exprContext;

CashParser.prototype.std_expr = function() {

    var localctx = new Std_exprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, CashParser.RULE_std_expr);
    try {
        this.state = 28;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 24;
            this.var_assignment();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 25;
            this.const_assignment();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 26;
            this.func_call();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 27;
            this.assign_to_label();
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
    return this;
}

Var_assignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Var_assignmentContext.prototype.constructor = Var_assignmentContext;

Var_assignmentContext.prototype.KW_LET = function() {
    return this.getToken(CashParser.KW_LET, 0);
};

Var_assignmentContext.prototype.LABEL = function() {
    return this.getToken(CashParser.LABEL, 0);
};

Var_assignmentContext.prototype.OP_ASSIGN = function() {
    return this.getToken(CashParser.OP_ASSIGN, 0);
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
        this.state = 30;
        this.match(CashParser.KW_LET);
        this.state = 31;
        this.match(CashParser.LABEL);
        this.state = 32;
        this.match(CashParser.OP_ASSIGN);
        this.state = 33;
        this.expr(0);
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
    return this;
}

Const_assignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Const_assignmentContext.prototype.constructor = Const_assignmentContext;

Const_assignmentContext.prototype.KW_CONST = function() {
    return this.getToken(CashParser.KW_CONST, 0);
};

Const_assignmentContext.prototype.LABEL = function() {
    return this.getToken(CashParser.LABEL, 0);
};

Const_assignmentContext.prototype.OP_ASSIGN = function() {
    return this.getToken(CashParser.OP_ASSIGN, 0);
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
        this.state = 35;
        this.match(CashParser.KW_CONST);
        this.state = 36;
        this.match(CashParser.LABEL);
        this.state = 37;
        this.match(CashParser.OP_ASSIGN);
        this.state = 38;
        this.expr(0);
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
    return this;
}

Assign_to_labelContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Assign_to_labelContext.prototype.constructor = Assign_to_labelContext;

Assign_to_labelContext.prototype.LABEL = function() {
    return this.getToken(CashParser.LABEL, 0);
};

Assign_to_labelContext.prototype.OP_ASSIGN = function() {
    return this.getToken(CashParser.OP_ASSIGN, 0);
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
        this.state = 40;
        this.match(CashParser.LABEL);
        this.state = 41;
        this.match(CashParser.OP_ASSIGN);
        this.state = 42;
        this.expr(0);
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

Func_declarationContext.prototype.R_BRACE = function() {
    return this.getToken(CashParser.R_BRACE, 0);
};

Func_declarationContext.prototype.std_expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Std_exprContext);
    } else {
        return this.getTypedRuleContext(Std_exprContext,i);
    }
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
    this.enterRule(localctx, 10, CashParser.RULE_func_declaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 44;
        this.match(CashParser.KW_FUNC);
        this.state = 45;
        this.match(CashParser.LABEL);
        this.state = 46;
        this.match(CashParser.L_BRACE);
        this.state = 50;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CashParser.KW_LET) | (1 << CashParser.KW_CONST) | (1 << CashParser.LABEL))) !== 0)) {
            this.state = 47;
            this.std_expr();
            this.state = 52;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 53;
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
    return this;
}

Func_callContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Func_callContext.prototype.constructor = Func_callContext;

Func_callContext.prototype.LABEL = function() {
    return this.getToken(CashParser.LABEL, 0);
};

Func_callContext.prototype.L_PAR = function() {
    return this.getToken(CashParser.L_PAR, 0);
};

Func_callContext.prototype.R_PAR = function() {
    return this.getToken(CashParser.R_PAR, 0);
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
    this.enterRule(localctx, 12, CashParser.RULE_func_call);
    try {
        this.state = 71;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 55;
            this.match(CashParser.LABEL);
            this.state = 56;
            this.match(CashParser.L_PAR);
            this.state = 57;
            this.match(CashParser.R_PAR);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 58;
            this.match(CashParser.LABEL);
            this.state = 59;
            this.match(CashParser.L_PAR);
            this.state = 65;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 60;
                    this.expr(0);
                    this.state = 61;
                    this.match(CashParser.T__0); 
                }
                this.state = 67;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
            }

            this.state = 68;
            this.expr(0);
            this.state = 69;
            this.match(CashParser.R_PAR);
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

ExprContext.prototype.L_PAR = function() {
    return this.getToken(CashParser.L_PAR, 0);
};

ExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprContext.prototype.R_PAR = function() {
    return this.getToken(CashParser.R_PAR, 0);
};

ExprContext.prototype.NUM_LIT = function() {
    return this.getToken(CashParser.NUM_LIT, 0);
};

ExprContext.prototype.OP_PLUS = function() {
    return this.getToken(CashParser.OP_PLUS, 0);
};

ExprContext.prototype.OP_SUB = function() {
    return this.getToken(CashParser.OP_SUB, 0);
};

ExprContext.prototype.STR_LIT = function() {
    return this.getToken(CashParser.STR_LIT, 0);
};

ExprContext.prototype.func_call = function() {
    return this.getTypedRuleContext(Func_callContext,0);
};

ExprContext.prototype.LABEL = function() {
    return this.getToken(CashParser.LABEL, 0);
};

ExprContext.prototype.OP_POW = function() {
    return this.getToken(CashParser.OP_POW, 0);
};

ExprContext.prototype.OP_MULTIPLY = function() {
    return this.getToken(CashParser.OP_MULTIPLY, 0);
};

ExprContext.prototype.OP_DIVIDE = function() {
    return this.getToken(CashParser.OP_DIVIDE, 0);
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.exitExpr(this);
	}
};

ExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CashVisitor ) {
        return visitor.visitExpr(this);
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
    var _startState = 14;
    this.enterRecursionRule(localctx, 14, CashParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 85;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        switch(la_) {
        case 1:
            this.state = 74;
            this.match(CashParser.L_PAR);
            this.state = 75;
            this.expr(0);
            this.state = 76;
            this.match(CashParser.R_PAR);
            break;

        case 2:
            this.state = 79;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===CashParser.OP_PLUS || _la===CashParser.OP_SUB) {
                this.state = 78;
                _la = this._input.LA(1);
                if(!(_la===CashParser.OP_PLUS || _la===CashParser.OP_SUB)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
            }

            this.state = 81;
            this.match(CashParser.NUM_LIT);
            break;

        case 3:
            this.state = 82;
            this.match(CashParser.STR_LIT);
            break;

        case 4:
            this.state = 83;
            this.func_call();
            break;

        case 5:
            this.state = 84;
            this.match(CashParser.LABEL);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 98;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 96;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, CashParser.RULE_expr);
                    this.state = 87;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 88;
                    this.match(CashParser.OP_POW);
                    this.state = 89;
                    this.expr(9);
                    break;

                case 2:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, CashParser.RULE_expr);
                    this.state = 90;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 91;
                    _la = this._input.LA(1);
                    if(!(_la===CashParser.OP_MULTIPLY || _la===CashParser.OP_DIVIDE)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 92;
                    this.expr(8);
                    break;

                case 3:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, CashParser.RULE_expr);
                    this.state = 93;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 94;
                    _la = this._input.LA(1);
                    if(!(_la===CashParser.OP_PLUS || _la===CashParser.OP_SUB)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 95;
                    this.expr(7);
                    break;

                } 
            }
            this.state = 100;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
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


CashParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 7:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

CashParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 8);
		case 1:
			return this.precpred(this._ctx, 7);
		case 2:
			return this.precpred(this._ctx, 6);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.CashParser = CashParser;
