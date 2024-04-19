
var users = {}
function check_user(user,objeto,email){
    let key = Object.keys(objeto);
    let num = 1
    while(key.includes(user + num)){
        num++;
    }
    objeto[user + num] = email;
    alert(`Usuario agregado al final: ${user + num}`);
}
let flag = true
while(flag){
    flag = confirm("Would you like to add a new user?")
    if (!flag) break;
    let full_name = prompt("Enter your first name and your last name ").toLowerCase().split(" ")
    let slice_name = full_name[0].slice(0,3)
    let slice_last_name = full_name[1].slice(0,3)
    let user_name = slice_name.concat(slice_last_name)
    let email = "@myDomain.com"
    if(users[user_name]){
        check_user(user_name,users,email)
        
    }
    else{
        users[user_name] = email
        alert(`El usuario ha sido creado ${user_name + email}`)

    }

     
}

alert(JSON.stringify(users))