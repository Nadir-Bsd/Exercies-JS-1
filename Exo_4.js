

const button = document.getElementById("submit");


button.addEventListener("click", function(){
    const lastName = document.getElementById("firstname").value;
    const city = document.getElementById("city").value;
    const firstName = document.getElementById("lastname").value;
    
    alert(`Nom: ${lastName}\n Prénom: ${firstName}\n Ville: ${city}`)
    console.log(city);
});