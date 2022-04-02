//Get elements
const getToggleThemeBtns = document.getElementsByClassName("toggle-theme-btn");
const toggleThemeBtns = [...getToggleThemeBtns]; // Transforming list of elements into an array
const getfloatingBtns = document.getElementsByClassName("floating-btn");
const floatingBtns = [...getfloatingBtns]; // Transforming list of elements into an array
const backToTopBtn = document.getElementById("back-to-top-btn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

// Set theme mode on load
function setThemeOnLoad() {
    const storageTheme = localStorage.getItem('theme');
    const theme = storageTheme ?? 'light';
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
}

// Toggle theme button event
function toggleTheme() {
    const storageTheme = localStorage.getItem('theme');
    const theme = (storageTheme === 'light' ? 'dark' : 'light');
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
}

// When the user clicks on the button, scroll to the top of the document
const backToTopFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// When the user scrolls down 200px from the top of the document, show the button
const scrollFunction = () => {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        floatingBtns.map((btn) => btn.classList.add('show-btn'));
    } else {
        floatingBtns.map((btn) => btn.classList.remove('show-btn'));
    }
}

// Open sidebar function
const sidebar_open = () => {
    document.documentElement.style.overflowY = "hidden";
    sidebar.classList.add("open-sidebar");
    overlay.classList.add("active");
}

// Close sidebar function
const sidebar_close = () => {
    document.documentElement.style.overflowY = "visible";
    sidebar.classList.remove("open-sidebar");
    overlay.classList.remove("active");
}

window.onload = () => {
    // Set theme mode on load
    setThemeOnLoad();

    // Set toggle theme buttons event
    toggleThemeBtns.map((btn) => btn.addEventListener('click', () => toggleTheme()));

    // Set 'open sidebar' button event
    document.querySelector('#open-sidebar-btn')
        .addEventListener('click', () => sidebar_open());
    document.querySelector('#open-sidebar-floating-btn')
        .addEventListener('click', () => sidebar_open());

    // Set 'close sidebar' button event
    document.querySelector('#close-sidebar-btn')
        .addEventListener('click', () => sidebar_close());
    overlay.addEventListener('click', () => sidebar_close());

    // Set sidebar links events
    document.querySelectorAll('#sidebar ul li a').forEach(link => {
        link.addEventListener('click', () => sidebar_close())
    });

    // Set sidebar links events
    backToTopBtn.addEventListener('click', () => backToTopFunction());
};

window.onscroll = () => scrollFunction();