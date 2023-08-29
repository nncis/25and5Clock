let breakIncrement = document.getElementById('break-increment');
let breakDecrement = document.getElementById('break-decrement');
let sessionIncrement = document.getElementById('session-increment');
let sessionDecrement = document.getElementById('session-decrement');
let startStopButton = document.getElementById('start_stop');
let resetButton = document.getElementById('reset');

let breakLength = document.getElementById('break-length');
let sessionLength = document.getElementById('session-length');
let timeLeft = document.getElementById('time-left');

let timer;
let timerStatus = 'begin'

startStopButton.addEventListener('click', () => {
	if(timerStatus === 'begin' || timerStatus === 'stopped') {

		timerStatus = 'counting';
		timer = setInterval(() => {
			timeLeft.innerText = decrementTime(timeLeft.innerText)
		}, 1000)
	} else if (timerStatus === 'counting') {

		timerStatus = 'stopped'
		clearInterval(timer)
	}
})

function decrementTime(timeString) {
	let timeDisplay = timeString.split(':');
	let minuteDisplay = parseInt(timeDisplay[0])
	let secondDisplay = parseInt(timeDisplay[1]);
	
	secondDisplay -= 1;

	if(secondDisplay === -1) {
		secondDisplay = 59;
		minuteDisplay -= 1
	} 	

	if(secondDisplay <= 9) {
		secondDisplay = '0' + secondDisplay;
	}

	return minuteDisplay + ':' + secondDisplay
}

resetButton.addEventListener('click', () => {
	clearInterval(timer)
})