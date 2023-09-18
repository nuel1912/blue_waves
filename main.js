// alert('Hello World!');

function top_up() {
    let value = prompt("Welcome! Enter:\na - Purchase Airtime\nb - Cancel"); //Asks if user wants to purchase airtime...

    if (value == "a") {
        let amount = prompt("Enter:\na - #50     b - #100\nc - #200     d - #500\ne - #1000     f - #2000\ng - Others...     h - Back") //Brings up a list of amount to choose from...

        if (amount == "a") {
            let check = prompt("Are you sure?\na - Yes\nb - Nope"); //Checks to know if user is sure or not...

            if (check == "a") {
                alert("Your #50 top-up was successful!");
            } else {
                alert ("Recharge cancelled");
            }
        } else if (amount == "b") {
            let check = prompt("Are you sure?\na - Yes\nb - Nope"); //Checks to know if user is sure or not...

            if (check == "a") {
                alert("Your #100 top-up was successful!");
            } else {
                alert ("Recharge cancelled");
            }
        } else if (amount == "c") {
            let check = prompt("Are you sure?\na - Yes\nb - Nope"); //Checks to know if user is sure or not...

            if (check == "a") {
                alert("Your #200 top-up was successful!");
            } else {
                alert ("Recharge cancelled");
            }
        } else if (amount == "d") {
            let check = prompt("Are you sure?\na - Yes\nb - Nope"); //Checks to know if user is sure or not...

            if (check == "a") {
                alert("Your #500 top-up was successful!");
            } else {
                alert ("Recharge cancelled");
            }
        } else if (amount == "e") {
            let check = prompt("Are you sure?\na - Yes\nb - Nope"); //Checks to know if user is sure or not...

            if (check == "a") {
                alert("Your #1000 top-up was successful!");
            } else {
                alert ("Recharge cancelled");
            }
        } else if (amount == "f") {
            let check = prompt("Are you sure?\na - Yes\nb - Nope");

            if (check == "a") {
                alert("Your #2000 top-up was successful!");
            } else {
                alert ("Recharge cancelled");
            }
        } else if (amount == "g") {
            let desired = Number(prompt("Enter your desired amount...")); //Prompts for if the user wants to enter a desired or specific amount...

            if (Number(desired) < 50) {
                alert("Purchase cannot be made."); //Ensures that purchase below #50 can't be made...
            } else {
                let check = prompt("Are you sure?\na - Yes\nb - Nope"); //Ensures purchase of #50 and above can be made...

                if (check == "a") {
                    alert("Your #" + Number(desired) + " top-up was successful!");
                } else {
                    alert ("Recharge cancelled");
                }
            }
        } else {
            let value = prompt("Welcome! Enter:\na - Purchase Airtime\nb - Cancel"); //Returns one back to the previous page...

            if (value == "a") {
                let amount = prompt("Enter:\na - #50     b - #100\nc - #200     d - #500\ne - #1000     f - #2000\ng - Back  ") //Brings up a list of amount to choose from...

                if (amount == "a") {
                    let check = prompt("Are you sure?\na - Yes\nb - Nope"); //Checks to know if user is sure or not...
        
                    if (check == "a") {
                        alert("Your #50 top-up was successful!");
                    } else {
                        alert ("Recharge cancelled");
                    }
                } else if (amount == "b") {
                    let check = prompt("Are you sure?\na - Yes\nb - Nope"); //Checks to know if user is sure or not...
        
                    if (check == "a") {
                        alert("Your #100 top-up was successful!");
                    } else {
                        alert ("Recharge cancelled");
                    }
                } else if (amount == "c") {
                    let check = prompt("Are you sure?\na - Yes\nb - Nope"); //Checks to know if user is sure or not...
        
                    if (check == "a") {
                        alert("Your #200 top-up was successful!");
                    } else {
                        alert ("Recharge cancelled");
                    }
                } else if (amount == "d") {
                    let check = prompt("Are you sure?\na - Yes\nb - Nope"); //Checks to know if user is sure or not...
        
                    if (check == "a") {
                        alert("Your #500 top-up was successful!");
                    } else {
                        alert ("Recharge cancelled");
                    }
                } else if (amount == "e") {
                    let check = prompt("Are you sure?\na - Yes\nb - Nope"); //Checks to know if user is sure or not...
        
                    if (check == "a") {
                        alert("Your #1000 top-up was successful!");
                    } else {
                        alert ("Recharge cancelled");
                    }
                } else if (amount == "f") {
                    let check = prompt("Are you sure?\na - Yes\nb - Nope");
        
                    if (check == "a") {
                        alert("Your #2000 top-up was successful!");
                    } else {
                        alert ("Recharge cancelled");
                    }
                } else if (amount == "g") {
                    let desired = Number(prompt("Enter your desired amount...")); //Prompts for if the user wants to enter a desired or specific amount...
        
                    if (Number(desired) < 50) {
                        alert("Purchase cannot be made."); //Ensures that purchase below #50 can't be made...
                    } else {
                        let check = prompt("Are you sure?\na - Yes\nb - Nope"); //Ensures purchase of #50 and above can be made...
        
                        if (check == "a") {
                            alert("Your #" + Number(desired) + " top-up was successful!");
                        } else {
                            alert ("Recharge cancelled");
                        }
                    }
                }
            } else if (value == "b") {
                alert("Thamks for coming.");
            } else {
                alert("Not a required option!");
            }
        }
    } else if (value == "b") {
        alert("Thamks for coming.");
    } else {
        alert("Not a required option!");
    }
}


