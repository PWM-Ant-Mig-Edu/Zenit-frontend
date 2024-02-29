function updateProgressBar(currentStep) {
    const steps = document.querySelectorAll('.step');
    const progressBar = document.querySelector('.progress-line');

    progressBar.style.width = (currentStep / (steps.length - 1) * 100) + '%';
    console.log(progressBar.style.width);
    for (var i = 0; i < steps.length; i++) {
        if (i < currentStep) {
            steps[i].classList.remove('current');
            steps[i].classList.remove('not-completed');
            steps[i].classList.add('completed');

        } else if (i === currentStep) {
            steps[i].classList.remove('completed');
            steps[i].classList.remove('not-completed');
            steps[i].classList.add('current');
        } else {
            steps[i].classList.remove('completed');
            steps[i].classList.remove('current');
            steps[i].classList.add('not-completed');
        }
    }
}

function loadProgressBarComponent(n) {
    fetch("../src/components/progressBar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById('progress-bar-component').innerHTML += data;
            updateProgressBar(n)
        })
        .catch(error => console.error('Error loading the header:', error));
}





