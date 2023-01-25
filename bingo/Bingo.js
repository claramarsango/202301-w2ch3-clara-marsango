/* Realiza un programa que simule un Bingo. 
Cuando se ejecute, pedirá el nombre del jugador y deberá guardarse. 
Durante el primer turno se mostrará un cartón con 15 números (excluyendo el 0 siempre), 
para pasar al siguiente turno el usuario deberá confirmar mediante confirm() visualizándose otro número, 
si coincide con alguno de los existentes en el cartón, cambiará por una "X" o un 0. 
El cartón se mostrará, al final de cada turno, con los cambios efectuados, 
indicándole al usuario qué número se ha encontrado. 
El programa deberá preguntar al usuario al inicio de cada turno si desea continuar, 
en caso de que se continúe, seguirá el mismo patrón que hasta el momento.

Por supuesto, cuando todos los números de una misma linea estén en "X", mostrará un mensaje "LINEA!",
 pero la ejecución seguirá, el juego solo acabará cuando todos los números estén a "X".

Cuando el juego concluya, deberá decirle al usuario en cuantos turnos se ha completado el cartón. 
Por último, deberá preguntar si desea volver a jugar. */

const bingoCard = [];
const lineOne = [];
const lineTwo = [];
const lineThree = [];
const usedCartonNumbers = [];
const comparedNumbers = [];
let round = 0;
let lineOneMatched = false;
let lineTwoMatched = false;
let lineThreeMatched = false;
let stillPlaying = true;
let calledBingo = false;


const greeting = () => {
    let userName = prompt("¡Bienvenid@ al Bingo! Por favor, introduce tu nombre para comenzar.");
        while (userName === null || userName === "") {
            userName = prompt("¡Vaya! Ese nombre no es válido. Por favor, inténtalo de nuevo.");
        }
        return alert(`¡Hola ${userName}! Comienza el juego.`);
};


const randomCartonNumber = () => {
    let randomNumber = Math.ceil(Math.random() * 99);
    
    while(usedCartonNumbers.includes(randomNumber)) {
        randomNumber = Math.ceil(Math.random() * 99);
    }

    usedCartonNumbers.push(randomNumber);

    return randomNumber;
}

const generateBingoCard = () => {

    while(bingoCard.length < 15) {
        const randomNumber = randomCartonNumber();
        const bingoCardNumber = {number: randomNumber, matched: false};
        bingoCard.push(bingoCardNumber);
        
    }
    return bingoCard;
}

const sortBingoCardLines = () => {

    bingoCard.forEach((element) => {
        if (lineOne.length < 5) {
            lineOne.push(element.number);
        } else if (lineTwo.length < 5) {
            lineTwo.push(element.number);
        } else if (lineThree.length < 5) {
            lineThree.push(element.number);
        }
    })
}

const showBingoCard = () => {

    return (`
    Este es tu cartón:

    Línea 1: ${lineOne.join(", ")}
    Línea 2: ${lineTwo.join(", ")}
    Línea 3: ${lineThree.join(", ")}
    `)
}

const emptyLines = () => {

    lineOne.length = 0;
    lineTwo.length = 0;
    lineThree.length = 0;

}

const chooseBingoCard = () => {

    let goodCarton;

    do {
        bingoCard.length = 0;
        usedCartonNumbers.length = 0;
        emptyLines();
        generateBingoCard();
        sortBingoCardLines();
        goodCarton = confirm(`${showBingoCard()} \n¿Te gusta este cartón? Pulsa \"OK\" para continuar o \"Cancel\" para recibir uno nuevo`);
    } while (goodCarton !== true)

}

const randomNumberToCompare = () => {
    let randomNumber = Math.ceil(Math.random() * 99);
    
    while(comparedNumbers.includes(randomNumber)) {
        randomNumber = Math.ceil(Math.random() * 99);
    }

    comparedNumbers.push(randomNumber);

    return randomNumber;
}

let currentNumber = randomNumberToCompare();

const showCurrentNumber = () => {

    round++;
    return alert(`Ronda: ${round} || Número: ${currentNumber}`);
}

const checkMatch = () => {

    bingoCard.forEach((element) => {
        if(currentNumber === element.number) {
            element.number = "X";
            element.matched = true;
            emptyLines();
            sortBingoCardLines();
            alert(`¡Tienes el número ${currentNumber}!`);
        }
    })
}

const checkLine = () => {

    const numberIsMatched = (number) => number === "X";

    if(lineOne.every(numberIsMatched) && !lineOneMatched) {
        lineOneMatched = true;
        alert("¡Has conseguido la 1ª línea!");
    } else if (lineTwo.every(numberIsMatched) && !lineTwoMatched) {
        lineTwoMatched = true;
        alert("¡Has conseguido la 2ª línea!");
    } else if (lineThree.every(numberIsMatched) && !lineThreeMatched){
        lineThreeMatched = true;
        alert("¡Has conseguido la 3ª línea!");
    }
}

const checkBingo = () => {

    const numberIsMatched = (element) => element.number === "X";

    if(bingoCard.every(numberIsMatched)) {
        calledBingo = true;
        alert("¡¡¡Bingo!!!");
    }

    stillPlaying = false;
}


const oneRound = () => {

    let showNextNumber;

    do {
        currentNumber = randomNumberToCompare();

        showCurrentNumber();
        checkMatch();
        checkLine();
        checkBingo();

        showNextNumber = confirm(`${showBingoCard()} \nPulsa \"OK\" para continuar y \"Cancel\" para salir del juego.`);
    } while(showNextNumber === true && calledBingo === false);

    if(showNextNumber === false) {
        stillPlaying = false;
        if(calledBingo === true) {
            alert(`Has completado la partida en ${round} turnos. ¡Felicidades!`);
        }
        alert("¡Hasta luego! Gracias por jugar");
    }
}


const playAgain = () => {

    let newGame;

    if(stillPlaying === false) {
        newGame = confirm("¿Quieres empezar otra partida? Pulsa \"OK\" o \"Cancel\"");
    }

    if(newGame === true) {
        round = 0;
        comparedNumbers.length = 0;

        playBingo();
    }
}

const playBingo = () => {
    greeting();
    chooseBingoCard();
    oneRound();
    playAgain();
}


playBingo();