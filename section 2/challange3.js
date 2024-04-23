let inventary = []
let counter = 1
let contador = 1

function add_element(list) {
    const name = prompt("Enter the name of the article").toLowerCase().trim()
    const cost = parseInt(prompt("Enter the price of the article"))
    const amount = parseInt(prompt("Enter the amount of the article"))
    const description = prompt("Enter the description of the article").toLowerCase().trim()
    if (isNaN(cost) || isNaN(amount)) {
        alert("Enter a valid number in cost and amount")
        return
    }

    list.push({
        id: counter++, name: name,
        price: cost,
        quantity: amount,
        description: description
    })

}
function duplicate(list) {
    let name_duplicate = prompt("Enter the name of the articule that you want to duplicate")
    let search = list.find(item => item.name === name_duplicate)
    contador
    if (!search) {
        alert("the item doesn't exist in the inventory")
        return
    }
    else {
        // duplicate element    
        let newName = `${search.name} copy` // lampara 
        let counterDuplicate = 1

        while(list.some(item => item.name === newName)){
            newName = `${search.name} copy (${counterDuplicate})`;
            counterDuplicate++;
        }
        
        list.push({
            id: counter++, name: newName,
            price: search.cost,
            quantity: search.quantity,
            description: search.description
        })

    }



}

function check_inventory(list){
    alert(JSON.stringify(list))
    console.log(list)
    let checkNombre = prompt("Enter the name of the item")
    let searchName = list.filter(item => item.name.includes(checkNombre))
    if(searchName){
        alert(JSON.stringify(searchName))
    }
    let checkByCost = prompt("Enter the cost the range of the cost separete by ',' example: (min)100,(max)200 :").split(',')
    let range = list.filter(item => item.cost >= 20 && item.cost <= 50)
    alert(JSON.stringify(range))
   



    

}




// for test
const listaObjetos = [
    { id: counter++, name: "lampara ", cost: 25.99, quantity: 10, description: "." },
    { id: counter++, name: "lampara ", cost: 25.99, quantity: 10, description: "." },
    { id: counter++, name: "lampara", cost: 25.99, quantity: 10, description: "." },
    { id: counter++, name: "lampara", cost: 25.99, quantity: 10, description: "." },
    { id: counter++, name: "silla", cost: 49.99, quantity: 20, description: "." },
    { id: counter++, name: "mesa", cost: 99.99, quantity: 5, description: "Mesa de centro con superficie de vidrio." },
    { id: counter++, name: "libro", cost: 15.50, quantity: 30, description: "Novela de misterio escrita por un autor famoso." },
    { id: counter++, name: "planta", cost: 9.99, quantity: 15, description: "Planta de interior fácil de cuidar." },
    { id: counter++, name: "reloj", cost: 39.99, quantity: 8, description: "Reloj de pared con diseño elegante." },
    { id: counter++, name: "cuadro", cost: 29.99, quantity: 12, description: "Cuadro decorativo para el salón." },
    { id: counter++, name: "cojin", cost: 12.99, quantity: 25, description: "Cojín decorativo con estampado floral." }
];




check_inventory(listaObjetos)


