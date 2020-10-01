

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

(function setInitialTheme() {
    var theme = getParameterByName("theme");
    if(!theme) {
        theme = window.localStorage.getItem('theme');
        if(!theme || theme == '' || (theme != 'light' && theme != 'dark') ) {
            theme = 'light';
        }
    }

    changeTheme(theme);
})();

function changeTheme(theme) {
    var body = document.getElementsByTagName('body')[0];
    body.className = body.className.replace(/ dark| light/g, '');
    body.className = body.className + ' ' + theme;
    window.localStorage.setItem('theme', theme);

    var toShowThemeIcon =  theme == 'dark' ? 'sun' : 'moon',
        toHideThemeIcon =  theme == 'dark' ? 'moon' : 'sun';
    
    if(document.getElementsByClassName(toShowThemeIcon)[0]){
        document.getElementsByClassName(toShowThemeIcon)[0].style.display = 'block';
        document.getElementsByClassName(toHideThemeIcon)[0].style.display = 'none';
    }
}