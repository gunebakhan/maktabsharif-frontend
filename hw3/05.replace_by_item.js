function replace_by_item(array, currentItem, newItem) {
    array = array.map(item=> item == currentItem ? newItem : item)
    return array
}

array = ['a', 'b', 'c', 'd', 'e', 'f']
console.log(replace_by_item(array, 'e', 't'))