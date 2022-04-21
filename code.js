// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

//plusOne
function plusOne(num) {
    if(typeof num === "number") {
        return 5;
    }
    return 0;
}

//sayHello
function sayHello(name) {
    if (typeof name === "string") {
        return "Hello, " + name + "!";
    } else if (typeof name === undefined || Boolean) {
        return "Hello, World!";
    }
}
    // if(typeof name === undefined || Boolean) {
    //     return "Hello, World!";
    // }else if(name === true) {
    //     return "Hello, World!";
    // }else if(name === false) {
    //     return "Hello, World!";
    // }else {
    //     return "Hello, " + name + "!";
    // }

//     if (name === "Alex") {
//         return "Hello, Alex!";
//     } else if (name === "Pat") {
//         return "Hello Pat!";
//     } else {
//         return "Hello, Jane!";
//     }
// }
