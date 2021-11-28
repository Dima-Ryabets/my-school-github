function findOdd(arr) {
    var result, num = 0;

    arr = arr.sort();
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            num++;
        } else {
            num++;
            if (num % 2 != 0) {
                result = arr[i];
                break;
            }
        }
    }
    return result;
}

let array = [1, 3, 5, 6, 6, 3, 1];
console.log(findOdd(array));

alert(array);
alert(findOdd(array));
