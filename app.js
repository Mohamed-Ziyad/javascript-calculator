//select elements

const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');

btns.forEach(function(btn) {
	btn.addEventListener('click', function() {
		let number = btn.getAttribute('data-num'); //get number from attributes
		screen.value += number; //to print all value to screen
	});
});

equalBtn.addEventListener('click', function() {
	if (screen.value === '') {
		screen.value = `Enter Value`;
	} else {
		let value = eval(screen.value); //evaluation method
		screen.value = value;
	}
});

clearBtn.addEventListener('click', function() {
	screen.value = '';
});
