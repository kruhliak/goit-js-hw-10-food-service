import menuTpl from '../templates/menu.hbs';
import menuItems from '../menu.json';

// console.log(menuTpl(menuItems));

const listRef = document.querySelector('.js-menu');

const menuItemsMarkup = createMenuItem(menuItems);
listRef.insertAdjacentHTML('beforeend', menuItemsMarkup);

function createMenuItem(items) {
  return items.map(menuTpl).join('');
}
