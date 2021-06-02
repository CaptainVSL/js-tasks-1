let customMap = new Map();

customMap.set(1, "number")
    .set(2, "number2")
    .set(3, "number3")
    .set(4, "number4")

customMap.forEach((value, key) => {
        console.log(`Ключ - ${key}, Значение - ${value}`);
    });
