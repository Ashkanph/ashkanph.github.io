
function toggleLanguageSwitcher(closeLanguageIcon) {
	let languageIcon 	  = document.getElementsByClassName('icon-language')[0],
		languageSwitcher  = document.getElementById('language-switcher'),
		en			 	  = document.getElementById('en'),
		fa			 	  = document.getElementById('fa'),
		eo			 	  = document.getElementById('eo');

	if (languageIcon.style.display !== 'none' && !closeLanguageIcon) {
		if (document.body.offsetHeight < 880) {
			languageSwitcher.style.width = '35vh';
			languageSwitcher.style.marginLeft = '-17.5vh';
		} else if (document.body.offsetHeight > 880) {
			languageSwitcher.style.width = '24vh';
			languageSwitcher.style.marginLeft = '-12vh';
		}

		languageIcon.style.display = 'none';

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

		languageIcon.style.display = 'block';

		setTimeout(() => {
			en.style.display = 'none';
			fa.style.display = 'none';
			eo.style.display = 'none';
		}, globalVariables.languageSwitcherTransitionTime);
	}
}

function localizeAllContents(language) {
	let lang =  (language !== undefined) ? language :
				((localStorage.getItem('language') !== null) ?
				localStorage.getItem('language') :
				'en');
				
	localStorage.setItem('language', lang);
	toggleLanguageSwitcher(true);

	document.getElementsByClassName('active-language')[0].
			classList.remove("active-language");

	if (lang === 'fa'){
		document.body.classList.add("rtl");
		document.body.classList.remove("ltr");
		fa.classList.add("active-language");
	}else{
		document.body.classList.add("ltr");
		document.body.classList.remove("rtl");
		if(lang === 'en')
			en.classList.add("active-language");
		if(lang === 'eo')
			eo.classList.add("active-language");
	}

	let elementList = document.querySelectorAll('[data-i18n_tooltipTitle]');
	for (let elm in elementList)
		if (elementList[elm].dataset !== undefined)
			elementList[elm].dataset.title = locale[lang][elementList[elm].dataset['i18n_tooltiptitle']];

	elementList = document.querySelectorAll('[data-i18n_title]');
	for (let elm in elementList)
		if (elementList[elm].dataset !== undefined)
			elementList[elm].title = locale[lang][elementList[elm].dataset['i18n_title']];

	elementList = document.querySelectorAll('[data-i18n_text]');
	for (let elm in elementList)
		if (elementList[elm].dataset !== undefined)
			elementList[elm].innerHTML = locale[lang][elementList[elm].dataset['i18n_text']];

	elementList = document.querySelectorAll('[data-i18n_href]');
	for (let elm in elementList)
		if (elementList[elm].dataset !== undefined)
			elementList[elm].href = locale[lang][(elementList[elm].dataset['i18n_href'])];
	
	elementList = document.querySelectorAll('[data-hide]');
	for (let elm in elementList){
		if (elementList[elm].dataset !== undefined){
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

	addMarginBottom(lang);
	addPageTitle();
}

window.onload = function () {
	let languageIcon = document.getElementsByClassName('icon-language')[0],
		en			 = document.getElementById('en'),
		fa			 = document.getElementById('fa'),
		eo			 = document.getElementById('eo');

	if(languageIcon !== undefined)
		languageIcon.onclick = e => {
			e.preventDefault();
			toggleLanguageSwitcher();
		};

	if(en !== undefined)
		en.onclick = e => {
			e.preventDefault();
			localizeAllContents('en');
		};

	if(eo !== undefined)
		eo.onclick = e => {
			e.preventDefault();
			localizeAllContents('eo');
		};

	if(fa !== undefined)
		fa.onclick = e => {
			e.preventDefault();
			localizeAllContents('fa');
		};

	localizeAllContents();
};

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