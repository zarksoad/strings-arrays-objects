let counter = 1
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
    console.table(list)
    let nameDuplicate = prompt("Enter the name of the articule that you want to duplicate")
    let search = list.find(item => item.name === nameDuplicate)

    if (!search) {
        alert("the item doesn't exist in the inventory")
        return
    }
    else {
        // duplicate element   
        let newName = `${search.name} copy` // lampara 
        let counterDuplicate = 1

        while (list.some(item => item.name === newName)) {
            newName = `${search.name} copy (${counterDuplicate})`;
            counterDuplicate++;
        }

        list.push({
            ...search,
            id: counter++, name: newName,
        })
    }
}
function checkInventory(list) {
    console.table(list)
    let checkNombre = prompt("Enter the name of the item")
    let searchName = list.filter(item => item.name.includes(checkNombre))
    if (searchName.length > 0) {
        console.table(searchName)
    }
    else {
        alert("the item there is not in the list")
    }
    let checkByCostMin = parseInt(prompt("Enter the cost the range of the cost min :"))
    let checkByCostMax = parseInt(prompt("Enter the cost the range of the cost max "))
    if (!isNaN(checkByCostMax) && !isNaN(checkByCostMin)) {
        let range = list.filter(item => item.cost >= checkByCostMin && item.cost <= checkByCostMax)
        if (range.length === 0) {
            alert("There are not articles with this range of price")
        }
        else {
            console.table(range)
        }
    }
}
function updateIventary(list) {
    console.table(list)
    let searchById = parseInt(prompt("Enter the Item that you need to change by Id"))
    let flag = this
    if (!isNaN(searchById)) {
        let findId = list.find(item => item.id === searchById)
        if (findId) {
            console.table(findId)
            while (flag) {
                flag = confirm("Would you like to continue modifyng properties?")
                if (!flag) break;
                let menu = parseInt(prompt("Enter the opcion to modify \n 1 to name \n 2 to price  \n 3 to quantity  \n 4 to description"))
                if (!isNaN(menu)) {
                    if (menu === 1) {
                        let newName = prompt("Enter the new name of the product")
                        findId.name = newName

                    }
                    else if (menu === 2) {
                        let newPrice = parseFloat(prompt("Enter the new price of the product"))
                        if (!isNaN(newPrice)) {
                            findId.price = newPrice
                            console.table(findId)
                        }
                        else {
                            alert("Enter a valid price")
                        }
                    }
                    else if (menu === 3) {
                        let newQuantity = parseFloat(prompt("Enter the new Quantity of the product"))
                        if (!isNaN(newQuantity)) {
                            findId.quantity = newQuantity
                            console.table(findId)
                        }
                        else {
                            alert("Enter a valid quantity")
                        }

                    }
                    else if (menu === 4) {
                        let newDescription = prompt("Enter the new description of the product")
                        findId.description = newDescription

                    }
                    else {
                        alert("Enter a valid opcion")
                    }
                }
                else {
                    alert("Enter a valid opcion")
                }

            }
            console.table(list)

        }
        else {
            alert("The ID doesn't exist in stock")
        }

    }
    else {
        alert("Please enter a valid Id")
    }



}

function deleteElement(list) {
    let searchById = parseInt(prompt("Enter the Item that you need to change by Id"))
    if (!isNaN(searchById)) {
        opcion = confirm(`Estas seguro que deseas eliminar el producto con sus propiedad ${searchById}?`)
        if (opcion == true) {
            let_new_list = list.filter((item) => item.id !== searchById)
        }
        else {
            return
        }
    }
}
// for test
const listaObjetos = [
    { id: counter++, name: "lampara", price: 25.99, quantity: 10, description: "." },
    { id: counter++, name: "silla", price: 49.99, quantity: 20, description: "." },
    { id: counter++, name: "mesa", price: 99.99, quantity: 5, description: "Mesa de centro con superficie de vidrio." },
    { id: counter++, name: "libro", price: 15.50, quantity: 30, description: "Novela de misterio escrita por un autor famoso." },
    { id: counter++, name: "planta", price: 9.99, quantity: 15, description: "Planta de interior fácil de cuidar." },
    { id: counter++, name: "reloj", price: 39.99, quantity: 8, description: "Reloj de pared con diseño elegante." },
    { id: counter++, name: "cuadro", price: 29.99, quantity: 12, description: "Cuadro decorativo para el salón." },
    { id: counter++, name: "cojin", price: 12.99, quantity: 25, description: "Cojín decorativo con estampado floral." }
]

deleteElement(listaObjetos)
console.table(listaObjetos);