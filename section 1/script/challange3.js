let check_email = email => {
    let symbol = /[@.]/.test(email)

    if (!symbol) {
        alert("The email is not able")
    }
    else {
        let split_email = email.split("@")
        if (split_email[1].includes(".")) {
            let split_domain = split_email[1].split(".")
            if (split_domain[0] === "") {
                alert("The email do not reach the conditions")
            } else {
                alert("the email reach the conditions")
            }

        }



    }

}



let email = prompt("Please enter your email address:")
check_email(email);

