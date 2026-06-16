document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuToggleBtn = document.getElementById('mobile-menu-toggle');
    const mobileMenuCloseBtn = document.getElementById('mobile-menu-close');
    const mobileMenuDrawer = document.getElementById('mobile-menu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-nav-links a');

    function toggleMobileMenu() {
        if (!mobileMenuDrawer) return;
        
        mobileMenuDrawer.classList.toggle('active');
        if (mobileMenuDrawer.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    if (mobileMenuToggleBtn) mobileMenuToggleBtn.addEventListener('click', toggleMobileMenu);
    if (mobileMenuCloseBtn) mobileMenuCloseBtn.addEventListener('click', toggleMobileMenu);
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', toggleMobileMenu);
    });

    // Audit Form Reveal
    const formTriggerBtn = document.getElementById('form-trigger-btn');
    const formTriggerContainer = document.getElementById('form-trigger');
    const auditForm = document.getElementById('audit-form');

    if (formTriggerBtn) {
        formTriggerBtn.addEventListener('click', () => {
            if (!formTriggerContainer || !auditForm) return;
            
            formTriggerContainer.style.opacity = '0';
            formTriggerContainer.style.pointerEvents = 'none';
            formTriggerContainer.style.transform = 'translateY(-1rem)';
            
            setTimeout(() => {
                formTriggerContainer.classList.add('hidden');
                auditForm.classList.remove('hidden');
                
                // Allow browser to register removal of display: none before applying transition
                setTimeout(() => {
                    auditForm.classList.add('active');
                    // using our reveal logic, or we can just remove a class.
                    // Wait, audit form had opacity 0 and translate-y-8 in Tailwind. Let's do it in JS directly or via classes.
                    auditForm.style.opacity = '1';
                    auditForm.style.transform = 'translateY(0)';
                }, 50);
            }, 300);
        });
    }

    // Form Contact Switcher
    const btnWa = document.getElementById('btn-whatsapp');
    const btnEm = document.getElementById('btn-email');
    const waField = document.getElementById('whatsapp-field');
    const emField = document.getElementById('email-field');

    window.switchContact = function(type) {
        if (!btnWa || !btnEm || !waField || !emField) return;

        if (type === 'whatsapp') {
            btnWa.classList.add('active');
            btnWa.classList.remove('inactive');
            btnEm.classList.add('inactive');
            btnEm.classList.remove('active');
            
            waField.classList.remove('hidden');
            emField.classList.add('hidden');
            
            const submitBtn = document.getElementById('submit-btn');
            if(submitBtn) submitBtn.innerText = 'Ir a WhatsApp';
        } else {
            btnEm.classList.add('active');
            btnEm.classList.remove('inactive');
            btnWa.classList.add('inactive');
            btnWa.classList.remove('active');
            
            emField.classList.remove('hidden');
            waField.classList.add('hidden');
            
            const submitBtn = document.getElementById('submit-btn');
            if(submitBtn) submitBtn.innerText = 'Solicitar mi Auditoría Ahora';
        }
    };

    if (btnWa) btnWa.addEventListener('click', () => window.switchContact('whatsapp'));
    if (btnEm) btnEm.addEventListener('click', () => window.switchContact('email'));

    // Smooth Scroll Reveal Observer
    const observerOptions = {
        threshold: 0.05,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section, main').forEach(section => {
        section.classList.add('reveal');
        observer.observe(section);
    });

    // Form Submission Handler (Ready for Formspree)
    const form = document.getElementById('audit-form');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault(); // Prevent page reload
            
            const btnWa = document.getElementById('btn-whatsapp');
            if (btnWa && btnWa.classList.contains('active')) {
                const text = encodeURIComponent("hola he visto la web de innova 360 y deseo recibir mi auditoria gratis");
                window.location.href = `https://api.whatsapp.com/send?phone=34664289699&text=${text}`;
                return;
            }

            const submitBtn = document.getElementById('submit-btn');
            const formInputs = document.getElementById('form-inputs');
            const formSuccess = document.getElementById('form-success');
            
            // Change button state
            const originalText = submitBtn.innerText;
            submitBtn.innerText = 'Enviando...';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';

            // IMPORTANT: Replace the URL below with your actual Formspree endpoint URL
            const formspreeEndpoint = 'https://formspree.io/f/xjgdzgrk'; 
            
            const formData = new FormData(form);

            try {
                // If you haven't set up formspree yet, this will fail or we can simulate it:
                if(formspreeEndpoint.includes('REEMPLAZA_ESTO')) {
                    // Simulate network request for demo purposes until you paste the real ID
                    await new Promise(r => setTimeout(r, 1000));
                } else {
                    const response = await fetch(formspreeEndpoint, {
                        method: 'POST',
                        body: formData,
                        headers: {
                            'Accept': 'application/json'
                        }
                    });
                    if(!response.ok) throw new Error('Error en el envío');
                }
                
                // Show success state
                formInputs.classList.add('hidden');
                formSuccess.classList.remove('hidden');
                
            } catch (error) {
                alert('Hubo un problema al enviar el formulario. Por favor, intenta de nuevo.');
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
            }
        });
    }
});
