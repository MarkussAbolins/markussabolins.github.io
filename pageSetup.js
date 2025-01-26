document.addEventListener("DOMContentLoaded", function() {
    console.log("On ready");

    // Function to load the header
    function loadHeader() {
        fetch("header.html")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                document.getElementById("headerContainer").innerHTML = data;
            })
            .catch(error => {
                console.error("Error loading header:", error);
                document.getElementById("headerContainer").innerHTML = `<p style="color: red;">Failed to load header.</p>`;
            });
    }

    loadHeader();
});