// Add this script to the end of your HTML, just before the closing </body> tag.
// Used for progress bar on site
<script>
    window.onscroll = function() {
        updateProgressBar();
    };

    function updateProgressBar() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        document.getElementById("myProgressBar").style.width = scrollPercentage + "%";
    }
</script>
