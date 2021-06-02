let testArray = [1, 2, 1, 0];

printNumbersType(testArray)

function printNumbersType(array) {
    let nullElements = 0, evenElements = 0, oddElements = 0;

    array.forEach(function (element) {
        if (typeof (element) == "number") {
            if (element === 0)
                nullElements++;
            else
                element % 2 === 0 ? evenElements++ : oddElements++;
        }
    });
    console.log("Нулевых элементов - ", nullElements, "\nЧетных элементов - ", evenElements, "\nНечетных элементов - ", oddElements,);
}
