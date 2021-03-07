// membuat function untuk memunculkan bilangan prima
// diantara bilangan 1 dan bilangan 2

function checkPrime(number1, number2){
    // untuk memproses nomer antara input1 dan input 2
    for(let processNumber = number1 ; processNumber <= number2; processNumber++){
        let isPrime = true;
        // untuk me-loop nomor pembagi
        for(let divider = 2; divider < processNumber; divider++){
            // mengecek apakah nomor itu prima atau bukan
            if(processNumber % divider == 0){
                isPrime = false;
                break;
            }
        }
        if (processNumber > 1 && isPrime == true){
            document.write(processNumber + " ");
        }
        
    }
}
checkPrime(30,50);