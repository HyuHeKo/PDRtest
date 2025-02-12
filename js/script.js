
const sidebar = document.getElementById('sidebar')


function toggleSidebar(){
    sidebar.classList.toggle('show')
}

document.getElementById("start-test").addEventListener("click", function() {
    window.location.href = "topics.html";
});
