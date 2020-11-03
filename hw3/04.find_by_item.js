function find_by_item(array, element) {
    let index = array.map((item, index)=> item==element ? index : undefined)
    index = index.filter((item)=> item != undefined)
    return {index: index, item: element}
}

array = [2, 3, 4]

console.log(find_by_item(array, 3))