var password = 'DunderMifflin9'   
// if(password.length >= 10) {
//     console.log("Password met min")
// } else {
//      console.log("Password did not meet")
//     }
 



if(password.length >= 10 && /\d/.test(password) && /[a-zA-Z]/.test(password)) {
    console.log(`                                                
    ________ __   ____  ____  ____   ______ ______
   /  ___/  |  \_/ ___\/ ___\/ __ \ /  ___//  ___/
   \___ \|  |  /\  \__\  \__\  ___/ \___ \ \___ \ 
  /____  >____/  \___  >___  >___  >____  >____  >
       \/            \/    \/    \/     \/     \/ 
                                                  
                                                  
                                                  `)
}else {
    console.log("failure")
}

// function containsSpecialChars(password) {
//     const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/ 
//     return specialChars.test(password)
// }
// Does password start with a capital letter ? 

function startsWithCapital(password){
    return /[A-Z]/.test(password.charAt(0))
}
console.log(startsWithCapital(password))

if(password.length < 15) {
    console.log(`Your password needs a minimum of 15 characters`)
} else if (password.search(/[a-z]/) < 0) {
    console.log(`Your password needs a lower case letter`)
} else if(password.search(/[0-9]/) < 0) {
    console.log(`Your password needs a nmumber`)
}else if(password.search(/[' ']/) > 0) {
        console.log(`error contains space`)
}else {
    console.log(`Success`)
}


// password.split('')
// console.log(password)
 
// var numPassword = password.split('')
// console.log(numPassword)

