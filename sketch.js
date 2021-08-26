function setup() {
    createCanvas(400, 400);
    let a = generatePattern(4, 8);
    let t = [1, 2, 3, 4];
    console.log(a);
    console.log(t);
    console.log("WHT: " + getPegs(a, t)[0]);
    console.log("RED: " + getPegs(a, t)[1]);
}

function draw() {
    background(220);
}

function generatePattern(len, n) {
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
        let temp = a[j];
        a[j] = a[i];
        a[i] = temp;
    }

    // cut the array to the required size
    a.splice(len);

    // return the generated pattern
    return a;
}

function getPegs(guess, target) {
    let red = 0;
    let white = 0;

    // count when a number appears in both sequences
    for (let i = 0; i < guess.length; i++) {
        for (let j = 0; j < target.length; j++) {
            if (guess[i] == target[j]) {
                white++;
            }
        }
    }

    // count when two numbers match in position
    for (let i = 0; i < guess.length; i++) {
        if (guess[i] == target[i]) {
            red++;
            // remove one white peg, as a red peg overrides the corresponding white one
            white--;
        }
    }

    // return the red and white pegs
    return [white, red];
}