const bt=document.getElementById('yes');
const dd=document.getElementById('no');
bt.addEventListener('click',() => {
    dd.classList.toggle('hidden');
});
const r=document.getElementById('resm');
const r1=document.getElementById('resm1');
r.addEventListener('click',()=>
{
    r1.classList.toggle('hidden');
});