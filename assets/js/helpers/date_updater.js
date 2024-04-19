function updateCopyright() {
	const currentYear = new Date().getFullYear();

	const copyrightElement = document.querySelector('#date__copy');

	copyrightElement.textContent = `© ${currentYear}, `;
}

export default updateCopyright;
