# Agregar una nueva tarjeta al Portafolio


## Especificaciones de la seccion 

```html
   <!-- PORTAFOLIO SECTION -->
        <!-- Se eliminan los estilos en línea de la imagen. La clase "portfolio-custom-bg" se encargará de gestionarla desde el CSS -->
        <section id="portafolio"
            class="portfolio-custom-bg min-h-screen flex items-center justify-center relative bg-[#F8F6FA] dark:bg-[#0A0A0F] py-20 px-4 md:px-8 transition-colors duration-300">

            <!-- Luces ambientales basadas en tu color principal #7700F0 (Atendidas según el modo de pantalla) -->
            <div
                class="absolute top-1/4 left-1/4 w-72 h-72 bg-[#7700F0] opacity-[0.02] dark:opacity-[0.04] rounded-full blur-3xl pointer-events-none">
            </div>
            <div
                class="absolute bottom-1/4 right-1/4 w-92 h-92 bg-[#7700F0] opacity-[0.02] dark:opacity-[0.04] rounded-full blur-3xl pointer-events-none">
            </div>

            <div class="w-full max-w-6xl mx-auto relative z-10">
                <!-- <div class="group flex flex-col justify-between 
            bg-[#FFFFFF] dark:bg-[#1A0B2E] 
            p-6 md:p-8 rounded-xl 
            border border-[rgba(119,0,240,0.12)] dark:border-[rgba(119,0,240,0.3)] 
            shadow-md hover:shadow-[0_20px_40px_rgba(119,0,240,0.12)]
            hover:-translate-y-1 transition-all duration-300"> -->


                <!-- Encabezado de la Sección -->
                <div class="text-center mb-16">
                    <!-- Título Corregido: Por defecto es oscuro (#1A1A2E), en modo oscuro pasa a blanco (#F5F5F5) -->
                    <h2
                        class="text-3xl md:text-5xl font-extrabold tracking-tight text-[#1A1A2E] dark:text-[#F5F5F5] transition-colors duration-300">
                        Portafolio y Proyectos
                    </h2>
                </div>

                <!-- Contenedor de la Cuadrícula (Grid Responsivo) -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-stretch">

                    <!-- TARJETA 1: El HomeLab -->
                    <!-- Tarjetas Corregidas: Por defecto fondo blanco (#FFFFFF), en modo oscuro pasa a tu morado profundo (#1A0B2E) -->
                    <div
                        class="group flex flex-col justify-between bg-[#FFFFFF] dark:bg-[#1A0B2E] p-6 md:p-8 rounded-xl border border-[rgba(119,0,240,0.15)] dark:border-[rgba(119,0,240,0.3)] shadow-md hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(119,0,240,0.15)] transition-all duration-300">
                        <div>
                            <div class="text-[#7700F0] mb-4 text-2xl">
                                <i class="fas fa-server"></i>
                            </div>
                            <!-- Título de tarjeta responsivo al color de fondo -->
                            <h3
                                class="text-xl font-bold text-[#1A1A2E] dark:text-[#F5F5F5] mb-2 transition-colors duration-300">
                                Infraestructura Core & Redes</h3>
                            <p class="text-xs font-semibold text-[#7700F0] uppercase tracking-wider mb-3">Proxmox |
                                pfSense | AlmaLinux</p>
                            <!-- Párrafo responsivo al color de fondo -->
                            <p
                                class="text-[#6B6B7A] dark:text-[#B0B0B0] text-sm leading-relaxed mb-4 transition-colors duration-300">
                                Simulación de un entorno de producción aislado dentro de una red privada. Implementación
                                de un firewall perimetral y un host bastión para la gestión segura via SSH, minimizando
                                la exposición y evitando el uso excesivo de reglas NAT.
                            </p>
                        </div>

                        <div class="mt-6 pt-4 border-t border-[rgba(119,0,240,0.1)] flex flex-col gap-4">
                            <div class="flex justify-center">
                                <!-- Badge responsivo al color de fondo -->
                                <span
                                    class="inline-flex items-center gap-1.5 text-sm px-3 py-1 rounded-md bg-[#F0EDF5] dark:bg-[#0A0A0F] text-[#6B6B7A] dark:text-[#B0B0B0] font-medium border border-[rgba(119,0,240,0.15)]">
                                    <span class="text-lg">☸️</span> Operativo · Buenas Prácticas
                                </span>
                            </div>
                            <a href="#blog-homelab"
                                class="group/btn inline-flex items-center justify-center gap-2 bg-[#7700F0] hover:bg-[#6600D0] text-white font-semibold px-4 py-2.5 rounded-lg transition-colors duration-300 shadow-md text-sm w-full">
                                <span>Leer Bitácora de Arquitectura</span>
                                <i
                                    class="fas fa-arrow-right text-xs transform group-hover/btn:translate-x-1 transition-transform duration-300"></i>
                            </a>
                        </div>
                    </div>

                    <!-- TARJETA 2: El Laboratorio Evolutivo -->
                    <div
                        class="group flex flex-col justify-between bg-[#FFFFFF] dark:bg-[#1A0B2E] p-6 md:p-8 rounded-xl border border-[rgba(119,0,240,0.15)] dark:border-[rgba(119,0,240,0.3)] shadow-md hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(119,0,240,0.15)] transition-all duration-300">
                        <div>
                            <div class="text-[#7700F0] mb-4 text-2xl">
                                <i class="fas fa-code"></i>
                            </div>
                            <h3
                                class="text-xl font-bold text-[#1A1A2E] dark:text-[#F5F5F5] mb-2 transition-colors duration-300">
                                El Laboratorio Evolutivo</h3>
                            <p class="text-xs font-semibold text-[#7700F0] uppercase tracking-wider mb-3">Docker |
                                Kubernetes (k3s) | FluxCD</p>
                            <p
                                class="text-[#6B6B7A] dark:text-[#B0B0B0] text-sm leading-relaxed mb-4 transition-colors duration-300">
                                Caso de estudio práctico diseñado para comprender el flujo de trabajo del desarrollador
                                y el rol de operaciones. Migración progresiva de una aplicación de notas desde un
                                entorno contenedorizado local hacia una arquitectura nativa de la nube totalmente
                                automatizada con GitOps.
                            </p>
                        </div>

                        <div class="mt-6 pt-4 border-t border-[rgba(119,0,240,0.1)] flex flex-col gap-4">
                            <div class="flex justify-center">
                                <span
                                    class="inline-flex items-center gap-1.5 text-sm px-3 py-1 rounded-md bg-[#F0EDF5] dark:bg-[#0A0A0F] text-[#6B6B7A] dark:text-[#B0B0B0] font-medium border border-[rgba(119,0,240,0.15)]">
                                    <span class="text-lg">🚀</span> Migrado · GitOps en Progreso
                                </span>
                            </div>
                            <a href="#blog-laboratorio"
                                class="group/btn inline-flex items-center justify-center gap-2 bg-[#7700F0] hover:bg-[#6600D0] text-white font-semibold px-4 py-2.5 rounded-lg transition-colors duration-300 shadow-md text-sm w-full">
                                <span>Ver Caso de Estudio</span>
                                <i
                                    class="fas fa-arrow-right text-xs transform group-hover/btn:translate-x-1 transition-transform duration-300"></i>
                            </a>
                        </div>
                    </div>

                    <!-- TARJETA 3: Persistencia de Datos -->
                    <div
                        class="group flex flex-col justify-between bg-[#FFFFFF] dark:bg-[#1A0B2E] p-6 md:p-8 rounded-xl border border-[rgba(119,0,240,0.15)] dark:border-[rgba(119,0,240,0.3)] shadow-md hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(119,0,240,0.15)] transition-all duration-300">
                        <div>
                            <div class="text-[#7700F0] mb-4 text-2xl">
                                <i class="fas fa-database"></i>
                            </div>
                            <h3
                                class="text-xl font-bold text-[#1A1A2E] dark:text-[#F5F5F5] mb-2 transition-colors duration-300">
                                Persistencia de Datos en K3s</h3>
                            <p class="text-xs font-semibold text-[#7700F0] uppercase tracking-wider mb-3">Kubernetes |
                                PostgreSQL | MariaDB</p>
                            <p
                                class="text-[#6B6B7A] dark:text-[#B0B0B0] text-sm leading-relaxed mb-4 transition-colors duration-300">
                                Configuración y orquestación de sistemas de almacenamiento persistente dentro del
                                clúster Kubernetes. Simulación de entornos de alta fidelidad en la nube mediante la
                                gestión de volúmenes para motores de bases de datos relacionales sin pérdida de estado.
                            </p>
                        </div>

                        <div class="mt-6 pt-4 border-t border-[rgba(119,0,240,0.1)] flex flex-col gap-4">
                            <div class="flex justify-center">
                                <span
                                    class="inline-flex items-center gap-1.5 text-sm px-3 py-1 rounded-md bg-[#F0EDF5] dark:bg-[#0A0A0F] text-[#6B6B7A] dark:text-[#B0B0B0] font-medium border border-[rgba(119,0,240,0.15)]">
                                    <span class="text-lg">🗄️</span> Implementado · Simulación Cloud
                                </span>
                            </div>
                            <a href="#blog-persistencia"
                                class="group/btn inline-flex items-center justify-center gap-2 bg-[#7700F0] hover:bg-[#6600D0] text-white font-semibold px-4 py-2.5 rounded-lg transition-colors duration-300 shadow-md text-sm w-full">
                                <span>Ver Configuración de Almacenamiento</span>
                                <i
                                    class="fas fa-arrow-right text-xs transform group-hover/btn:translate-x-1 transition-transform duration-300"></i>
                            </a>
                        </div>
                    </div>

                    <!-- TARJETA 4: Automatización Progresiva -->
                    <div
                        class="group flex flex-col justify-between bg-[#FFFFFF] dark:bg-[#1A0B2E] p-6 md:p-8 rounded-xl border border-[rgba(119,0,240,0.15)] dark:border-[rgba(119,0,240,0.3)] shadow-md hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(119,0,240,0.15)] transition-all duration-300">
                        <div>
                            <div class="text-[#7700F0] mb-4 text-2xl">
                                <i class="fas fa-tools"></i>
                            </div>
                            <h3
                                class="text-xl font-bold text-[#1A1A2E] dark:text-[#F5F5F5] mb-2 transition-colors duration-300">
                                Infraestructura como Código</h3>
                            <p class="text-xs font-semibold text-[#7700F0] uppercase tracking-wider mb-3">Ansible |
                                Linux | Git</p>
                            <p
                                class="text-[#6B6B7A] dark:text-[#B0B0B0] text-sm leading-relaxed mb-4 transition-colors duration-300">
                                Adopción gradual de metodologías de automatización para sustituir los despliegues
                                manuales de la vieja escuela. Desarrollo de playbooks de Ansible para el
                                aprovisionamiento, configuración y mantenimiento consistente de nodos y máquinas
                                virtuales.
                            </p>
                        </div>

                        <div class="mt-6 pt-4 border-t border-[rgba(119,0,240,0.1)] flex flex-col gap-4">
                            <div class="flex justify-center">
                                <span
                                    class="inline-flex items-center gap-1.5 text-sm px-3 py-1 rounded-md bg-[#F0EDF5] dark:bg-[#0A0A0F] text-[#6B6B7A] dark:text-[#B0B0B0] font-medium border border-[rgba(119,0,240,0.15)]">
                                    <span class="text-lg">⚙️</span> En Desarrollo · Aprendizaje Activo
                                </span>
                            </div>
                            <a href="#blog-automatizacion"
                                class="group/btn inline-flex items-center justify-center gap-2 bg-[#7700F0] hover:bg-[#6600D0] text-white font-semibold px-4 py-2.5 rounded-lg transition-colors duration-300 shadow-md text-sm w-full">
                                <span>Ver Repositorio de Automatización</span>
                                <i
                                    class="fas fa-arrow-right text-xs transform group-hover/btn:translate-x-1 transition-transform duration-300"></i>
                            </a>
                        </div>
                    </div>

                    <!-- TARJETA 5: Ciclo de Vida Web -->
                    <div
                        class="group flex flex-col justify-between bg-[#FFFFFF] dark:bg-[#1A0B2E] p-6 md:p-8 rounded-xl border border-[rgba(119,0,240,0.15)] dark:border-[rgba(119,0,240,0.3)] shadow-md hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(119,0,240,0.15)] transition-all duration-300">
                        <div>
                            <div class="text-[#7700F0] mb-4 text-2xl">
                                <i class="fas fa-layer-group"></i>
                            </div>
                            <h3
                                class="text-xl font-bold text-[#1A1A2E] dark:text-[#F5F5F5] mb-2 transition-colors duration-300">
                                Análisis de Flujo Completo</h3>
                            <p class="text-xs font-semibold text-[#7700F0] uppercase tracking-wider mb-3">PHP Vanilla |
                                Laravel | HTML5/CSS3/JS</p>
                            <p
                                class="text-[#6B6B7A] dark:text-[#B0B0B0] text-sm leading-relaxed mb-4 transition-colors duration-300">
                                Desarrollo de aplicaciones experimentales y monolitos con el objetivo estratégico de
                                entender las dependencias, requerimientos de compilación y empaquetado de software.
                                Formación técnica orientada a eliminar los silos entre Dev y Ops.
                            </p>
                        </div>

                        <div class="mt-6 pt-4 border-t border-[rgba(119,0,240,0.1)] flex flex-col gap-4">
                            <div class="flex justify-center">
                                <span
                                    class="inline-flex items-center gap-1.5 text-sm px-3 py-1 rounded-md bg-[#F0EDF5] dark:bg-[#0A0A0F] text-[#6B6B7A] dark:text-[#B0B0B0] font-medium border border-[rgba(119,0,240,0.15)]">
                                    <span class="text-lg">📚</span> Fundamentos · Ciclo de Software
                                </span>
                            </div>
                            <a href="#blog-analisis"
                                class="group/btn inline-flex items-center justify-center gap-2 bg-[#7700F0] hover:bg-[#6600D0] text-white font-semibold px-4 py-2.5 rounded-lg transition-colors duration-300 shadow-md text-sm w-full">
                                <span>Ver Análisis de Dependencias</span>
                                <i
                                    class="fas fa-arrow-right text-xs transform group-hover/btn:translate-x-1 transition-transform duration-300"></i>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
```

