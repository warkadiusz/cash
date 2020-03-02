// Generated from Cash.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var CashListener = require('./CashListener').CashListener;
var CashVisitor = require('./CashVisitor').CashVisitor;

var grammarFileName = "Cash.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0019A\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0003",
    "\u0002\u0003\u0002\u0007\u0002\u0011\n\u0002\f\u0002\u000e\u0002\u0014",
    "\u000b\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003",
    "\u001a\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006*\n\u0006\f\u0006",
    "\u000e\u0006-\u000b\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0007",
    "\u00078\n\u0007\f\u0007\u000e\u0007;\u000b\u0007\u0003\u0007\u0003\u0007",
    "\u0005\u0007?\n\u0007\u0003\u0007\u0002\u0002\b\u0002\u0004\u0006\b",
    "\n\f\u0002\u0004\u0003\u0002\u0015\u0016\u0003\u0002\u0014\u0016\u0002",
    "B\u0002\u0012\u0003\u0002\u0002\u0002\u0004\u0019\u0003\u0002\u0002",
    "\u0002\u0006\u001b\u0003\u0002\u0002\u0002\b \u0003\u0002\u0002\u0002",
    "\n%\u0003\u0002\u0002\u0002\f>\u0003\u0002\u0002\u0002\u000e\u0011\u0005",
    "\u0004\u0003\u0002\u000f\u0011\u0007\u0017\u0002\u0002\u0010\u000e\u0003",
    "\u0002\u0002\u0002\u0010\u000f\u0003\u0002\u0002\u0002\u0011\u0014\u0003",
    "\u0002\u0002\u0002\u0012\u0010\u0003\u0002\u0002\u0002\u0012\u0013\u0003",
    "\u0002\u0002\u0002\u0013\u0003\u0003\u0002\u0002\u0002\u0014\u0012\u0003",
    "\u0002\u0002\u0002\u0015\u001a\u0005\u0006\u0004\u0002\u0016\u001a\u0005",
    "\b\u0005\u0002\u0017\u001a\u0005\n\u0006\u0002\u0018\u001a\u0005\f\u0007",
    "\u0002\u0019\u0015\u0003\u0002\u0002\u0002\u0019\u0016\u0003\u0002\u0002",
    "\u0002\u0019\u0017\u0003\u0002\u0002\u0002\u0019\u0018\u0003\u0002\u0002",
    "\u0002\u001a\u0005\u0003\u0002\u0002\u0002\u001b\u001c\u0007\u0004\u0002",
    "\u0002\u001c\u001d\u0007\u0014\u0002\u0002\u001d\u001e\u0007\t\u0002",
    "\u0002\u001e\u001f\t\u0002\u0002\u0002\u001f\u0007\u0003\u0002\u0002",
    "\u0002 !\u0007\u0005\u0002\u0002!\"\u0007\u0014\u0002\u0002\"#\u0007",
    "\t\u0002\u0002#$\t\u0002\u0002\u0002$\t\u0003\u0002\u0002\u0002%&\u0007",
    "\b\u0002\u0002&\'\u0007\u0014\u0002\u0002\'+\u0007\u0010\u0002\u0002",
    "(*\u0005\u0004\u0003\u0002)(\u0003\u0002\u0002\u0002*-\u0003\u0002\u0002",
    "\u0002+)\u0003\u0002\u0002\u0002+,\u0003\u0002\u0002\u0002,.\u0003\u0002",
    "\u0002\u0002-+\u0003\u0002\u0002\u0002./\u0007\u0011\u0002\u0002/\u000b",
    "\u0003\u0002\u0002\u000201\u0007\u0014\u0002\u000212\u0007\u0012\u0002",
    "\u00022?\u0007\u0013\u0002\u000234\u0007\u0014\u0002\u000249\u0007\u0012",
    "\u0002\u000256\t\u0003\u0002\u000268\u0007\u0003\u0002\u000275\u0003",
    "\u0002\u0002\u00028;\u0003\u0002\u0002\u000297\u0003\u0002\u0002\u0002",
    "9:\u0003\u0002\u0002\u0002:<\u0003\u0002\u0002\u0002;9\u0003\u0002\u0002",
    "\u0002<=\t\u0003\u0002\u0002=?\u0007\u0013\u0002\u0002>0\u0003\u0002",
    "\u0002\u0002>3\u0003\u0002\u0002\u0002?\r\u0003\u0002\u0002\u0002\b",
    "\u0010\u0012\u0019+9>"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "','", "'let'", "'const'", "'if'", "'while'", 
                     "'func'", "'='", "'+'", "'-'", "'*'", "'\\'", "'++'", 
                     "'--'", "'{'", "'}'", "'('", "')'" ];

var symbolicNames = [ null, null, "KW_LET", "KW_CONST", "KW_IF", "KW_WHILE", 
                      "KW_FUNC", "OP_ASSIGN", "OP_PLUS", "OP_SUB", "OP_MULTIPLY", 
                      "OP_DIVIDE", "OP_INCREMENT", "OP_DECREMENT", "L_BRACE", 
                      "R_BRACE", "L_PAR", "R_PAR", "LABEL", "STR_LIT", "NUM_LIT", 
                      "COMMENT", "WS", "EOL" ];

var ruleNames =  [ "program", "expr", "var_assignment", "const_assignment", 
                   "func_declaration", "func_call" ];

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
CashParser.OP_INCREMENT = 12;
CashParser.OP_DECREMENT = 13;
CashParser.L_BRACE = 14;
CashParser.R_BRACE = 15;
CashParser.L_PAR = 16;
CashParser.R_PAR = 17;
CashParser.LABEL = 18;
CashParser.STR_LIT = 19;
CashParser.NUM_LIT = 20;
CashParser.COMMENT = 21;
CashParser.WS = 22;
CashParser.EOL = 23;

