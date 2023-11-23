    document.addEventListener("DOMContentLoaded", function () {
        // Function to update current time
        function updateTime() {
            const currentTime = new Date();
            const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
            const formattedTime = new Intl.DateTimeFormat('en-US', options).format(currentTime);
            document.getElementById('current-time').innerText = formattedTime;
        }

    // Initial call to display time
    updateTime();

    // Set interval to update time every second
    setInterval(updateTime, 1000);
});
