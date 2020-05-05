
(function setInitialTheme() {
    var theme = window.localStorage.getItem('theme');
    if(!theme) {
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
    
    var themeIcon = document.getElementsByClassName(toHideThemeIcon);
    
    if(themeIcon.length > 0) {
        themeIcon[0].style.display = 'none';
        document.getElementsByClassName(toShowThemeIcon)[0].style.display = 'block';
    }
}