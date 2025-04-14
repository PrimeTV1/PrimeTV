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
const imagens = [
  "url('img/introbanner.png')",
  "url('img/banner2.png')",
  "url('img/banner3.png')",
  "url('img/banner4.png')",
  "url('img/banner5.png')",
  "url('img/bannerfinal.jpg')",
];

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


function assinar(plano) {
  alert(`Você escolheu o Plano ${plano}. Um atendente entrará em contato.`);
  // Aqui você pode integrar com um sistema de pagamento ou WhatsApp
  // window.location.href = "https://wa.me/5511950407835 ";
}

