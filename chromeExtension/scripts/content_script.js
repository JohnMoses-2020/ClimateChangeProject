const flagged_words = ['guide','Guide'];
num_flags = 0;


function searchText(words){
    const bodyText = document.body.innerText;
    for (let i=0; i<words.length; i++){

    }
    console.log(bodyText);
}

function replacementNum(r){
    num_flags++;
    return r;
}

const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a');

function flagMisinfo(text, words){
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