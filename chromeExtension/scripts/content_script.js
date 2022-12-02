const flagged_words = ['Climate','climate'];
var num_flags;

//This function gathers all the text from the site and places it in a variable
//It is not currently in use
function searchText(words){
    const bodyText = document.body.innerText;
    for (let i=0; i<words.length; i++){

    }
    console.log(bodyText);
}

//Used to keep track of the amount of times a flagged word was found.
function replacementNum(r){
    num_flags++;
    return r;
}

//selects all the aspects of the page that can contain text
const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a');

//this function goes through and highlights all instances of our flagged words
function flagMisinfo(text, words){
    num_flags = 0;
    for(let i=0; i<text.length; i++){
        for(let j=0; j<words.length; j++){
            if(text[i].innerHTML.includes(words[j])){
                text[i].innerHTML = text[i].innerHTML.replace(words[j],replacementNum("<span style='background-color:rgba(235, 64, 52, 0.3)'>"+words[j]+"</span>"));
            }
        }
    }
    console.log(num_flags);
}

flagMisinfo(text,flagged_words);


//This is used to communicate with the popup to display to users amount of flags found
//and warn them when a site contains misinformation
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request) {
        sendResponse({ num_flags: num_flags });
    }
});

