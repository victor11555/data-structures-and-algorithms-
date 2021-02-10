function validParentheses(parens) {
    let balance = 0;
    for (let el of parens) {
        if (balance < 0) return false
        if (el == '(') {
            balance += 1;
        } else {
            balance -= 1;
        }
    }
    return balance === 0
}
