document.addEventListener("DOMContentLoaded", () => {
    const words = ["Frontend Designer", "Web Designer", "Data Analystics", "Marketing Specialist", "Software Tester"];
    let currentIndex = 0;
    let currentText = "";
    let isDeleting = false;
    let speed = 200;
    const element = document.getElementById("text");

    function type() {
        const fullText = words[currentIndex];

        if (isDeleting) {
            currentText = fullText.substring(0, currentText.length - 1);
        } else {
            currentText = fullText.substring(0, currentText.length + 1);
        }

        element.innerHTML = currentText;

        if (!isDeleting && currentText === fullText) {
            speed = 2000;
            isDeleting = true;
        } else if (isDeleting && currentText === "") {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % words.length;
            speed = 500;
        } else {
            speed = isDeleting ? 100 : 200;
        }

        setTimeout(type, speed);
    }

    type();
});
