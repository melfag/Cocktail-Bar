const createMenu = () => {
	const menu = document.createElement('div');
	menu.classList.add('menu');

	let cocktailNames = [
		'Bloody Mary',
		'Margarita',
		'Mai Tai ',
		'Mimosa',
		'Mojito',
		'Gin Sour',
		'Gold Rush',
		'Cuba Libre'
	];

	for (let i = 0; i < 8; i++) {
		const menuGrid = document.createElement('div');
		menuGrid.classList.add('menu-grid');
		menuGrid.appendChild(createImg('/dist/cocktails/items/item' + `${i}` + '.png'));
		menuGrid.appendChild(createParagraph(cocktailNames[i]));

		menu.appendChild(menuGrid);
	}

	return menu;
};

const createImg = (src) => {
	const img = document.createElement('img');
	img.classList.add('menu-img');
	img.src = src;

	return img;
};

const createParagraph = (text) => {
	const paragraph = document.createElement('p');
	paragraph.classList.add('para-hover');

	paragraph.textContent = text;
	return paragraph;
};

const loadMenu = () => {
	const main = document.getElementById('main');
	main.textContent = '';
	main.appendChild(createMenu());
};

export default loadMenu;
