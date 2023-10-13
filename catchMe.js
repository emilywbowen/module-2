// 1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:
// 1b) Call the sum function inside a try block using "1" and "2" as arguments. Use console.log within a catch block to inform the user of the error.


function sum(x, y){
    //check data types first and throw error
    return x + y;
  }

try{
    if(sum(5, 7) != 7){
        throw ("Error duuude") 
    }
}

  catch(err){
    console.log(err)
  }

finally{
    console.log("Math is a headache sometimes.")
}

// 2a) Given a user object, write a function called login that takes a username and password as parameters. Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"
// 2b) Call the login function within a try block. In one instance use the correct credentials, and in another use incorrect ones. Make sure you see the appropriate message!


var user = {username: "sam", password: "123abc"};
function login(username, password){
try {
    if(username === "" || password === "") throw "You must enter a username and/or password";
    if(username !== "sam" || password!== "123abc") throw console.log("Username or password is incorrect");
       }

       catch(err) {console.log(err)
    }
       finally {console.log("Successful login");
    }

}
// login(user.username, user.password);

login("", "kjk");
 