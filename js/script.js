const navBtn = document.querySelector('.nav__icon')
const mobileNav = document.querySelector('.nav__mobile')
const navClose = document.querySelector('.nav__icon--close')

const navBtnHandle = () =>{
    mobileNav.classList.add('show-nav')
    navBtn.classList.add('hide-nav-btn')
    navClose.classList.add('show-close-btn')
}

const navCloseHandle = () =>{
    mobileNav.classList.remove('show-nav')
    navBtn.classList.remove('hide-nav-btn')
    navClose.classList.remove('show-close-btn')

}

navBtn.addEventListener('click',navBtnHandle)
navClose.addEventListener('click',navCloseHandle)