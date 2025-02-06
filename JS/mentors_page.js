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

// Simulate login and show the dashboard
function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password) {
        alert("Please fill out both fields.");
        return;
    }

    // Simulate a successful login
    document.getElementById("mentor-dashboard").style.display = "block";
    document.querySelector(".login-container").style.display = "none";
}

// Show student availability dynamically
document.getElementById("student-name").addEventListener("change", function() {
    const studentAvailability = document.getElementById("student-availability");
    // This is just sample data; you can replace it with actual data fetching logic.
    if (this.value === "student1") {
        studentAvailability.innerHTML = "<p>Monday: 10am - 12pm</p><p>Wednesday: 2pm - 4pm</p>";
    } else if (this.value === "student2") {
        studentAvailability.innerHTML = "<p>Tuesday: 1pm - 3pm</p><p>Thursday: 9am - 11am</p>";
    }
});
