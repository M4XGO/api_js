orangeClignotement = null
autoRun = null

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function turnOffRed() {
    const turnedOff = document.querySelector('#redLigth');
    turnedOff.classList.replace('bg-danger', 'bg-dark');
}

function turnOnBf() {
    const turnOnGreen = document.querySelector('#greenLigth');
    turnOnGreen.classList.replace('bg-dark', 'bg-success');
    const turnedOnOrange = document.querySelector('#orangeLigth');
    turnedOnOrange.classList.replace('bg-dark', 'bg-warning');
    const turnedOnRed = document.querySelector('#redLigth');
    turnedOnRed.classList.replace('bg-dark', 'bg-danger');
}

function turnOffOrange() {
    const turnedOff = document.querySelector('#orangeLigth');
    turnedOff.classList.replace('bg-warning', 'bg-dark');
}

function spredOffOrange() {
    orangeAllume = "text-center my-1 bg-warning border border-dark rounded-circle"
    orangeEteint = "text-center my-1 bg-dark border border-dark rounded-circle"
    const turnedOff = document.querySelector('#orangeLigth');
    turnedOff.className = turnedOff.className === orangeAllume ? 
    orangeEteint : orangeAllume
}

function turnedOffGreen () {
    const turnedOff = document.querySelector('#greenLigth');
    turnedOff.classList.replace('bg-success', 'bg-dark');  
}

async function auto() {
    turnOnBf();
    turnOffRed();
    turnOffOrange();
    await sleep(3000);
    turnOnBf();
    turnOffRed();
    turnedOffGreen();
    await sleep(1000);
    turnOnBf();
    turnOffOrange();
    turnedOffGreen();
    await sleep(2000);
}


document.querySelector("#redButton") 
.addEventListener("click", function() { 
    console.log("Red button clicked");
    clearInterval(orangeClignotement)
    clearInterval(autoRun)
    turnOnBf();
    turnOffOrange();
    turnedOffGreen();
}); 

document.querySelector("#orangeButton") 
.addEventListener("click", function() {
    console.log("Orange button clicked"); 
    clearInterval(orangeClignotement)
    clearInterval(autoRun)
    turnOnBf();
    turnOffRed();
    turnedOffGreen();
}); 

document.querySelector("#greenButton") 
.addEventListener("click", function() { 
    console.log("Green button clicked");
    clearInterval(orangeClignotement)
    clearInterval(autoRun)
    turnOnBf();
    turnOffRed();
    turnOffOrange(); 
}); 

document.querySelector("#autoButton")
.addEventListener("click", function() { 
    console.log("Auto button clicked");
    clearInterval(orangeClignotement)
    clearInterval(autoRun)
    auto()
    autoRun = setInterval(auto,6000); 
});

document.querySelector("#offButton") 
.addEventListener("click", function() { 
    clearInterval(orangeClignotement)
    clearInterval(autoRun)
    console.log("Spreed orange");
    turnOnBf();
    turnOffRed();
    turnedOffGreen();
    orangeClignotement = setInterval(spredOffOrange, 1000); 
}); 
