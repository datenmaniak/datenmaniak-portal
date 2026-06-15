#  Ajustar la sesion de contacto

Seguiendo la pauta de los ajustes aplicado en cuanto a contenido y diseño.


#··· Contenido actual 

```html

        <!-- CONTACTO SECTION -->
        <section id="contacto" class="min-h-screen flex items-center justify-center bg-bg-primary">
            <div class="section-content  max-w-4xl mx-auto px-4 py-20 w-full">
                <h2 class="text-4xl md:text-5xl font-bold text-center mb-12 text-daten-primary">Contacto</h2>
                <!-- Enlaces -->


                <div class="flex flex-wrap justify-center gap-6 mb-12">
                    <a href="mailto:datenmaniak@gmail.com"
                        class="flex items-center gap-2 bg-bg-secondary hover:bg-daten-primary px-4 py-2 rounded-lg transition-all duration-300 border border-border-primary group"
                        target="_blank">
                        <i class="fas fa-envelope text-daten-primary group-hover:text-white transition-colors"></i>
                        <span class="text-text-primary group-hover:text-white transition-colors">Gmail</span>
                    </a>
                    <a href="https://github.com/datenmaniak"
                        class="flex items-center gap-2 bg-bg-secondary hover:bg-daten-primary px-4 py-2 rounded-lg transition-all duration-300 border border-border-primary group"
                        target="_blank">
                        <i class="fab fa-github text-daten-primary group-hover:text-white transition-colors"></i>
                        <span class="text-text-primary group-hover:text-white transition-colors">GitHub</span>
                    </a>
                    <a href="https://linkedin.com/in/ppwillians"
                        class="flex items-center gap-2 bg-bg-secondary hover:bg-daten-primary px-4 py-2 rounded-lg transition-all duration-300 border border-border-primary group"
                        target="_blank">
                        <i class="fab fa-linkedin text-daten-primary group-hover:text-white transition-colors"></i>
                        <span class="text-text-primary group-hover:text-white transition-colors">LinkedIn</span>
                    </a>
                    <a href="https://t.me/datengeek"
                        class="flex items-center gap-2 bg-bg-secondary hover:bg-daten-primary px-4 py-2 rounded-lg transition-all duration-300 border border-border-primary group"
                        target="_blank">
                        <i class="fab fa-telegram text-daten-primary group-hover:text-white transition-colors"></i>
                        <span class="text-text-primary group-hover:text-white transition-colors">Telegram</span>
                    </a>
                    <a href="https://wa.me/584242486169"
                        class="flex items-center gap-2 bg-bg-secondary hover:bg-daten-primary px-4 py-2 rounded-lg transition-all duration-300 border border-border-primary group"
                        target="_blank">
                        <i class="fab fa-whatsapp text-daten-primary group-hover:text-white transition-colors"></i>
                        <span class="text-text-primary group-hover:text-white transition-colors">WhatsApp</span>
                    </a>
                </div>

                <!-- Formulario Formspree -->
                <form action="https://api.web3forms.com/submit" method="POST" class="max-w-2xl mx-auto space-y-4">
                    <input type="hidden" name="access_key" value="ff9dcfbd-b202-46a5-b443-cb4b07ef1892">
                    <input type="text" name="name" placeholder="Su nombre..." required
                        class="w-full px-4 py-3 rounded-lg bg-bg-secondary border border-border-primary focus:border-daten-primary focus:outline-none text-text-primary">
                    <input type="email" name="email" placeholder="Su email..." required
                        class="w-full px-4 py-3 rounded-lg bg-bg-secondary border border-border-primary focus:border-daten-primary focus:outline-none text-text-primary">
                    <textarea name="message"
                        placeholder="Tu opinión es importante. Escríbeme y dime cómo puedo ayudarte." rows="5" required
                        class="w-full px-4 py-3 rounded-lg bg-bg-secondary border border-border-primary focus:border-daten-primary focus:outline-none text-text-primary"></textarea>
                    <button type="submit"
                        class="w-full bg-daten-primary hover:bg-daten-secondary text-white font-bold py-3 rounded-lg transition-colors duration-300">Enviar
                        mensaje</button>
                    <p id="form-status" class="text-center text-sm text-text-secondary"></p>
                </form>

            </div>
        </section>
```


## Footer

```html

    <footer class="bg-bg-secondary text-center py-6 text-text-secondary text-sm border-t border-border-primary">
        <p>&copy; 2026 datenmaniak - Todos los derechos reservados</p>
    </footer>
```

## Posibles ajustes
- Ampliar si es necesario en footer
- Agregar iconos de redes sociales
- Considerar los mismo iconos de la sesion de contacto.
