//this function requests the num_flags variable from content_script so it can be
//displayed in the popup.html
async function requestNumFlags(){
    let tabs = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.tabs.sendMessage(
        tabs[0].id,
        { request: true },
        function (response) {
            if(response){
                var num_flags = response.num_flags;
            }else{
                var num_flags = 0;
            }
            alertMisinfo(num_flags);
        }
    );
}

//this displays the correct message to the user in the popup based on whether or not
//misinformation was found
function alertMisinfo(num_flags){
    console.log('here: '+num_flags);
    var warning = document.querySelector(".climate_watch_flag_warning");
    if(num_flags > 0){
        warning.innerHTML = "<strong>Warning</strong> potential climate misinformation has been found, be careful trusting this site!";
    }else{
        warning.innerText = "No climate misinformation found here enjoy the site!";
    }
}

requestNumFlags();

document.querySelector('#go_toOptions').addEventListener('click',function(){
    if(chrome.runtime.openOptionsPage){
        chrome.runtime.openOptionsPage();
    }else{
        window.open(chrome.runtime.getURL('options.html'));
    }
});