
function openmodel(button){
deleteRow = button.closest("tr");
document.getElementById("myModal").style.display = "block";
}
function closeModal(){
document.getElementById("myModal").style.display = "none";
}


// ====================login page & register============
(function(){

    const container = document.getElementById('container');
    const showRegisterLink = document.getElementById('showRegisterLink');
    const showLoginLink = document.getElementById('showLoginLink');

    function revealAnimations(root){
      root.querySelectorAll('.anim').forEach(el => {
        setTimeout(() => el.classList.add('show'), 10);
      });
    }

    function hideAnimations(root){
      root.querySelectorAll('.anim').forEach(el => el.classList.remove('show'));
    }

    // Initial animations
    revealAnimations(container);

    // Show register page

    showRegisterLink.addEventListener('click', function(e){
      e.preventDefault();
      hideAnimations(container);
      container.classList.add('active');
      setTimeout(() => revealAnimations(container), 250);
    });

    // Show login page

    showLoginLink.addEventListener('click', function(e){
      e.preventDefault();
      hideAnimations(container);
      container.classList.remove('active');
      setTimeout(() => revealAnimations(container), 250);
    });

  
    // REGISTER LOGIC
    
    document.getElementById('registerBtn').addEventListener('click', function(e){
        e.preventDefault();
        
        const Firstname = document.getElementById("Fnamereg").value.trim();
        const LastName = document.getElementById("Lnamereg").value.trim();
        const email = document.getElementById('regEmail').value.trim();
        const password = document.getElementById('regPassword').value.trim();
        const confirm   = document.getElementById("confirmPassReg").value.trim();

        if(email === "" || password === "" ||Firstname ==="" || LastName ==="") {
          alert("Please enter all fields");
          return;
        }
        if(password!==confirm){
            alert( "Password do not match"); 
             return;  
        }

        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const exist = users.find(u => u.email === email);

        if(exist){
          alert("User already registered. Please login.");
          return;
        }

        users.push({ email, password });
        localStorage.setItem("users", JSON.stringify(users));

        alert("Registration Successful! Please login.");

        hideAnimations(container);
        container.classList.remove('active');
        setTimeout(() => revealAnimations(container), 250);
    });
    


   //  login 

    document.getElementById('loginBtn').addEventListener('click', function(e){
    e.preventDefault();

    const email = document.getElementById('loginEmail').value.trim();  
    const password = document.getElementById('loginPassword').value.trim();

    if(email === "" || password === "") {
      alert("Please enter all fields");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(u => u.email === email && u.password === password);

    if(!user){
      alert("Invalid Email or Password");
      return;
    }

    localStorage.setItem("loggedInUser", email);

    alert("Login Successful!");

    window.location.href = "index.html";
});


})();


