let x=document.querySelector('span');
let npt=document.querySelector('input');

npt.addEventListener('input',function(e){
    x.style.color=npt.value;
    x.style.fontSize=npt.value;
})