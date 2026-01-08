// Wait 3 seconds, then log out
setTimeout(() => {

    // Set login to false
    localStorage.setItem("loggedIn", "no");

    // Redirect to login page
    window.location.href = "Bejelentkezés.html";

}, 3000);