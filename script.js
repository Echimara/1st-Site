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

// Function to toggle dark mode
        function toggleDarkMode() {
            darkModeEnabled = !darkModeEnabled;
            if (darkModeEnabled) {
                document.body.classList.add('dark-mode');
            } else {
                document.body.classList.remove('dark-mode');
            }
        }

// Add an event listener to the button to toggle dark mode
toggleDarkModeButton.addEventListener('click', toggleDarkMode);

const darkModeStyles = document.getElementById('dark-mode');
const toggleDarkModeButton = document.getElementById('toggle-dark-mode');
let darkModeEnabled = false;