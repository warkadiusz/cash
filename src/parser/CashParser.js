// Generated from Cash.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var CashListener = require('./CashListener').CashListener;
var CashVisitor = require('./CashVisitor').CashVisitor;

var grammarFileName = "Cash.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\'\u00ca\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0003",
    "\u0002\u0007\u00020\n\u0002\f\u0002\u000e\u00023\u000b\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0005\u0003=\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0007",
    "\n^\n\n\f\n\u000e\na\u000b\n\u0003\n\u0005\nd\n\n\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0007\u000bi\n\u000b\f\u000b\u000e\u000bl\u000b\u000b",
    "\u0003\u000b\u0005\u000bo\n\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0005\fy\n\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0007\f\u008f",
    "\n\f\f\f\u000e\f\u0092\u000b\f\u0003\r\u0003\r\u0005\r\u0096\n\r\u0003",
    "\r\u0003\r\u0005\r\u009a\n\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003",
    "\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0006\u0014\u00aa",
    "\n\u0014\r\u0014\u000e\u0014\u00ab\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0005\u0014\u00b1\n\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0007\u0015\u00bb",
    "\n\u0015\f\u0015\u000e\u0015\u00be\u000b\u0015\u0003\u0015\u0003\u0015",
    "\u0005\u0015\u00c2\n\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0002\u0003\u0016\u0018\u0002",
    "\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e",
    " \"$&(*,\u0002\b\u0003\u0002#$\u0003\u0002\r\u000e\u0003\u0002\n\u000b",
    "\u0003\u0002\u000f\u0010\u0003\u0002\u0016\u001b\u0003\u0002\u0014\u0015",
    "\u0002\u00ce\u00021\u0003\u0002\u0002\u0002\u0004<\u0003\u0002\u0002",
    "\u0002\u0006>\u0003\u0002\u0002\u0002\bC\u0003\u0002\u0002\u0002\nH",
    "\u0003\u0002\u0002\u0002\fL\u0003\u0002\u0002\u0002\u000eN\u0003\u0002",
    "\u0002\u0002\u0010U\u0003\u0002\u0002\u0002\u0012_\u0003\u0002\u0002",
    "\u0002\u0014j\u0003\u0002\u0002\u0002\u0016x\u0003\u0002\u0002\u0002",
    "\u0018\u0099\u0003\u0002\u0002\u0002\u001a\u009b\u0003\u0002\u0002\u0002",
    "\u001c\u009d\u0003\u0002\u0002\u0002\u001e\u009f\u0003\u0002\u0002\u0002",
    " \u00a1\u0003\u0002\u0002\u0002\"\u00a3\u0003\u0002\u0002\u0002$\u00a5",
    "\u0003\u0002\u0002\u0002&\u00b0\u0003\u0002\u0002\u0002(\u00b2\u0003",
    "\u0002\u0002\u0002*\u00c3\u0003\u0002\u0002\u0002,\u00c7\u0003\u0002",
    "\u0002\u0002.0\u0005\u0004\u0003\u0002/.\u0003\u0002\u0002\u000203\u0003",
    "\u0002\u0002\u00021/\u0003\u0002\u0002\u000212\u0003\u0002\u0002\u0002",
    "2\u0003\u0003\u0002\u0002\u000231\u0003\u0002\u0002\u00024=\u0005\u0006",
    "\u0004\u00025=\u0005\b\u0005\u00026=\u0005\n\u0006\u00027=\u0005(\u0015",
    "\u00028=\u0005*\u0016\u00029=\u0005\u000e\b\u0002:=\u0005\f\u0007\u0002",
    ";=\u0005\u0016\f\u0002<4\u0003\u0002\u0002\u0002<5\u0003\u0002\u0002",
    "\u0002<6\u0003\u0002\u0002\u0002<7\u0003\u0002\u0002\u0002<8\u0003\u0002",
    "\u0002\u0002<9\u0003\u0002\u0002\u0002<:\u0003\u0002\u0002\u0002<;\u0003",
    "\u0002\u0002\u0002=\u0005\u0003\u0002\u0002\u0002>?\u0007\u0004\u0002",
    "\u0002?@\u0005,\u0017\u0002@A\u0007\f\u0002\u0002AB\u0005\u0016\f\u0002",
    "B\u0007\u0003\u0002\u0002\u0002CD\u0007\u0005\u0002\u0002DE\u0005,\u0017",
    "\u0002EF\u0007\f\u0002\u0002FG\u0005\u0016\f\u0002G\t\u0003\u0002\u0002",
    "\u0002HI\u0005,\u0017\u0002IJ\u0007\f\u0002\u0002JK\u0005\u0016\f\u0002",
    "K\u000b\u0003\u0002\u0002\u0002LM\t\u0002\u0002\u0002M\r\u0003\u0002",
    "\u0002\u0002NO\u0007\b\u0002\u0002OP\u0005,\u0017\u0002PQ\u0007\u001e",
    "\u0002\u0002QR\u0005\u0014\u000b\u0002RS\u0007\u001f\u0002\u0002ST\u0005",
    "&\u0014\u0002T\u000f\u0003\u0002\u0002\u0002UV\u0005$\u0013\u0002VW",
    "\u0007\u001e\u0002\u0002WX\u0005\u0012\n\u0002XY\u0007\u001f\u0002\u0002",
    "Y\u0011\u0003\u0002\u0002\u0002Z[\u0005\u0016\f\u0002[\\\u0007\u0003",
    "\u0002\u0002\\^\u0003\u0002\u0002\u0002]Z\u0003\u0002\u0002\u0002^a",
    "\u0003\u0002\u0002\u0002_]\u0003\u0002\u0002\u0002_`\u0003\u0002\u0002",
    "\u0002`c\u0003\u0002\u0002\u0002a_\u0003\u0002\u0002\u0002bd\u0005\u0016",
    "\f\u0002cb\u0003\u0002\u0002\u0002cd\u0003\u0002\u0002\u0002d\u0013",
    "\u0003\u0002\u0002\u0002ef\u0005,\u0017\u0002fg\u0007\u0003\u0002\u0002",
    "gi\u0003\u0002\u0002\u0002he\u0003\u0002\u0002\u0002il\u0003\u0002\u0002",
    "\u0002jh\u0003\u0002\u0002\u0002jk\u0003\u0002\u0002\u0002kn\u0003\u0002",
    "\u0002\u0002lj\u0003\u0002\u0002\u0002mo\u0005,\u0017\u0002nm\u0003",
    "\u0002\u0002\u0002no\u0003\u0002\u0002\u0002o\u0015\u0003\u0002\u0002",
    "\u0002pq\b\f\u0001\u0002qr\u0007\u001e\u0002\u0002rs\u0005\u0016\f\u0002",
    "st\u0007\u001f\u0002\u0002ty\u0003\u0002\u0002\u0002uy\u0005\u0010\t",
    "\u0002vy\u0005,\u0017\u0002wy\u0005\u0018\r\u0002xp\u0003\u0002\u0002",
    "\u0002xu\u0003\u0002\u0002\u0002xv\u0003\u0002\u0002\u0002xw\u0003\u0002",
    "\u0002\u0002y\u0090\u0003\u0002\u0002\u0002z{\f\u000b\u0002\u0002{|",
    "\u0005\u001a\u000e\u0002|}\u0005\u0016\f\f}\u008f\u0003\u0002\u0002",
    "\u0002~\u007f\f\n\u0002\u0002\u007f\u0080\u0005\u001c\u000f\u0002\u0080",
    "\u0081\u0005\u0016\f\u000b\u0081\u008f\u0003\u0002\u0002\u0002\u0082",
    "\u0083\f\t\u0002\u0002\u0083\u0084\u0005\u001e\u0010\u0002\u0084\u0085",
    "\u0005\u0016\f\n\u0085\u008f\u0003\u0002\u0002\u0002\u0086\u0087\f\u0005",
    "\u0002\u0002\u0087\u0088\u0005\"\u0012\u0002\u0088\u0089\u0005\u0016",
    "\f\u0006\u0089\u008f\u0003\u0002\u0002\u0002\u008a\u008b\f\u0004\u0002",
    "\u0002\u008b\u008c\u0005 \u0011\u0002\u008c\u008d\u0005\u0016\f\u0005",
    "\u008d\u008f\u0003\u0002\u0002\u0002\u008ez\u0003\u0002\u0002\u0002",
    "\u008e~\u0003\u0002\u0002\u0002\u008e\u0082\u0003\u0002\u0002\u0002",
    "\u008e\u0086\u0003\u0002\u0002\u0002\u008e\u008a\u0003\u0002\u0002\u0002",
    "\u008f\u0092\u0003\u0002\u0002\u0002\u0090\u008e\u0003\u0002\u0002\u0002",
    "\u0090\u0091\u0003\u0002\u0002\u0002\u0091\u0017\u0003\u0002\u0002\u0002",
    "\u0092\u0090\u0003\u0002\u0002\u0002\u0093\u009a\u0007!\u0002\u0002",
    "\u0094\u0096\t\u0003\u0002\u0002\u0095\u0094\u0003\u0002\u0002\u0002",
    "\u0095\u0096\u0003\u0002\u0002\u0002\u0096\u0097\u0003\u0002\u0002\u0002",
    "\u0097\u009a\u0007\"\u0002\u0002\u0098\u009a\t\u0004\u0002\u0002\u0099",
    "\u0093\u0003\u0002\u0002\u0002\u0099\u0095\u0003\u0002\u0002\u0002\u0099",
    "\u0098\u0003\u0002\u0002\u0002\u009a\u0019\u0003\u0002\u0002\u0002\u009b",
    "\u009c\u0007\u0011\u0002\u0002\u009c\u001b\u0003\u0002\u0002\u0002\u009d",
    "\u009e\t\u0005\u0002\u0002\u009e\u001d\u0003\u0002\u0002\u0002\u009f",
    "\u00a0\t\u0003\u0002\u0002\u00a0\u001f\u0003\u0002\u0002\u0002\u00a1",
    "\u00a2\t\u0006\u0002\u0002\u00a2!\u0003\u0002\u0002\u0002\u00a3\u00a4",
    "\t\u0007\u0002\u0002\u00a4#\u0003\u0002\u0002\u0002\u00a5\u00a6\u0007",
    " \u0002\u0002\u00a6%\u0003\u0002\u0002\u0002\u00a7\u00a9\u0007\u001c",
    "\u0002\u0002\u00a8\u00aa\u0005\u0004\u0003\u0002\u00a9\u00a8\u0003\u0002",
    "\u0002\u0002\u00aa\u00ab\u0003\u0002\u0002\u0002\u00ab\u00a9\u0003\u0002",
    "\u0002\u0002\u00ab\u00ac\u0003\u0002\u0002\u0002\u00ac\u00ad\u0003\u0002",
    "\u0002\u0002\u00ad\u00ae\u0007\u001d\u0002\u0002\u00ae\u00b1\u0003\u0002",
    "\u0002\u0002\u00af\u00b1\u0005\u0004\u0003\u0002\u00b0\u00a7\u0003\u0002",
    "\u0002\u0002\u00b0\u00af\u0003\u0002\u0002\u0002\u00b1\'\u0003\u0002",
    "\u0002\u0002\u00b2\u00b3\u0007\u0006\u0002\u0002\u00b3\u00b4\u0005\u0016",
    "\f\u0002\u00b4\u00bc\u0005&\u0014\u0002\u00b5\u00b6\u0007\t\u0002\u0002",
    "\u00b6\u00b7\u0007\u0006\u0002\u0002\u00b7\u00b8\u0005\u0016\f\u0002",
    "\u00b8\u00b9\u0005&\u0014\u0002\u00b9\u00bb\u0003\u0002\u0002\u0002",
    "\u00ba\u00b5\u0003\u0002\u0002\u0002\u00bb\u00be\u0003\u0002\u0002\u0002",
    "\u00bc\u00ba\u0003\u0002\u0002\u0002\u00bc\u00bd\u0003\u0002\u0002\u0002",
    "\u00bd\u00c1\u0003\u0002\u0002\u0002\u00be\u00bc\u0003\u0002\u0002\u0002",
    "\u00bf\u00c0\u0007\t\u0002\u0002\u00c0\u00c2\u0005&\u0014\u0002\u00c1",
    "\u00bf\u0003\u0002\u0002\u0002\u00c1\u00c2\u0003\u0002\u0002\u0002\u00c2",
    ")\u0003\u0002\u0002\u0002\u00c3\u00c4\u0007\u0007\u0002\u0002\u00c4",
    "\u00c5\u0005\u0016\f\u0002\u00c5\u00c6\u0005&\u0014\u0002\u00c6+\u0003",
    "\u0002\u0002\u0002\u00c7\u00c8\u0007 \u0002\u0002\u00c8-\u0003\u0002",
    "\u0002\u0002\u00111<_cjnx\u008e\u0090\u0095\u0099\u00ab\u00b0\u00bc",
    "\u00c1"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "','", "'let'", "'const'", "'if'", "'while'", 
                     "'func'", "'else'", "'true'", "'false'", "'='", "'+'", 
                     "'-'", "'*'", "'/'", "'^^'", "'++'", "'--'", "'&&'", 
                     "'||'", "'=='", "'!='", "'>'", "'>='", "'<'", "'<='", 
                     "'{'", "'}'", "'('", "')'", null, null, null, null, 
                     null, null, "';\n'" ];

