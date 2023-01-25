const flights = [
    { id: 00, to: "New York", from: "Barcelona", cost: 700, scale: false },
    { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
    { id: 02, to: "Paris", from: "Barcelona", cost: 210, scale: false },
    { id: 03, to: "Roma", from: "Barcelona", cost: 150, scale: false },
    { id: 04, to: "London", from: "Madrid", cost: 200, scale: false },
    { id: 05, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
    { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
    { id: 07, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
    { id: 08, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
    { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false }
  ];


  const airlinesPro = () => {

    const admin = () => {

        adminActionPrompt = prompt("Teclea 1 para crear más vuelos y 2 para eliminarlos.");

        if (adminActionPrompt === null) {
            airlinesPro();
        };

        while (adminActionPrompt !== "1" && adminActionPrompt !== "2") {
            adminActionPrompt = prompt("¡Vaya! Ha habido un error. Por favor, introduce \"1\" o \"2\" como respuesta.");
        };

        while (flights.length === 16 && adminActionPrompt === "1") {
            alert("Has alcanzado el máximo de vuelos permitidos. Debes eliminar vuelos para poder continuar añadiendo más.");
            admin();
        }

        if (adminActionPrompt === "1") {

            const createNewFlight = () => {

                let toPrompt = prompt("Por favor, introduce el destino del vuelo.");
                let fromPrompt = prompt("Por favor, introduce el origen del vuelo.");
                let costPrompt = prompt("Por favor, introduce el precio del vuelo.");
                let scalePrompt = prompt("¿El vuelo tiene escala? Introduce \"True\" o \"False\".").toLowerCase();

                let scaleBoolean;
                if (scalePrompt === "true") {
                    scaleBoolean = true;
                } else {
                    scaleBoolean = false;
                };

                const flight = {
                    id: flights.length,
                    to: toPrompt,
                    from: fromPrompt,
                    cost: costPrompt,
                    scale: scaleBoolean,
                }

                flights.push(flight);

                let moreFlightsPrompt = prompt("¿Quieres crear más vuelos? Introduce \"Sí\" o \"No\".").toLowerCase();

                const createMoreFlights = () => {

                    if (moreFlightsPrompt === "sí" || moreFlightsPrompt === "si") {
                        console.log(newFlight());
                    }

                    return admin();
                }

                return createMoreFlights();
            }

            createNewFlight();
            console.log(flights);
        }

        if (adminActionPrompt === "2") {
            let flightId = +prompt("Por favor, introduce el ID del vuelo que quieras eliminar");

            for (let i = 0; i < flights.length; i++) {
                if (flightId === flights[i].id) {
                    flights.splice(flightId, 1);
                };
                if (flightId < flights[i].id) {
                    flights[i].id -= 1;
                };
            };
        }

        return flights;
    };


    const user = () => {

        let pricePrompt = +prompt("Por favor, introduce un precio");
        const equalPriceFlights = [];

        for (let i = 0; i < flights.length; i++) {

            let flightDescription = `ID: ${flights[i].id} || ${flights[i].from} -> ${flights[i].to} || Precio: ${flights[i].cost}€`;
            const withScale = `Escala: Sí`;
            const withNoScale = `Escala: No`;

            if (pricePrompt >= flights[i].cost) {
                if (flights[i].scale === false) {
                    equalPriceFlights.push(`${flightDescription} || ${withNoScale}`);
                } else {
                    equalPriceFlights.push(`${flightDescription} || ${withScale}`);
                }
            }
        };

        if (equalPriceFlights.length !== 0) {
            console.log(`Vuelos a ${pricePrompt}€ o menos: \n${equalPriceFlights.join("\n")}`);
        } else {
            console.log("Lo sentimos, a ese precio no tenemos ningún vuelo disponible.");
        };

        let searchMorePrompt = String(prompt("¿Quieres buscar más vuelos? Introduce \"Sí\" o \"No\".")).toLowerCase();

        const searchMore = () => {

            if (searchMorePrompt === "sí" || searchMorePrompt === "si") {
                console.log(user());
            }

            return airlinesPro();
        }

        return searchMore();
    };

    
    const askRoleQuestion = () => {

        let roleAnswer = prompt("Por favor, identifícate como ADMIN o USER");

        if (roleAnswer === null) {
            alert("¡Vaya! Ha habido un error. Por favor, introduce \"ADMIN\" o \"USER\" como respuesta.");
            return askRoleQuestion();
        } else if (roleAnswer.toLowerCase() !== "admin" && roleAnswer.toLowerCase() !== "user") {
            alert("¡Vaya! Ha habido un error. Por favor, introduce \"ADMIN\" o \"USER\" como respuesta.");
            return askRoleQuestion();
        } 
        
    } 

    let roleQuestion = askRoleQuestion();

    if (roleQuestion === "admin") {
        console.log(admin());
    } else {
        console.log(user())
    };

    return flights;
  }

  console.log(airlinesPro());

