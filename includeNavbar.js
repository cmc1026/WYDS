document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");

    // Fetch and include the navigation bar content
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            navbar.innerHTML = data;
        })
        .catch(error => console.error('Error:', error));
});
