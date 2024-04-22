// average grades 

let grades = prompt("Enter the grades separate by ','").split(",")

const average = grades.reduce((acummalator,element) =>acummalator +element /grades.length,0)

alert(`the average grades is ${average}`)
