const input = document.querySelector('input');
const btn = document.querySelector('button');
const div = document.querySelector('.content');
     
	const convertNumberToBinary = (number) => {
		if(input.value.length <= 10 && parseInt(input.value) > 0) {
			let x, y = 0,
				z = 1;
			while(number > 0) {
				x = number % 2;
				y = y + (x * z);
				number = parseInt(number / 2);
				z = z * 10;
			}
			input.value = '';
			div.textContent = y;
		} else alert('Podaj poprawną liczbę!');
	}
btn.addEventListener('click', () => {
	convertNumberToBinary(parseInt(input.value));
});