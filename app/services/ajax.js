/**
 * Created by Sasho on 01/12/2015.
 */

function createCORSRequest(method, url){
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr){
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined"){
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        xhr = null;
    }
    return xhr;
}

var request = createCORSRequest("get", this.props.source);
if (request){
    request.onload = function(response){
        //do something with request.responseText
        let test = JSON.parse(response.currentTarget.responseText);
        debugger;
        //TODO emit an event and handle response there!
    };
    request.send();
}