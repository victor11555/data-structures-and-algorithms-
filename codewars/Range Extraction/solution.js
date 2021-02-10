function solution(list) {
    let curMax = list[0];
    let curMin = list[0];
    let result = ``;
    for (let i = 1; i < list.length; i++) {
        if (list[i] - curMax > 1 && i === list.length - 1) {
            if (curMax - curMin === 1) result += `${curMin},${curMax},${list[i]}`
            else if (curMax === curMin) result += `${curMin},${list[i]}`
            else result += `${curMin}-${curMax},${list[i]}`
        } else if (i === list.length - 1) {
            if (curMax === curMin) result += `${curMin},${list[i]}`
            else result += `${curMin}-${list[i]}`
        } else if (list[i] - curMax > 1) {
            if (curMax - curMin === 1) result += `${curMin},${curMax},`
            else if (curMax === curMin) result += `${curMin},`
            else result += `${curMin}-${curMax},`
            curMin = list[i]
            curMax = list[i]
        } else if (list[i] - curMax === 1) {
            curMax = list[i];
        }
    }
    return result
}
