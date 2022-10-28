const navBtn = document.querySelector('.nav__icon')
const mobileNav = document.querySelector('.nav__mobile')
const navClose = document.querySelector('.nav__icon--close')
const menuFirst = document.querySelector('.menu-2')
const menuFirstLinks = menuFirst.querySelectorAll('li')
const secondNavBtn = document.querySelector('.nav-shows')
const arrowSecondMenu = document.querySelectorAll('.nav__mobile-list-icon')
const menuCompany =document.querySelector('.nav__company')
const menuCompanyLinks = menuCompany.querySelectorAll('li')
const menuCompanyBtn = document.querySelector('.nav-show-2')
const bgShadow = document.querySelector('.shadow-bg')




const navBtnHandle = () => {
	mobileNav.classList.add('show-nav')
	navBtn.classList.add('hide-nav-btn')
	navClose.classList.add('show-close-btn')
    bgShadow.style.display = "block"
}

const navCloseHandle = () => {
	mobileNav.classList.remove('show-nav')
	navBtn.classList.remove('hide-nav-btn')
	navClose.classList.remove('show-close-btn')
    bgShadow.style.display = "none"
}

const showFirstMenu = () => {
	if (menuFirst.classList.contains('show-close-btn')) {
		menuFirst.classList.remove('show-close-btn')
        arrowSecondMenu[0].style.rotate = '0deg'
	} else {
        arrowSecondMenu[0].style.rotate = '180deg'
        menuFirst.classList.add('show-close-btn')
		for (let i = 0; i < menuFirstLinks.length; i++) {
			menuFirstLinks[i].style.animation = 'showMenu .2s forwards'
			menuFirstLinks[i].style.animationDelay = `.${i+1}s`
		}
	}
}

const showMenuCompany = () => {
	if (menuCompany.classList.contains('show-close-btn')) {
		menuCompany.classList.remove('show-close-btn')
        arrowSecondMenu[1].style.rotate = '0deg'
	} else {
        arrowSecondMenu[1].style.rotate = '180deg'
        menuCompany.classList.add('show-close-btn')
		for (let i = 0; i < menuCompanyLinks.length; i++) {
			menuCompanyLinks[i].style.animation = 'showMenu .2s forwards'
			menuCompanyLinks[i].style.animationDelay = `.${i+1}s`
		}
	}
}

navBtn.addEventListener('click', navBtnHandle)
navClose.addEventListener('click', navCloseHandle)
secondNavBtn.addEventListener('click', showFirstMenu)
menuCompanyBtn.addEventListener('click', showMenuCompany)
