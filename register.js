console.log("register.js");
let pets = [];//empty array

//create pets
let pet1 = {
    name:"Butch",
    age:99,
    gender:"Male",
    service:"Grooming"
}
let pet2 = {
    name:"Cujo",
    age:99,
    gender:"Male",
    breed:Mixes,
    service:"Grooming"
}
let pet3 = {
    name:"Zeus",
    age:99,
    gender:"Male",
    breed:"Camarian",
    service:"Grooming"
}



pets.push(pet1,pet2,pet3);//adding into the array

function displayNames(){
    //display pet names
    for(let i=0;i<pets.length;i++){
        document.getElementById("petNames").InnerHTML+= '<p> Name: ${pets[i].name}</p>';
    } 

//hint: use a for loop and travel the array
//hint: use brute force
//Hint: length the amount of elements on the array
}