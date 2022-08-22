function checkIfVowel(char) {
    return 'aeiou'.includes(char);
}

let vCount = new Map();
function countVowels(text) {
    for (let char of text) {
        let lower = char.toLowerCase();
        // console.log(lower);

        if(checkIfVowel(lower)) {
            if(vCount.has(lower)) {
                vCount.set(lower, vCount.get(lower) + 1);
            } else {
                vCount.set(lower, 1);
            }
        }
    }
}

const userInput = 'This is a pretty long message!'

countVowels(userInput);
console.log(vCount);
