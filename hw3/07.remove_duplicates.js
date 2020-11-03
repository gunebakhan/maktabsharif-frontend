function remove_duplicates(array) {
    array = new Set(array)
    array = [...array]

    return array
}


function remove_duplicates2(array) {
    array = array.filter((item, index) => {
        return array.indexOf(item) === index;
    })
    return array
}

console.log(remove_duplicates([1, 1, 4, 5, 3, 5, 3, 9]))
console.log(remove_duplicates2([1, 1, 4, 5, 3, 5, 3, 9]))