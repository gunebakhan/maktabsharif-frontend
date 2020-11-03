function extract_number_from_string(string) {
    array = string.split(" ")
    array = array.filter(item=> !isNaN(item))
    array = array.map(item=> +item)
    return array
}

console.log(extract_number_from_string("I have 2 apples and 3 pineapples"))