var symbolicNames = [ null, null, "KW_LET", "KW_CONST", "KW_IF", "KW_WHILE", 
                      "KW_FUNC", "KW_ELSE", "KW_TRUE", "KW_FALSE", "OP_ASSIGN", 
                      "OP_PLUS", "OP_SUB", "OP_MULTIPLY", "OP_DIVIDE", "OP_POW", 
                      "OP_INCREMENT", "OP_DECREMENT", "OP_AND", "OP_OR", 
                      "OP_EQ", "OP_NEQ", "OP_GT", "OP_GE", "OP_LT", "OP_LE", 
                      "L_BRACE", "R_BRACE", "L_PAR", "R_PAR", "LABEL", "STR_LIT", 
                      "NUM_LIT", "COMMENT", "BLOCK_COMMENT", "WS", "SEMICOLON_EOL", 
                      "EOL" ];

var ruleNames =  [ "program", "statement", "var_assignment", "const_assignment", 
                   "assign_to_label", "comment", "func_declaration", "func_call", 
                   "args_list", "args_decl_list", "expr", "atom", "op_pow", 
                   "op_multi", "op_add", "op_comp", "op_logic", "func_name", 
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
CashParser.OP_NEQ = 21;
CashParser.OP_GT = 22;
CashParser.OP_GE = 23;
CashParser.OP_LT = 24;
CashParser.OP_LE = 25;
CashParser.L_BRACE = 26;
CashParser.R_BRACE = 27;
CashParser.L_PAR = 28;
CashParser.R_PAR = 29;
CashParser.LABEL = 30;
CashParser.STR_LIT = 31;
CashParser.NUM_LIT = 32;
CashParser.COMMENT = 33;
CashParser.BLOCK_COMMENT = 34;
CashParser.WS = 35;
CashParser.SEMICOLON_EOL = 36;
CashParser.EOL = 37;

CashParser.RULE_program = 0;
CashParser.RULE_statement = 1;
CashParser.RULE_var_assignment = 2;
CashParser.RULE_const_assignment = 3;
CashParser.RULE_assign_to_label = 4;
CashParser.RULE_comment = 5;
CashParser.RULE_func_declaration = 6;
CashParser.RULE_func_call = 7;
CashParser.RULE_args_list = 8;
CashParser.RULE_args_decl_list = 9;
CashParser.RULE_expr = 10;
CashParser.RULE_atom = 11;
CashParser.RULE_op_pow = 12;
CashParser.RULE_op_multi = 13;
CashParser.RULE_op_add = 14;
CashParser.RULE_op_comp = 15;
CashParser.RULE_op_logic = 16;
CashParser.RULE_func_name = 17;
CashParser.RULE_statement_block = 18;
CashParser.RULE_if_statement = 19;
CashParser.RULE_while_statement = 20;
CashParser.RULE_label = 21;


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
        this.state = 47;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CashParser.KW_LET) | (1 << CashParser.KW_CONST) | (1 << CashParser.KW_IF) | (1 << CashParser.KW_WHILE) | (1 << CashParser.KW_FUNC) | (1 << CashParser.KW_TRUE) | (1 << CashParser.KW_FALSE) | (1 << CashParser.OP_PLUS) | (1 << CashParser.OP_SUB) | (1 << CashParser.L_PAR) | (1 << CashParser.LABEL) | (1 << CashParser.STR_LIT))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (CashParser.NUM_LIT - 32)) | (1 << (CashParser.COMMENT - 32)) | (1 << (CashParser.BLOCK_COMMENT - 32)))) !== 0)) {
            this.state = 44;
            this.statement();
            this.state = 49;
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
        this.state = 58;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 50;
            this.var_assignment();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 51;
            this.const_assignment();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 52;
            this.assign_to_label();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 53;
            this.if_statement();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 54;
            this.while_statement();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 55;
            this.func_declaration();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 56;
            this.comment();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 57;
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
        this.state = 60;
        this.match(CashParser.KW_LET);
        this.state = 61;
        localctx.vlabel = this.label();
        this.state = 62;
        this.match(CashParser.OP_ASSIGN);
        this.state = 63;
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
        this.state = 65;
        this.match(CashParser.KW_CONST);
        this.state = 66;
        localctx.clabel = this.label();
        this.state = 67;
        this.match(CashParser.OP_ASSIGN);
        this.state = 68;
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
        this.state = 70;
        localctx.llabel = this.label();
        this.state = 71;
        this.match(CashParser.OP_ASSIGN);
        this.state = 72;
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
        this.state = 74;
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
    this.name = null; // LabelContext
    this.args_l = null; // Args_decl_listContext
    this.body = null; // Statement_blockContext
    return this;
}

