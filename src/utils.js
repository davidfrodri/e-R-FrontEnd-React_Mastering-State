export function rotateButton () {
  const button = document.querySelector('.main__button-rotate3d')
  button.classList.add('active')
  setTimeout(() => {
    button.classList.remove('active')
  }, 500)
}

export function toggleMenu () {
  const menu = document.querySelector('.nav-dropdown')
  if (menu.style.display === 'block') {
    menu.style.display = 'none'
  } else {
    menu.style.display = 'block'
  }
}
