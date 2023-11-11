const init = {
    mode: "cors"
}
const buttonContainer = document.querySelector('#button-container');

fetch('http://localhost:3000/formations/', init).then((response) => {
    console.log(response)
    response.json().then((data) => {
        data.forEach(formation => {
            const button = document.createElement('button');
            button.setAttribute('class', 'btn btn-light');
            button.textContent = formation.title;
            button.addEventListener('click', () => {
                fetch(`http://localhost:3000/formations/${formation.id}`, init).then((response) => {
                    response.json().then((data) => {
                        console.log(data);
                        const formationInfo = document.querySelector('#formation-info');
                        const titleInfo = document.querySelector('#title');
                        const priceInfo = document.querySelector('#price');
                        const descriptionInfo = document.querySelector('#desc');
                        const addressInfo = document.querySelector('#add');
                        const assignedInfo = document.querySelector('#assigned');
                        titleInfo.textContent = data.title;
                        priceInfo.textContent = data.price;
                        descriptionInfo.textContent = data.description;
                        addressInfo.textContent = data.localisation.address;
                        if (data.assigned.id != undefined){
                            console.log(data.assigned);
                            assignedInfo.textContent = "Oui";
                        }
                        else {
                            console.log(data.assigned);
                            assignedInfo.textContent = "Non";
                        }
                    });
                });
                // console.log(formation.calendar);
            });
            buttonContainer.appendChild(button);
        });
    });
});
