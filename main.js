// alert('Hello World!');
function top_up() {
    options();
}


//A function that holds the main opttions...
function options() {
    let value = prompt("Welcome! Enter:\na - Purchase Airtime\nb - Data Plans\nc - Cancel"); //Asks if user wants to purchase airtime...

    if (value == "a") {
        airtime();
    } else if (value == "b") {
        datap();
    } else if (value == "c") {
        alert("Thamks for coming.");
    }
    else {
        alert("Not a required option!");
    }
}


//A function that holds the airtime options...
function airtime() {
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
        options();
    }
}


//A function that holds the data plans
function datap() {
    let data = prompt("Enter:\na - My Offer\nb - Data Bundles\nc - #5000/22GB/30 days\nd - #3000/11GB/30 days\ne - #1500/6GB/7 days\nf - #500/2.5GB/2 days\ng - #700/1GB/Free Medical");

    if (data == "a") {
        offer();
    } else if (data == "b") {
        datab();
    } else if (data == "c") {
        let check = prompt("Are you sure?\na - Yes\nb - Nope"); //Checks to know if user is sure or not...

        if (check == "a") {
            alert("Your request for 22GB data plan for 30 days was successful!");
        } else {
            alert ("Recharge cancelled");
        }
    } else if (data == "d") {
        let check = prompt("Are you sure?\na - Yes\nb - Nope"); //Checks to know if user is sure or not...

        if (check == "a") {
            alert("Your request for 11GB data plan for 30 days was successful!");
        } else {
            alert ("Recharge cancelled");
        }
    } else if (data == "e") {
        let check = prompt("Are you sure?\na - Yes\nb - Nope"); //Checks to know if user is sure or not...

        if (check == "a") {
            alert("Your request for 6GB data plan for 7 days was successful!");
        } else {
            alert ("Recharge cancelled");
        }
    } else if (data == "f") {
        let check = prompt("Are you sure?\na - Yes\nb - Nope"); //Checks to know if user is sure or not...

        if (check == "a") {
            alert("Your request for 2.5GB data plan for 2 days was successful!");
        } else {
            alert ("Recharge cancelled");
        }
    } else {
        let check = prompt("Are you sure?\na - Yes\nb - Nope"); //Checks to know if user is sure or not...

        if (check == "a") {
            alert("Your request for 1GB data plan for and free medical was successful!");
        } else {
            alert ("Recharge cancelled");
        }
    }
}


//A function that holds the offers under the data plans...
function offer() {
    let amount = prompt("My Blue Wave Offer:\na - #500/2.5GB/2 days\nb - #1000/5GB/14 days\nc - More Data Offer\nd - Voice Offer\ne - Back\nf - Menu") //Brings up a list of amount to choose from...

    if (amount == "a") {
        let check = prompt("Are you sure?\na - Yes\nb - Nope"); //Checks to know if user is sure or not...

        if (check == "a") {
            alert("Your request for 2.5GB data plan for 2 days was successful!");
        } else {
            alert ("Request cancelled!");
        }
    } else if (amount == "b") {
        let check = prompt("Are you sure?\na - Yes\nb - Nope"); //Checks to know if user is sure or not...

        if (check == "a") {
            alert("Your request for 5GB data plan for 14 days was successful!");
        } else {
            alert ("Request cancelled!");
        }
    } else if (amount == "c") {
        mdo();
    } else if (amount == "d") {
        vo();
    } else if (amount == "e") {
        datap();
    } else {
        options();
    }
}


//A function just under offers...
function mdo() {
    let offers = prompt("a - #200/200MB/3 days\nb - #300/1GB/1 day\nc - Back\nd - Menu") //Brings up a list of amount to choose from...

    if (offers == "a") {
        let check = prompt("Are you sure?\na - Yes\nb - Nope"); //Checks to know if user is sure or not...

        if (check == "a") {
            alert("Your request for 200MB data plan for 3 days was successful!");
        } else {
            alert ("Request cancelled!");
        }
    } else if (offers == "b") {
        let check = prompt("Are you sure?\na - Yes\nb - Nope"); //Checks to know if user is sure or not...

        if (check == "a") {
            alert("Your request for 1GB data plan for 1 day was successful!");
        } else {
            alert ("Request cancelled!");
        }
    } else if (offers == "c") {
        offer();
    } else {
        options();
    }
}