Func_declarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Func_declarationContext.prototype.constructor = Func_declarationContext;

Func_declarationContext.prototype.KW_FUNC = function() {
    return this.getToken(CashParser.KW_FUNC, 0);
};

Func_declarationContext.prototype.L_PAR = function() {
    return this.getToken(CashParser.L_PAR, 0);
};

Func_declarationContext.prototype.R_PAR = function() {
    return this.getToken(CashParser.R_PAR, 0);
};

Func_declarationContext.prototype.label = function() {
    return this.getTypedRuleContext(LabelContext,0);
};

Func_declarationContext.prototype.args_decl_list = function() {
    return this.getTypedRuleContext(Args_decl_listContext,0);
};

Func_declarationContext.prototype.statement_block = function() {
    return this.getTypedRuleContext(Statement_blockContext,0);
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
        this.state = 76;
        this.match(CashParser.KW_FUNC);
        this.state = 77;
        localctx.name = this.label();
        this.state = 78;
        this.match(CashParser.L_PAR);
        this.state = 79;
        localctx.args_l = this.args_decl_list();
        this.state = 80;
        this.match(CashParser.R_PAR);
        this.state = 81;
        localctx.body = this.statement_block();
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
    this.args_l = null; // Args_listContext
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

Func_callContext.prototype.args_list = function() {
    return this.getTypedRuleContext(Args_listContext,0);
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
        this.state = 83;
        localctx.name = this.func_name();
        this.state = 84;
        this.match(CashParser.L_PAR);
        this.state = 85;
        localctx.args_l = this.args_list();
        this.state = 86;
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


function Args_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CashParser.RULE_args_list;
    this._expr = null; // ExprContext
    this.args = []; // of ExprContexts
    return this;
}

Args_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Args_listContext.prototype.constructor = Args_listContext;

Args_listContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

Args_listContext.prototype.enterRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.enterArgs_list(this);
	}
};

