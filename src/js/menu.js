function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.right === '0px') {
        sidebar.style.right = '-100%'; // Hide the menu
    } else {
        sidebar.style.right = '0px'; // Show the menu
    }
}