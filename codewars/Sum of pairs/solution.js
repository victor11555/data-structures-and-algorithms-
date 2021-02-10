function sumPairs(ints, s) {
    let result = [ints.length, ints.length];
    let i = 0
    while(i < ints.length - 1) {
        let j = i + 1;
        while (j < result[1]) {
            if (ints[i] + ints[j] === s) {
                result[1] = j
                result[0] = i
            }
            j++;
        }
        i++;
    }
    if (result[0] !== ints.length) {
        return [ints[result[0]], ints[result[1]]]
    } else {
        return undefined
    }
}
