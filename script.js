// FAQアコーディオンの開閉（滑らかなmax-height遷移はCSSで制御）
document.querySelectorAll('.faq-item').forEach(function(item){
  const q = item.querySelector('.faq-q');
  q.addEventListener('click', function(){
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if(!isOpen){ item.classList.add('open'); }
  });
});

// Problemチェックリストのタップ動作（自分ごと化の疑似体験）
document.querySelectorAll('.check-item').forEach(function(item){
  item.addEventListener('click', function(){
    const box = item.querySelector('.check-box');
    box.classList.toggle('checked');
  });
});

// スクロールに応じたセクションのフェードイン演出
const sections = document.querySelectorAll('.section');
if('IntersectionObserver' in window){
  const observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  sections.forEach(function(sec){ observer.observe(sec); });
} else {
  // 非対応ブラウザは即表示
  sections.forEach(function(sec){ sec.classList.add('is-visible'); });
}
