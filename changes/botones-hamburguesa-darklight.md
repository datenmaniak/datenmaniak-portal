# botones

##  Boton hambuguesa & Dark/light


```html
  <!-- Botón Dark/Light Mode -->
    <button id="theme-toggle"
        class="fixed top-5 right-5 z-50 p-3 bg-bg-secondary text-daten-primary rounded-lg shadow-lg hover:bg-daten-primary hover:text-white transition-all duration-300 focus:outline-none">
        <i id="theme-icon" class="fas fa-moon text-xl"></i>
    </button>

    <!-- Botón hamburguesa (menú lateral) -->
    <button id="menu-btn"
        class="fixed top-5 left-5 z-50 p-3 bg-bg-secondary text-daten-primary rounded-lg shadow-lg hover:bg-daten-primary hover:text-white transition-all duration-300 focus:outline-none">
        <i class="fas fa-bars text-2xl"></i>
    </button>

    <!-- ============================================
         DRAWER CON LOGO INTERNO 
    ============================================ -->
    <div id="drawer"
        class="fixed top-0 left-0 h-full w-64 bg-bg-secondary text-text-primary z-50 transform -translate-x-full transition-transform duration-300 ease-in-out shadow-2xl border-r border-border-primary">

        <div class="p-6 pt-8">

            <!-- Cabecera del drawer (logo + botón cierre) -->
            <div class="flex items-center justify-between p-4 border-b border-border-primary">
                <span
                    class="text-daten-primary font-semibold text-xl sm:text-2xl md:text-xl tracking-wide ml-auto mr-2 -mt-1">
                    datenmaniak
                </span>
            </div>

            <nav class="flex flex-col space-y-4">
                <a href="#hero" class="drawer-link hover:text-daten-primary transition-colors"><i
                        class="fas fa-home mr-3"></i>Inicio</a>
                <a href="#servicios" class="drawer-link hover:text-daten-primary transition-colors"><i
                        class="fas fa-cogs mr-3"></i>Servicios</a>
                <a href="#portafolio" class="drawer-link hover:text-daten-primary transition-colors"><i
                        class="fas fa-folder-open mr-3"></i>Portafolio</a>
                <a href="#habilidades" class="drawer-link hover:text-daten-primary transition-colors"><i
                        class="fas fa-code mr-3"></i>Habilidades</a>
                <a href="#trayectoria" class="drawer-link hover:text-daten-primary transition-colors"><i
                        class="fas fa-briefcase mr-3"></i>Trayectoria</a>
                <a href="#about" class="drawer-link hover:text-daten-primary transition-colors"><i
                        class="fas fa-user mr-3"></i>Sobre Mí</a>
                <a href="#testimonios" class="drawer-link hover:text-daten-primary transition-colors"><i
                        class="fas fa-comments mr-3"></i>Testimonios</a>
                <a href="#contacto" class="drawer-link hover:text-daten-primary transition-colors"><i
                        class="fas fa-envelope mr-3"></i>Contacto</a>
            </nav>
        </div>
    </div>

    <!-- Overlay oscuro para móvil (cierra drawer al hacer click fuera) -->
    <div id="drawer-overlay" class="fixed inset-0 bg-black bg-opacity-50 z-30 hidden transition-opacity duration-300">
    </div>
```

