function deleteByIndex(arr, id) {
    arr= arr.filter((item, index, arr)=>index != id)
    return arr
}


let array = ['a', 'b', 'c']
console.log(deleteByIndex(array, 1))

