
function loadJSFile() {
    let oldScriptTag = document.getElementById("scriptFile");
    if (oldScriptTag) {
        document.body.removeChild(oldScriptTag);
    }

    let scriptTag = document.createElement("script");
    scriptTag.id = "scriptFile";
    scriptTag.src = "Scripts/objects.js";
    document.body.appendChild(scriptTag);

    //clear output div;
    let outputTag = document.getElementsByTagName('body')[0];
    if(outputTag)
    {
        let child = outputTag.lastElementChild;
        while(child)
        {
            outputTag.removeChild(child);
            child = outputTag.lastElementChild;
        }
    }


   
    
}

setInterval(loadJSFile, 60000);

function display(value)
{
    if(typeof value==="object")
    {
        displayObject(value);
        
    }
    else
    {
        displayValue(value);
    }
}

function displayValue(value) {
    let outputTag = document.getElementsByTagName('body')[0];
    if(outputTag)
    {
    let h1Elment = document.createElement("h3");
    h1Elment.style.margin="0px";
    h1Elment.innerHTML=value;
    outputTag.appendChild(h1Elment);
    }
}


function displayObject(object) {
    displayValue("{");
    for (let propertyName in object) {
        if (object[propertyName] !== undefined)
            displayValue('&nbsp;&nbsp;' + propertyName + ": " + object[propertyName])
            }
            displayValue("}");
    return
}
