// ========================================
// NAVIGATION DRAWER (menú lateral)
// ========================================
const menuBtn = document.getElementById('menu-btn');
const drawer = document.getElementById('drawer');
const overlay = document.getElementById('drawer-overlay');
const drawerLinks = document.querySelectorAll('.drawer-link');

function openDrawer() {
    drawer.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (menuBtn) {
        menuBtn.innerHTML = '<i class="fas fa-times text-2xl"></i>';
    }
}

function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    if (menuBtn) {
        menuBtn.innerHTML = '<i class="fas fa-bars text-2xl"></i>';
    }
}

function toggleDrawer() {
    if (drawer.classList.contains('open')) {
        closeDrawer();
    } else {
        openDrawer();
    }
}

if (menuBtn) {
    menuBtn.addEventListener('click', toggleDrawer);
}

if (overlay) {
    overlay.addEventListener('click', closeDrawer);
}

// Cerrar drawer al hacer click en un link
drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeDrawer();
        drawerLinks.forEach(l => l.classList.remove('active'));
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
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    drawerLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href && href.substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// ========================================
// FORMULARIO FORMSPREE
// ========================================
const form = document.getElementById('contact-form');
const statusMsg = document.getElementById('form-status');

if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        statusMsg.textContent = 'Enviando...';
        statusMsg.style.color = '#7700F0';

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

// ========================================
// DARK / LIGHT MODE TOGGLE
// ========================================
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const htmlElement = document.documentElement;

// Función para actualizar icono del toggle
function updateThemeIcon() {
    if (themeIcon) {
        if (htmlElement.classList.contains('light')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    }
}

// Cargar tema guardado o preferencia del sistema
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    htmlElement.classList.remove('dark');
    htmlElement.classList.add('light');
    updateThemeIcon();
} else if (savedTheme === 'dark') {
    htmlElement.classList.remove('light');
    htmlElement.classList.add('dark');
    updateThemeIcon();
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    htmlElement.classList.remove('dark');
    htmlElement.classList.add('light');
    updateThemeIcon();
} else {
    htmlElement.classList.remove('light');
    htmlElement.classList.add('dark');
    updateThemeIcon();
}

// Función para cambiar tema
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        if (htmlElement.classList.contains('dark')) {
            htmlElement.classList.remove('dark');
            htmlElement.classList.add('light');
            localStorage.setItem('theme', 'light');
        } else {
            htmlElement.classList.remove('light');
            htmlElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
        updateThemeIcon();
    });
}

// ========================================
// FADE-IN SECTIONS AL HACER SCROLL
// ========================================
const fadeElements = document.querySelectorAll('section');
const observerOptions = {
    threshold: 0.1,
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

// ========================================
// CORREGIR OVERLAY DE PARALLAX
// ========================================
// Asegurar que las secciones parallax tengan overlay visible
document.querySelectorAll('.parallax').forEach(section => {
    const firstDiv = section.querySelector('div:first-child');
    if (firstDiv && firstDiv.style.backgroundImage) {
        // Ya tiene imagen, asegurar que el overlay existe
        let overlay = section.querySelector('.parallax-overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'parallax-overlay';
            overlay.style.position = 'absolute';
            overlay.style.inset = '0';
            overlay.style.backgroundColor = 'var(--bg-primary)';
            overlay.style.opacity = '0.75';
            overlay.style.zIndex = '1';
            section.insertBefore(overlay, section.firstChild);
        }
    }
});

// ============================================
// FADE-IN CON DESPLAZAMIENTO PARA SECCIONES
// ============================================
// Propósito: Detectar cuándo cada sección entra al viewport
// y aplicar la clase 'visible' para activar el fade-in.
//
// PARÁMETROS ACTUALES:
// - Threshold: 0.1 (10% visible)
// - RootMargin: 0px
//
// CÓMO DESHABILITAR:
// - Comentar o eliminar este bloque completo
// ============================================

// Envolver en DOMContentLoaded para asegurar que el DOM esté listo
document.addEventListener('DOMContentLoaded', function () {

    // Seleccionar todas las secciones que tienen contenido
    const sections = document.querySelectorAll('section');

    // Configurar el Intersection Observer
    const observerOptions = {
        threshold: 0.1,      // Se activa cuando el 10% de la sección es visible
        rootMargin: '0px'    // Sin margen adicional
    };

    // Crear el observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añadir clase 'visible' a la sección
                entry.target.classList.add('visible');
                // Opcional: dejar de observar la sección una vez visible (mejora rendimiento)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar cada sección
    sections.forEach(section => {
        observer.observe(section);
    });

});

// ============================================
// FIN DE FADE-IN
// ============================================