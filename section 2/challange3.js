let counter = 1
let blacklist = [
    "sex",
    "pornography",
    "insult",
    "racist",
    "offensive"
  ];
let blacklisted = []  
let list = []
// Search by ID
let checkElementById =  (list)=>{
    let searchById = parseInt(prompt("Enter the Item that you need, by Id please"))
    let foundItem = list.find(item => item.id === searchById);
    if(foundItem){
        return foundItem
    }
    else{
        return false;

    }
}
// Main Functions
// check if the product is in the list and if is avalailbe to sell 
function checkAvailableWithCost(list){
    console.table(list)
    let item = checkElementById(list)
    if(item){
        alert(`The item is ${JSON.stringify(item)}`)
        let cant = item.quantity > 0
        if(cant){
            alert(`The item has enough quantity to sell`)
            return item
        }   
        else{
            console.table(`The item has not enough quantity to sell`)
            return false
        }
        
    }
    else{
        alert("The Item doesn't exist ")
    }
    
}
// Function to sell 
function sellElement(list){

   let result = checkAvailableWithCost(list)
   console.table(result)
   if(result){
    let cant = parseInt(prompt(`How many quantity do you want to sell name ${JSON.stringify(result.name)} quantity ${JSON.stringify(result.quantity)}`))
    if(cant  <= result.quantity){
        result.quantity -= cant
        alert("The item has benn sold "+JSON.stringify(result))
    }
    else{
        alert("You can't sell more than the quantity of the item")
    }    
   }
   else{
        alert("Error, You can't sell this element")
        return
   } 
}
// Function to buy
function buyElement(list){

    console.table(list)
    let result = checkElementById(list)
   if(result){
    let cant = parseInt(prompt(`How many quantity do you want to buy name ${JSON.stringify(result.name)} quantity ${JSON.stringify(result.quantity)}`))
    if(cant  >  0  && !isNaN(cant)){
        result.quantity += cant
        alert("The item has been bought "+JSON.stringify(result))
    }
    else{
        alert("You must buy the quantity higher than 0")
    }    
   }
   else{
        alert("Error, You can't buy this element")
        return
   } 
}
function OrderProducts(list){
    let opcion =parseInt(prompt("What do you want to do?\n1:Order by price\nAny number:Order by Quantity"))
    if(!isNaN(opcion)){
        if(opcion ===1){
            let opcionOrder =parseInt(prompt("What do you want to do? \n1:Order by upward \nAny number:Order by falling"))
            //Order by price
            if(!isNaN(opcionOrder)){
                if(opcionOrder === 1){
                    let orderUpward = list.sort((valorA,valorB) => valorA.price - valorB.price)
                    console.log("Order ascending by price")
                    console.table(orderUpward)
                }
                else{
                    let orderFalling = list.sort((a,b) =>b.price - a.price )
                    console.log("Order falling by price")
                    console.table(orderFalling)
                }
            }
            else{
                alert("Enter a valid opcion")
            }
        }
        else{
            //Order by Quantity
            let opcionOrder =parseInt(prompt("What do you want to do? \n1:Order by upward \nAny number:Order by falling"))
            if(opcionOrder === 1){
                let orderUpward = list.sort((valorA,valorB) => valorA.quantity - valorB.quantity)
                console.log("Order ascending by quantity")
                console.table(orderUpward)
            }
            else{
                let orderFalling = list.sort((a,b) =>b.quantity - a.quantity )
                console.log("Order falling by quantyti")
                console.table(orderFalling)
            }
   
}
    }}