function vo() {
    let offers = prompt("a - #100 gives #500 for calls\nb - #200 gives #1000 for calls\nc - #300 gives #1500 for calls\nd - Back\ne - Menu") //Brings up a list of amount to choose from...

    if (offers == "a") {
        let check = prompt("Are you sure?\na - Yes\nb - Nope"); //Checks to know if user is sure or not...

        if (check == "a") {
            alert("Your request for #100 airtime for #500 for calls was successful!");
        } else {
            alert ("Request cancelled!");
        }
    } else if (offers == "b") {
        let check = prompt("Are you sure?\na - Yes\nb - Nope"); //Checks to know if user is sure or not...

        if (check == "a") {
            alert("Your request for #200 airtime for #1000 for calls was successful!");
        } else {
            alert ("Request cancelled!");
        }
    } else if (offers == "c") {
        let check = prompt("Are you sure?\na - Yes\nb - Nope"); //Checks to know if user is sure or not...

        if (check == "a") {
            alert("Your request for #300 airtime for #1500 for calls was successful!");
        } else {
            alert ("Request cancelled!");
        }
    } else if (offers == "d") {
        offer();
    } else {
        options();
    }
}


//A function that holds the data bundles...
function datab() {
    let amount = prompt("My Blue Wave Offer:\na - Daily/Weekly Bundles\nb - Weekly Bundles\nc - Monthly Bundles\nd - More Data (Data++)\ne - Mega Bundles\nf - Big Data Plans\ng - Everyday ON plans\nh - Recharge from Bank\ni - Back\nj - Menu") //Brings up a list of amount to choose from...

    if (amount == "a") {
        let check = prompt("Are you sure?\na - Yes\nb - Nope"); //Checks to know if user is sure or not...

        if (check == "a") {
            alert("Your request for 2.5GB data plan for 2 days was successful!");
        } else {
            alert ("Request cancelled!");
        }
    } else if (amount == "b") {
        let check = prompt("Are you sure?\na - Yes\nb - Nope"); //Checks to know if user is sure or not...

        if (check == "a") {
            alert("Your request for 5GB data plan for 14 days was successful!");
        } else {
            alert ("Request cancelled!");
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
        let check = prompt("Are you sure?\na - Yes\nb - Nope"); //Checks to know if user is sure or not...

        if (check == "a") {
            alert("Your #1000 top-up was successful!");
        } else {
            alert ("Recharge cancelled");
        }
    } else if (amount == "g") {
        let check = prompt("Are you sure?\na - Yes\nb - Nope"); //Checks to know if user is sure or not...

        if (check == "a") {
            alert("Your #1000 top-up was successful!");
        } else {
            alert ("Recharge cancelled");
        }
    } else if (amount == "h") {
        let check = prompt("Are you sure?\na - Yes\nb - Nope"); //Checks to know if user is sure or not...

        if (check == "a") {
            alert("Your #1000 top-up was successful!");
        } else {
            alert ("Recharge cancelled");
        }
    } else if (amount == "i") {
        datap();
    } else {
        options();
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

















function isPrime(number) {
    // Handle special cases for numbers less than 2
    if (number <= 1) {
      return false;
    }
  
    // Check for divisibility from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false; // Not a prime number
      }
    }
  
    return true; // It's a prime number
  }
  
  // Example usage:
  console.log(isPrime(2)); // true
  console.log(isPrime(11)); // true
  console.log(isPrime(25)); // false

  


//   function isPrime(number) {
//       if (number <= 1) {
//         return false;
//       }
    
//       for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//           return false;
//         }
//       }
    
//       return true;
//     }
    
//     function listPrimesInRange(start, end) {
//       for (let number = start; number <= end; number++) {
//         if (isPrime(number)) {
//           // console.log(number);
//           alert(number);
//         }
//       }
//     }

    
//   let a = Number(prompt("Enter a number"));
//   let b = Number(prompt("Enter a number"));

//   listPrimesInRange(a,b);

function heyy() {    
    let a = Number(prompt("Enter a number")); //Prompts a user for an initial number...
    let b = Number(prompt("Enter a number")); //Prompts a user for an end number...
    
    function isPrime(number) {
        if (number <= 1) {
          return false;
        }
      
        for (let i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) {
            return false;
          }
        }
      
        return true;
      }
      
      function listPrimesInRange(initial, end) {
        const primeNumbers = []; // Initialize an array to store prime numbers...
      
        for (let number = initial; number <= end; number++) {
          if (isPrime(number)) {
            primeNumbers.push(number); // Add prime numbers to the array...
          }
        }
      
        if (primeNumbers.length > 0) {
          alert("The prime numbers between " + initial + " and " + end + " are: " + primeNumbers.join(", ")); //Outputs all the prime numbers sent between the initial and end...
        } else {
          alert("No prime numbers found between " + initial + " and " + end + "."); //For non-prime numbers..
        }
      }

    listPrimesInRange(a,b);
}

  
  
  // Call the function to list prime numbers between 1 and 100
  








  

  
  // Call the function to list prime numbers between 1 and 100 and alert the result
//   listPrimesInRange(1, 100);
  
  