document.addEventListener('DOMContentLoaded', function() {

    // Registro de cuenta
    const registroForm = document.getElementById('formRegistro');
    if (registroForm) {
        registroForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('emailUser').value.trim();
            const clave = document.getElementById('passUser').value;
            if (!email || !clave) {
                alert('Completa todos los campos.');
                return;
            }
            if (localStorage.getItem(email)) {
                alert('El usuario ya existe.');
                return;
            }
            localStorage.setItem(email, clave);
            alert('Registro exitoso. Ahora puedes iniciar sesión.');
            window.location.href = 'incioSesion.html';
        });
    }

    // Inicio de sesión
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('emailUser').value.trim();
            const clave = document.getElementById('passUser').value;
            if (!email || !clave) {
                alert('Porfavor completa el/los campos vacios.');
                return;
            }
            const storedClave = localStorage.getItem(email);
            if (storedClave && storedClave === clave) {
                alert('Sesión iniciada correctamente.');
                window.location.href = 'inicio.html';
            } else {
                alert('Correo o clave invalidos / no registrados.');
            }
        });
    }

    // Cambio de contraseña
    const resetForm = document.getElementById('resetForm');
    if (resetForm) {
        resetForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('emailUser').value.trim();
            const newClave = document.getElementById('newPassUser').value;
            const confirmClave = document.getElementById('confirmPassUser').value;
            if (!email || !newClave || !confirmClave) {
                alert('Completa todos los campos.');
                return;
            }
            if (newClave !== confirmClave) {
                alert('Las contraseñas no coinciden.');
                return;
            }
            if (!localStorage.getItem(email)) {
                alert('El correo no está registrado.');
                return;
            }
            localStorage.setItem(email, newClave);
            alert('Contraseña actualizada. Ahora puedes iniciar sesión.');
            window.location.href = 'incioSesion.html';
        });
    }
});
