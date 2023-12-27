const iceCreamInput = document.getElementById('iceCreamInput');
const addIceCreamButton = document.getElementById('addIceCream');
const showIceCreamButton = document.getElementById('showIceCream');
const showIceCreamListButton = document.getElementById('iceCreamOutput');
let iceCreamList = [];

addIceCreamButton.addEventListener('click', function(){
    const iceCreamName = iceCreamInput.ariaValueMax.trim();
    if (iceCreamName) {
        iceCreamList.push(iceCreamName);
        iceCreamInput.value = '';
        alert('Ice cream type added successfully!');
    } else {
        alert('Please enter a valid ice cream name.');
    }
});

showIceCreamButton.addEventListener('click', function(){
    const iceCreamListText = iceCreamList.length > 0 ? iceCreamList.join(', ') : 'No ice cream added yet.';
    iceCreamOutput.innerHTML = `<h3>Ice Cream List : ${iceCreamListText}</h3>`;
});