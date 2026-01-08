
    function login() {
      const u = document.getElementById("user").value;
      const p = document.getElementById("pass").value;

      // Your credentials:
      const USERNAME = "admin";
      const PASSWORD = "megnemveszithetek";

      if (u === USERNAME && p === PASSWORD) {
        localStorage.setItem("loggedIn", "yes");
        window.location.href = "Főoldal.html";  
      } else {
        alert("Wrong username or password"); 
        window.location.href = "Bejelentkezés.html";
      }
    }

