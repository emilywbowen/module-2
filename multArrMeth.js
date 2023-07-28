var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]
// let byAge = peopleArray.sort((r1, r2)=> (r1.age > r2.age) ? 1: (r1.age<r2.age) ?-1: 0)

function olderThan17(persons){
    const ofAge = peopleArray.filter(person => person.age > 17);

    const sorted = ofAge.sort((a, b) => {
        return a.lastName.localeCompare(b.lastName);

    });

    const htmlList = sorted.map(person => {
        return `<li>${person.firstName} ${person.lastName} is ${person.age}</li>`;
    });
    return htmlList;
} 

const htmlList = olderThan17(peopleArray);

console.log(htmlList)


// function olderThan18SortedHTMLList(persons) {
//     const filteredPersons = persons.filter(person => person.age > 18);
    
//     const sortedPersons = filteredPersons.sort((a, b) => {
//       // Sort by last name in alphabetical order
//       return a.lastName.localeCompare(b.lastName);
//     });
    
//     const htmlList = sortedPersons.map(person => {
//       // Return each person's data in an HTML <li> element-like string
//       return `<li>${person.firstName} ${person.lastName} - Age: ${person.age}</li>`;
//     });
    
//     return htmlList.join(""); // Join all the HTML strings into a single string
//   }
  
//   // Example usage:
//   const persons = [
//     { firstName: "John", lastName: "Doe", age: 25 },
//     { firstName: "Jane", lastName: "Smith", age: 20 },
//     { firstName: "Michael", lastName: "Johnson", age: 30 },
//     { firstName: "Emily", lastName: "Williams", age: 15 },
//     { firstName: "Robert", lastName: "Brown", age: 22 }
//   ];
  
//   const htmlList = olderThan18SortedHTMLList(persons);
//   console.log(htmlList);