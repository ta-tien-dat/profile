const accounts = [
    {
        email: "tadat@gmail.com",
        password: "1"
    },
    {
        email: "tadat2@gmail.com",
        password: "1"
    },
    {
        email: "tadat3@gmail.com",
        password: "1"
    }
]

const currentAccount = {
    email: "",
    password: ""
}
// handle login
function handleLogin() {
    console.log(currentAccount);
    let isSucess = false;
    accounts.forEach(acc => {
        if (acc.email === currentAccount.email && acc.password === currentAccount.password) {
            isSucess = true;
            return;
        }
    })
    if (isSucess) {
        window.location.pathname = '/Envato-market/admin/admin.html'
        alert("Login Success");
        return;
    }
    alert("Email or password wrong")
}

function handleChange(value, type) {
    switch (type) {
        case "email":
            currentAccount.email = value;
            break;
        case "password":
            currentAccount.password = value;
            break
        default: break;
    }

}