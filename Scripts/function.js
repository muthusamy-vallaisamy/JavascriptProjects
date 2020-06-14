'use strict';
const consoleDiv = document.getElementById('console');
function normalFunction() {
    consoleDiv.innerText = "Hello World! from normal function";
}

let functionExpression = function () {
    consoleDiv.innerText = "Hello World! from function expression";
}

let closureFunctionDelegate = (function () {
    let closureFn = function () {
        consoleDiv.innerText = "Hello World! from closure function";
    }
    return {

        hellowWorld: closureFn
    };
}
)();

function closureFunction() {
    closureFunctionDelegate.hellowWorld();
}

let closureFunctionDelegate1 = (function(){

    return function hellowWorld()
    {
        consoleDiv.innerText = "Hello World! from closure function 1";
    }
})();

function closureFunction1()
{
   closureFunctionDelegate1();
   
}

let arrowFunction = ()=>{consoleDiv.innerText = "Hello World! from arrow function";}
let arrowFunctionMessage = (name)=>{consoleDiv.innerText = `Hello ${name}!`;}
let arrowFunctionThis = ()=>{
    this.Muthusamy="Muthusamy";
    consoleDiv.innerText =this;}



///Function scope.
function functionScope1() {
    let message = "Welcome";
    let sayHello = function()
    {
        consoleDiv.innerText = message;
    }
    sayHello();
}

