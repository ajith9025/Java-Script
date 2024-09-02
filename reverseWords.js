function reverseWords(text) {
    let str = text.split(" ");
    str.reverse();
    return str.join(" ");
}

let text = "i love programming very much";
console.log(reverseWords(text)); // much very programming love i