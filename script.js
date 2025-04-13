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
  "url(https://scontent-gru2-1.xx.fbcdn.net/v/t39.30808-6/490064337_122150498210538821_8586852380417489196_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Gq6oEog4EYYQ7kNvwEenA5A&_nc_oc=AdlcwIDWCxVBIrOmeRpeeFRW2V06ONt7KxLdGbd_Up1ZUHzQUC1eQDW9sqJGnGD5iWU&_nc_zt=23&_nc_ht=scontent-gru2-1.xx&_nc_gid=A0gBLeyMtbwZXvrkB56_Lg&oh=00_AfH30DXmIRrHw26AWh8yMvfsZFoIwwaobxsynDz5M5s_pQ&oe=680190BF)",
  "url(https://scontent-gru2-2.xx.fbcdn.net/v/t39.30808-6/489602177_122150498084538821_3712141263267922381_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=p1XCGLTPl4AQ7kNvwHdofQ6&_nc_oc=AdnQQ-W2hhJkQdLsKzY-ErzjP1aDJ9q0NtJIwz1PEhaBUdRA20JhsDIgkYPqHCQ0ndM&_nc_zt=23&_nc_ht=scontent-gru2-2.xx&_nc_gid=WHinIv4Owlddh7GbB-zvgw&oh=00_AfGx14soi_0UCU2ocSkbEOgIlawHc7G_XeOu_17yY2YJzw&oe=67FBADA9)",
  "url(https://scontent-gru2-2.xx.fbcdn.net/v/t39.30808-6/489082329_122150497874538821_8485457710103499774_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=to5eTlGL4FgQ7kNvwE0eZP3&_nc_oc=AdlbsVx4neNsdqif-YJnEbNEUGLxwIr1FsQMAg0UVJ3VFPACxPi1QZDpxgr5kxuw5ZY&_nc_zt=23&_nc_ht=scontent-gru2-2.xx&_nc_gid=zh5IOO5xRK6wzoG3PxGfsA&oh=00_AfGn2kTVUxJ2cbODtU4sGLbaAQE1GA4xEbwaWKt7CymYRQ&oe=68018095)",
  "url(https://scontent-gru1-2.xx.fbcdn.net/v/t39.30808-6/489424047_122150497868538821_3921342739923495106_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=lc7-wmGzyrMQ7kNvwFyEBVL&_nc_oc=AdmgIPrnba3PefnlJKnids1QA0GuN-xd1ka4oBg1uCicJe-hof6-jlJUEIUje-PCQBU&_nc_zt=23&_nc_ht=scontent-gru1-2.xx&_nc_gid=h7tGFDpu__c3tpVYbz7PZw&oh=00_AfGoV0z0Osu53UZSnQQhRxwjf-Tta-RTTnYh6KfwaMB08Q&oe=67FBAD79)",
  "url(https://scontent-gru1-2.xx.fbcdn.net/v/t39.30808-6/488921144_122150497880538821_7836690252212400391_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=k1cw7r3w7jUQ7kNvwGLaO0C&_nc_oc=Admq7IUtnBqnwF8IjqLzV1Nr0NWpDSNTj2IIcv9JUJUMxIlmU869NXyjA8RUYpjBmog&_nc_zt=23&_nc_ht=scontent-gru1-2.xx&_nc_gid=vKsK2gk729EuvUdw6HjJBQ&oh=00_AfFVvM0qo_TLsi8D949ON-gqN--0n2PQUqXuxsegCdN-Dw&oe=680179FE)",
  "url(https://scontent-gru1-2.xx.fbcdn.net/v/t39.30808-6/489311470_122150498216538821_5481851227747036939_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=YCOO1hO6zoQQ7kNvwEbJhLR&_nc_oc=AdkTQALOnlLt0NZizLB1UBg-x0EAXcNsvry875fX40PNfejoybPKYYmKf2-1wlKVk7s&_nc_zt=23&_nc_ht=scontent-gru1-2.xx&_nc_gid=vvY4Un0j5bPUqBhAbOgySw&oh=00_AfFGSjbcNG_VzlrM7QoqGJpTGdRKnFvPrznJdKIGIxyDcw&oe=68015F6D)",
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

