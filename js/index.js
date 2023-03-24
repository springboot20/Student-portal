
(() => {
	let win = window;
	let doc = win.document;
	let ele = doc.documentElement;
	let storage = localStorage;

	let prefer_key = 'theme';
	let pref = storage.getItem(prefer_key);

	let dark = 'dark';
	let light = 'light';
	let toggle = doc.getElementById('checkbox');
	let mode = storage.getItem('theme');
	let modeText = doc.querySelector('.mode-txt');

	let moonIcon = doc.querySelector('.moon');
	let sunIcon = doc.querySelector('.sun');

	if (mode !== null && mode === dark) {
		toggle.setAttribute('checked', true)
		modeText.textContent = 'Dark mode';

		moonIcon.style.opacity = '1'
		sunIcon.style.opacity = '0'
	}

	let defaultTheme = light;
	let active = (defaultTheme === dark);

	let activateTheme = (theme) => {
		ele.classList.remove(dark, light);
		ele.classList.add(theme)

		active = (theme === dark);
	}

	if (pref === dark) activateTheme(dark);
	if (pref === light) activateTheme(light);

	if (!pref) {
		let preferTheme = (theme) => {
			return `(prefers-color-scheme: ${theme})`
		}

		if (win.matchMedia(preferTheme(dark)).matches) {
			activateTheme(dark)
		} else if (win.matchMedia(preferTheme(light)).matches) {
			activateTheme(light)
		} else {
			activateTheme(defaultTheme)
		}

		win.matchMedia(preferTheme(dark)).addEventListener("change", (event) => {
			if (event.matches) activateTheme(dark);
		})
		win.matchMedia(preferTheme(light)).addEventListener("change", (event) => {
			if (event.matches) activateTheme(light);
		})
	}

	if (toggle) {
		toggle.style.visibility = 'visible';

		toggle.addEventListener('change', () => {
			if (active) {
				activateTheme(light)
				modeText.textContent = 'Light mode'
				storage.setItem(prefer_key, light);
				moonIcon.style.opacity = '0'
				sunIcon.style.opacity = '1'
			} else {
				activateTheme(dark)
				modeText.textContent = 'Dark mode'
				storage.setItem(prefer_key, dark);
				moonIcon.style.opacity = '1'
				sunIcon.style.opacity = '0'
			}
		}, true)
	}
})();


function search(searchIconID, searchInputID) {
	let searchBtn = document.querySelector(`.${searchIconID}`);
	let searchInput = document.querySelector(`#${searchInputID}`);

	searchBtn.addEventListener('click', () => searchInput.focus());
	searchInput.addEventListener('keyup', (e) => {
		console.log(document.TEXT_NODE)
	})
}



const showMenu = () => {
	let menuIcon = document.querySelector('.show-icon');
	let menu = document.querySelector('.side-nav');
	let icon = document.querySelector('.menuIcon');
	let closeIcon = document.querySelector('.close-icon');

	if (menuIcon && menu) {
		menuIcon.addEventListener('click', () => {
			menu.classList.toggle('close');
		});

		icon.addEventListener('click', () => {
			menu.classList.toggle('open')
		})

		closeIcon.addEventListener('click', () => {
			menu.classList.remove('open','close')
		})
	}
}

window.addEventListener('load', () => {
	showMenu();
	search("search", "search-box");
	document.body.classList.add('loaded');
})
