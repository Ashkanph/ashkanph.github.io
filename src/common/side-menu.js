
function toggleMenu(action){
    let sideMenu = document.getElementsByClassName('side-menu');
    if(sideMenu.length > 0)
        sideMenu[0].classList.toggle('width-220px');
    
    let sideMenu2 = document.getElementsByClassName('first-page-side-menu');
    if(sideMenu2.length > 0)
        sideMenu2[0].classList.toggle('width-220px');

    let firstPageOpenMenuBtn = document.getElementsByClassName('first-page-open-menu');
    if(firstPageOpenMenuBtn.length > 0)
        firstPageOpenMenuBtn[0].classList.toggle('width-220px');
}
