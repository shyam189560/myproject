document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  if(password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  if(username && email && password) {
    // Save signup data (for now in localStorage)
    localStorage.setItem("user", username);
    localStorage.setItem("email", email);

    alert("Signup successful! Redirecting to login...");
    window.location.href = "login.html";
  } else {
    alert("Please fill all fields correctly.");
  }
});
