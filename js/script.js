// Navigation Drawer (menú lateral)
const menuBtn = document.getElementById('menu-btn');
const drawer = document.getElementById('drawer');
const overlay = document.getElementById('drawer-overlay');
const drawerLinks = document.querySelectorAll('.drawer-link');

function openDrawer() {
    drawer.classList.add('open');
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    // Cambiar icono del botón
    menuBtn.innerHTML = '<i class="fas fa-times text-2xl"></i>';
}

function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
    menuBtn.innerHTML = '<i class="fas fa-bars text-2xl"></i>';
}

function toggleDrawer() {
    if (drawer.classList.contains('open')) {
        closeDrawer();
    } else {
        openDrawer();
    }
}

menuBtn.addEventListener('click', toggleDrawer);
overlay.addEventListener('click', closeDrawer);

// Cerrar drawer al hacer click en un link
drawerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Cerrar drawer
        closeDrawer();

        // Remover clase activa de todos los links
        drawerLinks.forEach(l => l.classList.remove('active'));
        // Añadir clase activa al link clickeado
        link.classList.add('active');
    });
});

// Resaltar link activo según scroll
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    drawerLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href').substring(1);
        if (href === current) {
            link.classList.add('active');
        }
    });
});

// Formulario Formspree con fetch (mejor UX)
const form = document.getElementById('contact-form');
const statusMsg = document.getElementById('form-status');

if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        statusMsg.textContent = 'Enviando...';
        statusMsg.style.color = '#60a5fa';

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                statusMsg.textContent = '¡Mensaje enviado! Te responderé pronto.';
                statusMsg.style.color = '#4ade80';
                form.reset();
            } else {
                statusMsg.textContent = 'Error al enviar. Intenta de nuevo.';
                statusMsg.style.color = '#f87171';
            }
        } catch (error) {
            statusMsg.textContent = 'Error de red. Intenta de nuevo.';
            statusMsg.style.color = '#f87171';
        }

        setTimeout(() => {
            statusMsg.textContent = '';
        }, 5000);
    });
}

// Parallax manual (opcional, mejora el efecto)
// window.addEventListener('scroll', () => {
//     const parallaxElements = document.querySelectorAll('.parallax > div:first-child');
//     const scrolled = window.pageYOffset;

//     parallaxElements.forEach(el => {
//         const speed = el.parentElement.getAttribute('data-speed') || 0.5;
//         const yPos = -(scrolled * speed);
//         el.style.transform = `translateY(${yPos}px)`;
//     });
// });

// Parallax con Intersection Observer (no interrumpe el CSS)
// Esta versión solo activa el efecto cuando la sección es visible
const parallaxSections = document.querySelectorAll('.parallax');

const parallaxObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('parallax-visible');
        } else {
            entry.target.classList.remove('parallax-visible');
        }
    });
}, { threshold: 0.1 });

parallaxSections.forEach(section => {
    parallaxObserver.observe(section);
});



// Fade-in sections al hacer scroll
const fadeElements = document.querySelectorAll('section');
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
        }
    });
}, observerOptions);

fadeElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Dark mode toggle (opcional, puedes añadir un botón)
// Por defecto ya usamos fondo oscuro, esto asegura consistencia
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.add('dark'); // Forzamos dark mode por tu preferencia
}

// Cerrar drawer si se redimensiona a escritorio (opcional)
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && drawer.classList.contains('open')) {
        closeDrawer();
    }
});