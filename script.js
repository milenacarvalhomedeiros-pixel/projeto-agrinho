// --- INTERAÇÕES DO SITE AGROTECH ---

// 1. Controle de envio do formulário de newsletter
document.getElementById('agroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o recarregamento padrão da página
    
    const emailInput = document.getElementById('emailInput');
    const email = emailInput.value.trim();
    
    if (email) {
        // Feedback elegante para o usuário
        alert(`Inscrição realizada com sucesso! O e-mail ${email} foi conectado à nossa rede.`);
        emailInput.value = ''; // Limpa o campo após o envio
    }
});

// 2. Efeito de Scroll Suave (Deslizamento) ao navegar pelo menu
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Evita o salto brusco
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth', // Define a animação suave
                block: 'start'      // Alinha o topo da seção com o topo da tela
            });
        }
    });
});
