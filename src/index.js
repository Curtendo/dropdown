import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

class Dropdown {
  constructor() {
    this.hamburgerMenus = document.querySelectorAll('.hamburger-menu');
    this.dropdowns = document.querySelectorAll('.dropdown');

    this.initEventListeners();
  }

  initEventListeners() {
    this.hamburgerMenus.forEach((menu) => {
      menu.addEventListener('click', (e) => {
        this.handleDropdownDisplay(e);
      });
    });
  }

  handleDropdownDisplay(e) {
    // Hide all dropdowns
    this.dropdowns.forEach((dropdown) => {
      dropdown.hidden = true;
    });

    // Show only the clicked dropdown
    const dropdownMenu = e.target.nextSibling.nextSibling;
    dropdownMenu.hidden = !dropdownMenu.hidden;
  }
}

const dropdown = new Dropdown();
