const profileInfoButton = document.querySelector('.header__info-button');
const closeOverlayButton = document.querySelector('.overlay__close-button')


closeOverlayButton.addEventListener('click', toggleOverlay)
profileInfoButton.addEventListener('click', toggleOverlay)



function toggleOverlay(){
    const overlay = document.querySelector('.overlay')
    overlay.classList.toggle('overlay_is-active')
}