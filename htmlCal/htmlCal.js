const form = document["calcForm"]



function calcSum(add1, add2){

    let sumRes = add1 + add2;
    return sumRes;


}
// console.log(calcSum(10, 5))


form.addEventListener("submit", function(event){
    event.preventDefault();
    add1 = parseInt(form.add1.value);
    add2 = parseInt(form.add2.value); 
    sumRes = calcSum(add1, add2);

    const sum = sumRes;
    const h1 = document.createElement("h1");

    h1.textContent = sum

    document.getElementsByTagName("body")[0].append(h1);

    console.log(sumRes)
})

function calcDiff(sub1, sub2){
    let diffRes = sub1 - sub2;
    return diffRes;
    
}

form.addEventListener("submit", function(event){
    event.preventDefault();
    sub1 = parseInt(form.sub1.value);
    sub2 = parseInt(form.sub2.value);
    diffRes = calcDiff(sub1, sub2);

    const diff = diffRes;
    const h1 = document.createElement("h1");

    h1.textContent = diff

    document.getElementsByTagName("body")[0].append(h1);

    console.log(diffRes)

})

function calcProd(mul1, mul2){
    let prodRes = mul1 * mul2;
    return prodRes;
}

form.addEventListener("submit", function(event){
    event.preventDefault();
    mul1 = parseInt(form.mul1.value);
    mul2 = parseInt(form.mul2.value);
    prodRes = calcProd(mul1, mul2);

    const prod = prodRes;
    const h1 = document.createElement("h1");

    h1.textContent = prod

    document.getElementsByTagName("body")[0].append(h1);

    console.log(prodRes)
})

//I can make another function to append the results and not have NaN as a result appended, but I'm moving on