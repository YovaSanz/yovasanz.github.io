const languageToggle = document.querySelector('#language-toggle');
const textsToChange = document.querySelectorAll('[data-section]');

const changeLanguage = async ( language ) => {

    const languageJson = await fetch( `./assets/lang/${ language }.json` );
    const texts = await languageJson.json();

    for (const item of textsToChange) {
        const section = item.dataset.section;
        const value = item.dataset.value;

        item.textContent = texts[section][value];

    }

}

const resetToLang = ( { target } ) => {
    changeLanguage( target.value );
}

languageToggle.addEventListener('change', resetToLang );