## Acciones

Agregar a esta seccion, una nueva tarjeta extrayendo informacion relevante de la documentacion acerca de la `Migracion de Proxmox + Kubernetes`.


## Migracion de  Proxmox + K3s.

Este documento describe la arquitectura y los componentes de un entorno de laboratorio casero (*HomeLab de Kubernetes*) diseñado para la alta disponibilidad, escalabilidad y aprendizaje de tecnologías modernas de infraestructura *Cloud Native*.



## 🚀 Resumen Ejecutivo (Para CTOs y Reclutadores)

Este entorno es un **laboratorio de infraestructura de nivel profesional** optimizado para hardware compacto. Demuestra la capacidad de diseñar, desplegar y optimizar sistemas complejos mediante virtualización, orquestación de contenedores y almacenamiento compartido.

- **Arquitectura:** Clúster de Kubernetes (K3s) sobre hipervisor Proxmox.
- **Enfoque:** Alta disponibilidad, separación de roles (Master/Workers) y almacenamiento centralizado (NFS).
- **Gestión:** Automatización de despliegue mediante *Cloud-Init*, optimización de recursos (vCPU/RAM) y gestión de logs/métrica.
- **Resultados:** Entorno resiliente donde las aplicaciones son portables y el almacenamiento es independiente de la computación.



## 🛠️ Detalle Técnico (Para Ingenieros y Desarrolladores)

### Hardware y Base de Virtualización

- **Host:** Lenovo ThinkCentre M700 Tiny (Intel Core i5-6500T @ 2.50 GHz, 4 núcleos, 16 GB RAM).
- **Almacenamiento:** NVMe PCIe 3.0 x4 (OS/VMs) + SSD SATA 250 GB (ISO/Cloud Images/Backups).
- **Hipervisor:** Proxmox VE.



### Topología del Clúster

La arquitectura se segmenta en máquinas virtuales (VMs) para garantizar aislamiento y estabilidad:

- **Control Plane:** 1 VM (Master K3s).
- **Workers:** 2 VMs (Delegación de carga de trabajo).
- **Red y Acceso:** 1 VM (pfSense - Firewall/NAT), 1 LXC (Bastion Host - Acceso SSH).



### Componentes Clave

1. **Orquestación:** **K3s** (distribución ligera de Kubernetes) para gestionar ciclos de vida de aplicaciones.
2. **Almacenamiento:** Implementación de **NFS** para persistencia de datos (base de datos PostgreSQL), permitiendo la portabilidad de pods entre nodos worker.
3. **Gestión:** Adopción de **Kustomize** para la organización de manifiestos y mejores prácticas de escalabilidad.



