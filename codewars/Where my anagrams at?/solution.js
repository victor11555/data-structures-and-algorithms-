function anagrams(word, words) {
    let result = [];
    let tmp = word.split('').sort().join('')
    for(let el of words) {
        if(tmp == el.split('').sort().join('')){
            result.push(el);
        }
    }
    return result
}
