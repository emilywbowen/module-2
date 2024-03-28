// const { default: axios } = require("axios")



// import axios from "axios"; (comes in react)
const list = document.getElementById('list')
const form = document.form
// const { default: axios } = require("axios");

function getData(){
    axios.get("https://api.vschool.io/emily.bowen/todo")
    .then(res =>displayData(res.data))
    .catch(err => console.log(err))
}

// function to get todos

function displayData(todos){

        clearList()

        for(let i = 0; i < todos.length; i++){
            const todo = todos[i]
            
            const div = document.createElement('div')
            const h1 = document.createElement("h1");
            const img = document.createElement("img");
            const h4 = document.createElement("h4");
            const checkbox = document.createElement("input")
            const deleteButt = document.createElement("button")

            h1.textContent = todo.title;
            img.src = todo.imgUrl;
            h4.textContent = todo.description;
            checkbox.type = "checkbox";
            deleteButt.textContent = "delete"
        
            deleteButt.addEventListener("click", function(){
                axios.delete(`https://api.vschool.io/emily.bowen/todo/${todo._id}`)
                .then(()=> getData())
                .catch(err => console.log(err))
            })

            let completed
            if(todo.completed){
                completed = false 
                h1.style.textDecoration = "line-through"
                checkbox.checked = true
            } else{
                completed = true
            }
            checkbox.addEventListener("click", function(){
                axios.put(`https://api.vschool.io/emily.bowen/todo/${todo._id}`, {completed: completed})
                .then(()=> getData())
                .catch(err => console.log(err))
            })

            div.appendChild(h1);
            div.appendChild(img);
            div.appendChild(h4);
            div.appendChild(checkbox);
            div.appendChild(deleteButt);
            div.setAttribute("class", "todo")
            list.append(div)
            //create event listeners for delete and check
           
    }
}

function clearList(){
    while(list.firstChild){
       list.removeChild(list.firstChild) 
    }
}

form.addEventListener("submit", function(event){
    event.preventDefault()
    var newTodo = {
        title: form.title.value,
        description: form.description.value,
        imgUrl: form.image.value,
    };
    axios.post("https://api.vschool.io/emily.bowen/todo", newTodo)
    .then(() => getData())
    .catch(err => console.log(err))
})

getData()