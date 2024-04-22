
// calculator

let grades = prompt("Enter the grades separate by ','").split(",")

const average = grades.reduce((accumalator,element)=>accumalator + element/grades.length,0)
const approve = grades.filter(grade => grade >= 70)
const faile = grades.filter(grade => grade < 70)
const grade = grades.sort()

alert(`The grade average is ${average}`)
alert(`The max grade is ${grade[grades.length -1]}`)
alert(`The min grade is ${grade[0]}`)
alert(`The approve grades  are ${approve}`)
alert(`The failed grades are ${faile}`)

