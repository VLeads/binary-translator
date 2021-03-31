var btnTranslate = document.querySelector("#btn-translate")
var textInput = document.querySelector("#input");
var outputDiv = document.querySelector("#output");


var serverURL = "https://api.funtranslations.com/translate/binary.json"

function errorHandler(error){
    alert("Something wrong. Try again later!!  " + error)
}

function translationURL(text) {
    return serverURL + "?" + "text=" + text;
}


function clickEventHandler() {
    var inputText = textInput.value;
    fetch(translationURL(inputText))
    .then(response => response.json())
    .then(json => {
            var outputText = json.contents.translated;
            outputDiv.innerText = outputText;
            
        })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickEventHandler);