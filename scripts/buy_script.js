function add(name, price) {
    let table = document.getElementById("table");

    let rows = table.rows;
    let found = false;
    for (let i = 1; i < rows.length - 1; i++) {
        if(rows[i].firstChild.textContent == name) {
            rows[i].childNodes[1].firstChild.childNodes[1].innerHTML = parseInt(rows[i].childNodes[1].firstChild.childNodes[1].innerHTML) + 1;
            rows[i].childNodes[3].textContent = rows[i].childNodes[1].firstChild.childNodes[1].innerHTML * price;
            console.log(rows[rows.length - 1].childNodes[3].textContent);
            rows[rows.length - 1].childNodes[3].textContent = parseInt(rows[rows.length - 1].childNodes[3].textContent) + 1;
            rows[rows.length - 1].childNodes[7].textContent = parseInt(rows[rows.length - 1].childNodes[7].textContent) + price;
            found = true;
        }
    }
    if (!found) {
        let new_row = document.createElement("tr");

        let new_row_name = document.createElement("td");
        new_row_name.textContent = name;
        new_row.append(new_row_name);

        let new_row_quantity = document.createElement("td");
        let quantity_div = document.createElement("div");
        quantity_div.className = "quantity";
        
        let btn = document.createElement('button');
        btn.className = "table_button";
        btn.innerHTML = '-';
        btn.onclick = function() {one_less(name, price)};
        quantity_div.appendChild(btn);

        let quantity = document.createElement("p");
        quantity.innerHTML = 1;
        quantity_div.appendChild(quantity);

        btn = document.createElement('button');
        btn.className = "table_button";
        btn.innerHTML = '+';
        btn.onclick = function() {one_more(name, price)};
        quantity_div.appendChild(btn);

        new_row_quantity.appendChild(quantity_div);
        new_row.append(new_row_quantity);

        let new_row_unity_price = document.createElement("td");
        new_row_unity_price.textContent = price;
        new_row.append(new_row_unity_price);

        let new_row_price = document.createElement("td");
        new_row_price.textContent = price;
        new_row.append(new_row_price);

        new_row = rows[0].parentNode.insertBefore(new_row, rows[rows.length - 1]);
        rows[rows.length - 1].childNodes[3].textContent = parseInt(rows[rows.length - 1].childNodes[3].textContent) + 1;
        rows[rows.length - 1].childNodes[7].textContent = parseInt(rows[rows.length - 1].childNodes[7].textContent) + price;
    }
}

function one_less(name, price) {
    let table = document.getElementById("table");

    let rows = table.rows;
    for (let i = 1; i < rows.length - 1; i++) {
        if(rows[i].firstChild.textContent == name) {
            rows[i].childNodes[1].firstChild.childNodes[1].innerHTML = parseInt(rows[i].childNodes[1].firstChild.childNodes[1].innerHTML) - 1;
            rows[rows.length - 1].childNodes[3].textContent = parseInt(rows[rows.length - 1].childNodes[3].textContent) - 1;
            rows[rows.length - 1].childNodes[7].textContent = parseInt(rows[rows.length - 1].childNodes[7].textContent) - price;
            if (parseInt(rows[i].childNodes[1].firstChild.childNodes[1].innerHTML) == 0) {
                rows[i].parentNode.removeChild(rows[i]);
            }
            else {
                rows[i].childNodes[3].textContent = rows[i].childNodes[1].firstChild.childNodes[1].innerHTML * price;
            }
        }
    }
}


function one_more(name, price) {
    let table = document.getElementById("table");

    let rows = table.rows;
    for (let i = 1; i < rows.length - 1; i++) {
        if(rows[i].firstChild.textContent == name) {
            rows[rows.length - 1].childNodes[3].textContent = parseInt(rows[rows.length - 1].childNodes[3].textContent) + 1;
            rows[rows.length - 1].childNodes[7].textContent = parseInt(rows[rows.length - 1].childNodes[7].textContent) + price;
            rows[i].childNodes[1].firstChild.childNodes[1].innerHTML = parseInt(rows[i].childNodes[1].firstChild.childNodes[1].innerHTML) + 1;
            rows[i].childNodes[3].textContent = rows[i].childNodes[1].firstChild.childNodes[1].innerHTML * price;
        }
    }
}

function pay() {
    let table = document.getElementById("table");

    if (table.rows.length < 3) {
        alert("Select at least one article !");
    }
    else {
        document.body.style.height = "100vh";
        document.body.style.overflow = "hidden";

        document.getElementById("pay_form").style.visibility = "visible";
        document.getElementById("cover").style.visibility = "visible";
    }
}

function pay_confirm() {
    alert("Payement accepted, you will receive your command between 10 days and never.");
    exit_pay_window();
    window.location.href = "../html/home.html"
}

function exit_pay_window() {
    document.body.style.height = "auto";
    document.body.style.overflow = "visible";

    document.getElementById("cover").style.visibility = "hidden";

    let form = document.getElementById("pay_form");
    form.reset();
    form.style.visibility = "hidden";}