var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function mais() {
    currentNumberWrapper.style.color = 'black';
    if (currentNumber === 10) {
        currentNumberWrapper.innerHTML = "contador chegou ao máximo";
        currentNumberWrapper.style.color = 'red';
    } else{
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    }
}

function menos() {
    currentNumberWrapper.style.color = 'black';
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}


