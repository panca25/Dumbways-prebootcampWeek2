function fibNum(input){
    let outputNumb = [];
    // declare value untuk index 0 dan index 1 dari outputNumb
    outputNumb[0] = 0;
    outputNumb[1] = 1;
    for(let i = 2; i < input; i++){
        outputNumb[i] = outputNumb[i - 2] + outputNumb[i - 1];
    }
    document.write(outputNumb);
}
fibNum(10);