function Login() {
    this.name;
    this.pass;
    this.headerNotification;

    this.getUsername = function (name) { this.name = name };
    this.getPassword = function (pass) { this.pass = pass };

    this.sendToServer = function (action) {
        xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            this.headerNotification = document.getElementsByClassName("login-head")[0];

            if (xhr.readyState === 4 && xhr.responseText == "loginSucceeded") {
                this.headerNotification.innerHTML = "Success!";
            }
            if (xhr.readyState === 4 && xhr.responseText == "loginFailed") {
                this.headerNotification.innerHTML = "Wrong Username or Password...";
            }
            if (xhr.readyState === 4 && action == "signupUser" && xhr.responseText != "true") {
                console.log(xhr.responseText);
                this.headerNotification.innerHTML = xhr.responseText;
                new animations(this.headerNotification).negative();

            }
            if (xhr.readyState === 4 && action == "signupUser" && xhr.responseText == "true") {
                this.headerNotification.innerHTML = "Signup Successful! Redirecting...";
                setTimeout(()=>{
                    var elem = document.createElement("a");
                    elem.setAttribute("href", "./");
                    elem.click();
                },500);
            }


        }
        xhr.open('POST', '/' + action);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({ username: this.name, password: this.pass }));
    }

}

function animations(element) {
    this.negative = function () {
        var remove = ()=>{element.classList.remove("negative-anim")};
        remove();
        element.classList.add("negative-anim");
        setTimeout(remove,1000);
    }

}

var login = new Login();
