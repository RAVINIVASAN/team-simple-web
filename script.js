function showMessage() {
    alert("Hello from Team!");
}

function login() {
  const u = document.getElementById("user").value;
  const p = document.getElementById("pass").value;
  document.getElementById("msg").innerText =
    (u==="admin" && p==="1234") ? "Login success" : "Invalid";
}