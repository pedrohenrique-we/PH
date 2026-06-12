// ================= TYPING EFFECT =================
const typingElement = document.querySelector(".typing");
const words = JSON.parse(typingElement.getAttribute("data-words"));
let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {
    const currentWord = words[wordIndex];

    if (!deleting) {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentWord.length) {
            deleting = true;
            setTimeout(type, 1500);
            return;
        }
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }
    setTimeout(type, deleting ? 50 : 100);
}
type();

// ================= FADE-IN CARDS =================
const cards = document.querySelectorAll(".card");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));

// ================= FORM SUBMIT =================
const form = document.getElementById("formContato");
form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
    form.reset();
});

// ================= WHATSAPP BUTTON =================
// já configurado no HTML com link direto, mas pode adicionar mensagem dinamicamente se quiser
