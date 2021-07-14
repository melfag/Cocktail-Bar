const createContact = () => {
	const contact = document.createElement('div');
	contact.classList.add('contact');
	contact.appendChild(createInfoSection());
	contact.appendChild(createForm());
	return contact;
};

const createH2 = (text) => {
	const h2 = document.createElement('h2');
	h2.textContent = text;
	return h2;
};

const createParagraph = (text) => {
	const paragraph = document.createElement('p');
	paragraph.textContent = text;
	return paragraph;
};

const createInputElement = (inputType) => {
	const input = document.createElement('input');
	input.setAttribute('type', inputType);
	return input;
};

const createLabelElement = (labelName) => {
	const label = document.createElement('label');
	label.textContent = labelName;
	return label;
};

const createInfoSection = () => {
	const div = document.createElement('div');
	div.classList.add('contact-section');

	div.appendChild(createParagraph('Phone: 555 444 333'));
	div.appendChild(createParagraph('Location: Boston Str 65'));

	return div;
};

const createForm = () => {
	const form = document.createElement('form');
	form.classList.add('form');

	const textarea = document.createElement('textarea');
	textarea.setAttribute('name', 'message');
	textarea.rows = '7';

	const submitButton = document.createElement('button');
	submitButton.classList.add('submit-btn');
	submitButton.textContent = 'Submit';

	form.appendChild(createParagraph('Have a question?'));

	form.appendChild(createLabelElement('Name:'));
	form.appendChild(createInputElement('text'));

	form.appendChild(createLabelElement('Email:'));
	form.appendChild(createInputElement('email'));

	form.appendChild(createLabelElement('Question:'));
	form.appendChild(textarea);

	form.appendChild(submitButton);

	return form;
};

const loadContact = () => {
	const main = document.getElementById('main');
	main.textContent = '';
	main.appendChild(createContact());
};

export default loadContact;
