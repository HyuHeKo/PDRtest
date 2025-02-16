
function loadComponent(elementId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => document.getElementById(elementId).innerHTML = data);
}

document.addEventListener("DOMContentLoaded", function () {
    loadComponent("header", "main_content/header.html");
    loadComponent("sidebar", "main_content/sidebar.html");
    loadComponent("footer", "main_content/footer.html");
});
