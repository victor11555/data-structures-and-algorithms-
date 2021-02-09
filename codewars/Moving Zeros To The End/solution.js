var moveZeros = function (arr) {
    let tmp = [];
    return [...arr.filter((el) =>{
        if(el === 0){
            tmp.push(el)
            return false
        } else return true
    }), ...tmp]
}
