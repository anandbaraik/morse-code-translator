let inputMessage = document.querySelector("#translate-message");
let translateButton = document.querySelector("#translate-btn");
let outputMessage = document.querySelector("#translated-message");
let url = "https://api.funtranslations.com/translate/morse.json";

function translateMessage() {

    if (inputMessage.value.length <= 0) {
        alert("Please enter a message to translate!");
        return;
    }
    fetch(constuctUrl(inputMessage.value))
        .then(response => response.json())
        .then(json => {
            outputMessage.innerText = json.contents.translated;
        })
        .catch(() => alert("something went wrong, please try again"));

}

function constuctUrl(message) {
    let encodedMessage = encodeURI(message);
    return `${url}?text=${encodedMessage}`;
}


translateButton.addEventListener('click', translateMessage);