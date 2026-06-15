# datenmaniak.com — Portfolio Profesional

Este repositorio contiene el código fuente de mi portafolio profesional y sitio web corporativo, diseñado bajo la marca **datenmaniak**. El objetivo principal de este portal es proyectar mi identidad técnica de manera transparente, honesta y de alto impacto, sirviendo como carta de presentación ante clientes y procesos de selección.

El diseño se enfoca en la simplicidad, la simetría  y la optimización de rendimiento para todo tipo de dispositivos móviles y de escritorio.

---

## 🚀 Filosofía del Perfil Profesional

El contenido y la propuesta de valor del sitio web están alineados con mi realidad técnica actual:
* **Bases Sólidas:** Resaltar más de una década de experiencia real en administración de sistemas, soporte de infraestructura y entornos Linux tradicionales.
* **Evolución Activa:** Transparentar mi transición hacia el ecosistema Cloud Native y la cultura DevOps, utilizando la experimentación rigurosa en mi **HomeLab** como el motor principal de aprendizaje de ingeniería práctica.
* **Transparencia Ética:** Eliminar términos pretenciosos para conectar de forma genuina con reclutadores y equipos técnicos mediante proyectos reales y demostrables.

---

## 🛠️ Características Técnicas del Frontend

El portal ha sido refinado quirúrgicamente resolviendo problemas comunes de UI/UX en dispositivos móviles y de escritorio:

* **Simetría y Balance Visual:** Configuración de cabecera fija con espejos exactos de coordenadas (`top-5 left-5` para el menú hamburguesa y `top-5 right-5` para el botón de cambio de tema).
* **Control de Capas (Z-Index Blindado):** Ambos botones de control flotan en la capa `z-[100]`, quedando totalmente protegidos de desbordamientos del carrusel o de las dimensiones del viewport.
* **Compatibilidad Estricta con Android (Chromium):** 
  * Fijación de imágenes de fondo mediante `background-position: center center` para evitar el desplazamiento lateral e invisibilidad en navegadores móviles.
  * Inclusión de políticas rigurosas de `overflow-x-hidden` en el contenedor `body` para destruir scrolls horizontales fantasmas.
* **Legibilidad Adaptativa (Light / Dark Mode):**
  * Ajuste de pesos tipográficos (`font-medium`) en bloques descriptivos para evitar textos delgados e ilegibles.
  * Colores dinámicos en badges y componentes (`text-[#7700F0]` en modo claro para contraste de marca y `dark:text-[#CFA1FF]` en modo oscuro).

---

## 📊 Arquitectura del Hero Section (Estructura de Contenido)

El punto de entrada del sitio web se compone de cuatro bloques estratégicos:

1. **Badge de Estado / Disponibilidad:** Un indicador estilo terminal (`Linux Infra & DevOps Engineer`) acompañado de un LED parpadeante en verde activo (`#46F000`) que simula un servicio online listo para producción.
2. **Título Principal:** Enfoque directo hacia el propósito de la infraestructura actual: *Resiliente, Escalable y Segura*.
3. **Subtítulo Estratégico:** Frase calibrada en un máximo de dos líneas para optimizar el *above-the-fold*:
   > *"Sólida experiencia en administración de infraestructura Linux, evolucionando hacia metodologías DevOps y Cloud Native mediante ingeniería práctica en mi HomeLab."*
4. **Call to Action (CTA):** Botón de conversión directa hacia la sección de proyectos y experiencia técnica.

---

## 🛠️ Tecnologías Utilizadas

* **HTML5 & CSS3** (Estructura semántica rígida)
* **Tailwind CSS** (Estilos y diseño responsivo adaptativo)
* **JavaScript (Vanilla)** (Lógica del carrusel de fondo y conmutador de tema local)
* **FontAwesome** (Iconografía técnica)

---

## 📄 Licencia

Este proyecto es de código abierto y uso personal bajo la marca **datenmaniak**.