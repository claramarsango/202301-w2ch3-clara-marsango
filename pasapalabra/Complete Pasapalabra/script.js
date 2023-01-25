/* Tu juego debería hacer una pregunta por cada letra del alfabeto, al final del juego, 
y habiendo respondido todas las letras, deberá indicarle al usuario cuantas letras ha fallado y cuantas ha acertado. 
Si el usuario responde con "pasapalabra" el juego deberá estar preparado para entender que en ese momento, 
el usuario no responderá esa pregunta, y no estará acertada ni fallada, la dejará para la siguiente ronda. 
El juego deberá, cuando finalize, mostrar un ranking de usuarios con el nombre y ordenados por cantidad de letras acertadas. */

const questions = [
    {
      letter: "a",
      answer: "abducir",
      status: 0,
      question:
        "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
    },
    {
      letter: "b",
      answer: "bingo",
      status: 0,
      question:
        "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
    },
    {
      letter: "c",
      answer: "churumbel",
      status: 0,
      question: "CON LA C. Niño, crío, bebé",
    },
    {
      letter: "d",
      answer: "diarrea",
      status: 0,
      question:
        "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
    },
    {
      letter: "e",
      answer: "ectoplasma",
      status: 0,
      question:
        "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
    },
    {
      letter: "f",
      answer: "facil",
      status: 0,
      question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
    },
    {
      letter: "g",
      answer: "galaxia",
      status: 0,
      question:
        "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
    },
    {
      letter: "h",
      answer: "harakiri",
      status: 0,
      question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
    },
    {
      letter: "i",
      answer: "iglesia",
      status: 0,
      question: "CON LA I. Templo cristiano",
    },
    {
      letter: "j",
      answer: "jabali",
      status: 0,
      question:
        "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
    },
    {
      letter: "k",
      answer: "kamikaze",
      status: 0,
      question:
        "CON LA K. Persona que se juega la vida realizando una acción temeraria",
    },
    {
      letter: "l",
      answer: "licantropo",
      status: 0,
      question: "CON LA L. Hombre lobo",
    },
    {
      letter: "m",
      answer: "misantropo",
      status: 0,
      question:
        "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
    },
    {
      letter: "n",
      answer: "necedad",
      status: 0,
      question: "CON LA N. Demostración de poca inteligencia",
    },
    {
      letter: "ñ",
      answer: "señal",
      status: 0,
      question:
        "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
    },
    {
      letter: "o",
      answer: "orco",
      status: 0,
      question:
        "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
    },
    {
      letter: "p",
      answer: "protoss",
      status: 0,
      question:
        "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
    },
    {
      letter: "q",
      answer: "queso",
      status: 0,
      question:
        "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
    },
    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },
    {
      letter: "s",
      answer: "stackoverflow",
      status: 0,
      question: "CON LA S. Comunidad salvadora de todo desarrollador informático",
    },
    {
      letter: "t",
      answer: "terminator",
      status: 0,
      question:
        "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
    },
    {
      letter: "u",
      answer: "unamuno",
      status: 0,
      question:
        "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
    },
    {
      letter: "v",
      answer: "vikingos",
      status: 0,
      question:
        "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
    },
    {
      letter: "w",
      answer: "sandwich",
      status: 0,
      question:
        "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
    },
    {
      letter: "x",
      answer: "botox",
      status: 0,
      question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
    },
    {
      letter: "y",
      answer: "peyote",
      status: 0,
      question:
        "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
    },
    {
      letter: "z",
      answer: "zen",
      status: 0,
      question:
        "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
    },
];


const scoreText = document.querySelector(".score-container__text");
const timerText = document.querySelector(".timer-container__text");

const welcomeDisplay = document.querySelector(".welcome-display");
const playerNameInput = document.querySelector(".player-name");
const startGameButton = document.querySelector(".start-game-button");

const playingGameDisplay = document.querySelector(".playing-display");
const letterTitleText = document.querySelector(".playing-display__title");
const letterDescriptionText = document.querySelector(".playing-display__description");
const playerInput = document.querySelector(".player-answer");
const skipButton = document.querySelector(".skip-button");
const submitAnswerButton = document.querySelector(".submit-button");
const endGameButton = document.querySelector(".end-game-button");

const endGameDisplay = document.querySelector(".end-display");
const endGameTitleText = document.querySelector(".end-display__title");
const finalScore = document.querySelector(".end-display__score");
const endGameMessage = document.querySelector(".end-display__message");
const playAgainButton = document.querySelector(".play-again-button");

const letters = document.querySelectorAll(".letters-container__letter");

const rankedPlayersList = document.querySelector(".players-score-list");


let unansweredQuestions = questions.map((letter) => letter);
let stillPlaying = true;
let score = 0;
const rankingArray = [];
let maxTime = 130;
let gameOverByTime = false;
let playerName;


const setLetterElementsAttributes = () => {

  letters.forEach((letter, index) => {
    const letterValue = questions[index].letter;
    letter.setAttribute("value", letterValue);
  
    const answerValue = questions[index].answer;
    letter.setAttribute("answer", answerValue);
  })

  return;
}

const checkInput = () => {

  playerName = playerNameInput.value;

  if (playerNameInput.value !== "" && !(playerNameInput.value).includes(" ")) {
    startGameButton.disabled = false;
  } 
  if (playerNameInput.value === "") {
    startGameButton.disabled = true;
  }
}

