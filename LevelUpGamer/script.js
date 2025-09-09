document.addEventListener('DOMContentLoaded', function() {

    //Registro de cuenta
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
                if (clave.length < 4 || clave.length > 12) {
                    alert('La contraseña debe tener entre 4 y 12  caracteres.');
                    return;
                }
            if (localStorage.getItem(email)) {
                alert('Este correo ya se encuentra registrado.');
                return;
            }
            localStorage.setItem(email, clave);
            alert('Su cuenta se ha registrado exitosamente.');
            window.location.href = 'inicioSesion.html';
        });
    }

    //Inicio de sesión
    const loginForm = document.getElementById('formLogin');
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
                alert('Correo o clave invalidos.');
            }
        });
    }

    //Cambio de contraseña
    const resetForm = document.getElementById('formPass');
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
                if (newClave.length < 4 || newClave.length > 12) {
                    alert('La nueva contraseña debe tener entre 4 y 12 caracteres.');
                    return;
                }
            if (newClave !== confirmClave) {
                alert('Las contraseñas no son iguales.');
                return;
            }
            if (!localStorage.getItem(email)) {
                alert('El correo no está registrado.');
                return;
            }
            localStorage.setItem(email, newClave);
            alert('Su contraseña se actualizó con éxito.');
            window.location.href = 'inicioSesion.html';
        });
    }
});
