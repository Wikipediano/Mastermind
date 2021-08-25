function setup() {
    createCanvas(400, 400);
    let a = generatePattern(8);
    // console.log(a);
}

function draw() {
    background(220);
}

function generatePattern(n) {
    // declare array of length n
    let a = [];

    // initialize array values to be numbers in order
    for (let i = 0; i < n; i++) {
        a[i] = i + 1;
    }

    // shuffle the array to create a random pattern
    // Fisher-Yates Suffle Algorithm
    for (let i = n - 1; i > 0; i--) {
        let j = int(random(0, i + 1));
        // console.log(j);
        let temp = a[j];
        a[j] = a[i];
        a[i] = temp;
    }

    //return the generated pattern
    return a;
}