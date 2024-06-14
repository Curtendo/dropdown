import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

class Dropdown {
  constructor() {
    this.hamburgerMenu = document.querySelector('.hamburger-menu');

    this.initEventListeners();
  }

  initEventListeners() {
    this.hamburgerMenu.addEventListener('click', (e) => {
      this.handleDropdownDisplay(e);
    });
  }

  handleDropdownDisplay(e) {
    const dropdownMenu = e.target.nextSibling.nextSibling;
    dropdownMenu.hidden = !dropdownMenu.hidden;
  }
}

const dropdown = new Dropdown();
