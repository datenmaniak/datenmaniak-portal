# Update the styles designs and content from portfolio

Tomando en consideracion los ajustes recientes en la sesion del Hero y de "Acerca de mi", se quiere **actualizar  la sesion de Portafolio y Proyectos**, y ajustar el contenido para mantener la misma linea, suguiendo el objetivo principal

## Acerca de mi (Bio/Summary) actualizado: **14.06.26**





## Objetivo:

- Actualizar las tarjetas actuales con un contenido adaptado a lo discutido.
- Crear nuevas tarjetas para incluir aquellos proyectos si es necesario.
- Evaluar si se olvida incluir algo potecialmente interesante como portafolio.




## modelo HTML/CSS actual de la sesion Portafolio 

```html
 <!-- PORTAFOLIO SECTION -->
        <section id="portafolio" class="spacing-h min-h-screen flex items-center justify-center relative parallax"
            data-speed="0.4"
            style="background-image: url('images/portafolio-bg.jpg'); background-size: cover; background-position: center; background-attachment: fixed;">

            <!-- <div class="absolute inset-0 bg-bg-primary opacity-75 z-0"></div> -->
            <div class="overlay-visible z-0"></div>

            <div class="section-content  relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
                <!-- original  -->
                <!-- <h2 class="text-4xl md:text-5xl font-bold text-center mb-12 text-daten-primary">Portafolio y Proyectos -->
                <!-- <h2 class="text-4xl md:text-5xl font-extrabold text-center mb-12 text-slate-800 dark:text-slate-100 tracking-tight">
                    Portafolio y <span class="text-daten-primary">Proyectos</span>
                </h2> -->
                <!-- <h2
                    class="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-daten-primary dark:from-white dark:to-daten-primary tracking-tight">
                    Portafolio y Proyectos
                </h2> -->
                <!-- <div class="text-center mb-12">
                    <span
                        class="text-sm font-semibold uppercase tracking-widest text-daten-primary opacity-90 dark:opacity-100 block mb-2">
                        Mi Trabajo
                    </span>
                    <h2 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
                        Portafolio y Proyectos
                    </h2>
                </div> -->

                <!-- Contenedor del Encabezado del Portafolio -->
                <div class="max-w-4xl mx-auto mb-12 px-4 text-center">

                    <div class="max-w-4xl mx-auto mb-12 px-4 text-center">

                        <div class="inline-block px-8 py-5 md:px-12 md:py-6 rounded-lg transition-all duration-300
                            /* Modo Claro: Sin bordes y fondo blanco mínimo */
                            bg-white/25 backdrop-blur-[2px] border-none shadow-none
                            /* Modo Oscuro: Mantiene el contraste sutil de cristal */
                            dark:bg-slate-900/40 dark:border dark:border-slate-800/50">

                            <h2
                                class="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white roboto">
                                Portafolio y <span
                                    class="text-4xl md:text-5xl font-bold text-center mb-12 text-daten-primary">Proyectos</span>
                                <!-- class="bg-clip-text text-transparent bg-gradient-to-r from-daten-primary to-daten-accent dark:from-daten-accent dark:to-purple-300">Proyectos</span> -->
                            </h2>

                        </div>

                    </div>


                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <!-- Proyecto 1 -->
                        <div
                            class="bg-bg-secondary bg-opacity-90 p-6 rounded-lg shadow-lg border border-border-primary">
                            <i class="fas fa-store text-3xl text-daten-primary mb-3"></i>
                            <h3 class="text-xl font-semibold mb-2">Catálogo/Tienda de Electrónicos</h3>
                            <p class="text-sm text-daten-primary mb-2">HTML5, CSS3, JavaScript, PHP, MariaDB</p>
                            <p class="text-text-secondary text-sm mb-2">Laboratorio de aprendizaje full-stack para
                                comprender herramientas esenciales de frontend y backend.</p>
                            <p class="text-xs text-daten-accent">📚 Introducción al Desarrollo Web</p>
                        </div>
                        <!-- Proyecto 2 -->
                        <div
                            class="bg-bg-secondary bg-opacity-90 p-6 rounded-lg shadow-lg border border-border-primary">
                            <i class="fas fa-edit text-3xl text-daten-primary mb-3"></i>
                            <h3 class="text-xl font-semibold mb-2">Notas con Markdown</h3>
                            <p class="text-sm text-daten-primary mb-2">Docker, Laravel, PostgresSQL, Kubernetes</p>
                            <p class="text-text-secondary text-sm mb-2">App funcional con documentación técnica. Próxima
                                fase: CI/CD</p>
                            <p class="text-xs text-daten-accent">✅ Funcional · CI/CD en progreso
                            </p>
                            <p class="text-sm text-daten-accent font-semibold mt-2 ">(App contenedorizada y
                                migrada a
                                Kubernetes)</p>

                        </div>
                        <!-- Proyecto 3 -->
                        <div
                            class="bg-bg-secondary bg-opacity-90 p-6 rounded-lg shadow-lg border border-border-primary">
                            <i class="fas fa-cloud text-3xl text-daten-primary mb-3"></i>
                            <h3 class="text-xl font-semibold mb-2">Home Lab Cloud-Native</h3>
                            <p class="text-sm text-daten-primary mb-2">Proxmox, Kubernetes (k3s), pfSense, Docker</p>
                            <p class="text-text-secondary text-sm mb-2">Infraestructura simulando entorno Cloud-Native
                                con
                                cluster K8s y firewall.</p>
                            <p class="text-xs text-daten-accent">☸ Proyecto Operativo · Documentado</p>
                            <p class="text-sm text-daten-accent font-semibold mt-2">(Base de operaciones y formación)
                            </p>
                        </div>
                    </div>
                </div>
        </section>
    ```

    ## Paleta de colores del portal

    ```css
    /* Modo Dark (por defecto) */
:root,
.dark {
    --bg-primary: #0A0A0F;
    --bg-secondary: #1A0B2E;
    --text-primary: #F5F5F5;
    --text-secondary: #B0B0B0;
    --border-primary: rgba(119, 0, 240, 0.3);
    --shadow-color: rgba(119, 0, 240, 0.3);
    --card-bg: #1A0B2E;
    --card-bg-opaque: rgba(26, 11, 46, 0.95);
}

/* Modo Light */
.light {
    --bg-primary: #F8F6FA;
    --bg-secondary: #F0EDF5;
    --text-primary: #1A1A2E;
    --text-secondary: #6B6B7A;
    --border-primary: rgba(119, 0, 240, 0.2);
    --shadow-color: rgba(119, 0, 240, 0.1);
    --card-bg: #FFFFFF;
    --card-bg-opaque: rgba(255, 255, 255, 0.95);

    /* NUEVAS VARIABLES PARA OVERLAY DE IMÁGENES EN MODO LIGHT */
    /* Sugerido (menos blanco) -> imagen se ve mas, blanco se atenua */
    /* --overlay-color: #D0C0E8; */
    /* --overlay-color: #57525e; */
    --overlay-color: #464050;
    --overlay-opacity: 0.80;
}
    ```