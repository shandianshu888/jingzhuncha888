const couponButtons=document.querySelectorAll('.coupon-code');
const copyToast=document.getElementById('copyToast');
let toastTimer;
function showCopyResult(button,message){couponButtons.forEach(item=>{item.classList.remove('copied');item.querySelector('em').textContent='复制'});button.classList.add('copied');button.querySelector('em').textContent='已复制';if(copyToast){copyToast.textContent=message;copyToast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>copyToast.classList.remove('show'),1800)}}
couponButtons.forEach(button=>{button.addEventListener('click',async()=>{const code=button.dataset.code;try{await navigator.clipboard.writeText(code);showCopyResult(button,`优惠码 ${code} 已复制`)}catch(error){const input=document.createElement('textarea');input.value=code;input.style.position='fixed';input.style.opacity='0';document.body.appendChild(input);input.select();document.execCommand('copy');input.remove();showCopyResult(button,`优惠码 ${code} 已复制`)}})});