const startTimer = () => {

  const countdown = () => {
    maxTime--;
    timerText.textContent = maxTime;

    if (maxTime !== 0) {
      startTimer();
    } else {
      gameOverByTime = true;
      stillPlaying = false;
      showEndGameDisplay();
      return;
    }
  }

  const timer = setTimeout(countdown, 1000); 
  const endTimer = clearTimeout(timer);
  
  if (maxTime !== 0 && stillPlaying === true) {
    setTimeout(countdown, 1000); 
  } else {
    endTimer;
    showEndGameDisplay();
    return;
  }

}

const showLetterDescription = (letter) => {

  const splitLetter = (letter.question).split(".");

  letterTitleText.textContent = splitLetter[0];
  letterDescriptionText.textContent = splitLetter[1];

  return;
}

const checkAnswer = (letter, userAnswer) => {

  let formattedAnswer = String(userAnswer).toLowerCase();

  if (formattedAnswer === letter.answer) {
    score++;
    return;
  } 
  if (formattedAnswer === "pasapalabra") {
    unansweredQuestions.push(letter)
    return;
  }
    
}

const changeLetterColour = (currentLetter, playerAnswer) => {

  let letterBeingPlayed;

  letters.forEach((element) => {
    if (element.getAttribute("value") === currentLetter.letter) {
      return letterBeingPlayed = element;
    }
  })

  if (playerAnswer === letterBeingPlayed.getAttribute("answer")) {
    letterBeingPlayed.classList.add("correct");
    return;
  }
  if (playerAnswer !== letterBeingPlayed.getAttribute("answer") && playerAnswer !== "pasapalabra") {
    letterBeingPlayed.classList.add("wrong");
    return;
  }
}

const updateDisplay = (playerAnswer) => {

  const currentLetter = unansweredQuestions[0];

  checkAnswer(currentLetter, playerAnswer);
  changeLetterColour(currentLetter, playerAnswer);
  scoreText.textContent = score;
  unansweredQuestions.shift();
  playerInput.value = "";

  const nextLetter = unansweredQuestions[0];

  if (unansweredQuestions.length >= 1) {
    return showLetterDescription(nextLetter);
  } else {
    stillPlaying = false;
    return showEndGameDisplay();
  }

}

const sortRankingArray = () => {

  const player = {name: playerName, score: score};


  rankingArray.push(player);

  rankingArray.sort((a, b) => {

    const onePlayerScore = a.score;
    const anotherPlayerScore = b.score;

    if (onePlayerScore > anotherPlayerScore) {
      return -1;
    } else if (onePlayerScore < anotherPlayerScore) {
      return 1;
    } else {
      return 0;
    }
  });
}

const resetRankingLists = () => {

  const rankingListItems = document.querySelectorAll("li");

  if (rankingListItems.length !== 0) {
    rankingListItems.forEach((item) => {
      item.remove();
    })
  }

  return;
}

const addPlayerToRanking = () => {

  sortRankingArray();
  resetRankingLists();

  for (let i = 0; i < rankingArray.length; i++) {
    const player = rankingArray[i];

    const rankedPlayer = document.createElement("li");

    rankedPlayer.className = "players-list-item";

    rankedPlayer.textContent = `${player.name}: ${player.score} puntos`;
    rankedPlayersList.appendChild(rankedPlayer);
  }

  return;
}

const showEndGameDisplay = () => {

  playingGameDisplay.classList.add("display-none");
  endGameDisplay.classList.remove("display-none");

  endGameTitleText.textContent = "¡fin de la partida!";
  finalScore.textContent = `Has conseguido adivinar ${score} palabras`;
  
  if (unansweredQuestions.length === 0 || gameOverByTime === true) {
    addPlayerToRanking();
  }

}

const newGame = () => {
  unansweredQuestions = questions.map((letter) => letter);
  stillPlaying = true;
  score = 0;
  scoreText.textContent = score;
  maxTime = 130;
  timerText.textContent = maxTime;
  gameOverByTime = false;
  playerNameInput.value = "";
  playerInput.value = "";
  welcomeDisplay.classList.remove("display-none");
  endGameDisplay.classList.add("display-none");
  startGameButton.disabled = true;

  letters.forEach((letter) => {
    if (letter.classList.contains("correct")) {
      letter.classList.remove("correct");
    }
    if (letter.classList.contains("wrong")) {
      letter.classList.remove("wrong");
    }
  })
}

const addEventListeners = () => {
  
  addEventListener("keyup", (event) => {
    event.preventDefault();
    checkInput();
  })
  
  startGameButton.addEventListener("click", (event) => {
    event.preventDefault();
    welcomeDisplay.classList.add("display-none");
    playingGameDisplay.classList.remove("display-none");
    showLetterDescription(unansweredQuestions[0]);
    startTimer();
  })
  
  submitAnswerButton.addEventListener("click", (event) => {
    event.preventDefault()
    const playerAnswer = playerInput.value;
    updateDisplay(playerAnswer);
  })
  
  skipButton.addEventListener("click", (event) => {
    event.preventDefault();
    const playerAnswer = "pasapalabra";
    updateDisplay(playerAnswer);
  })
  
  endGameButton.addEventListener("click", (event) => {
    event.preventDefault();
    stillPlaying = false;
    showEndGameDisplay();
  })
  
  playAgainButton.addEventListener("click", (event) => {
    event.preventDefault();
    newGame();
  })
}

setLetterElementsAttributes();
addEventListeners();

