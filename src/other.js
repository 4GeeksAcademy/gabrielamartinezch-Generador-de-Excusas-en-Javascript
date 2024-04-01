let excuseArrays = [who, action, what, when,];

let excuse = excuseArrays.map((elementoDelArray) => {
    return elementoDelArray[Math.floor(Math.random() * elementoDelArray.lenght)];
});

return excuse.join (" ");