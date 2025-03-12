function startGame() {
    const amount = parseInt(document.getElementById('amount').value);
    if (isNaN(amount) || amount <= 0) {
        alert("Veuillez entrer une somme valide.");
        return;
    }

    const circlesContainer = document.getElementById('circles');
    circlesContainer.innerHTML = ''; 
    let circles = [];
    for (let i = 0; i < 9; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.onclick = () => handleCircleClick(circle, i);
        circles.push(circle);
        circlesContainer.appendChild(circle);
    }

  
    const winningCircleIndex = Math.floor(Math.random() * 9);

  
    function handleCircleClick(circle, index) {
        if (circle.classList.contains('red') || circle.classList.contains('green')) {
            return; 
        }

        circles.forEach((el, idx) => {
            if (idx === winningCircleIndex) {
                el.classList.add('green');
            } else {
                el.classList.add('red');s
            }
        });

        const resultElement = document.getElementById('result');
        if (index === winningCircleIndex) {
            resultElement.textContent = `Bravo ! Rejouez pour continuer sur cette lancée ${amount * (Math.random() * 15)} !`;
        } else {
            resultElement.textContent = `Dommage, vous avez perdu... Réessayez ${amount}.`;
        }
    }
}