//This part contains the assignment for Ternary Operator & Template Literals...
//A Temperature Converter...

//Converts Farenheit to Celcius
function tempC() {
    let temp = Number(prompt("NB: Figure has to be in °F\nEnter temperature..."));
    const celcius = (temp - 32) * (5/9);

    let temperature = (celcius >= 37) ? "it's hot" : "It's cold";

    // alert("Conversion to Cekius: " + celcius + "°C\n" + temperature);
    alert(`Conversion to Celcius: ${celcius}°C\n${temperature}`);
    // alert(temperature);
}

// temp();


//Converts Celcius to Farenheit
function tempF() {
    let temp = Number(prompt("NB: Figure has to be in °C\nEnter temperature..."));
    const farenheit = temp * (9/5) + 32;

    let temperature = (farenheit >= 98.6) ? "it's hot" : "It's cold"; //

    // alert("Conversion to Farenheit: " + celcius + "\n" + temperature);
    alert(`Conversion to Farenheit: ${farenheit}°F\n${temperature}`);
    // alert(temperature);
}

// temp();


//Converts Celcius to Kelvin
function tempK() {
    let temp = Number(prompt("NB: Figure has to be in °C\nEnter temperature..."));
    const kelvin = temp + 273.15;

    let temperature = (kelvin >= 310) ? "it's hot" : "It's cold";

    // alert("Conversion to Kelvin: " + celcius + "°C\n" + temperature);
    alert(`Conversion to Kelvin: ${kelvin}K\n${temperature}`);
    // alert(temperature);
}

// temp();


//Converts Kelvin to Celcius
function tempKC() {
    let temp = Number(prompt("NB: Figure has to be in K\nEnter temperature..."));
    const kelvinC = temp - 273.15;

    let temperature = (kelvinC >= 37) ? "it's hot" : "It's cold";

    // alert("Conversion to Kelvin: " + celcius + "°C\n" + temperature);
    alert(`Conversion to Celcius: ${kelvinC}°C\n${temperature}`);
    // alert(temperature);
}

// temp();


//Converts Kelvin to Farenheit
function tempKF() {
    let temp = Number(prompt("NB: Figure has to be in K\nEnter temperature..."));
    const kelvinF = (temp - 273.15) * (9/5) + 32;

    let temperature = (kelvinF >= 98.6) ? "it's hot" : "It's cold";

    // alert("Conversion to Kelvin: " + celcius + "°C\n" + temperature);
    alert(`Conversion to Farenheit: ${kelvinf}°F\n${temperature}`);
    // alert(temperature);
}

// temp();


//Converts Farenheit to Kelvin
function tempFK() {
    let temp = Number(prompt("NB: Figure has to be in K\nEnter temperature..."));
    const farenheitK = (temp - 32) * (5/9) + 273.15;

    let temperature = (farenheitK >= 98.6) ? "it's hot" : "It's cold";

    // alert("Conversion to Kelvin: " + celcius + "°C\n" + temperature);
    alert(`Conversion to Farenheit: ${farenheitK}K\n${temperature}`);
    // alert(temperature);
}

// temp();