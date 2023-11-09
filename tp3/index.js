fetch('http://localhost:3000/products/3').then((response) =>{
    response.json().then((data) =>{
        console.log(data)
    })    
}); 