Args_listContext.prototype.exitRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.exitArgs_list(this);
	}
};

Args_listContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CashVisitor ) {
        return visitor.visitArgs_list(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CashParser.Args_listContext = Args_listContext;

CashParser.prototype.args_list = function() {

    var localctx = new Args_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, CashParser.RULE_args_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 93;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 88;
                localctx._expr = this.expr(0);
                localctx.args.push(localctx._expr);
                this.state = 89;
                this.match(CashParser.T__0); 
            }
            this.state = 95;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
        }

        this.state = 97;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 8)) & ~0x1f) == 0 && ((1 << (_la - 8)) & ((1 << (CashParser.KW_TRUE - 8)) | (1 << (CashParser.KW_FALSE - 8)) | (1 << (CashParser.OP_PLUS - 8)) | (1 << (CashParser.OP_SUB - 8)) | (1 << (CashParser.L_PAR - 8)) | (1 << (CashParser.LABEL - 8)) | (1 << (CashParser.STR_LIT - 8)) | (1 << (CashParser.NUM_LIT - 8)))) !== 0)) {
            this.state = 96;
            localctx._expr = this.expr(0);
            localctx.args.push(localctx._expr);
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


function Args_decl_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CashParser.RULE_args_decl_list;
    this._label = null; // LabelContext
    this.args = []; // of LabelContexts
    return this;
}

