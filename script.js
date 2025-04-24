function scrollToSection(id) {
  const el = document.getElementById(id);
  el.scrollIntoView({ behavior: "smooth" });
}

const reveals = document.querySelectorAll(".reveal");
function revealOnScroll() {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;
    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    }
  }
}
window.addEventListener("scroll", revealOnScroll);


const banner = document.getElementById("banner");

// Lista com 6 imagens de banners

let index = 0;

// Função para trocar o banner
function trocarBanner() {
  index = (index + 1) % imagens.length;
  banner.style.backgroundImage = imagens[index];
}

// Troca a cada 3 segundos
setInterval(trocarBanner, 3000);document.querySelectorAll('.faq-question').forEach((question) => {
  question.addEventListener('click', () => {
    const item = question.parentElement;
    item.classList.toggle('active');
  });
});





function loadVideo() {
  const section = document.querySelector('.video-section');
  section.innerHTML = `<iframe width="100%" height="315" src="https://www.youtube.com/embed/iUJ9HqLu5_U?autoplay=1&rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
}


const notificacoes = [
  { nome: "Carlos Pavanato", mensagem: "✔ @Carlos Prado, acabou de Assinar um Plano Mensal Agora!" },
  { nome: "Ana12 Ribeiro", mensagem: "📺 @Ana Julia12, Assinou o Pacote Família com 4 telas! Agora!" },
  { nome: "Rafael Silva33", mensagem: "✔ @Rafael, Assinou o combo Esportes + Filmes! há 5 Minutos" },
  { nome: "Juliana Costa53", mensagem: "💳 @Juliana22, Assinou o plano Anual com 20% Desconto! há 1 minuto" },
  { nome: "Marcos Montenegro", mensagem: "✔ @Marcos, Ativou 2 Meses Grátis no Plano Anual Agora!" },
  { nome: "Fernanda Lima034", mensagem: "✔ @Fernanda, acabou de Assinar um Plano Tri-Mestral! Agora!" },
  { nome: "Eduardo Machado", mensagem: "🎁 @Eduardo32, Recebeu 3 Horas de Teste Gratuito! há 30 Segundos" },
  { nome: "Camila Oliveira", mensagem: "📦 @Camila, Assinou o Plano Mensal Premium Agora!!" },
  { nome: "João Souza", mensagem: "🚀 @João, Assinou o plano Premium com +12Mil Canais! Agora!" },
  { nome: "Larissa Rodrigues", mensagem: "🎬 @Larissa, Assinou o Combo Canais TV +Novelas e Séries ilimitadas! Agora!" }
];

function mostrarNotificacaoPersonalizada() {
  const aleatorio = notificacoes[Math.floor(Math.random() * notificacoes.length)];
  const container = document.getElementById("compra-notificacao");
  const texto = document.getElementById("texto-notificacao");

  texto.innerText = aleatorio.mensagem;
  container.classList.add("visivel");

  setTimeout(() => {
    container.classList.remove("visivel");
  }, 5000);
}

// Exibe uma notificação personalizada a cada 15 segundos
setInterval(() => {
  mostrarNotificacaoPersonalizada();
}, 12000);

// Primeira notificação após 2 segundos
setTimeout(() => {
  mostrarNotificacaoPersonalizada();
}, 2000);


