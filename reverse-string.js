const reverse = function(wordArray) {
    if(wordArray.length === 1) {
        return wordArray[0];
    }

    return reverse(wordArray.slice(1)) +  wordArray[0];
}

let word = 'cheese';
let wordArray = word.split("");
console.log(reverse(wordArray));