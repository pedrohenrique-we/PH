// Botão de "Ver Produtos"
document.getElementById("verProdutos").addEventListener("click", () => {
    document.getElementById("produtos").scrollIntoView({ behavior: "smooth" });
});

// Botões de comprar
const botoesComprar = document.querySelectorAll(".comprar");
botoesComprar.forEach(botao => {
    botao.addEventListener("click", (e) => {
        const produto = e.target.parentElement.dataset.nome;
        const preco = e.target.parentElement.dataset.preco;
        alert(`Você comprou: ${produto} por R$${preco},00`);
    });
});

// Formulário de contato
document.getElementById("formContato").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
});
