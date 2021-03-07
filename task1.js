// Membuat function untuk mencetak pattern
// *
// **
// ***
// ****
// *****

let row;
let column;

for(row = 1; row <= 5; row ++){
    for(column = 1; column <= row; column++){
        document.write("*");
    }
    document.write("<br>")
}