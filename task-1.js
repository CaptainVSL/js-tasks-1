let value = prompt();
value = +value;
if (typeof (value)=="number" && !isNaN(value)){
    console.log(value%2===0?"Четное":"Нечетное");
} else {
    console.log("Упс, кажется, вы ошиблись");
}
