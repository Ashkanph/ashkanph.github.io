
(function setInitialTheme() {
    var theme = window.localStorage.getItem('theme');
    if(!theme || theme == '' || (theme != 'lightmode' && theme != 'darkmode') ) {
        theme = 'lightmode';
    }
    changeTheme(theme);
})();

function changeTheme(theme) {
    var body = document.getElementsByTagName('body')[0];
    body.className = body.className.replace(/ darkmode| lightmode/g, '');
    body.className = body.className + ' ' + theme;
    window.localStorage.setItem('theme', theme);

    var toShowThemeIcon =  theme == 'darkmode' ? 'sun' : 'moon',
        toHideThemeIcon =  theme == 'darkmode' ? 'moon' : 'sun';
    
    if(document.getElementsByClassName(toShowThemeIcon)[0]){
        document.getElementsByClassName(toShowThemeIcon)[0].style.display = 'block';
        document.getElementsByClassName(toHideThemeIcon)[0].style.display = 'none';
    }
}