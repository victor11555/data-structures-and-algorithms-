const obj = {
    "NORTH": "SOUTH",
    "SOUTH": "NORTH",
    "EAST": "WEST",
    "WEST": "EAST"
}

function dirReduc(arr) {
    for (let i = 1; i < arr.length; i++) {
        let prev = arr[i - 1]
        if (obj[prev] === arr[i]) {
            arr.splice(i - 1, 2)
            i -= 2;
        }
    }
    return arr
}
