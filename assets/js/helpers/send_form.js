const formulario = document.querySelector('#form');
const btn_form = document.querySelector('#btn_form');
const modal = document.querySelector('#modal');
const closeButton = document.querySelector('#btn_close-modal');

const serviceID = 'default_service';
const templateID = 'template_2tm20ps';

function openModal() {
	modal.open = true;
}

function closeModal() {
	modal.open = false;
	resetForm();
}

function resetForm() {
	document.getElementById('from_name').value = '';
	document.getElementById('email_id').value = '';
	document.getElementById('affair').value = '';
	document.getElementById('message').value = '';

	document.getElementById('from_name').classList.remove('input__danger');
	document.getElementById('email_id').classList.remove('input__danger');
	document.getElementById('affair').classList.remove('input__danger');
	document.getElementById('message').classList.remove('input__danger');
}

function inputRequired(inputs) {
	
	for (const input of inputs) {
		if (input.value === '') {
			input.classList.add('input__danger')
		}else{
			input.classList.remove('input__danger')
		}
	}
}

function sendEmail(e) {
	e?.preventDefault();
	btn_form.value = 'Enviando...';

	const inputs = [document.getElementById('from_name'), document.getElementById('email_id'), document.getElementById('affair'), document.getElementById('message')]

	const params = {
		name: inputs[0].value,
		email: inputs[1].value,
		subject: inputs[2].value,
		message: inputs[3].value,
	};

	if (params.name && params.email && params.subject && params.message) {

		emailjs.sendForm(serviceID, templateID, this)
		.then(() => {
			openModal();
			btn_form.value = 'Enviar';
			setTimeout(() => {
				closeModal()
			}, 1000)
		}, (err) => {
			btn_form.value = 'Enviar';
			console.log('Error Send Email :>> ', JSON.stringify(err));
		});
	}else{
		inputRequired(inputs)
	}
}

closeButton.addEventListener('click', closeModal);
formulario.addEventListener('submit', sendEmail);

export default sendEmail;
