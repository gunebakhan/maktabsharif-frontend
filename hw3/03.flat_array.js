function flatter(array) {
    array = array.flat(3)
    array = array.sort(function(a, b) {return a - b})
    console.log(array)
}

function flatten(array) {
    return array.reduce(function(flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, [])
}

let array = [[2, 3], 5, [[[2, 9], 4], 4], 1, 0]

// flatter(array)

let result = flatten(array)
console.log(result)