// comentário de linha;
/*comentário de n linhas
teste
teste
*/

//function soma() {
//    return a + b; //15
//}


//soma(10, 5);


//console.log("Hello World!");

function returnEvenValues(array){
    let evenNums = [];
    for (let i = 0; i < array.length;i++) {
    if (array[i] % 2 === 0) {
        evenNums.push(array[i]);
    } else {
        console.log(`${array[i]} não é par`);
    }
    }
    console.log('Os numeros pares são:',evenNums);
}

let array = [1, 2, 3, 4, 5, 7, 8];

returnEvenValues(array);
