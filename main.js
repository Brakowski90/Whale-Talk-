// Whale Talk 

// Step 1 
var input = 'i love the ocean';

// Step 2 

const vowels = ['a','e','i','o','u'];

// Step 3 

var resultArray = [ ];

// Step 4 

for (let i = 0; i < input.length; i++) {
    // console.log(`Iterator position: ${i}`); 
       console.log(input[i]); 
       if(input === 'e'){
        resultArray.push(input[i]);
       }
    for (let j = 0; j < vowels.length; j++) {
        console.log (vowels [j]);
        // console.log(`Iterator position: ${j}`); 
        if (input[i] === vowels[j]){
            resultArray.push(input[i]);
        }

    }   

}

console.log(resultArray);

const resultString = resultArray.join(' ').toUpperCase();

console.log(resultString); // I O E E O E A
