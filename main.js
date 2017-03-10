var sum = document.getElementById('sum'),
	percent = document.getElementById('percent'),
	term = document.getElementById('term'),
	cap = document.getElementById('cap'),
	result = document.getElementById('result'),
	income = document.getElementById('income'),
	calculate = document.getElementById('calculate');

function calc () {
	var sumVal = parseFloat(sum.value),
		percentVal = parseFloat(percent.value),
		termVal = parseFloat(term.value),
		res = sumVal;
	if (cap.checked) {
		for (var i=0; i<termVal; i++) {
			res = res * ((percentVal / 100) / 12 + 1);
		}
		result.innerHTML = res.toFixed(2);
		income.innerHTML = (res - sumVal).toFixed(2);
	}
	else {
		res = res * (((percentVal / 100) / 12) * termVal + 1);
		result.innerHTML = res.toFixed(2);
		income.innerHTML = (res - sumVal).toFixed(2);
	}
}
calculate.addEventListener('click', calc);
