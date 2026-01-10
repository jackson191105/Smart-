let balance = 0;

function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === "admin" && pass === "1234") {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
    } else {
        alert("Invalid login details");
    }
}

function logout() {
    location.reload();
}

function updateBalance() {
    document.getElementById("balance").innerText = "₹ " + balance;
}

function addTransaction(text) {
    const li = document.createElement("li");
    li.innerText = text;
    document.getElementById("transactionList").appendChild(li);
}

function deposit() {
    let amount = Number(document.getElementById("depositAmount").value);
    if (amount > 0) {
        balance += amount;
        updateBalance();
        addTransaction("Deposited ₹" + amount);
        document.getElementById("depositAmount").value = "";
    } else {
        alert("Enter valid amount");
    }
}

function withdraw() {
    let amount = Number(document.getElementById("withdrawAmount").value);
    if (amount > 0 && amount <= balance) {
        balance -= amount;
        updateBalance();
        addTransaction("Withdrawn ₹" + amount);
        document.getElementById("withdrawAmount").value = "";
    } else {
        alert("Insufficient balance or invalid amount"); // ✅ Fixed line break
    }
}
