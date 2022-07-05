import { LOCAL_BASE_URL } from "../constants/ApiConstant"

const form = document.getElementById("form-account-login")
const email = document.getElementById("email")
const password = document.getElementById("password")

form.addEventListener("submit", e => {
    e.preventDefault()
    const values = {
        Email: email.value,
        Password: password.value
    }

    login(values)
})

async function login(values) {
    var xhr = new XMLHttpRequest()
    var url = `${LOCAL_BASE_URL}/api/user/login`
    var httpMethod = 'POST'

    xhr.open(httpMethod, url, true)

    xhr.setRequestHeader('Content-type', 'application/json')

    xhr.onload = function () {
        if (this.status == 200) {
            var data = JSON.parse(this.responseText)
            var res = data.split("&")

            if (res[0] == "Success") {
                var accessToken = res[1].split(" ")[1]

                localStorage.setItem("access_token", accessToken)
                alert("Login Success")
            } else {
                alert(data)
            }
        } else if (this.status = 404) {
            console.log("error")
        }
    }

    xhr.send(JSON.stringify(values))
}