// When the user scrolls the page, execute setHeader 
window.onscroll = function() {
    setHeader()
};

/**
 * Make the header sticky
 */
function setHeader() {
    // Get the side menu
    var sideMenu = document.getElementsByClassName('side-menu')[0];// getElementById("myHeader");

    // 50 is the height of header
    sideMenu.style.top = window.pageYOffset + 50 + 'px';
}
