# Ajustes para el Hero

Corregir el efecto de las imagenes en modo Light, y ajustar lo indicadores.


## Codigo actual

```html
        <!-- HERO SECTION WITH CARROUSEL -->
        <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden">

            <!-- Carrusel de imágenes de fondo -->
            <div id="hero-carousel" class="absolute inset-0 z-0">
                <div class="carousel-slide active"
                    style="background-image: url('images/hero-bg-1.jpg'); background-size: cover; background-position: center;">
                </div>
                <div class="carousel-slide"
                    style="background-image: url('images/hero-bg-2.jpg'); background-size: cover; background-position: center;">
                </div>
                <div class="carousel-slide"
                    style="background-image: url('images/hero-bg-3.jpg'); background-size: cover; background-position: center;">
                </div>
                <div class="carousel-slide"
                    style="background-image: url('images/hero-bg-4.jpg'); background-size: cover; background-position: center;">
                </div>
                <div class="carousel-slide"
                    style="background-image: url('images/hero-bg-5.jpg'); background-size: cover; background-position: center;">
                </div>
            </div>

            <!-- Overlay para legibilidad del texto -->
            <div class="overlay-visible z-1"></div>

            <!-- Contenido del Hero -->
            <div class="section-content relative z-10 text-center px-4 max-w-5xl mx-auto">


                <h1 class="text-2xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight tracking-tight">
                    De SysAdmin a DevOps
                </h1>

                <p class="text-base md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
                    11 años en sistemas Linux evolucionando hacia Cloud Native. Automatizo y orquesto entornos reales
                    desde mi HomeLab.
                </p>

                <!-- CTA Optimizado (Cambio quirúrgico en destino, espaciado y tamaño móvil) -->
                <a href="#portafolio"
                    class="group inline-flex items-center justify-center gap-2 bg-daten-primary hover:bg-daten-secondary text-white font-semibold px-6 md:px-10 py-3.5 md:py-4 rounded-lg transition-colors duration-300 shadow-lg text-base md:text-lg w-full sm:w-auto">
                    <span>Explorar el portafolio</span>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 md:h-5 md:w-5 transform transition-transform duration-300 group-hover:translate-x-1"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
            </div>

            <!-- Indicadores del carrusel (puntos) -->
            <div class="carousel-indicators absolute bottom-8 left-0 right-0 z-10 flex justify-center gap-3">
                <button class="carousel-dot w-3 h-3 rounded-full bg-white bg-opacity-50 transition-all duration-300"
                    data-slide="0"></button>
                <button class="carousel-dot w-3 h-3 rounded-full bg-white bg-opacity-50 transition-all duration-300"
                    data-slide="1"></button>
                <button class="carousel-dot w-3 h-3 rounded-full bg-white bg-opacity-50 transition-all duration-300"
                    data-slide="2"></button>
                <button class="carousel-dot w-3 h-3 rounded-full bg-white bg-opacity-50 transition-all duration-300"
                    data-slide="2"></button>
                <button class="carousel-dot w-3 h-3 rounded-full bg-white bg-opacity-50 transition-all duration-300"
                    data-slide="2"></button>
            </div>

        </section>
```
