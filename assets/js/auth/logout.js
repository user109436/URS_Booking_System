import { logout, currentUser } from "./auth_manager.js";

var logoutBtn = document.getElementById("logout-btn");

logoutBtn.addEventListener("click", (e) => {
  e.preventDefault();
  var userData = currentUser();

  console.log("Logout");
  logout({ Id: userData.UserId });
});
