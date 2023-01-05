
fetch("http://api.bennybot.me:8080/status.html")
    .then(response => response.text())
    .then(text => console.log(text));

