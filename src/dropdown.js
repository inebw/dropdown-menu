export default function dropdown(dropdownContainer) {
    const dropdownMenu = dropdownContainer;
    const dropdownButton = dropdownMenu.firstElementChild;
    const dropDownOptionsContainer = dropdownMenu.lastElementChild;
    
    dropdownButton.addEventListener('click', () => {
        dropDownOptionsContainer.classList.toggle('hidden');
    })
}