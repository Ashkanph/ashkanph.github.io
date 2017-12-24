/**
 * A set of self-invoking functions for all pages
 */
// (() => {
//     addPageTitle();
// })();

function addPageTitle() {
    let pagePathName = location.pathname,
        pageTitle    = document.getElementById('page-title');
    
    if(pageTitle !== null){
        let pageName = {
                'skills': 'skills',
                'book-recommendation': 'book-recommendation', 
                'siri_rebellion': 'siri_rebellion' 
            },
            keys = Object.keys(pageName);
        
        for(let key of keys)
            if(pagePathName.indexOf(pageName[key]) > -1)
                pageName = key;

        if(typeof pageName === 'string'){
            writePageTitle(pageTitle, pageName);
            setActiveMenu(pageName);
        }
    }
}

/**
 * Add pageName to the header
 * 
 * @param {element} el 
 * @param {string} pageName 
 */
function writePageTitle(el, pageName) {
    console.log('hi');
    
    let lang  =  (localStorage.getItem('language') !== undefined) ?
                  localStorage.getItem('language') : 'en';
    console.log(lang);
                  
    console.log(locale);
    
    setTimeout(function() {
    console.log(locale[lang][pageName]);
        el.innerHTML = (locale !== undefined) ? locale[lang][pageName] : '';
    }, 400);
}

/**
 * Add css class of 'active' to appropriate menu
 * 
 * @param {string} pageName 
 */
function setActiveMenu(pageName) {
    let activeMenu = document.getElementsByClassName('active-menu'),
        menuItems  = document.getElementsByClassName('menu-item');
    
    if(activeMenu.length > 0)
        activeMenu[0].classList.remove('active-menu');
    
    if(menuItems.length > 0)
        document.getElementById('menu-' + pageName).classList.add('active-menu');
}
