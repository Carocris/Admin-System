
function validateForm() {
  const name = document.getElementById("name").value;
  const username = document.getElementById("username").value;
  const birthdate = document.getElementById("birthdate").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (name === "") {
    alert("Por favor ingresa tu nombre completo");
    return false;
  }

  if (username === "") {
    alert("Por favor ingresa un nombre de usuario");
    return false;
  }

  if (birthdate === "") {
    alert("Por favor ingresa tu fecha de nacimiento");
    return false;
  }

  if (email === "") {
    alert("Por favor ingresa tu correo electrónico");
    return false;
  }

  if (password === "") {
    alert("Por favor ingresa una contraseña");
    return false;
  }

  if (confirmPassword === "") {
    alert("Por favor confirma tu contraseña");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Las contraseñas no coinciden");
    return false;
  }

  return true;
}
