

//SHORT 
function checker(num) {
    var count = 0;
    if (num % 1 === 0) {
        count++;
        if (num % num === 0) { 
            count++;
        }
        console.log('count: ' + count)
        if (count === 2) {
            return true
        }
    }
    return false;

}


for (i = 0; i < 20; i++) {

    console.log('is Prime?: ' + checker(i));
}
