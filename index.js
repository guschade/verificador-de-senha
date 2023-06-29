function checkPassword() {
  let password = document.getElementById("passwordInput").value;

  // Verifica o comprimento mínimo
  if (password.length < 8) {
    displayMessage("A senha deve ter pelo menos 8 caracteres.");
    return;
  }

  // Verifica se contém pelo menos uma letra maiúscula
  if (!/[A-Z]/.test(password)) {
    displayMessage("A senha deve conter pelo menos uma letra maiúscula.");
    return;
  }

  // Verifica se contém pelo menos uma letra minúscula
  if (!/[a-z]/.test(password)) {
    displayMessage("A senha deve conter pelo menos uma letra minúscula.");
    return;
  }

  // Verifica se contém pelo menos um número
  if (!/[0-9]/.test(password)) {
    displayMessage("A senha deve conter pelo menos um número.");
    return;
  }

  // Se todas as verificações passarem, a senha é válida
  displayMessage("A senha é válida.");
}

function displayMessage(message) {
  let output = document.getElementById("output");
  output.textContent = message;
}

// Adiciona o evento de teclado à caixa de senha
document
  .getElementById("passwordInput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      checkPassword();
    }
  });
