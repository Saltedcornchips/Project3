let menu = document.querySelectorAll('.menu'); // Select the Menu Icons
let nav = document.getElementById('nav'); // Select the menu
let closeIcon = document.getElementById('close'); // Select the close icon for menu
let navLink = document.querySelectorAll('.nav-link'); // Select all links in menu

// Looping through all menu icons 
for (let i = 0; i < menu.length; i++) {
    // When user clicks on any menu icon it will run the openMenu function
    menu[i].addEventListener('click', openMenu);
}

// Looping through all menu links 
for (let j = 0; j < navLink.length; j++) {
    // When user clicks on any menu link it will go to that portion of page and run the closeMenu function
    navLink[j].addEventListener('click', closeMenu);
}

// Add event listener on closeIcon so that when clicking it it will run closeMenu function
closeIcon.addEventListener('click', closeMenu);

// closeMenu function for closing the menu
function closeMenu() {
    // Checks if menu is open then hide it.
    if (nav.style.display == 'block') {
        nav.style.display = 'none';
    }
}
// openMenu function for opening the menu
function openMenu() {
    // Checks if menu is closed then show it
    if (nav.style.display == 'none' || nav.style.display == '') {
        nav.style.display = 'block';
    }
}

// Select explore button by ID
let explore = document.getElementById('exploreBtn');

// Adding click event on explore button so that on clicking it will open the gallery
explore.addEventListener('click', function () {
    // Selecting all images for gallery
    let $gallery = new SimpleLightbox('.gallery a', {});
    // Opens the gallery
    $gallery.open();
})
// Starting the AOS library animations on body load.
AOS.init({
    duration: 1000,
});