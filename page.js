if(location.pathname.endsWith('recommend.html')){const trust=document.createElement('script');trust.src='trust-section.js';document.head.appendChild(trust)}const favicon=document.createElement('link');favicon.rel='icon';favicon.type='image/svg+xml';favicon.href='assets/logos/logo-01-radar.svg';document.head.appendChild(favicon);const themeMeta=document.createElement('meta');themeMeta.name='theme-color';themeMeta.content='#111c35';document.head.appendChild(themeMeta);const titles={'recommend.html':'机场推荐｜机场精准查','reviews.html':'机场测评｜机场精准查','compare.html':'机场对比｜机场精准查','help.html':'使用帮助｜机场精准查','library.html':'知识库｜机场精准查','bonus.html':'福利中心｜机场精准查','about.html':'关于本站｜机场精准查'};const current=location.pathname.split('/').pop();if(titles[current])document.title=titles[current];const pagePanel=document.getElementById('searchPanel');const openSearch=document.getElementById('searchBtn');const closeSearch=document.getElementById('closeSearch');if(openSearch&&pagePanel)openSearch.onclick=()=>pagePanel.classList.add('open');if(closeSearch&&pagePanel)closeSearch.onclick=()=>pagePanel.classList.remove('open');document.addEventListener('keydown',e=>{if(e.key==='Escape'&&pagePanel)pagePanel.classList.remove('open')});const menu=document.getElementById('menuBtn');if(menu)menu.onclick=()=>document.querySelector('.main-nav').classList.toggle('mobile-open');

const mainNav=document.querySelector('.main-nav');
if(mainNav&&!mainNav.querySelector('a[href="warning.html"]')){
  const warningLink=document.createElement('a');
  warningLink.href='warning.html';
  warningLink.className='warning-nav';
  warningLink.textContent='机场跑路预警';
  const aboutLink=mainNav.querySelector('a[href="about.html"]');
  mainNav.insertBefore(warningLink,aboutLink||null);
}
if(mainNav&&!mainNav.querySelector('a[href="friends.html"]')){
  const friendsLink=document.createElement('a');
  friendsLink.href='friends.html';
  friendsLink.textContent='友链';
  const warningLink=mainNav.querySelector('a[href="warning.html"]');
  const aboutLink=mainNav.querySelector('a[href="about.html"]');
  mainNav.insertBefore(friendsLink,warningLink?warningLink.nextSibling:aboutLink);
}

if(current==='recommend.html'){
  const voucherCodes=['sd88','dly88','hq66','ll88','yjx888','sx0077'];
  document.querySelectorAll('.airport-card .price-head').forEach((head,index)=>{
    const code=voucherCodes[index];
    if(!code)return;
    const badge=document.createElement('button');
    badge.type='button';
    badge.className='voucher-code';
    badge.dataset.code=code;
    badge.title=`点击复制优惠券码 ${code}`;
    badge.innerHTML=`<span>优惠券码</span><b>${code}</b>`;
    badge.addEventListener('click',async()=>{
      try{await navigator.clipboard.writeText(code)}catch(error){const input=document.createElement('textarea');input.value=code;input.style.position='fixed';input.style.opacity='0';document.body.appendChild(input);input.select();document.execCommand('copy');input.remove()}
      badge.classList.add('copied');
      badge.querySelector('span').textContent='已复制';
      setTimeout(()=>{badge.classList.remove('copied');badge.querySelector('span').textContent='优惠券码'},1500);
    });
    head.insertBefore(badge,head.querySelector('strong'));
  });
}
if(location.pathname.endsWith('reviews.html')){const s=document.createElement('script');s.src='reviews-articles.js';document.head.appendChild(s)}if(location.pathname.endsWith('compare.html')){const s=document.createElement('script');s.src='compare-status.js';document.head.appendChild(s)}
if(location.pathname.endsWith('help.html')){const s=document.createElement('script');s.src='help-guides.js';document.head.appendChild(s)}
