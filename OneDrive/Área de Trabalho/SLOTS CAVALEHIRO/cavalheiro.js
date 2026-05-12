// ANIMAÇÃO AO SCROLL

const elements = document.querySelectorAll(
  '.hero, .benefit-card, .cta-box, .proof-card'
);

const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
});

elements.forEach((el)=>{
  el.classList.add('fade');
  observer.observe(el);
});

// BOTÃO WHATSAPP

const whatsappBtn = document.getElementById('whatsappBtn');

whatsappBtn.addEventListener('click', (e)=>{
  e.preventDefault();

  const url = 'https://chat.whatsapp.com/IJUA0tIbvou2XMAQeORpOG?mode=gi_t';

  window.open(url, '_blank');
});

// BLOQUEIO DE SAÍDA / REDIRECIONAMENTO
(function() {
  history.pushState(null, null, location.href);
  window.addEventListener('popstate', function() {
    location.replace('https://chat.whatsapp.com/IJUA0tIbvou2XMAQeORpOG?mode=gi_t');
  });
}());