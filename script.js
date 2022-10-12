const menuBtn = document.querySelector('#menu-btn')
// menuBtn.innerHTML = "cross";
const smNav = document.querySelector('#sm-nav')
menuBtn.addEventListener('click', function(){
    if(smNav.style.display === 'none'){
        smNav.style.display = 'block';
        menuBtn.innerHTML = "close";

    }else{
        smNav.style.display = 'none';
        menuBtn.innerHTML = "menu";
    }
});
