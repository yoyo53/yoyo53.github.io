window.onload = test_connect;

function test_connect() {
    if (window.sessionStorage.getItem("connected") != null || window.localStorage.getItem("connected") != null) {
        connect();
    }
    else {
        disconnect();
    }
}

function connect() {
    let title_line = document.getElementById("title_line");
    let button = document.createElement("button");
    button.id = "disconnect";
    let name = document.createElement("p");
    if (window.sessionStorage.getItem("connected") == null) {
        name.innerHTML  = window.localStorage.getItem("connected");
    }
    else {
        name.innerHTML = window.sessionStorage.getItem("connected");
    }
    button.appendChild(name);
    button.onclick = function() {disconnect()};
    let img = document.createElement("img");
    img.src = "https://d29fhpw069ctt2.cloudfront.net/icon/image/39211/preview.png";
    img.style.height = "1em";
    button.appendChild(img);
    if (document.getElementById("login") != null) {
        title_line.removeChild(document.getElementById("login"));
    }
    title_line.appendChild(button);
}

function disconnect() {
    window.localStorage.removeItem("connected")
    window.sessionStorage.removeItem("connected");
    let title_line = document.getElementById("title_line");
    let link = document.createElement("a");
    link.href = "login.html";
    link.id = "login";
    link.innerHTML = "Log In";


    if (document.getElementById("disconnect") != null) {
        title_line.removeChild(document.getElementById("disconnect"));
    }    title_line.appendChild(link);
}