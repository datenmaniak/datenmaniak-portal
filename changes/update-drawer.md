# Ajustar el drawer

Actualizar el drawer para aplicar un estilo a la marca 'datenmaniak' y agregar un efecto de prompt de consola.

## Importante 

- Mantener el diseño del drawer para no romper la estructura de menu ni los estilos.
- Evaluar como ajustar la posicion de manera que se aprecie el branding name
- Evitar que se solape con el boton hamburguesa


## Codigo actual

```html
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
```


