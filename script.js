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

const contactForm = document.querySelector('#contactForm');
if(contactForm){
  contactForm.addEventListener('submit', function(event){
    event.preventDefault();
    const data = new FormData(contactForm);
    alert([
      '以下の内容でよろしいですか？','',
      '会社名・法人名：' + (data.get('company') || ''),
      'お名前：' + (data.get('name') || ''),
      'メールアドレス：' + (data.get('email') || ''),
      '電話番号：' + (data.get('tel') || '未入力'),
      'お問い合わせ項目：' + (data.get('category') || ''),'',
      'お問い合わせ内容：', data.get('message') || '',
      '', '※現在は入力内容の確認まで実装しています。'
    ].join('\\n'));
  });
}
