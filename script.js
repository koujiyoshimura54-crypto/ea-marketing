document.querySelectorAll('.faq-item').forEach(function(item){
  const q = item.querySelector('.faq-q');
  q.addEventListener('click', function(){
    const open = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(function(other){ other.classList.remove('open'); });
    if(!open) item.classList.add('open');
  });
});

const menuBtn = document.querySelector('.menu-btn');
const mobileNav = document.querySelector('.mobile-nav');
if(menuBtn && mobileNav){
  menuBtn.addEventListener('click', function(){
    const isOpen = mobileNav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  });
  mobileNav.querySelectorAll('a').forEach(function(link){
    link.addEventListener('click', function(){
      mobileNav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded','false');
    });
  });
}
