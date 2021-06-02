
printNumberType(11); // Простое
printNumberType(4); //Составное
printNumberType(1001); //Ошибка

function printNumberType(number){
    if (number>1000 || number < 2) {
        console.error("Данные неверны");
        return;}
    else if (number === 2) {
        console.log('Простое число');
        return;}

    let i = 2;
    const limit = Math.sqrt(number);
    while (i <= limit) {
        if (number % i++ === 0) {
            console.log('Составное число');
            return;
        }
    }
    console.log('Простое число');
}
