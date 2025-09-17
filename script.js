document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if(username && password) {
    localStorage.setItem("user", username);
    window.location.href = "index.html"; // redirect to home page
  } else {
    alert("Please enter valid details");
  }
});
