// script.js
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li a");

    // Adiciona um evento de clique a cada link de navegação
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            // Impede o comportamento padrão do link (recărrega a página)
            event.preventDefault();

            // Obtém o ID do elemento a ser navegado
            const targetId = event.target.getAttribute("href").substring(1); 
            
            // Rola suavemente para o elemento de destino
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });
});