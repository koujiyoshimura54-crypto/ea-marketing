// FAQアコーディオンの開閉
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
