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
            console.log(data);
            const addressList = document.querySelector('#addresList');
            const postalCode = document.querySelector('#cp');
            const city = document.querySelector('#ville');
            addressList.innerHTML = '';
            postalCode.innerHTML = '';
            city.innerHTML = '';
            data.features.forEach((feature) => {

                const add = new Option("", feature.properties.label);
                addressList.appendChild(add);
                const cp = new Option("", feature.properties.postcode);
                postalCode.appendChild(cp);
                const ville = new Option("", feature.properties.city);
                city.appendChild(ville);
                
                
                
                
            });
        }); 
    })
});  
addressInput.addEventListener("blur", () => {
    console.log("blur");

    addressInput.value = feature.properties.name;
    postalCode.value = feature.properties.postcode;
    city.value = feature.properties.city;
}
);  