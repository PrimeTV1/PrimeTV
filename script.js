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
  "url(https://scontent-gru2-1.xx.fbcdn.net/v/t39.30808-6/490064337_122150498210538821_8586852380417489196_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=cxS0CWNMUTUQ7kNvwH3A4x6&_nc_oc=Adnlo-j_vcEJ-NtqW1rKlBxiAfdT91u7Ny-ktPXYpE8Dk80iA5iK3elI-8Db1SXwIaw&_nc_zt=23&_nc_ht=scontent-gru2-1.xx&_nc_gid=fqzC-wDm08_uJC3lsATvjA&oh=00_AfF7-P3qCvGnxYgh2Oi1KoD9sBMszDOYGip7TJoKQKCs0w&oe=67FBA1FF)",
  "url(https://scontent-gru2-2.xx.fbcdn.net/v/t39.30808-6/489602177_122150498084538821_3712141263267922381_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=p1XCGLTPl4AQ7kNvwHdofQ6&_nc_oc=AdnQQ-W2hhJkQdLsKzY-ErzjP1aDJ9q0NtJIwz1PEhaBUdRA20JhsDIgkYPqHCQ0ndM&_nc_zt=23&_nc_ht=scontent-gru2-2.xx&_nc_gid=WHinIv4Owlddh7GbB-zvgw&oh=00_AfGx14soi_0UCU2ocSkbEOgIlawHc7G_XeOu_17yY2YJzw&oe=67FBADA9)",
  "url(https://scontent-gru2-2.xx.fbcdn.net/v/t39.30808-6/489082329_122150497874538821_8485457710103499774_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1jtAqh5J8LYQ7kNvwEQRQB6&_nc_oc=Adk3T9BL6IpYxUx5dwS6ysfIuyrGIaCuvyojaEXnrW4BbRWRHBR0bjez8GnJD56CtsM&_nc_zt=23&_nc_ht=scontent-gru2-2.xx&_nc_gid=97bvQH70SNS0XK6JLAgXfA&oh=00_AfEN0Z1nOEOgvcg1muakwKq70eqaKrcQjqtm2-v2wqVrJQ&oe=67FB91D5)",
  "url(https://scontent-gru1-2.xx.fbcdn.net/v/t39.30808-6/489424047_122150497868538821_3921342739923495106_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=lc7-wmGzyrMQ7kNvwFyEBVL&_nc_oc=AdmgIPrnba3PefnlJKnids1QA0GuN-xd1ka4oBg1uCicJe-hof6-jlJUEIUje-PCQBU&_nc_zt=23&_nc_ht=scontent-gru1-2.xx&_nc_gid=h7tGFDpu__c3tpVYbz7PZw&oh=00_AfGoV0z0Osu53UZSnQQhRxwjf-Tta-RTTnYh6KfwaMB08Q&oe=67FBAD79)",
  "url(https://scontent-gru1-2.xx.fbcdn.net/v/t39.30808-6/488921144_122150497880538821_7836690252212400391_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=lfqy2YbkZvUQ7kNvwETUsIR&_nc_oc=AdmKNs6AL39dfMVYrU4bpcseUOq_Drm6JJr0qnvY5lUZcQzcpr8gLMNGAzQ7eocBYYI&_nc_zt=23&_nc_ht=scontent-gru1-2.xx&_nc_gid=dsSAqUJSBmhrbYooyp8NQQ&oh=00_AfHePJJv5PAIasLCkh0GLJYRKwgoe5oMgL1EwJ0ogouM3g&oe=67FB8B3E)",
  "url(https://scontent-gru1-2.xx.fbcdn.net/v/t39.30808-6/489311470_122150498216538821_5481851227747036939_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=XxBEB3XhSXUQ7kNvwFsTKx5&_nc_oc=AdkmZKiflx5GQ4N3fbPmMNKClSCEGD0JJbuvbhIXq5H6OybwKlQOebNZj13vwo1XvhA&_nc_zt=23&_nc_ht=scontent-gru1-2.xx&_nc_gid=01bL2tRh2u5XsbW2QlVhjw&oh=00_AfFXyD-z2IF9itXOra6Kiu-UnMZ4QSS2EW6Au0F14-9UQw&oe=67FBA8ED)",
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



function assinar(plano) {
  alert(`Você escolheu o Plano ${plano}. Um atendente entrará em contato.`);
  // Aqui você pode integrar com um sistema de pagamento ou WhatsApp
  // window.location.href = "https://wa.me/5511950407835 ";
}

