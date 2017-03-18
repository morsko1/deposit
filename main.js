var app = (function () {
	var sum = document.getElementById('sum'),
		percent = document.getElementById('percent'),
		term = document.getElementById('term'),
		cap = document.getElementById('cap'),
		result = document.getElementById('result'),
		income = document.getElementById('income'),
		calculate = document.getElementById('calculate'),
		form = document.forms[0],
		calc = function () {
			var sumVal = parseFloat(sum.value),
				percentVal = parseFloat(percent.value),
				termVal = parseFloat(term.value),
				res = sumVal;
			if (!sumVal || !percentVal) {
				return;
			}
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
		},
		isNumeric = function (n) {
			return !isNaN(parseFloat(n)) && isFinite(n);
		},
		validate = function () {
			var val = parseFloat(this.value);
			if (!val || !isNumeric(parseFloat(val))){
				this.setCustomValidity('Введите число');
			}
			else {
				this.setCustomValidity('');
			}
		},
		prevent = function () {
			form.addEventListener('submit', function (event) {
				event.preventDefault();
				return;
			});
		},
		init = function () {
			prevent();
			sum.addEventListener('change', validate);
			percent.addEventListener('change', validate);
			form.addEventListener('submit', calc);
		};
		return {
			init: init
		};
}());

app.init();