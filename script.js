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
  contactForm.addEventListener('submit', async function(event){
    event.preventDefault();

    const submitButton = contactForm.querySelector('.contact-submit');
    const originalText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = '送信中...';

    const data = new FormData(contactForm);
    const payload = {
      company: data.get('company'),
      name: data.get('name'),
      email: data.get('email'),
      tel: data.get('tel'),
      category: data.get('category'),
      message: data.get('message')
    };

    try {
      const response = await fetch('https://ea-contact-form.koujiyoshimura54.workers.dev', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      if(!response.ok || !result.success){
        throw new Error(result.error || '送信に失敗しました。');
      }

      contactForm.innerHTML = `
        <div class="contact-success" role="status">
          <div class="contact-success-icon">✓</div>
          <h3>お問い合わせを受け付けました</h3>
          <p>
            お問い合わせいただきありがとうございます。<br>
            ご入力いただいたメールアドレスへ受付完了メールをお送りしました。<br>
            内容を確認のうえ、担当者よりご連絡いたします。
          </p>
        </div>
      `;
    } catch(error) {
      console.error(error);
      alert('送信に失敗しました。時間をおいて再度お試しください。');
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    }
  });
}
