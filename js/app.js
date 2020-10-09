const thumb =  document.querySelector('.thumb')
const displayImg = document.querySelector('.display')
const overlay = document.querySelector('.overlay')
const button = document.querySelector('button')

for (let i = 1; i <= 4; i++) {
	let img = document.createElement('img')
	img.setAttribute('src', `img/${i}.jpg`)

	img.onclick = function () {
		displayImg.setAttribute('src', `img/${i}.jpg`)
	}

	thumb.appendChild(img)
}

button.onclick = function () {
	let buttonClass = button.getAttribute('class')

	if (buttonClass === 'dark') {
		overlay.style.opacity = '.5'
		button.textContent = 'Lighter'
		button.setAttribute('class', 'light')
	} else {
		overlay.style.opacity = '0'
		button.textContent = 'Darken'
		button.setAttribute('class', 'dark')
	}
}