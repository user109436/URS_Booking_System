import { API_BASE_URL } from "../constants/ApiConstant.js";

export const login = async (values) => {
  var xhr = new XMLHttpRequest();
  var url = `${API_BASE_URL}/api/user/login`;
  var httpMethod = "POST";

  xhr.open(httpMethod, url, true);

  xhr.setRequestHeader("Content-type", "application/json");

  xhr.onload = function () {
    if (this.status == 200) {
      var data = JSON.parse(this.responseText).split("&");

      if (data[0] == "Success") {
        var authToken = data[1].split(" ")[1];
        var accessToken = data[2];

        localStorage.setItem("auth_token", authToken);
        localStorage.setItem("access_token", accessToken);

        return (window.location.href = "/request_table.html");
      } else {
        alert(data);
      }
    } else if ((this.status = 404)) {
      alert("Error");
    }
  };

  xhr.send(JSON.stringify(values));
};

export const logout = async (values) => {
  var xhr = new XMLHttpRequest();
  var url = `${API_BASE_URL}/api/user/logout`;
  var httpMethod = "POST";

  xhr.open(httpMethod, url, true);

  xhr.setRequestHeader("Content-type", "application/json");
  xhr.setRequestHeader("Authorization", getToken());

  xhr.onload = function () {
    if (this.status == 200) {
      var data = JSON.parse(this.responseText);

      if (data == "Success") {
        localStorage.clear();
        return (window.location.href = "/login.html");
      } else {
        alert("Error");
      }
    } else if ((this.status = 404)) {
      alert("Error");
    }
  };

  xhr.send(JSON.stringify(values));
};

export const isAuthenticated = () => {
  try {
    var accessToken = localStorage.getItem("access_token");
    var accessTokenDecoded = window.atob(accessToken);
    var userData = JSON.parse(accessTokenDecoded);
    var date = new Date();

    if (date < new Date(Date.parse(userData.ExpiredAt))) {
      return true;
    } else {
      return (window.location.href = "/login.html");
    }
  } catch (error) {
    return (window.location.href = "/login.html");
  }
};

export const currentUser = () => {
  try {
    var accessToken = localStorage.getItem("access_token");
    var accessTokenDecoded = window.atob(accessToken);
    var userData = JSON.parse(accessTokenDecoded);

    delete userData.Authorized;

    return userData;
  } catch (error) {
    return {};
  }
};

export const getToken = () => {
  try {
    var authToken = localStorage.getItem("auth_token");
    return "Bearer " + authToken;
  } catch (error) {
    return "";
  }
};
