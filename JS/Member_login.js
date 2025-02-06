// Toggle password visibility
function togglePassword() {
    const passwordField = document.getElementById("password");
    const toggleIcon = document.getElementById("toggle-password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleIcon.classList.remove("fa-eye");
        toggleIcon.classList.add("fa-eye-slash");
    } else {
        passwordField.type = "password";
        toggleIcon.classList.remove("fa-eye-slash");
        toggleIcon.classList.add("fa-eye");
    }
}

// Simulate the login and show the rest of the page
function handleLogin(event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Simple validation
    if (!username || !password) {
        alert("Please fill out both fields.");
        return;
    }

    // Simulate a successful login
    document.getElementById("member-dashboard").style.display = "block";
    document.querySelector(".login-container").style.display = "none";
}
