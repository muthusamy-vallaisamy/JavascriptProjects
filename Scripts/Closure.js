let output = document.getElementById("result");
function Greetings(message)
{
    output.innerText=message;
    //Closure function;
    return function closureFunction()
    {
        return message;
    }

    
}

        let greetingFn = Greetings('Hello Muthusmay');

alert(greetingFn());