Args_decl_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Args_decl_listContext.prototype.constructor = Args_decl_listContext;

Args_decl_listContext.prototype.label = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LabelContext);
    } else {
        return this.getTypedRuleContext(LabelContext,i);
    }
};

Args_decl_listContext.prototype.enterRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.enterArgs_decl_list(this);
	}
};

Args_decl_listContext.prototype.exitRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.exitArgs_decl_list(this);
	}
};

Args_decl_listContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CashVisitor ) {
        return visitor.visitArgs_decl_list(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CashParser.Args_decl_listContext = Args_decl_listContext;

CashParser.prototype.args_decl_list = function() {

    var localctx = new Args_decl_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, CashParser.RULE_args_decl_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 104;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 99;
                localctx._label = this.label();
                localctx.args.push(localctx._label);
                this.state = 100;
                this.match(CashParser.T__0); 
            }
            this.state = 106;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
        }

        this.state = 108;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===CashParser.LABEL) {
            this.state = 107;
            localctx._label = this.label();
            localctx.args.push(localctx._label);
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
    this.left = null; // ExprContext;
    this.op = null; // Op_compContext;
    this.right = null; // ExprContext;
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

CompExpressionContext.prototype.op_comp = function() {
    return this.getTypedRuleContext(Op_compContext,0);
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


function LogicExpressionContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.left = null; // ExprContext;
    this.op = null; // Op_logicContext;
    this.right = null; // ExprContext;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LogicExpressionContext.prototype = Object.create(ExprContext.prototype);
LogicExpressionContext.prototype.constructor = LogicExpressionContext;

CashParser.LogicExpressionContext = LogicExpressionContext;

LogicExpressionContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

LogicExpressionContext.prototype.op_logic = function() {
    return this.getTypedRuleContext(Op_logicContext,0);
};
LogicExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.enterLogicExpression(this);
	}
};

LogicExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.exitLogicExpression(this);
	}
};

LogicExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CashVisitor ) {
        return visitor.visitLogicExpression(this);
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
    var _startState = 20;
    this.enterRecursionRule(localctx, 20, CashParser.RULE_expr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 118;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            localctx = new ParExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 111;
            this.match(CashParser.L_PAR);
            this.state = 112;
            localctx.exprx = this.expr(0);
            this.state = 113;
            this.match(CashParser.R_PAR);
            break;

        case 2:
            localctx = new FuncExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 115;
            this.func_call();
            break;

        case 3:
            localctx = new LabelExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 116;
            this.label();
            break;

        case 4:
            localctx = new AtomExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 117;
            this.atom();
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 142;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 140;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new PowExpressionContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, CashParser.RULE_expr);
                    this.state = 120;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 121;
                    localctx.op = this.op_pow();
                    this.state = 122;
                    localctx.right = this.expr(10);
                    break;

                case 2:
                    localctx = new MultiExpressionContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, CashParser.RULE_expr);
                    this.state = 124;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 125;
                    localctx.op = this.op_multi();
                    this.state = 126;
                    localctx.right = this.expr(9);
                    break;

                case 3:
                    localctx = new AddExpressionContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, CashParser.RULE_expr);
                    this.state = 128;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 129;
                    localctx.op = this.op_add();
                    this.state = 130;
                    localctx.right = this.expr(8);
                    break;

                case 4:
                    localctx = new LogicExpressionContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, CashParser.RULE_expr);
                    this.state = 132;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 133;
                    localctx.op = this.op_logic();
                    this.state = 134;
                    localctx.right = this.expr(4);
                    break;

                case 5:
                    localctx = new CompExpressionContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, CashParser.RULE_expr);
                    this.state = 136;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 137;
                    localctx.op = this.op_comp();
                    this.state = 138;
                    localctx.right = this.expr(3);
                    break;

                } 
            }
            this.state = 144;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
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
    this.enterRule(localctx, 22, CashParser.RULE_atom);
    var _la = 0; // Token type
    try {
        this.state = 151;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CashParser.STR_LIT:
            this.enterOuterAlt(localctx, 1);
            this.state = 145;
            this.match(CashParser.STR_LIT);
            break;
        case CashParser.OP_PLUS:
        case CashParser.OP_SUB:
        case CashParser.NUM_LIT:
            this.enterOuterAlt(localctx, 2);
            this.state = 147;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===CashParser.OP_PLUS || _la===CashParser.OP_SUB) {
                this.state = 146;
                _la = this._input.LA(1);
                if(!(_la===CashParser.OP_PLUS || _la===CashParser.OP_SUB)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
            }

            this.state = 149;
            this.match(CashParser.NUM_LIT);
            break;
        case CashParser.KW_TRUE:
        case CashParser.KW_FALSE:
            this.enterOuterAlt(localctx, 3);
            this.state = 150;
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
    this.enterRule(localctx, 24, CashParser.RULE_op_pow);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 153;
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
    this.enterRule(localctx, 26, CashParser.RULE_op_multi);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 155;
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
    this.enterRule(localctx, 28, CashParser.RULE_op_add);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 157;
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


function Op_compContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CashParser.RULE_op_comp;
    return this;
}