## 🔄 Bitácora de Migración y Modernización (Hito v2.0)

Este entorno ha sido sometido a un proceso de reingeniería profunda con el objetivo de elevar la eficiencia operativa y asegurar la escalabilidad:

1. **Renovación de Infraestructura:** Se ejecutó la migración completa de servicios críticos desde la arquitectura heredada hacia el nuevo hardware (ThinkCentre M700, i5-6500T).
2. **Actualización de Base Hipervisora:** Despliegue de una nueva versión de Proxmox VE, optimizando la asignación dinámica de recursos (CPU/RAM) y garantizando estabilidad sobre un sistema base Debian Trixie.
3. **Optimización y Reasignación de Recursos:** Se consolidó la lógica de carga de trabajo mediante la delegación de procesos de base de datos a nodos *Worker* dedicados, mejorando el rendimiento y la densidad de virtualización.
4. **Estrategia de Migración:** El proceso se realizó con un enfoque de "cero pérdida de datos", reubicando volúmenes hacia almacenamiento centralizado (NFS) sin impacto en la integridad operativa de las aplicaciones (ej:`dk-notes`).



## 💡 Impacto en Aplicaciones

La migración de una base de datos local a un volumen compartido (NFS) y la delegación de nodos ha resultado en:

- **Resiliencia:** Mejora en la portabilidad de los datos; si un nodo *worker* falla, los servicios pueden ser migrados y retomar datos sin intervención manual.
- **Continuidad:** Mantenimiento de la capa de abstracción de red (Kubernetes `Services`), asegurando que las aplicaciones no requieran cambios en sus cadenas de conexión.



## 📖 Para usuarios del entorno (Normies / Operadores)

- **¿Por qué es esto importante?** Esta configuración imita la forma en que funcionan las grandes plataformas tecnológicas en la nube, pero a escala pequeña.
- **Estado actual:** Sistema estable. Los servicios están diseñados para recuperarse automáticamente si se producen fallos temporales.
- **Mantenimiento:** El sistema cuenta con monitoreo activo. Si una aplicación (como `dk-notes`) parece no iniciar, el sistema informa mediante estados de `Init` o `CrashLoopBackOff` para una rápida identificación de problemas de red o configuración.

---

**Autor:** *Willians Patiño* bajo la firma **datenmaniak**

**Fuente:** Bitácora de migración de Proxmox y Kubernetes, Impacto de la migración sobre las aplicaciones y Entonación ampliada del HomeLab. 

