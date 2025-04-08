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
  "url(https://media.discordapp.net/attachments/623416032035471361/1358466238979768650/BANNER_2_4K_RES.jpg?ex=67f54346&is=67f3f1c6&hm=2d0eb09a9eb80a8122cf1185284567d88f1fe2157c6198827f100832d6bedac3&=&format=webp&width=1133&height=598)",
  "url(https://media.discordapp.net/attachments/623416032035471361/1358466238979768650/BANNER_2_4K_RES.jpg?ex=67f54346&is=67f3f1c6&hm=2d0eb09a9eb80a8122cf1185284567d88f1fe2157c6198827f100832d6bedac3&=&format=webp&width=1133&height=598)",
  "url(https://media.discordapp.net/attachments/623416032035471361/1358469177098109180/BANNER_3_CHAMPIONS_DISNEY_ETC.png?ex=67f54602&is=67f3f482&hm=9d6e784f2b871223c0078c49c87d68d0e62050966b827aad5f8b4a477a2e2fca&=&format=webp&quality=lossless&width=1110&height=625)",
  "url('https://media.discordapp.net/attachments/623416032035471361/1358468658707300504/BANNER_6_SERIES_PRIMETV_OFICIAL.png?ex=67f54587&is=67f3f407&hm=b72ecd4308ba1e712fda789090bae4c6a3b6dbb19b4bfc5a967aea1d06f48022&=&format=webp&quality=lossless&width=1062&height=598')",
  "url(https://media.discordapp.net/attachments/623416032035471361/1358468656996028558/BANNER_2_PRIMETV_BBB.png?ex=67f54586&is=67f3f406&hm=a46252faae1a072fde4d47b0be2cd41470fa4a3bf3e76685209fe5520dae4cc1&=&format=webp&quality=lossless&width=1062&height=598)",
  "url(https://media.discordapp.net/attachments/623416032035471361/1358466238057156718/BANNER_OPCIONAL_EM_4K.jpg?ex=67f54346&is=67f3f1c6&hm=e78c55361a895c4f5e577a442515736a33f0f5cb973384b3a667c2b2aa698992&=&format=webp&width=1133&height=598)"
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



