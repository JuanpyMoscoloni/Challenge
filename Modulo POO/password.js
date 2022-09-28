



const spanGenerar = document.getElementById("spanGenerar"); 
const spanValidar = document.getElementById("spanValidar");
const generar = document.getElementById("generate");
const validacion = document.getElementById("validate");


function esReFuerte() {
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    if (strongRegex.test($(this).val())) {
            alert("ok");
    } 
    return true;
};



class Password {
    constructor(long) {
        this.long = long;
    }
}

let newPassword = new Password(8);

function generatePasswordRand(newPassword) {
    var str =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
        "abcdefghijklmnopqrstuvwxyz0123456789@#$";

    var pass = "";

    for (i = 1; i <= newPassword.long; i++) {
        var char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char);
    }

    return pass;
}


function esFuerte() {
    var expreg = /^[A-Z]{2, }\s[a-z]{1, }\s\d{3, }$/;
    var m = document.getElementById("validate");

    if (expreg.test(m)) {
        alert("El password es seguro");
    } else {
        alert("El password no es seguro");
    }
}