Op_compContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Op_compContext.prototype.constructor = Op_compContext;

Op_compContext.prototype.OP_EQ = function() {
    return this.getToken(CashParser.OP_EQ, 0);
};

Op_compContext.prototype.OP_NEQ = function() {
    return this.getToken(CashParser.OP_NEQ, 0);
};

Op_compContext.prototype.OP_GT = function() {
    return this.getToken(CashParser.OP_GT, 0);
};

Op_compContext.prototype.OP_GE = function() {
    return this.getToken(CashParser.OP_GE, 0);
};

Op_compContext.prototype.OP_LE = function() {
    return this.getToken(CashParser.OP_LE, 0);
};

Op_compContext.prototype.OP_LT = function() {
    return this.getToken(CashParser.OP_LT, 0);
};

Op_compContext.prototype.enterRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.enterOp_comp(this);
	}
};

Op_compContext.prototype.exitRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.exitOp_comp(this);
	}
};

Op_compContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CashVisitor ) {
        return visitor.visitOp_comp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CashParser.Op_compContext = Op_compContext;

CashParser.prototype.op_comp = function() {

    var localctx = new Op_compContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, CashParser.RULE_op_comp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 159;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CashParser.OP_EQ) | (1 << CashParser.OP_NEQ) | (1 << CashParser.OP_GT) | (1 << CashParser.OP_GE) | (1 << CashParser.OP_LT) | (1 << CashParser.OP_LE))) !== 0))) {
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


function Op_logicContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CashParser.RULE_op_logic;
    return this;
}

