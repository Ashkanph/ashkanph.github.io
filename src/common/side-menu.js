
function toggleMenu(){
    let sideMenu = document.getElementsByClassName('side-menu');
    if(sideMenu.length > 0){
        sideMenu[0].classList.toggle('width-220px');
    }

    let firstPageOpenMenuBtn = document.getElementsByClassName('first-page-open-menu');
    if(firstPageOpenMenuBtn.length > 0)
        firstPageOpenMenuBtn[0].classList.toggle('width-220px');
}


(function sideMenu() {
    document.querySelector('span#open-menu').addEventListener('click', function(){
        toggleMenu();
    });
        
    document.addEventListener('click',function(event){
        var sideMenu = document.getElementsByClassName("side-menu");

        if(sideMenu.length > 0) {
            if( 
                !event.target.classList.contains('icon-bars') &&
                event.target.id != 'open-menu' &&
                !event.target.classList.contains('first-page-open-menu') &&
                sideMenu[0].classList.contains('width-220px') &&
                !sideMenu[0].contains(event.target)){
                    toggleMenu();
            }       
        }
    })
})();