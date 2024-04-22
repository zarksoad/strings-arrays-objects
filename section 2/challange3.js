let inventary = []
let counter_duplicate = 1
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
function duplicate(list,) {
    let name_duplicate = prompt("Enter the name of the articule that you want to duplicate")
    let search = list.find(item => item.name === name_duplicate)
    contador
    if (!search) {
        alert("the item doesn't exist in the inventory")
        return
    }
    else {
        // duplicate element    
        let new_name = `${search.name} copy` // lampara 
        let new_search = list.find(items => items.name === new_name)  // True 
        if (new_search) {
            alert(`The ${search.name} already exists`)
            if (contador === 1) { counter_duplicate = 1 };
            contador += 1
            alert(`contador ${contador}`)
            new_name += `(${counter_duplicate++})`
            alert(`new name ${new_name}`)
            list.push({
                id: counter++, name: new_name,
                price: search.cost,
                quantity: search.quantity,
                description: search.description

            })

        }
        else {

            list.push({
                id: counter++, name: new_name,
                price: search.cost,
                quantity: search.quantity,
                description: search.description
            })
            contador = 1

        }
    }



}

// for test
const listaObjetos = [
    { id: counter++, name: "lampara", price: 25.99, quantity: 10, description: "." },
    { id: counter++, name: "silla", price: 49.99, quantity: 20, description: "." },
    // { id: counter++, name: "mesa", price: 99.99, quantity: 5, description: "Mesa de centro con superficie de vidrio." },
    // { id: counter++, name: "libro", price: 15.50, quantity: 30, description: "Novela de misterio escrita por un autor famoso." },
    // { id: counter++, name: "planta", price: 9.99, quantity: 15, description: "Planta de interior fácil de cuidar." },
    // { id: counter++, name: "reloj", price: 39.99, quantity: 8, description: "Reloj de pared con diseño elegante." },
    // { id: counter++, name: "cuadro", price: 29.99, quantity: 12, description: "Cuadro decorativo para el salón." },
    // { id: counter++, name: "cojin", price: 12.99, quantity: 25, description: "Cojín decorativo con estampado floral." }
];


duplicate(listaObjetos)
duplicate(listaObjetos)
duplicate(listaObjetos)
duplicate(listaObjetos)
duplicate(listaObjetos)
duplicate(listaObjetos)
duplicate(listaObjetos)
duplicate(listaObjetos)
duplicate(listaObjetos)
duplicate(listaObjetos)
duplicate(listaObjetos)
duplicate(listaObjetos)




alert(JSON.stringify(listaObjetos))


