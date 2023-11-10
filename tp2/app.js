const init = {
    mode: "cors"
}
document.querySelector("#address").addEventListener("input", (event)=>{
    const address = event.target.value
    if (address.length > 3){
        fetch(`https://api-adresse.data.gouv.fr/search/?q=${address}`, init).then((response)=>{
            console.log(response)
            response.json().then((data)=>{
                const datalist = document.querySelector("#addresList")
                datalist.innerHTML = ''
                data.features.forEach((item)=>{
                    const option = new Option('', item.properties.label)
                    option.setAttribute('data-postal-code', item.properties.postcode)
                    option.setAttribute('data-city', item.properties.city)
                    datalist.appendChild(option)
                })
            })
        })
    }
})
document.querySelector("#address").addEventListener("blur", ()=>{
    document.querySelector("#cp").value = document.querySelector("#addresList").options[0].dataset.postalCode
    document.querySelector("#ville").value = document.querySelector("#addresList").options[0].dataset.city
})