Op_logicContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Op_logicContext.prototype.constructor = Op_logicContext;

Op_logicContext.prototype.OP_AND = function() {
    return this.getToken(CashParser.OP_AND, 0);
};

Op_logicContext.prototype.OP_OR = function() {
    return this.getToken(CashParser.OP_OR, 0);
};

Op_logicContext.prototype.enterRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.enterOp_logic(this);
	}
};

Op_logicContext.prototype.exitRule = function(listener) {
    if(listener instanceof CashListener ) {
        listener.exitOp_logic(this);
	}
};

Op_logicContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CashVisitor ) {
        return visitor.visitOp_logic(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CashParser.Op_logicContext = Op_logicContext;

CashParser.prototype.op_logic = function() {

    var localctx = new Op_logicContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, CashParser.RULE_op_logic);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 161;
        _la = this._input.LA(1);
        if(!(_la===CashParser.OP_AND || _la===CashParser.OP_OR)) {
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
    this.enterRule(localctx, 34, CashParser.RULE_func_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 163;
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
    this.enterRule(localctx, 36, CashParser.RULE_statement_block);
    var _la = 0; // Token type
    try {
        this.state = 174;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CashParser.L_BRACE:
            this.enterOuterAlt(localctx, 1);
            this.state = 165;
            this.match(CashParser.L_BRACE);
            this.state = 167; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 166;
                this.statement();
                this.state = 169; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CashParser.KW_LET) | (1 << CashParser.KW_CONST) | (1 << CashParser.KW_IF) | (1 << CashParser.KW_WHILE) | (1 << CashParser.KW_FUNC) | (1 << CashParser.KW_TRUE) | (1 << CashParser.KW_FALSE) | (1 << CashParser.OP_PLUS) | (1 << CashParser.OP_SUB) | (1 << CashParser.L_PAR) | (1 << CashParser.LABEL) | (1 << CashParser.STR_LIT))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (CashParser.NUM_LIT - 32)) | (1 << (CashParser.COMMENT - 32)) | (1 << (CashParser.BLOCK_COMMENT - 32)))) !== 0));
            this.state = 171;
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
            this.state = 173;
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
    this.condition = null; // ExprContext
    this.body = null; // Statement_blockContext
    this._expr = null; // ExprContext
    this.elseif_cond = []; // of ExprContexts
    this._statement_block = null; // Statement_blockContext
    this.elseif_body = []; // of Statement_blockContexts
    this.else_body = null; // Statement_blockContext
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
    this.enterRule(localctx, 38, CashParser.RULE_if_statement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 176;
        this.match(CashParser.KW_IF);
        this.state = 177;
        localctx.condition = this.expr(0);
        this.state = 178;
        localctx.body = this.statement_block();
        this.state = 186;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 179;
                this.match(CashParser.KW_ELSE);
                this.state = 180;
                this.match(CashParser.KW_IF);
                this.state = 181;
                localctx._expr = this.expr(0);
                localctx.elseif_cond.push(localctx._expr);
                this.state = 182;
                localctx._statement_block = this.statement_block();
                localctx.elseif_body.push(localctx._statement_block); 
            }
            this.state = 188;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
        }

        this.state = 191;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
        if(la_===1) {
            this.state = 189;
            this.match(CashParser.KW_ELSE);
            this.state = 190;
            localctx.else_body = this.statement_block();

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
    this.condition = null; // ExprContext
    return this;
}

While_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
While_statementContext.prototype.constructor = While_statementContext;

While_statementContext.prototype.KW_WHILE = function() {
    return this.getToken(CashParser.KW_WHILE, 0);
};

While_statementContext.prototype.statement_block = function() {
    return this.getTypedRuleContext(Statement_blockContext,0);
};

While_statementContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
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
    this.enterRule(localctx, 40, CashParser.RULE_while_statement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 193;
        this.match(CashParser.KW_WHILE);
        this.state = 194;
        localctx.condition = this.expr(0);
        this.state = 195;
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
    this.enterRule(localctx, 42, CashParser.RULE_label);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 197;
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
	case 10:
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
