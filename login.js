// Select Form
const loginForm = document.getElementById("loginForm");

// Submit Event
loginForm.addEventListener("submit", async function (e) {

    e.preventDefault();

    // Get Input Values
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    try {

        const response = await fetch("http://localhost:5000/api/login", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                username,
                password
            })

        });

        const data = await response.json();

        if (response.ok && data.success) {

            // Save Login Status
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("username", username);

            alert("Login Successful!");

            // Redirect to Dashboard
            window.location.href = "dashboard.html";

        } else {

            document.getElementById("message").innerHTML = data.message;

        }

    } catch (error) {

        console.error(error);

        document.getElementById("message").innerHTML =
            "Server not running. Please start the backend.";

    }

});