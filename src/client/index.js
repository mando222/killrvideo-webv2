function httpGetAsync(callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", 127.0.0.1:4000, true); // true for asynchronous
    xmlHttp.send(null);
}
console.log(httpGetAsync())