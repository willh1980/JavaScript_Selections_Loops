console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let x = 1; x < 101; x++) {
    if (x % 2 == 1) {
      console.log(x);
    }
  }


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for(let y = 1; y < 200; y++) {
    if(y % 15 == 0){
        console.log("FIZZBUZZ")
    }

    else if(y % 3 == 0){
        console.log("FIZZ")
    }

    else if(y % 5 == 0){
        console.log("BUZZ")
    }

    else{
        console.log(y)
    }
}

