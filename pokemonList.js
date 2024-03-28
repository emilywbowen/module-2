// const { default: axios } = require("axios");

const pokemon = axios.get("https://api.vschool.io/pokemon");

// gets all pokemon
// axios.get("https://api.vschool.io/pokemon")
//     .then(response =>{console.log(response.data.objects[0])});
    

// gets one pokemon
// axios.get("https://api.vschool.io/pokemon")
//     .then(response =>{console.log(response.data.objects[0].pokemon[8])});

axios.get("https://api.vschool.io/pokemon")
    .then(response => {
        for(let i = 0; i < response.data.objects.pokemon; i++) {
            const h1 = document.createElement("h1")
            h1.textContent = response.data.objects.pokemon[i].name
            document.body.appendChild(h1)
        }
    })