CashParser.RULE_program = 0;
CashParser.RULE_expr = 1;
CashParser.RULE_var_assignment = 2;
CashParser.RULE_const_assignment = 3;
CashParser.RULE_func_declaration = 4;
CashParser.RULE_func_call = 5;

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

ProgramContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
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
        this.state = 16;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CashParser.KW_LET) | (1 << CashParser.KW_CONST) | (1 << CashParser.KW_FUNC) | (1 << CashParser.LABEL) | (1 << CashParser.COMMENT))) !== 0)) {
            this.state = 14;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case CashParser.KW_LET:
            case CashParser.KW_CONST:
            case CashParser.KW_FUNC:
            case CashParser.LABEL:
                this.state = 12;
                this.expr();
                break;
            case CashParser.COMMENT:
                this.state = 13;
                this.match(CashParser.COMMENT);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 18;
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

ExprContext.prototype.var_assignment = function() {
    return this.getTypedRuleContext(Var_assignmentContext,0);
};

ExprContext.prototype.const_assignment = function() {
    return this.getTypedRuleContext(Const_assignmentContext,0);
};

ExprContext.prototype.func_declaration = function() {
    return this.getTypedRuleContext(Func_declarationContext,0);
};

ExprContext.prototype.func_call = function() {
    return this.getTypedRuleContext(Func_callContext,0);
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




CashParser.ExprContext = ExprContext;

CashParser.prototype.expr = function() {

    var localctx = new ExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, CashParser.RULE_expr);
    try {
        this.state = 23;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CashParser.KW_LET:
            this.enterOuterAlt(localctx, 1);
            this.state = 19;
            this.var_assignment();
            break;
        case CashParser.KW_CONST:
            this.enterOuterAlt(localctx, 2);
            this.state = 20;
            this.const_assignment();
            break;
        case CashParser.KW_FUNC:
            this.enterOuterAlt(localctx, 3);
            this.state = 21;
            this.func_declaration();
            break;
        case CashParser.LABEL:
            this.enterOuterAlt(localctx, 4);
            this.state = 22;
            this.func_call();
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

Var_assignmentContext.prototype.STR_LIT = function() {
    return this.getToken(CashParser.STR_LIT, 0);
};

Var_assignmentContext.prototype.NUM_LIT = function() {
    return this.getToken(CashParser.NUM_LIT, 0);
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
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 25;
        this.match(CashParser.KW_LET);
        this.state = 26;
        this.match(CashParser.LABEL);
        this.state = 27;
        this.match(CashParser.OP_ASSIGN);
        this.state = 28;
        _la = this._input.LA(1);
        if(!(_la===CashParser.STR_LIT || _la===CashParser.NUM_LIT)) {
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

Const_assignmentContext.prototype.STR_LIT = function() {
    return this.getToken(CashParser.STR_LIT, 0);
};

Const_assignmentContext.prototype.NUM_LIT = function() {
    return this.getToken(CashParser.NUM_LIT, 0);
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
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 30;
        this.match(CashParser.KW_CONST);
        this.state = 31;
        this.match(CashParser.LABEL);
        this.state = 32;
        this.match(CashParser.OP_ASSIGN);
        this.state = 33;
        _la = this._input.LA(1);
        if(!(_la===CashParser.STR_LIT || _la===CashParser.NUM_LIT)) {
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

Func_declarationContext.prototype.R_BRACE = function() {
    return this.getToken(CashParser.R_BRACE, 0);
};

Func_declarationContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
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
    this.enterRule(localctx, 8, CashParser.RULE_func_declaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 35;
        this.match(CashParser.KW_FUNC);
        this.state = 36;
        this.match(CashParser.LABEL);
        this.state = 37;
        this.match(CashParser.L_BRACE);
        this.state = 41;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CashParser.KW_LET) | (1 << CashParser.KW_CONST) | (1 << CashParser.KW_FUNC) | (1 << CashParser.LABEL))) !== 0)) {
            this.state = 38;
            this.expr();
            this.state = 43;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 44;
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

Func_callContext.prototype.LABEL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CashParser.LABEL);
    } else {
        return this.getToken(CashParser.LABEL, i);
    }
};


Func_callContext.prototype.L_PAR = function() {
    return this.getToken(CashParser.L_PAR, 0);
};

Func_callContext.prototype.R_PAR = function() {
    return this.getToken(CashParser.R_PAR, 0);
};

Func_callContext.prototype.STR_LIT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CashParser.STR_LIT);
    } else {
        return this.getToken(CashParser.STR_LIT, i);
    }
};


Func_callContext.prototype.NUM_LIT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CashParser.NUM_LIT);
    } else {
        return this.getToken(CashParser.NUM_LIT, i);
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
    this.enterRule(localctx, 10, CashParser.RULE_func_call);
    var _la = 0; // Token type
    try {
        this.state = 60;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 46;
            this.match(CashParser.LABEL);
            this.state = 47;
            this.match(CashParser.L_PAR);
            this.state = 48;
            this.match(CashParser.R_PAR);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 49;
            this.match(CashParser.LABEL);
            this.state = 50;
            this.match(CashParser.L_PAR);
            this.state = 55;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 51;
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CashParser.LABEL) | (1 << CashParser.STR_LIT) | (1 << CashParser.NUM_LIT))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 52;
                    this.match(CashParser.T__0); 
                }
                this.state = 57;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
            }

            this.state = 58;
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CashParser.LABEL) | (1 << CashParser.STR_LIT) | (1 << CashParser.NUM_LIT))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 59;
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


exports.CashParser = CashParser;
