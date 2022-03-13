// stack DSA

// functions : push, pop, peek, length

var letters = []; //this is our stack

var word = "level";

var rword = "";

// put letters of var(word) into the stack

for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// pop off stack in reverse order

for (let i = 0; i < word.length; i++) {
  rword += letters.pop();
}

// compare for palindrome

if (word === rword) {
  console.log(word + " is a plindrome.");
} else {
  console.log(word, "is not a palindrome.");
}
