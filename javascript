// =============================================
// TechNews - JavaScript Interativo
// =============================================

console.log("🚀 TechNews carregado com sucesso!");

// Quando a página carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    console.log("📰 Bem-vindo ao TechNews!");

    // --- EFEITO: Animação dos cards ao entrar na tela ---
    const cards = document.querySelectorAll('.card');
    
    // Cria um "observador" que detecta quando o card aparece
    const observer = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada, index) => {
            if (entrada.isIntersecting) {
                // Aplica um atraso para cada card (efeito cascata)
                setTimeout(() => {
                    entrada.target.style.opacity = '1';
                    entrada.target.style.transform = 'translateY(0)';
                }, index * 150);
            }
        });
    }, { threshold: 0.1 });

    // Configura cada card para começar invisível e "deslizar" para cima
    cards.forEach((card) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // --- BOTÃO INTERATIVO: Alerta ao clicar em "Ver notícias" ---
    const btnHero = document.querySelector('.hero .btn');
    if (btnHero) {
        btnHero.addEventListener('click', function(e) {
            e.preventDefault(); // Impede de ir para #noticias (só para demonstrar)
            alert('🔥 Você será redirecionado para as últimas notícias!');
            // Comentário: se quiser, pode descomentar a linha abaixo para rolar suave:
            // document.querySelector('#noticias').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // --- EFEITO: Links de navegação com scroll suave ---
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // --- MENSAGEM NO RODAPÉ (dinâmica) ---
    const footer = document.querySelector('footer p:first-child');
    if (footer) {
        const ano = new Date().getFullYear();
        footer.innerHTML = `© ${ano} TechNews - Feito com 💻 e ☕`;
    }

    console.log("✅ Todos os scripts inicializados!");
});
