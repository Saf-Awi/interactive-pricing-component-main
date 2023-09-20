const switchCheckbox = document.getElementById('switch');
const switchHandle = document.querySelector('.switch-handle');
const price = document.getElementById('price');
const pageView = document.getElementById('total-numb');
const rangeBar = document.getElementById('slider');
const discount = document.getElementById('switch');
const switchLabel = document.querySelector('.switch-container');


// event listeners


switchHandle.addEventListener('click', () => {
    switchCheckbox.checked = !switchCheckbox.checked;
    const translateXValue = switchCheckbox.checked ? '20px' : '0';
    switchHandle.style.transform = `translateX(${translateXValue})`;
	switchColor();


});

switchLabel.addEventListener('click', () => {
    switchCheckbox.checked = !switchCheckbox.checked;
    const translateXValue = switchCheckbox.checked ? '20px' : '0';
    switchHandle.style.transform = `translateX(${translateXValue})`;
	switchColor();
});

rangeBar.addEventListener('input', function (event) {
	console.log(event.target.value);
	const value = rangeBar.value;
	priceFunction(value);

});

rangeBar.addEventListener("input", rangeColor);


discount.addEventListener('input', function (event) {
	console.log(event.target.value);
	const value = rangeBar.value;
	priceFunction(value);
});






// functions 

function priceFunction () {
    let priceNum = 8;
	const value = rangeBar.value;

    
	if ((value > 0) & (value <= 20)) {
		pageView.textContent = '10K PAGEVIEWS';
        price.textContent = '$8.00';
		priceNum = 8;
	} else if (value > 20 && value <= 40) {
		pageView.textContent = '50K PAGEVIEWS';
        price.textContent = '$12.00';
		priceNum = 12;
	} else if (value > 40 && value <= 60) {
		pageView.textContent = '100K PAGEVIEWS';
        price.textContent = '$16.00';
		priceNum = 16;
	} else if (value > 60 && value <= 80) {
		pageView.textContent = '500K PAGEVIEWS';
        price.textContent = '$24.00';
		priceNum = 24;
	} else if (value > 80 && value <= 100) {
		pageView.textContent = '1M PAGEVIEWS';
        price.textContent = '$36.00';
		priceNum = 36;
	}

	if (discount.checked) {
		const totalValue = priceNum - priceNum * 0.25;
		price.textContent = `$${totalValue}.00`;
		discount.style.background = 'hsl(174, 86%, 45%)';
	} else {
		price.textContent = `$${priceNum}.00`;

	}

	


}


function rangeColor() {
	const value = (rangeBar.value * 100) / 80;
	rangeBar.style.background = `linear-gradient(
		to right, 
		hsl(174, 86%, 45%) 0%,  
		hsl(224, 65%, 95%) ${value}%, 
		hsl(224, 65%, 95%) 100%)`;
}

function switchColor() {
    switchLabel.style.background = switchCheckbox.checked ? 'hsl(174, 77%, 80%)' : 'hsl(223, 50%, 87%)';
}

rangeColor();
switchColor();




