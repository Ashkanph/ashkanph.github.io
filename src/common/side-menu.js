
function toggleMenu(action){
    let sideMenu = document.getElementsByClassName('side-menu')[0];
        sideMenu.classList.toggle('width-220px');
}

function setActiveMenu(menuLinkID) {
    document.getElementById(menuLinkID).addClass('active-menu-link');
}
