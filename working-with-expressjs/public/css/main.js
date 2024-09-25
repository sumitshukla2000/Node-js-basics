const backdrop = document.querySelector('.backdrop');

const mobile = document.querySelector('.mobile-view');

const menuButton = document.querySelector('.mobile-view__menu');

function closeBackdrop(){
    backdrop.style.display = 'none';
    mobile.classList.remove('open')
    console.log("clicked");
    
}

function openMenu(){
    backdrop.style.display = 'flex'   
    mobile.classList.add('open')
}

backdrop.addEventListener('click' , closeBackdrop)

menuButton.addEventListener('click' , openMenu);

