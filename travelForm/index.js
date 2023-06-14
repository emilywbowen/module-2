const form = document.custForm;

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const destList = [];

    const dietList = [];

    for(let i =0; i < form.destinations.length; i++){
        if(form.destinations[i].checked){
            destList.push(form.destinations[i].value)
        }
    }
    
    for(let i = 0; i < form.diet.length; i++){
        if(form.diet[i].checked){
            dietList.push(form.diet[i].value)
        }
    }
    
    console.log(form.firstName.value);
    console.log(form.secondName.value);
    console.log(form.age.value);
    console.log(form.gender.value);
    console.log(destList);
    console.log(dietList);
})

function confirmAlert(){
    var newLine = "\r"

    const destList = [];

    const dietList = [];

    for(let i =0; i < form.destinations.length; i++){
        if(form.destinations[i].checked){
            destList.push(form.destinations[i].value)
        }
    }
    
    for(let i = 0; i < form.diet.length; i++){
        if(form.diet[i].checked){
            dietList.push(form.diet[i].value)
        }
    }

    var msg = `Name: ${form.firstName.value} ${form.secondName.value}`;
    msg += newLine
    msg += `Age: ${form.age.value}`;
    msg += newLine
    msg += `Gender Preference: ${form.gender.value}`;
    msg += newLine
    msg += `Traveling to: ${destList}`;
    msg += newLine
    msg += `Dietary Restrictions: ${dietList}`;
    msg += newLine
    msg += `Enjoy your flight, ${form.firstName.value}! Thank you for choosing Quokka Airlines!`;
    alert(msg);
}

const button = document.custForm;

button.addEventListener("submit", confirmAlert);

