
document.getElementById('toggle-ingredients').addEventListener('click', function() {
    const ingredientsList = document.getElementById('ingredients-list');
    ingredientsList.style.display = ingredientsList.style.display === 'none' ? 'block' : 'block';
});

document.getElementById('start-cooking').addEventListener('click', function() {
    const stepsList = document.getElementById('steps-list');
    stepsList.style.display = stepsList.style.display === 'none' ? 'block' : 'block';
});

document.getElementById('start-cooking').addEventListener('click', function() {
    const timerElement = document.createElement('start-cooking');
    let timeLeft = 45; // Example: 45 minutes timer
    timerElement.textContent = `Time Left: ${timeLeft} minutes`;
    document.querySelector('.recipe-card').appendChild(timerElement);

    const countdown = setInterval(function() {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft} minutes`;
        if (timeLeft <= 0) {
            clearInterval(countdown);
            timerElement.textContent = 'Time’s up! Your dish is ready.';
        }
    }, 60000); // 1 minute interval
});

document.getElementById('start-cooking').addEventListener('click', function() {
    const stepsList = document.getElementById('steps-list');
    const steps = stepsList.getElementsByTagName('li');
    let currentStep = 1;

    function highlightNextStep() {
        if (currentStep < steps.length) {
            steps[currentStep].style.backgroundColor = '#d3ffd3';
            currentStep++;
            setTimeout(highlightNextStep, 2000); // Adjust timing as needed
        }
    }

    highlightNextStep();
});