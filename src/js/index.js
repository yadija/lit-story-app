// Import our custom css
import '../sass/main.scss';

// Import bootstrap
import * as bootstrap from 'bootstrap';

// Import components
import './components';

// Import pages
import Dashboard from './pages/dashboard';

const routes = {
  '/': Dashboard,
};

const detectRoute = () => routes[window.location.pathname];

const initPages = () => {
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');

  if (header && main && footer) {
    main.style.minHeight = `calc(100vh - ${header.clientHeight + footer.clientHeight}px)`;
  }
};

window.addEventListener('DOMContentLoaded', async () => {
  initPages();

  const route = detectRoute();
  route.init();
});
