function check_password() {
    let password = document.getElementById("password");
    let confirm_password = document.getElementById("confirm_password");
    if (password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");
    }
    else {
        confirm_password.setCustomValidity("");
    }
}

function create_account() {
    let form = document.getElementById("create_account_form");
    let storage = window.localStorage;
    let user = storage.getItem(form.elements[1].value);

    if (user != null) {
        alert("This e-mail address is already used !");
    }
    else {
        user = {
            name : form.elements[0].value,
            password : form.elements[2].value,
        };

        storage.setItem(form.elements[1].value, JSON.stringify(user));

        if (form.elements[4].checked == true) {
            window.localStorage.setItem("connected", form.elements[0].value);
        }
        window.sessionStorage.setItem("connected", form.elements[0].value);
        connect();
        window.location.href = "../html/home.html";
    }
}