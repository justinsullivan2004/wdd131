// let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

const themeSelector = document.querySelector('select');

function changeTheme() {
    const theme = themeSelector.value;
    const body = document.body;

    if (theme === 'dark')
    {
        body.classList.add('dark');
        logo.src = 'dark-byui-logo.png';
    } else 
    {
        body.classList.remove('dark');
        logo.src = 'byui_logo.webp';
    }
}

themeSelector.addEventListener('change', changeTheme);