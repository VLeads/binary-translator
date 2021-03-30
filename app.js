var btnTranslate = document.querySelector("#btn-translate")
var textInput = document.querySelector("#input");
var outputDiv = document.querySelector("#output");


var serverURL = "https://api.funtranslations.com/translate/binary.json"

function translationURL(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error){
    alert("Something wrong. Try again later!!" + error)
}

function clickEventHandler() {
    var inputText = textInput.value;
    fetch(translationURL(inputText))
    .then(response => response.json)
    .then(json => {
            outputDiv.inputText = json.contents.translated;
            console.log(json.contents.translated);
        })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickEventHandler);