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
/* ==========================
   TYPING EFFECT
========================== */

const typingElement = document.querySelector(".typing");

if (typingElement) {
    const words = JSON.parse(
        typingElement.getAttribute("data-words")
    );

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function type() {
        const currentWord = words[wordIndex];

        if (!deleting) {
            typingElement.textContent =
                currentWord.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentWord.length) {
                deleting = true;
                setTimeout(type, 1500);
                return;
            }
        } else {
            typingElement.textContent =
                currentWord.substring(0, charIndex - 1);

            charIndex--;

            if (charIndex === 0) {
                deleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }
        }

        setTimeout(type, deleting ? 50 : 100);
    }

    type();
}

/* ==========================
   SCROLL REVEAL
========================== */

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

document
    .querySelectorAll("section")
    .forEach(section => {
        section.classList.add("hidden");
        observer.observe(section);
    });

/* ==========================
   FORMULÁRIO
========================== */

const form = document.getElementById("formContato");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const button = this.querySelector("button");

        button.textContent = "Mensagem enviada ✓";

        setTimeout(() => {
            button.textContent = "Enviar";
            form.reset();
        }, 3000);
    });
}

/* ==========================
   PARALLAX SUAVE
========================== */

window.addEventListener("scroll", () => {
    const hero = document.querySelector("#hero");

    if (hero) {
        hero.style.backgroundPositionY =
            window.scrollY * 0.4 + "px";
    }
});
