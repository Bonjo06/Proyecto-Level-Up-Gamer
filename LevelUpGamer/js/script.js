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
                window.location.href = 'index.html';
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


    const productCards = document.querySelectorAll('.producto-card');
    const modalContainer = document.getElementById('modal-container');

    if (productCards.length > 0 && modalContainer) {
        const modalCloseButton = document.querySelector('.modal-close');
        const modalImg = document.getElementById('modal-img');
        const modalTitulo = document.getElementById('modal-titulo');
        const modalDescripcion = document.getElementById('modal-descripcion');
        const modalPrecio = document.getElementById('modal-precio');
        const modalStock = document.getElementById('modal-stock');

        productCards.forEach(card => {
            card.addEventListener('click', () => {
                const titulo = card.dataset.titulo;
                const imagen = card.dataset.imagen;
                const descripcion = card.dataset.descripcion;
                const precio = card.dataset.precio;
                const stock = card.dataset.stock;

                modalTitulo.textContent = titulo;
                modalImg.src = imagen;
                modalDescripcion.textContent = descripcion;
                modalPrecio.textContent = `Precio: ${precio}`;
                modalStock.textContent = `Stock: ${stock}`;

                modalContainer.classList.add('visible');
            });
        });

        const closeModal = () => {
            modalContainer.classList.remove('visible');
        };

        modalCloseButton.addEventListener('click', closeModal);

        modalContainer.addEventListener('click', (event) => {
            if (event.target === modalContainer) {
                closeModal();
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && modalContainer.classList.contains('visible')) {
                closeModal();
            }
        });
    }

});
