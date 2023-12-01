//	1
CONST PI = 3.14;

//	2
/*
	Declaring variables with var is the old way of declaring variables. Global variables declared with var become a property of the
	document. Variables declared with var within a function has function scope while variables declared with let have block scope. 
	Variables declared with var can be redeclared while variables declared with let cannot. Variables declared with both var and 
	let can both be reassigned. Variables declared with var are "hoisted". They can be accessed before initialization. Variables
	declared with let are not "hoisted". They throw an error if a program attempts to access a variable before initialization.
*/

//	3
/*
	var has function-level scope and const has block-level scope. Variables declared with var can both be redeclared and reassigned. 
	Variables declared with const can neither be redeclared nor reassigned. Var variables are "hoisted", unlike const variables.
*/

//	4
/*
	Both let and const are ES2015-compliant. Both types of variables create block scope. Variables declared with let can be reassigned,
	unlike variables declared with const. Neither let nor const variables can be redeclared, nor can they be accessed before initialization.
*/

//	5
/*
	Hoisting is the term to describe the aspect of the interpretation of a variable declared with var. During interpretation, the variables
	are declared first before anything else, effectively (not literally) separating the declaration from the initialization and moving the declaration to
	the top of the document. Variables can thus be accessed before they are initialized. This phenomenon is hoisting
*/