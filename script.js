function store() {
  var name = document.getElementById("name");
  var pw = document.getElementById("pw");

  if (name.value.length == 0) {
    alert("Please fill in email");
  } else if (pw.value.length == 0) {
    alert("Please fill in password");
  } else {
    localStorage.setItem("name", name.value);
    localStorage.setItem("pw", pw.value);
  }
}
function check() {
  var storedName = localStorage.getItem("name");
  var storedPw = localStorage.getItem("pw");

  var userName = document.getElementById("userName");
  var userPw = document.getElementById("userPw");

  if (userName.value == storedName && userPw.value == storedPw) {
    window.location.href = "submit.html";
  } else {
    alert("Error on login");
  }
}
