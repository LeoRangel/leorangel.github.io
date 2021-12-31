// Open sidebar function
const sidebar_open = () => {
    document.documentElement.style.overflowY = "hidden";
    document.getElementById("sidebar").style.right = "0px";
}

// Close sidebar function
const sidebar_close = () => {
    document.documentElement.style.overflowY = "visible";
    document.getElementById("sidebar").style.right = "-100vw";
}

window.onload = () => {
    // Set 'open sidebar' button event
    document.querySelector('#open-sidebar-btn')
        .addEventListener('click', () => sidebar_open());

    // Set 'close sidebar' button event
    document.querySelector('#close-sidebar-btn')
        .addEventListener('click', () => sidebar_close());

    // Set sidebar links events
    document.querySelectorAll('#sidebar ul li a').forEach(link => {
        link.addEventListener('click', () => sidebar_close())
    });
};





