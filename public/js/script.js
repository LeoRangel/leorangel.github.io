//Get elements
const backToTopBtn = document.getElementById("back-to-top-btn");
const sidebar = document.getElementById("sidebar");

// When the user clicks on the button, scroll to the top of the document
const backToTopFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// When the user scrolls down 200px from the top of the document, show the button
const scrollFunction = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.classList.add('show-btn');
    } else {
        backToTopBtn.classList.remove('show-btn');
    }
}

// Open sidebar function
const sidebar_open = () => {
    document.documentElement.style.overflowY = "hidden";
    sidebar.classList.add("open-sidebar");
}

// Close sidebar function
const sidebar_close = () => {
    document.documentElement.style.overflowY = "visible";
    sidebar.classList.remove("open-sidebar");
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

    // Set sidebar links events
    backToTopBtn.addEventListener('click', () => backToTopFunction());
};

window.onscroll = () => scrollFunction();




