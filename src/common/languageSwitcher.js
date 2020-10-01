
languageInitiate();

(function listenToSideMenuLanguageSwitcher() {
	const l = document.getElementById('language-select');
	if(l) {
		l.addEventListener("change", function (e) {
			console.log(e.target.value)
			var lang = e.target.value == 'Farsi' ? 'fa' :
			           e.target.value == 'English' ? 'en' : 'eo';
			localizeAllContents(lang);
		});	
	}
})();

function toggleLanguageSwitcher(closeLanguageIcon) {
	let languageIcon 	  = document.getElementsByClassName('icon-language'),
		languageSwitcher  = document.getElementById('language-switcher'),
		en			 	  = document.getElementById('en'),
		fa			 	  = document.getElementById('fa'),
		eo			 	  = document.getElementById('eo');
	
	if(languageIcon.length < 1)
		return;

	if (languageIcon[0].style.display !== 'none' && !closeLanguageIcon) {
		if (document.body.offsetHeight < 880) {
			languageSwitcher.style.width = '35vh';
			languageSwitcher.style.marginLeft = '-17.5vh';
		} else if (document.body.offsetHeight > 880) {
			languageSwitcher.style.width = '24vh';
			languageSwitcher.style.marginLeft = '-12vh';
		}

		languageIcon[0].style.display = 'none';

		setTimeout(() => {
			en.style.display = 'inline';
			fa.style.display = 'inline';
			eo.style.display = 'inline';
		}, globalVariables.languageSwitcherTransitionTime);
	} else {
		if (document.body.offsetHeight < 880) {
			languageSwitcher.style.width = '6vh';
			languageSwitcher.style.marginLeft = '-3vh';
		} else if (document.body.offsetHeight > 880) {
			languageSwitcher.style.width = '3.7vh';
			languageSwitcher.style.marginLeft = '-1.85vh';
		}

		languageIcon[0].style.display = 'block';

		setTimeout(() => {
			en.style.display = 'none';
			fa.style.display = 'none';
			eo.style.display = 'none';
		}, globalVariables.languageSwitcherTransitionTime);
	}
}

function localizeAllContents(language) {
	let lang =  language !== "" ? language :
				((localStorage.getItem('language') !== null) ?
				localStorage.getItem('language') :
				'en');
    
	if(lang !== "en" && lang !== "fa" && lang !== "eo")			
		lang = "en";
				
	localStorage.setItem('language', lang);

	document.getElementsByTagName('html')[0].lang = lang; // Set html lang

	toggleLanguageSwitcher(true);

	changeIndexLanguageBtns(lang);

	let ac = document.getElementsByClassName('active-language');
	if(ac.length > 0)
		ac[0].classList.remove("active-language");


	let languageIcon = document.getElementsByClassName('icon-language');

	if (lang === 'fa'){
		document.body.classList.add("rtl");
		document.body.classList.remove("ltr");
		if(languageIcon.length > 0)
			fa.classList.add("active-language");
	}else{
		document.body.classList.add("ltr");
		document.body.classList.remove("rtl");
		if(lang === 'en' && languageIcon.length > 0)
			en.classList.add("active-language");
		else if(lang === 'eo' && languageIcon.length > 0)
			eo.classList.add("active-language");
	}

	let elementList = document.querySelectorAll('[data-i18n_tooltipTitle]');
	for (let elm in elementList)
		if (elementList[elm].dataset != null)
			elementList[elm].dataset.title = locale[lang][elementList[elm].dataset['i18n_tooltiptitle']];

	elementList = document.querySelectorAll('[data-i18n_title]');
	for (let elm in elementList)
		if (elementList[elm].dataset != null)
			elementList[elm].title = locale[lang][elementList[elm].dataset['i18n_title']];

	elementList = document.querySelectorAll('[data-i18n_text]');
	for (let elm in elementList)
		
		if (elementList[elm].dataset != null)
			elementList[elm].innerHTML = locale[lang][elementList[elm].dataset['i18n_text']];

	elementList = document.querySelectorAll('[data-i18n_href]');
	for (let elm in elementList)
		if (elementList[elm].dataset != null)
			elementList[elm].href = locale[lang][(elementList[elm].dataset['i18n_href'])];
	
	elementList = document.querySelectorAll('[data-hide]');
	for (let elm in elementList){
		if (elementList[elm].dataset != null){
			let ls = (elementList[elm].dataset.hide).split('-'),
				done = false;
			
			for(let el of ls){
				if(!done)
					if(lang === el){
						done = true;
						elementList[elm].style.display = 'none';
					}else
						elementList[elm].style.display = 'inline-block';
			}
		}
		
	}

	addPageTitle();

	// Select the appropriate side-menu language option
	const languageSelect = document.getElementById('language-select');
	if(languageSelect) {
		var langOptions = ['en', 'fa', 'eo'];
		languageSelect.selectedIndex = langOptions.indexOf(lang);
	}
	
}

// window.onload = function () {
function languageInitiate() {
	let languageIcon = document.getElementsByClassName('icon-language')[0],
		en			 = document.getElementById('en'),
		fa			 = document.getElementById('fa'),
		eo			 = document.getElementById('eo');

	if(languageIcon != null)
		languageIcon.onclick = e => {
			e.preventDefault();
			toggleLanguageSwitcher();
		};

	if(en != null)
		en.onclick = e => {
			e.preventDefault();
			localizeAllContents('en');
		};

	if(eo != null)
		eo.onclick = e => {
			e.preventDefault();
			localizeAllContents('eo');
		};

	if(fa != null)
		fa.onclick = e => {
			e.preventDefault();
			localizeAllContents('fa');
		};

	localizeAllContents(readQueryString());
};

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// read query string of the address 
// (It will be used to send the language we want the page be send with it)
function readQueryString() {
	let l = getParameterByName("lang");
	return l ? l : "";
		return  
}

/**
 * Add margin bottom to vsjo or jobTitle class elements depend on the language
 */
function addMarginBottom(lang) {
	let jobTitle = document.getElementsByClassName('jobTitle'),
		vsjo     = document.getElementsByClassName('vsjo');
		
	if(jobTitle.length > 0){
		document.getElementsByClassName('index-margin-bottom-25')[0].
				classList.remove('index-margin-bottom-25');
		
		if(lang === 'fa')
			jobTitle[0].classList.add('index-margin-bottom-25');
		else
			vsjo[0].classList.add('index-margin-bottom-25');
	}
}

function changeIndexLanguageBtns(lang) {
	let en = document.getElementById('index-lang-en'),
		fa = document.getElementById('index-lang-fa'),
		eo = document.getElementById('index-lang-eo');

	if(en != null && fa != null && eo != null){
		en.classList.add('display-none');
		eo.classList.add('display-none');
		fa.classList.add('display-none');
		
		if(lang === 'fa'){
			en.classList.toggle('display-none');
			eo.classList.toggle('display-none');
		}else if(lang === 'en' || lang == null){
			fa.classList.toggle('display-none');
			eo.classList.toggle('display-none');
		}else if(lang === 'eo'){
			en.classList.toggle('display-none');
			fa.classList.toggle('display-none');
		}
	}
	
}