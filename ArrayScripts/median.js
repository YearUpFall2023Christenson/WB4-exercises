

let a1 = [ 80, 83, 86, 92, 100];
let a2 = [ 80, 83, 86, 87, 92, 100];



function getMedian(numbers){
    let isOdd = ((numbers.length % 2) == 1);
  //  console.log(isOdd);    
    if(isOdd){
        //odd
        let addressOfMiddle = (a1.length - 1) / 2;
        //console.log(addressOfMiddle);
        return numbers[addressOfMiddle];

    }
    else{
        //even
        let firstAddress =  Math.floor((numbers.length - 1 ) / 2);
        let secondAddress = firstAddress + 1;

        let average = (numbers[firstAddress] + numbers[secondAddress]) / 2;
        return average;
    }


   // console.log();
}



console.log(getMedian(a1));

console.log(getMedian(a2));