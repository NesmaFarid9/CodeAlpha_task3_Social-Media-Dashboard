// sidebar toggle
var sidebarOpen = false;

var sidebar = document.getElementById("sidebar");


function openSidebar() {
    if (!sidebarOpen) {
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;
    }
}
function closeSidebar() {
    if (sidebarOpen) {
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen = false;

    }
}

// dark mood
document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
    });
});
