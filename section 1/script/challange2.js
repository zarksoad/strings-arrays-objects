
let check_password = (password,flag) => {
    let list = []
    if (password.length < 8){
        list.push("should have at least 8 characters")
    }
    let number = /\d/.test(password)
    if(!number){
        list.push("should have at least 1 number")
    
    }
    let contains_letter = /[a-zA-z]/.test(password)
    if(!contains_letter){
        list.push("should have one letter")

    }
    let special_character = /[!@#$%^&*()+=_\-{}\[\]:;"'?><,.|/\\~`]/.test(password)
    if (!special_character){
        list.push("should have at least one special character")

    }
    if (list.length <1){
        alert("The password is safe")
        return false
    
    }    
    else{
        list.unshift("The password is not safe because Don't reach the foollowing:")
        alert(list)
        return true
    }
   
    }
 

let flag = true   
while(flag){   
    let password = prompt("Please enter your password")
    flag =  check_password(password,flag)
    if(!flag)break;
} 

alert("Success")