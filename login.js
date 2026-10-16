document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
   
    if (email === "atanosonathaliejones_bsit@plmun.edu.ph" && password === "Jones012807") {
        alert("Login successful!");
    }
   // student account to ah!!
        // alert("home.html"); (ganyan daw be pag may home na link, kuha ko lang sa yt)


   else if (email === "admin@plmun.edu.ph" && password === "admin123") {
    alert("Admin Login successful!");
    //alert("home.html"); (kapag meron na)
    
    } else {
        alert("Invalid email or password. Try Again!");
    }
});