
function createWindParticles() {
            const container = document.getElementById('windParticles');
            
            setInterval(() => {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.left = '-100px';
                particle.style.animationDelay = Math.random() * 2 + 's';
                particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
                
                container.appendChild(particle);
                
                // Remover partícula después de la animación
                setTimeout(() => {
                    if (particle.parentNode) {
                        particle.parentNode.removeChild(particle);
                    }
                }, 10000);
            }, 300);
        }

        // Efectos de hover para las turbinas
        document.querySelectorAll('.turbine-image').forEach((turbine, index) => {
            turbine.addEventListener('mouseenter', () => {
                turbine.style.transform += ' scale(1.1)';
                turbine.style.borderColor = ['#01b863', '#0add7c', '#21f391'][index];
                turbine.style.boxShadow = '0 25px 70px rgba(33, 243, 145, 0.6)';
            });
            
            turbine.addEventListener('mouseleave', () => {
                turbine.style.transform = turbine.style.transform.replace(' scale(1.1)', '');
                turbine.style.borderColor = 'rgba(33, 243, 145, 0.4)';
                turbine.style.boxShadow = '0 10px 30px rgba(10, 113, 66, 0.3)';
            });
        });

        // Inicializar efectos
        document.addEventListener('DOMContentLoaded', () => {
            createWindParticles();
        });

        // Efecto parallax suave
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.energy-pulse');
            
            parallaxElements.forEach((element, index) => {
                const speed = 0.5 + (index * 0.1);
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });

 const hotspots = document.querySelectorAll('.hotspot');
        const specContents = document.querySelectorAll('.spec-content');
        const defaultMessage = document.getElementById('defaultMessage');
        const tooltip = document.getElementById('tooltip');
        
        const tooltipTexts = {
            'darrieus': 'Rotor Darrieus - Haz clic para especificaciones',
            'generator': 'Generador - Haz clic para especificaciones',
            'savonius': 'Rotor Savonius - Haz clic para especificaciones',
            'tower': 'Torre - Haz clic para especificaciones',
            'base': 'Base - Haz clic para especificaciones'
        };
        
        let currentActive = null;
        
        hotspots.forEach(hotspot => {
            // Eventos de hover para tooltip
            hotspot.addEventListener('mouseenter', (e) => {
                const spec = e.target.dataset.spec;
                tooltip.textContent = tooltipTexts[spec];
                tooltip.style.left = e.target.offsetLeft + 10 + 'px';
                tooltip.style.top = e.target.offsetTop - 10 + 'px';
                tooltip.classList.add('show');
            });
            
            hotspot.addEventListener('mouseleave', () => {
                tooltip.classList.remove('show');
            });
            
            // Evento de click
            hotspot.addEventListener('click', (e) => {
                e.preventDefault();
                const specType = e.target.dataset.spec;
                
                // Remover estado activo de todos los hotspots
                hotspots.forEach(h => h.classList.remove('active'));
                
                // Ocultar todos los contenidos de especificaciones
                specContents.forEach(content => content.classList.remove('active'));
                
                // Ocultar mensaje por defecto
                defaultMessage.classList.add('hidden');
                
                // Activar el hotspot clickeado
                e.target.classList.add('active');
                
                // Mostrar el contenido correspondiente
                const targetContent = document.getElementById(`spec-${specType}`);
                if (targetContent) {
                    setTimeout(() => {
                        targetContent.classList.add('active');
                    }, 200);
                }
                
                currentActive = specType;
                
                // Animación de click
                e.target.style.transform = 'scale(1.3)';
                setTimeout(() => {
                    e.target.style.transform = 'scale(1)';
                }, 200);
            });
        });
        
        // Función para resetear a estado inicial
        function resetToDefault() {
            hotspots.forEach(h => h.classList.remove('active'));
            specContents.forEach(content => content.classList.remove('active'));
            defaultMessage.classList.remove('hidden');
            currentActive = null;
        }
        
        // Opcional: Click fuera para resetear
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.hotspot') && !e.target.closest('.specifications-panel')) {
                resetToDefault();
            }
        });
        
        // Animación inicial de los hotspots
        setTimeout(() => {
            hotspots.forEach((hotspot, index) => {
                setTimeout(() => {
                    hotspot.style.opacity = '1';
                    hotspot.style.transform = 'scale(1)';
                }, index * 200);
            });
        }, 1000);


function createWindParticles() {
            const container = document.getElementById('windParticles');
            const particleCount = 50;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                // Posición aleatoria
                particle.style.top = Math.random() * 100 + '%';
                particle.style.left = '-50px';
                
                // Retraso aleatorio
                particle.style.animationDelay = Math.random() * 3 + 's';
                
                // Duración aleatoria
                particle.style.animationDuration = (2 + Math.random() * 2) + 's';
                
                container.appendChild(particle);
            }
        }

        // Crear más partículas periódicamente
        function continuousWindEffect() {
            setInterval(() => {
                const container = document.getElementById('windParticles');
                if (container.children.length < 50) {
                    const particle = document.createElement('div');
                    particle.className = 'particle';
                    particle.style.top = Math.random() * 100 + '%';
                    particle.style.left = '-50px';
                    particle.style.animationDelay = '0s';
                    particle.style.animationDuration = (2 + Math.random() * 2) + 's';
                    
                    container.appendChild(particle);
                    
                    // Remover partícula después de la animación
                    setTimeout(() => {
                        if (particle.parentNode) {
                            particle.parentNode.removeChild(particle);
                        }
                    }, 4000);
                }
            }, 200);
        }

        // Efecto de hover en las tarjetas de beneficios
        function addHoverEffects() {
            const benefitCards = document.querySelectorAll('.benefit-card');
            
            benefitCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px) scale(1.02)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });
        }

        // Animación de entrada secuencial
        function animateOnScroll() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });

            const animatedElements = document.querySelectorAll('.explanation-card, .benefit-card');
            animatedElements.forEach(el => observer.observe(el));
        }

        // Inicializar efectos
        document.addEventListener('DOMContentLoaded', function() {
            createWindParticles();
            continuousWindEffect();
            addHoverEffects();
            animateOnScroll();
        });

        // Efecto parallax sutil en el movimiento del mouse
        document.addEventListener('mousemove', function(e) {
            const particles = document.querySelectorAll('.particle');
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            particles.forEach((particle, index) => {
                const speed = (index % 3 + 1) * 0.5;
                const x = (mouseX - 0.5) * speed;
                const y = (mouseY - 0.5) * speed;
                
                particle.style.transform += ` translate(${x}px, ${y}px)`;
            });
        });