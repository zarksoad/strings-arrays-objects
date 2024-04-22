let create_events = list => {
    let flag = true
    let identicator = 1
    let new_event = {}
    while(flag){
        let event = prompt("Enter name").toLowerCase().trim()
        let date_event = prompt("Enter date").toLowerCase().trim()
        let description_event = prompt("Enter description").toLowerCase().trim()
        new_event = {
            id: identicator,
            name: event,
            date: date_event,
            description: description_event
            }
        alert(JSON.stringify(new_event))   
        list.push(new_event)
        identicator++;
        flag = confirm("Deseas agregar un nuevo objeto")
        if (!flag) break;   
        };
       
    }

let check_events = list => {
    confirmation = confirm("Would like you like to see all The events")
    if (confirmation === true){
     alert(JSON.stringify(list))}

    let search_by_name =  prompt("Enter the event than you want to search by name").toLowerCase().trim()
    // list events with values
   list.forEach(element => {
        if(element.name.includes(search_by_name)){
            alert(JSON.stringify(element))
        }
   });
   
}

let update_event = list =>{

    let event = parseInt(prompt("Enter the ID of the event"))
    list.forEach(element => {
        if(element.id === event){
            alert(JSON.stringify(element))
            let opcion = parseInt(prompt("Choose the property you want to change by Id: \n 1 to modify the name \n 2 to modify the date \n 3 to modify the description \n Any other key to exit"));
            if (opcion == 1){
                element.name = prompt("Enter the name")
            }
            else if(opcion == 2){
                element.date = prompt("Enter the date")

            }
            else if(opcion == 3){
                element.descripcion = prompt("Enter the descripcion")

            }
            else if(opcion == 4){
                element.id = parseInt(prompt("Enter the descripcion"))

            }
            else{
                return
            }
            
            
        }
        
    });
}

let delete_event = list =>{
    let event = parseInt(prompt("Enter the ID of the event"))
    list.forEach(element => {
        if(element.id === event){
            alert(JSON.stringify(element))
            let opcion = parseInt(prompt("Are you sure you want to delete the element, \npress 1 to delete the event \n press 2 to finish"));
            if (opcion === 1){
                new_list =list.filter(element => element.id !== event);
                alert("The element has been delete")
            }
            else{
                return
            }
            
            
        }

        
    });
}

function main(list){
  
    let flag = true
    while (flag) {
        let opcion = parseInt(prompt(
            "Enter the option that you want to choose: \n1. Create Events\n2. Check Events\n3. Update Event\n4. Delete Event"));
        if (opcion === 1) {
            create_events(list);
        } else if (opcion === 2) {
            check_events(list);
        } else if (opcion === 3) {
            update_event(list);
        } else if (opcion === 4) {
            delete_event(list);
            list = new_list
        } else {
            message = "You have press an invalid opcion";
            
        }
        flag = confirm("Would you like to continue")
        if(!flag)break;
    }

}

 let lista = [
    {
        id:1,
        nombre: "objeto1",
        date: "2021-12-31",
        descripcion: "descripción del objeto 1"
    },
    {
        id: 2,
        nombre: "objeto2",
        date: "2022-01-15",
        descripcion: "descripción del objeto 2"
    },
    {
        id: 3,
        nombre: "objeto3",
        date: "2022-02-28",
        descripcion: "descripción del objeto 3"
    }
];

list = []
main(list)
alert("Elementos finalizados" +JSON.stringify(list))
