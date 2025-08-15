

// Desktop Dropdown Functionality
function toggleDropdown(selector) {
    const dropdown = document.querySelector(selector);
    const button = dropdown.querySelector('.dropbtn');

    button.addEventListener('click', (event) => {
        event.preventDefault();
        dropdown.classList.toggle('show');
    });
}

toggleDropdown('#dropdown1');
toggleDropdown('#dropdown2');

// Close dropdowns when clicking outside
document.addEventListener('click', (event) => {
    const dropdowns = document.querySelectorAll('.nav-link');
    dropdowns.forEach(dropdown => {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove('show');
        }
    });
});

// Hamburger Menu Functionality
const hamburgerBtn = document.querySelector('.hamburger-link');
const closeButton = document.querySelector('.close-hamburger');
const menuWrapper = document.querySelector('.hamburger-menu-wrapper');

hamburgerBtn.addEventListener('click', (event) => {
    event.preventDefault();
    menuWrapper.classList.add('active');
});

closeButton.addEventListener('click', (event) => {
    event.preventDefault();
    menuWrapper.classList.remove('active');
});

// Close menu when clicking on overlay
const overlay = document.querySelector('.overlay');
overlay.addEventListener('click', () => {
    menuWrapper.classList.remove('active');
});

// Mobile dropdown toggles
const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
mobileDropdownToggles.forEach((toggle) => {
    toggle.addEventListener('click', (event) => {
        event.preventDefault();
        const navItem = toggle.closest('.mobile-nav-item');
        navItem.classList.toggle('open');
    });
});