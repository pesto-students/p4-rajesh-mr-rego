function checkParentheses(text) {
    let stack = [];

    for(ch of text) {
        // console.log(ch);
        let char = stack[stack.length-1];
        if('({['.indexOf(ch) != -1) {
            stack.push(ch);
        } else if(')}]'.indexOf(ch) != -1) {
            if((ch === ')' && char === '(') || (ch === '}' && char === '{') || (ch === ']' && char === '[')) {
                stack.pop();
            }
        }
    }
    return (stack.length ? false : true);
}

const line1 = "{([])}";
const line2 = "()";
const line3 = "([]";
const line4 = "{}({}{}({()})";

const resp1 = checkParentheses(line1);
console.log("resp1", resp1);

const resp2 = checkParentheses(line2);
console.log("resp2", resp2);

const resp3 = checkParentheses(line3);
console.log("resp3", resp3);

const resp4 = checkParentheses(line4);
console.log("resp4", resp4);

