// a program that generates a multiplication table for a given number using a for loop.


// multiplicationTable name function takes a single argument "num"
function multiplicationTable(num) {
    // check parameter if number 
    if (!isNaN(num)) {
        // for loop iterates from 1 to 10
        for (let iteration = 1; iteration <= 10; iteration++) {
            // multiplying the current iteration number by the input "num"
            let product = iteration * num;
            // consoling the product in the format "num x iteration = product"
            console.log(num, 'x', iteration, " = ", product);
        }
    }
    // check parameter if not number
    else {
        console.log('Please enter a number');
    }
}

// function call by passing single argument
multiplicationTable(3)

