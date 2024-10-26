let pets= [];

function registerPet() {
    let name= document.getElementById('petName').value;
    let type= document.getElementById('petType').value;
    let color= document.getElementById('petColor').value;
    let newPet= {name,type,color};
    pets.push(newPet);
    displayPets();
}

function deletePet(index) {
    pets.splice(index, 1);
    displayPets();
}

function displayPets() {
    let petsContainer = document.getElementById('petsContainer');
    petsContainer.innerHTML = ";
    pets.forEach((pet,index) => {
        let petCar = document.createElement('div');
        petCard.className ='card';
        petCard.innerHTML = `
        <div class="card-body">
        <h3>${petname}</h3>
        <p>Type: ${pet.type}</p>
        <p>Color: ${pet.color}</p>
        <button type="button" onclick="deletePet($
        {index})">Delete</button>
        </div>
        `;
        petsContainer.appendChild(petCard);
    });
}
</script>
</body>
</html>
```








