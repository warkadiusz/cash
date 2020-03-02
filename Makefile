SHELL := /bin/bash
a = java -Xmx500M -cp "/usr/local/lib/antlr-4.7.1-complete.jar:$$CLASSPATH" org.antlr.v4.Tool
g = java -Xmx500M -cp "/usr/local/lib/antlr-4.7.1-complete.jar:$$CLASSPATH" org.antlr.v4.gui.TestRig
gui:
	$(a) -Dlanguage=JavaScript -visitor Cash.g4
	$(a) Cash.g4
	javac -cp /usr/local/lib/antlr-4.7.1-complete.jar Cash*.java
	$(g) Cash program now.cash -gui

node:
	$(a) -Dlanguage=JavaScript -visitor Cash.g4
	javac -cp /usr/local/lib/antlr-4.7.1-complete.jar Cash*.java
	node index.js
