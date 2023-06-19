const form = document.quote;

// separate multiplier functions for goomba(5), bombs(7), and cheep(11)

function calcGoom(goomba){
    let goombaRes = goomba * 5;
    return goombaRes;
}

function calcBomb(bomb){
    let bombRes = bomb * 7;
    return bombRes;
}

function calcCheep(cheep){
    let cheepRes = cheep * 11;
    return cheepRes;
}

// event listener that includes a multiplier function for baddies

form.addEventListener("submit", function(event){
    event.preventDefault();
    goomba = parseInt(form.goomba.value);
    bomb = parseInt(form.bomb.value);
    cheep = parseInt(form.cheep.value);
    goombaRes = calcGoom(goomba, 5);
    bombRes = calcBomb(bomb, 7);
    cheepRes = calcCheep(cheep, 11);

    const sum = goombaRes + bombRes + cheepRes;
    const h1 = document.createElement("h1");

    h1.textContent = sum

    document.getElementById("total").appendChild(h1);

    console.log(sum)
})

// addition function for total of all to append to the total cost upon submit