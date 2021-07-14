const createHome = () => {
	const home = document.createElement('div');
	const textFlex = document.createElement('div');

	textFlex.classList.add('flex-home');
	home.classList.add('home');

	textFlex.appendChild(createH1('Fancy a Cocktail?'));
	textFlex.appendChild(createH2('You are in the right place!'));

	home.appendChild(textFlex);

	return home;
};

const createH1 = (text) => {
	const h1 = document.createElement('h1');
	h1.classList.add('home-children');
	h1.textContent = text;
	return h1;
};

const createH2 = (text) => {
	const h2 = document.createElement('h2');
	h2.classList.add('home-children');
	h2.textContent = text;
	return h2;
};

const loadHome = () => {
	const main = document.getElementById('main');
	main.textContent = '';
	main.appendChild(createHome());
};

export default loadHome;
