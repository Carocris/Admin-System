function validateForm() {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    
    if (!validateEmail(emailInput.value)) {
      alert("Por favor ingresa un correo electrónico válido.");
      return false;
    }
    
    if (passwordInput.value.length < 8) {
      alert("Por favor ingresa una contraseña con al menos 8 caracteres.");
      return false;
    }
    
    if (passwordInput.value !== confirmPasswordInput.value) {
      alert("La contraseña y la confirmación de contraseña no coinciden.");
      return false;
    }
    
    return true;
  }
  
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  const registerButton = document.getElementById("register-button");
  
  registerButton.onclick = function() {
    window.location.href = "./login.html";
  };
  