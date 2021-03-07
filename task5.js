function vowelCheck(input){
    if(input == "a" || input == "i" || input == "u" || input == "e" 
        || input == "o" || input == "A" || input == "I" || input == "U" 
        || input == "E" || input == "O"){
            document.write(`${input} adalah huruf vokal`);
        } else { 
            document.write(`${input} BUKAN huruf vokal`)
        }
}
vowelCheck("A");