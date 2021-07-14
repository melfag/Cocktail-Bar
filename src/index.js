import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

const createHeader = () => {
	const header = document.createElement('header');
	header.classList.add('header');
	const restaurantName = document.createElement('h1');

	restaurantName.textContent = 'Cocktail House';
	header.appendChild(restaurantName);
	header.appendChild(createNav());
	return header;
};

const createNav = () => {
	const nav = document.createElement('nav');
	const homeButton = document.createElement('button');
	homeButton.textContent = 'Home';
	homeButton.addEventListener('click', (e) => {
		loadHome();
	});

	const menuButton = document.createElement('button');
	menuButton.textContent = 'Menu';
	menuButton.addEventListener('click', (e) => {
		loadMenu();
	});

	const contactButton = document.createElement('button');
	contactButton.textContent = 'Contact';
	contactButton.addEventListener('click', (e) => {
		loadContact();
	});

	nav.appendChild(homeButton);
	nav.appendChild(menuButton);
	nav.appendChild(contactButton);

	return nav;
};

const createMain = () => {
	const main = document.createElement('main');
	main.classList.add('main');
	main.setAttribute('id', 'main');
	return main;
};

const createFooter = () => {
	const footer = document.createElement('footer');
	footer.classList.add('footer');

	const copyright = document.createElement('p');
	copyright.textContent = 'Made by';

	const link = document.createElement('a');
	link.classList.add('github-link');
	link.href = 'https://github.com/melfag';

	const icon = document.createElement('i');
	icon.classList.add('fab');
	icon.classList.add('fa-github');
	link.appendChild(icon);

	footer.appendChild(copyright);
	footer.appendChild(link);

	return footer;
};

const initializeWebsite = () => {
	const content = document.getElementById('content');

	content.appendChild(createHeader());
	content.appendChild(createMain());
	content.appendChild(createFooter());
	loadHome();
};

initializeWebsite();
