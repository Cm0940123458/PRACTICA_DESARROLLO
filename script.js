// Seleccionamos el formulario y el mensaje de error
const form = document.getElementById('registroForm');
const mensajeError = document.getElementById('mensajeError');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Evita el envío automático del formulario

  // Obtenemos los valores de los campos
  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const password = document.getElementById('password').value.trim();

  // Validaciones simples
  if (nombre === "" || correo === "" || password === "") {
    mensajeError.textContent = "⚠️ Todos los campos son obligatorios.";
    return;
  }

  if (!/\S+@\S+\.\S+/.test(correo)) {
    mensajeError.textContent = "⚠️ Ingresa un correo válido.";
    return;
  }

  if (password.length < 6) {
    mensajeError.textContent = "⚠️ La contraseña debe tener al menos 8 caracteres.";
    return;
  }

  // Si todo está correcto
  mensajeError.style.color = "green";
  mensajeError.textContent = "✅ Registro exitoso.";
  form.reset(); // Limpia los campos
});
