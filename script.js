const btn = document.querySelector('.mark-read');
btn.addEventListener('click', markRead);

function markRead(){
    let li = document.querySelectorAll('li');
    let notCount = document.querySelector('#not-count');
    if(btn.innerText == 'Mark all as read'){
        for(let i of li){
            i.setAttribute('class','');
        }
        notCount.innerText = 0;
        btn.innerText = 'Mark all as unread';
    }else {
        for(let i of li){
            i.setAttribute('class','active');
        }
        notCount.innerText = li.length;
        btn.innerText = 'Mark all as read';
    }
}