//Sum all Cost
function sumAllprice(list){
    let sum = list.reduce((sum , element) => sum + element.price,0)
    alert(`The total price ${sum}`)
    return sum
}
// Add Element
function addElement(list) {
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
// Duplicate element
function duplicateElement(list) {
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
// Check iventary
function checkInventory(list) {
    console.table(list)
    let checkNombre = prompt("Enter the name of the item")
    let searchName = list.filter(item => item.name.includes(checkNombre))
    if (searchName.length > 0) {
        console.table(searchName)
    }
    else {
        alert("the item there is not in the list")
        return false
    }
   
}
// Check, By cost  Range of price
function checkByCostMaxAndMin(list){
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

// Udate items from iventary
function updateIventary(list) {
    console.table(list)
    let searchById = parseInt(prompt("Enter the Item that you need to change by Id"))
    let flag = this
    if (!isNaN(searchById)) {
        let findId = list.find(item => item.id === searchById)
        if (findId) {
            console.table(findId)
            while (flag) {
                flag = confirm("Would you like to continue modifying properties?")
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
// Delete elements
function deleteElement(list) {
    console.table(list)
    let searchById = parseInt(prompt("Enter the Item Id that you want to delete "))
    if (!isNaN(searchById)) {
        let opcion = confirm(`Are you sure you want to delete this product? ${JSON.stringify(list.find(item => item.id === searchById))}?`)
        if (opcion) {
            list = list.filter((item) => item.id !== searchById)
            console.table(list)
            alert("The element has been delete")
            return  list
        }
        else {
            return list
        }
    }
}

// Black list
function checkBlackList(list){
    list.forEach(element => {
        if(blacklist.some(word => element.description.toLowerCase().includes(word))){
            blacklisted.push(Object.assign({},element))
            element.description = "***"
        }

    });
    alert("This is the blacklisted")
       console.table(blacklisted)
}

function results(list){
    alert("      Final Results     ")
    alert(" Please open the console to see the results")
    // Total Price
    let average = sumAllprice(list)
    // Expensive products 
    average  = average/list.length
    let expensiveProducts = list.filter(expensive => expensive.price > average)
    console.log("Expensive products")
    console.table(expensiveProducts)
    // Cheap products 
    let cheapProducts = list.filter(expensive => expensive.price < average)
    console.log("Cheap products")
    console.table(cheapProducts)
    // Products with more quantity
    let averageQuantity = list.reduce((sum ,quantity) => sum + quantity.quantity,0)
    averageQuantity = averageQuantity/list.length
    let quantityProductsPlus = list.filter(quantity => quantity.quantity > averageQuantity)
    console.log("Products with more quantity")
    console.table(quantityProductsPlus)
    let quantityProductsMin = list.filter(quantity => quantity.quantity < averageQuantity)
    console.log("cheap products")
    console.table(quantityProductsMin)  
    // Black listed
    alert("Be sure to add to the blacklist with opcion 9")
    checkBlackList(list)
    alert(`number of products with possible bad words in the description. ${blacklisted.length}`)

}
//for test
// let listaObjetos = [
//     { id: counter++, name: "lampara", price: 25.99, quantity: 0, description: "pornography" },
//     { id: counter++, name: "silla", price: 49.99, quantity: 0, description: "pornography pornography" },
//     { id: counter++, name: "mesa", price: 99.99, quantity: 15, description: "Mesa de sex con superficie de vidrio." },
//     { id: counter++, name: "libro", price: 15.50, quantity: 10, description: "Novela de misterio escrita por un autor famoso." },
//     { id: counter++, name: "planta", price: 9.99, quantity: 10, description: "Planta de interior fácil de cuidar." },
//     { id: counter++, name: "reloj", price: 39.99, quantity: 50, description: "Reloj de pared con diseño elegante." },
//     { id: counter++, name: "cuadro", price: 29.99, quantity: 10, description: "Cuadro decorativo insult para el salón." },
//     { id: counter++, name: "cojin", price: 12.99, quantity: 30, description: "Cojín decorativo con estampado floral." }
// ]

function main(){
    let flag = true

    while(flag){
        flag = confirm("Do you want to continue?")
        if(!flag)break;
        let = chooseOpcion = parseInt(prompt(`Select an option:
        1. Add Element to Inventory
        2. Check Inventory
        3. Update Inventory
        4. Delete Element from Inventory
        5. Sell Element
        6. Buy Element
        7. Sum All Prices in Inventory
        8. Order Products
        9. Add to Blacklist
        10. Show Results
        
        Enter the number corresponding to the option you want:`))
        
        if(!isNaN(chooseOpcion)){
            switch(chooseOpcion){
                case 1: addElement(list)
                        break;
                case 2: checkInventory(list)
                        break;
                case 3: updateIventary(list)
                        break;
                case 4: list =deleteElement(list)
                        break;
                case 5: sellElement(list)
                        break;
                case 6: buyElement(list)
                        break           
                case 7: sumAllprice(list)
                        break;
                case 8: OrderProducts(list)
                        break;
                case 9: checkBlackList(list)
                        break;
                case 10: // 
                        results(list)
                        break;             

            }
        }
        
        else{
            alert("Enter a valid opcion")

        }
    }
    
}

main()

