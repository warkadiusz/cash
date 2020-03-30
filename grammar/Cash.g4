grammar Cash ;

program: (statement)*;

statement :     var_assignment
                | const_assignment
                | assign_to_label
                | if_statement
                | while_statement
                | func_declaration
                | comment
                | expr;

var_assignment : KW_LET LABEL OP_ASSIGN expr;
const_assignment : KW_CONST LABEL OP_ASSIGN expr;

assign_to_label : LABEL OP_ASSIGN expr;

comment : COMMENT | BLOCK_COMMENT;

func_declaration : KW_FUNC LABEL L_BRACE statement* R_BRACE;
func_call : name=func_name L_PAR (args+=expr ',')* (args+=expr) R_PAR;

expr : left=expr op=op_pow right=expr                       #powExpression
     | left=expr op=op_multi right=expr                     #multiExpression
     | left=expr op=op_add right=expr                       #addExpression
     | L_PAR expr R_PAR                                     #parExpression
     | func_call                                            #funcExpression
     | LABEL                                                #labelExpression
     | expr op=(OP_AND | OP_OR) expr                        #binExpression
     | expr op=(OP_EQ | OP_GT | OP_GE | OP_LE | OP_LT) expr #compExpression
     | atom                                                 #atomExpression
     ;

atom : STR_LIT
     | (OP_PLUS | OP_SUB)? NUM_LIT
     | (KW_TRUE | KW_FALSE)
     ;

op_pow: (OP_POW);
op_multi: (OP_MULTIPLY | OP_DIVIDE);
op_add:   (OP_PLUS | OP_SUB);
func_name: LABEL;

statement_block : L_BRACE statement+ R_BRACE
                | statement ;

if_statement : KW_IF expr statement_block (KW_ELSE KW_IF expr statement_block)* (KW_ELSE statement_block)? ;
while_statement : KW_WHILE expr statement_block ;

fragment DIGIT : [0-9]+ ;

KW_LET   : 'let' ;
KW_CONST : 'const' ;
KW_IF    : 'if' ;
KW_WHILE : 'while' ;
KW_FUNC : 'func';
KW_ELSE : 'else';
KW_TRUE: 'true';
KW_FALSE: 'false';

OP_ASSIGN: '=' ;
OP_PLUS: '+' ;
OP_SUB: '-' ;
OP_MULTIPLY: '*' ;
OP_DIVIDE: '/' ;
OP_POW: '^^' ;
OP_INCREMENT: '++' ;
OP_DECREMENT: '--' ;
OP_AND: '&&';
OP_OR: '||';
OP_EQ: '==';
OP_GT: '>';
OP_GE: '>=';
OP_LT: '<';
OP_LE: '<=';

L_BRACE : '{';
R_BRACE : '}';
L_PAR: '(';
R_PAR: ')';

LABEL : [a-zA-Z] ([a-zA-Z_] | DIGIT)* ;

STR_LIT : '"'.*?'"' ;
NUM_LIT : DIGIT+
                | DIGIT+ '.' DIGIT+
                | '-' DIGIT+
                | '-' DIGIT+ '.' DIGIT+
                ; 

COMMENT  :  '$' ~( '\r' | '\n' )* -> skip;
BLOCK_COMMENT : '/$' .*? '$/' -> skip;
WS : [ \t]+ -> skip;
EOL : '\r'? '\n' -> skip;
