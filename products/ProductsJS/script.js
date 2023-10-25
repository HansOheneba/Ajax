document.addEventListener("DOMContentLoaded", function () {
    var apiUrl = "http://localhost/APIs/API%20Test/ajax/v2/product/";

    function read() {
        var request = new XMLHttpRequest();
        request.open("GET", apiUrl + "read", true);
        request.setRequestHeader("Content-Type", "application/json");
    
        request.send();

        request.addEventListener('load', function(){
            let data = JSON.parse(request.responseText);
            console.log(data);
        });
    }
    read();
});
