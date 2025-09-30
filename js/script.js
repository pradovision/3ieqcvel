document.addEventListener('DOMContentLoaded', function() {
    // ----------------------------------------------------
    // 1. FUNCIONALIDADE DO MENU HAMBÚRGUER
    // ----------------------------------------------------
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.getElementById('main-nav');
    const navLinks = document.querySelectorAll('#main-nav a');

    // Abre/Fecha o menu ao clicar no ícone
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            // Alterna a classe 'active' no menu (o CSS esconde/mostra)
            mainNav.classList.toggle('active'); 
            
            // Opcional: Altera o ícone do hambúrguer (☰ para X)
            const icon = menuToggle.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times'); // Ícone de fechar (X)
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars'); // Ícone de hambúrguer (☰)
            }
        });
    }

    // Fecha o menu ao clicar em qualquer link (útil no mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                
                // Retorna o ícone para o hambúrguer
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    });


    // ----------------------------------------------------
    // 2. ROLAGEM SUAVE (SMOOTH SCROLLING)
    // ----------------------------------------------------
    
    // Este código garante que a rolagem seja suave ao clicar nos links de âncora.
    // Ele usa o método nativo 'scrollIntoView'.

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Impede o salto instantâneo padrão

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // A biblioteca 'scroll-behavior: smooth;' no CSS já faz o trabalho,
                // mas este JS pode ser útil para um controle mais fino e para
                // ajustar a posição final devido ao header fixo.

                const headerHeight = document.getElementById('header').offsetHeight;
                
                // Calcula a posição de rolagem:
                // Posição do topo do elemento - Altura do cabeçalho fixo
                const offsetPosition = targetElement.offsetTop - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});