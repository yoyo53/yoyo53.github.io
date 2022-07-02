function login() {
    let form = document.getElementById("login_form");
    let storage = window.localStorage;
    let user = storage.getItem(form.elements[0].value);

    if (user == null) {
        alert("No account found !");
    }
    else if (JSON.parse(user).password == form.elements[1].value) {
        if (form.elements[2].checked == true) {
            storage.setItem("connected", JSON.parse(storage.getItem(form.elements[0].value)).name);
        }
        window.sessionStorage.setItem("connected", JSON.parse(storage.getItem(form.elements[0].value)).name);
        connect();
        window.location.href = "../html/home.html";
    }
    else {
        alert("Invalid password !");
    }
}