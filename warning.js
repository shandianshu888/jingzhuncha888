const riskSearch=document.getElementById('riskSearch');
const riskRows=[...document.querySelectorAll('#riskRows tr')];
if(riskSearch){riskSearch.addEventListener('input',()=>{const query=riskSearch.value.trim().toLowerCase();riskRows.forEach(row=>{row.hidden=query&&!row.textContent.toLowerCase().includes(query)})})}
