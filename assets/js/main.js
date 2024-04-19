import parallax from './components/parallax.js';
import activeMenu from './components/selected_menu.js';
import updateCopyright from './helpers/date_updater.js';
import resetToHome from './helpers/reload_page.js';
import './helpers/send_form.js';
import './helpers/lang.js';

parallax();

activeMenu();

resetToHome();

updateCopyright();
