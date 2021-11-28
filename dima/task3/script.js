let firstInp = document.getElementById("firstOp");
let secondInp = document.getElementById("secondOp");
let button = document.getElementById("button");
button.addEventListener('click', () => {
    // console.log(firstInp.value);
    // console.log(secondInp.value);
    alert(`${aaPercentage(firstInp.value, secondInp.value)} %`)
    firstInp.value = ``;
    secondInp.value = ``;
})

const aaPercentage = (sequence, aminos) => {
    const proteins = sequence.split('');
    const len = proteins.length;
    const map = {};

    proteins.forEach(el => {
        if (aminos.indexOf(el) !== -1) {
            map[el] = map[el] ? map[el] + 1 : 1;
        }
    });

    const total = Object.values(map).reduce((acc, el) => acc + el, 0);
    const percentage = total / len * 100;

    return Math.round(percentage);
};
// console.log(aaPercentage("MSRSLLLRFLLFLLLLPPLP", ["M"]));
// alert(`${aaPercentage("MSRSLLLRFLLFLLLLPPLP", ["M"])} %`);
