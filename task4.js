function multipleTable(number){
    for(let multiple = 1; multiple <= 10; multiple++){
        let result = number * multiple;
        document.write(`${number} * ${multiple} = ${result} <br>`);
    }
}
multipleTable(5);


// if(input == 'a' || input == "i" || input == "u" || input == "e" 
//     || input == "o" || input == "A" || input == "I" || input == "U" 
//     || input == "E" || input == "O"){
//         document.write(`${input} adalah huruf vokal`);
//     } else { 
//         document.write(`${input} BUKAN huruf vokal`)
//     }