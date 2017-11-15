/**
 * A set of self-invoking functions for all pages
 */
(() => {
    addPageTitle();
})();

function addPageTitle() {
    let pagePathName = location.pathname,
        pageTitle    = document.getElementById('page-title');
    
    if(pageTitle !== null){
        let pageName = {
                'skills': 'skills',
                'book-recommendation': 'book-recommendation' 
            },
            keys = Object.keys(pageName);
        
        for(let key of keys)
            if(pagePathName.indexOf(pageName[key]) > -1)
                pageName = key;

        if(typeof pageName === 'string'){
            writePageTitle(pageTitle, pageName);
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
    let lang  =  (localStorage.getItem('language') !== undefined) ?
                  localStorage.getItem('language') : 'en';
    setTimeout(function() {
        el.innerHTML = (locale !== undefined) ? locale[lang][pageName] : '';
    }, 400);
}
