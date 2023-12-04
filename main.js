const ball = document.querySelector('img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const answers = [
	'Nie',
	'Tak',
	'Zapomnij',
	'Nigdy w życiu!',
	'No jacha!',
	'Dasz radę',
	'Jazda z tematem!',
	'Dalej, dalej ręce Gadgeta!',
	'Nie dla nas kwitnie ananas!',
	'Za wysokie progi jak na Twoje nogi!',
	'Myśl pozytywnie',
	'Ale z Ciebie debil!',
	'Łatwizna!',
	'Easy!',
	'Go, go PowerRangers!',
	'Nie myśl tylko działaj!',
	'JUST DO IT',
	'Za dużo rozkminiasz!',
]

const addShake = () => {
	ball.classList.add('shake-animaton')
	setTimeout(removeShake, 1100)

	askQuestion()
}
const removeShake = () => {
	ball.classList.remove('shake-animaton')
}

const askQuestion = () => {
	const question = input.value

	if (question === '') {
		error.innerHTML = 'Wpisz swoje pytanie'
		answer.textContent = ''
	} else if (question.indexOf('?') !== question.length - 1) {
		error.innerHTML = 'Twierdzisz czy pytasz? <br> Jeżeli to drugie to postaw pytajnik na końcu.'
		answer.textContent = ''
	} else if (question !== '' && question.indexOf('?') === question.length - 1) {
		error.innerHTML = ''
		setTimeout(randomAnswer, 1200)
	}
}

const randomAnswer = () => {
	const randomAnswerNr = Math.floor(Math.random() * answers.length)
	answer.textContent = answers[randomAnswerNr]
}

const enterCheck = e => {
	if (e.key === 'Enter') {
		askQuestion()
		addShake()
	}
}

ball.addEventListener('click', addShake)
input.addEventListener('keyup', enterCheck)
