function Login() {
    this.name;
    this.pass;
    this.headerNotification;

    this.getUsername = function (name) { this.name = name };
    this.getPassword = function (pass) { this.pass = pass };

    this.sendToServer = function (action) {
        xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            this.headerNotification = document.getElementById("login-header");

            if (xhr.readyState === 4 && xhr.responseText == "true") {
                console.log(xhr.responseText);
                this.headerNotification.innerHTML = "Success!";
            }
            else if(xhr.readyState === 4 && xhr.responseText == "false") {
                this.headerNotification.innerHTML = "Wrong Username or Password...";
            }
        }
        xhr.open('POST', '/' + action);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({ username: this.name, password: this.pass }));


    }
}

var login = new Login();
