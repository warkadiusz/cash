# JFIK
Jezyki formalne i kompilatory - projekt

## Index
1. [Language description](#language-description)
2. [Features](#features)
3. [Future possibilities and ideas](#future-possibilities-and-ideas)
3. [Standard library](#standard-library)
4. [Examples](#examples)
4. [Requirements](#requirements)
5. [Makefile description](#makefile)


## Language description
**Cash** is tiny dynamic-typed script language implemented with Javascript(NodeJS) for university 
*Formal languages and compilators* course. In terms of syntax and features it is a mix
between Javascript, Golang and bash.

## Features
1. Scope-limited variables and constants (scopes defined by functions)
2. Functions definitions, calls and returns
    1. interfaces for defining user-space functions and "built-in" functions(see [Standard library](#standard-library))
3. [Standard library](#standard-library)
3. Dynamic functions calls with standard library function `call(funcName, data)`
4. All parameters passed by value, always
5. Line comments and block comments
5. Basic file system operation support through [standard library](#standard-library) functions
5. Types system inherited from Javascript.  
   Scalar types: `int`, `float`, `string`  
   Compound type: `array/hashmap`
6. Array/Hashmap type ugly handled by standard library functions `array()`, `arrayGet(arr, index)`
   etc. see [Standard library](#standard-library)
7. `if [(else if)*][else]` and `while` control structures
8. Arithmetic expression evaluation with addition, subtraction, multiplication, division and
   powers.
9. Logical expression evaluation with logical alternative (`||`) and conjunction (`&&`) operators.
10. Comparision operators: `==`,`!=`, `<`, `<=`, `>`, `>=`
11. Stack size inherited from nodejs (492kb on 32-bit and 984kb on 64-bit).
    As interpreter itself consumes some of it, not all stack size is available for executed
    program. Stack frame is pretty small though so probably fairly enough calls is possible.
12. Full stack trace on error, with memory(variables and constants) dump.

## Future possibilities and ideas
1. Real global context, without accessor functions `getGlobalVar(name)` and `setGlobalVar(name, value)`
    (see [Standard library](#standard-library))
2. Syntactic sugar for arrays handling
3. Variadic functions, eg. for `array()` constructor to predefine array values.
4. Pass by reference
5. Pre-parser `include` directive to join more scripts together
6. Namespaces

## Standard library
Interpreter comes with some built-in functions, available in all scopes(contexts)
in all interpreted scripts. Below you can find a description of all standard library functions

### General
#### print(arg): true
Prints arg parameter to stdout. Always returns true.  
Examples:
```
print("a")
print(3.14)
print(var_name)
```
#### exit(code)
Immediately stops execution and exits with provided code.  
Examples:
```
exit(0)   $ success
exit(1)   $ error
exit(myExitCode)
```

#### concat(a, b): string
Returns two variables concatenated as strings.  
Examples:
```
const hello = "Hello"
const world = " world!"

print(concat(hello, world)) $ Prints: "Hello world!"
```

#### readLine(): string
Waits for user input until new line character and returns entered text as string.  
Examples:
```
print("Whats your name?");
let name = readLine()         $ Enter: Max
print(concat("Hello ", name)) $ Prints: "Hello Max"
```

#### call(funcName, data): mixed
Dynamically calls function by its name defined as `funcName` parameter. 
Passes `data` variable to it as first and only argument. Returns value copied from
called function.
Examples:
```
func myPrint(data) {
  print(concat("MyPrint: ", data))
  ret 8
}

let a = call("myPrint", "myText")   $ Prints: "MyPrint: myText"
print(a)                            $ Prints: 8
```

#### getGlobalVar(name): mixed
Returns value of the variable defined on the first stack level ("global scope").
If variable with given name is not defined, throws undefined variable/constant error.   
Examples:
```
let a = 3.14

func printGlobalA() {
  print(getGlobalVar("a"))
}

printGlobalA()  $ Prints: 3.14
```

#### setGlobalVar(name): mixed
Sets value of the variable defined on the first stack level ("global scope"). 
If variable with given name is not defined, throws undefined variable/constant error.  
Examples:
```
let a = 3.14

func printGlobalA() {
  setGlobalVar("a", 6.28)
}

setMyVariableA()
print(a)          $ Prints: 6.28
```

### File system
#### fileExists(filePath): true
Returns information whether file under specified (absolute!) path exists or not.  
Examples:
```
print(fileExists("/dev/stdout"))   $ true
print(fileExists("/ddddddddd"))    $ false
```

#### readFile(filePath): string
Reads file and returns its content as string.  
Examples:
```
print(readFile("/dev/zero")) $ 000000....
```

#### writeFile(filePath, content): true
Tries to write a content to the specified file. Throws to stderr on error.
File must exist before write!    
Examples:
```
writeFile("/tmp/a", "some content to write")
```

### Arrays/Hashmaps
#### array(): array
Constructor for array/hashmap type. Returns empty array.  
Examples:
```
let myArray = array()
print(array)   $ Prints: []
```

#### arraySet(array, key, value): array
Adds element to array/hashmap at specified key and returns new array.  
Examples: 
```
let myArray = array()

myArray = arraySet(myArray, "test", 3)
print(myArray)  $ Prints: {"test": 3}
```

#### arrayGet(array, key): mixed
Returns element from array/hashmap at specified key. The key can be `int` in case of
array or `string` in case of hashmap.    
Examples: 
```
let myArray = array()

myArray = arraySet(myArray, "test", 3)
myArray = arraySet(myArray, 0, 12);

print(arrayGet(myArray, "test"))  $ Prints: 3
print(arrayGet(myArray, 0))  $ Prints: 12
```

#### arrayPush(array, value): array
Adds new value to the array and returns new array.  
Examples:
```
let myArray = array()
myArray = arrayPush(myArray, "test");

print(myArray) $ Prints: ["test"]
```

#### arraySize(array): int
Returns the size of the specified array.  
Examples:
```
let myArray = array()
myArray = arrayPush(myArray, "test");

print(arraySize(myArray)) $ Prints: 1
```

## Examples
#### hello_world.cash
Prints "Hello world!" to stdout
```
print("Hello world!")
```

#### vars_constants_and_functions.cash
Example on how to declare and assign variables and constants
```
$ This is line comment
let a = 3; $ It can be put anywhere

/$
 This is block comment, also can be put anywhere
$/

$ Declare constant with keyword `const`
const PI = 3.14
print(PI)       $ Prints: 3.14

$ Declare variable with keyword `let`
let tau = PI * 2
print(tau)      $ Prints: 6.28

$ Assign value to defined variable
tau = 0
print(tau)      $ Prints: 0

$ Try to assign value to defined constant
PI = 0          $ Error: Cannot re-assign the constant "PI" at line 8 column 0
let tau = 17    $ Error: Cannot redeclare variable/constant "tau" at line 9 colum 0


$ Declare function
func myFunction(a) {
  print(concat("Your happy number is: ", a))
}

myFunction(3.14)    $ Prints: "Your happy number is: 3.14"
```

#### fibonacci.cash
Prints fibonacci sequence until first value after 1000
```
func fibb(prev2, prev) {
    const next = prev2+prev
    print(next)

    if next < 1000 {
        fibb(prev, next)
    }
}

fibb(1,1)
```

#### events.cash
Events-based execution framework in user-space. Allows to call dynamically any function
on any triggered event.

```
let eventsHandlers = array()

func createEvent(eventName) {
    let eventsHandlers = getGlobalVar("eventsHandlers");
    eventsHandlers = arraySet(eventsHandlers, eventName, array());
    setGlobalVar("eventsHandlers", eventsHandlers);
}

func onEvent(eventName, funcName) {
    let eventsHandlers = getGlobalVar("eventsHandlers")
    let handlers = arrayGet(eventsHandlers, eventName)
    handlers = arrayPush(handlers, funcName)
    eventsHandlers = arraySet(eventsHandlers, eventName, handlers)
    setGlobalVar("eventsHandlers", eventsHandlers)
}

func triggerEvent(eventName, data) {
    let eventsHandlers = getGlobalVar("eventsHandlers")
    let handlers = arrayGet(eventsHandlers, eventName)

    let i = 0
    let handlersCount = arraySize(handlers)
    while i < handlersCount {
        call(arrayGet(handlers, i), data)
        i = i + 1;
    }
}

func printMy(msg) {
    print("ooh I was called")
}

createEvent("aaa")
onEvent("aaa", "printMy")
triggerEvent("aaa", "");
```

## Requirements
0. Java 1.6 or higher
1. [ANTLR v4](https://www.antlr.org/), [Getting started with ANTLTRv4 (installation docs)](https://github.com/antlr/antlr4/blob/master/doc/getting-started.md)
2. [Node.js](https://nodejs.org/en/)
3. [GNU make](https://www.gnu.org/software/make/) - (optional to run Makefiles)

## Makefile
* `gui` - compiles ANTLR and runs grun on file `now.cash`
* `node` - compiles ANTLR with JS target and runs `index.js` with `now.cash` file to interpret
