const ball = document.querySelector('img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const addShake = () => {
	ball.classList.add('shake-animaton')
	setTimeout(removeShake, 1100)
}
const removeShake = () => {
	ball.classList.remove('shake-animaton')
}

// const askAquestion = () => {
//     const question = input.value

//     if (question !== '') {
//         console.log("question !== ''");
//     } else if (question !== '' && ) {

//     }
// }

const test = () => {
	const question = input.value

	if (question === '') {
		error.textContent = 'Wpisz swoje pytanie'
	} else if (question.indexOf('?') !== question.length - 1) {
		error.innerHTML = 'Twierdzisz czy pytasz? <br> Jeżeli to drugie to postaw pytajnik na końcu.'
	}

	console.log(question.length)
}

const enterCheck = e => {
	if (e.key === 'Enter') {
		test()
	}
}

ball.addEventListener('click', addShake)
input.addEventListener('keyup', enterCheck)
