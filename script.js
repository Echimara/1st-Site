// Author: Chi
// Add this script to the end of your HTML, just before the closing </body> tag.

    window.onscroll = function() {
        updateProgressBar();
    };

    function updateProgressBar() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        document.getElementById("myProgressBar").style.width = scrollPercentage + "%";
    }


    //light dark things

    // Function to toggle between light and dark mode
    function toggleMode() {
        document.body.classList.toggle('dark-mode');
        alert('So you actually clicked it...'); // Display an alert message
    }
    

// Event listener for mode toggle button
document.getElementById('modeToggle').addEventListener('click', toggleMode);
