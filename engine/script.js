document.addEventListener("DOMContentLoaded", function () {
    const pistonLeft = document.querySelector(".piston.left");
    const pistonRight = document.querySelector(".piston.right");
    const pistonRodLeft = document.querySelector(".piston-rod.left");
    const pistonRodRight = document.querySelector(".piston-rod.right");
    const centerCircle = document.querySelector(".center-circle");
    const speedSlider = document.getElementById("speedSlider");
    const speedValue = document.getElementById("speedValue");

    speedSlider.addEventListener("input", function () {
        const speed = this.value;
        speedValue.textContent = `Speed: ${speed}`;
        updateAnimationSpeed(pistonLeft, pistonRight, pistonRodLeft, pistonRodRight, centerCircle, speed);
    });

    function updateAnimationSpeed(pistonLeft, pistonRight, pistonRodLeft, pistonRodRight, centerCircle, speed) {
        const animationDuration = `${2 / speed}s`;

        // Change color when speed is above 10
        if (speed > 10) {
            const colorPercentage = (speed - 10) * 30; // Linearly map speed above 10 to color percentage
            const redColor = Math.min(255, colorPercentage * 2.55); // Map to RGB value (0-255)

            // Change color of piston and piston rod linearly
            const color = `rgb(${redColor}, 0, 0)`;
            pistonLeft.style.backgroundColor = color;
            pistonRight.style.backgroundColor = color;
            pistonRodLeft.style.backgroundColor = color;
            pistonRodRight.style.backgroundColor = color;
        } else {
            // Change back to black if speed is below a certain threshold
            pistonLeft.style.backgroundColor = "black";
            pistonRight.style.backgroundColor = "black";
            pistonRodLeft.style.backgroundColor = "grey";
            pistonRodRight.style.backgroundColor = "grey";
        }

        pistonLeft.style.animationDuration = animationDuration;
        pistonRight.style.animationDuration = animationDuration;
        pistonRodLeft.style.animationDuration = animationDuration;
        pistonRodRight.style.animationDuration = animationDuration;
        centerCircle.style.animationDuration = `${2 / speed}s`;

        centerCircle.style.transition = 'background 1s linear';
        centerCircle.style.background = `conic-gradient(gray 0deg ${180 - speed * 9}deg, white ${180 - speed * 9}deg 360deg)`;
        setTimeout(() => {
            centerCircle.style.transition = '';
        }, 1000);
    }
});