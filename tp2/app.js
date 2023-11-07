// const addressInput = document.querySelector('#address');
// addressInput.addEventListener('input', (event) => {
//     console.log(event.target.value);
// });


const addressInput = document.querySelector('#address');
addressInput.addEventListener('input', (event) => {
    if (event.target.value.length < 3) {
        return;
    }
    fetch("https://api-adresse.data.gouv.fr/search/?q=" + event.target.value).then((response) => {
        response.json().then((data) => {
            const addressList = document.querySelector('#addresList');
            addressList.innerHTML = '';
            data.features.forEach((feature) => {
                const option = new Option("", feature.properties.label);
                addressList.appendChild(option);
                addressInput.addEventListener("blur", () => {
                    console.log(feature.properties.label);
                });
            });
        }); 
    })
});    
