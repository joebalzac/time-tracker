//variables
const daily = document.querySelector('#daily');
const weekly = document.querySelector('#weekly');
const monthly = document.querySelector('#monthly');
const hours = document.querySelectorAll('.hours');
const previous = document.querySelectorAll('.previous');
const buttons = document.querySelectorAll('.btn');

fetch('/data.json')
	.then((res) => res.json())
	.then((data) => {
		window.onload = starting();

		function starting() {
			for (let i = 0; i < hours.length; i++) {
				hours[i].innerHTML = `${data[i].timeframes.daily.current}hrs`;
				previous[
					i
				].innerHTML = `Last Day ${data[i].timeframes.daily.previous}hrs`;
			}
		}

		daily.addEventListener('click', starting);

		weekly.addEventListener('click', () => {
			for (let i = 0; i < hours.length; i++) {
				hours[i].innerHTML = `${data[i].timeframes.weekly.current}hrs`;
				previous[
					i
				].innerHTML = `Last Week ${data[i].timeframes.weekly.previous}hrs`;
			}
		});

		monthly.addEventListener('click', () => {
			for (let i = 0; i < hours.length; i++) {
				hours[i].innerHTML = `${data[i].timeframes.monthly.current}hrs`;
				previous[
					i
				].innerHTML = `Last Month ${data[i].timeframes.monthly.previous}hrs`;
			}
		});
	});

buttons.forEach((btn) =>
	btn.addEventListener('click', () => {
		if (!btn.classList.contains('active')) {
			btn.classList.add('active');
		} else {
			btn.classList.remove('active');
		}
	})
);
