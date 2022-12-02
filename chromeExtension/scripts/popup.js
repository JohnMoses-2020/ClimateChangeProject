//this function requests the num_flags variable from content_script so it can be
//displayed in the popup.html
async function requestNumFlags(){
    let tabs = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.tabs.sendMessage(
        tabs[0].id,
        { request: true },
        function (response) {
            num_flags = response.num_flags;
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
        warning.innerHTML = "<strong>Warning</strong> "+num_flags+" instance(s) of climate misinformation found be careful with this site!";
    }else{
        warning.innerText = "No climate misinformation found here enjoy the site!";
    }
}

requestNumFlags();