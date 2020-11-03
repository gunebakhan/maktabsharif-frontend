function cat_sort() {
    let all = x.concat(y, z)
    all.sort(function(a, b) {return a - b})
    console.log(all);
}

let x = [1, 2, 3];
let y = [4, 5, 6];
let z = [9, 8, 7, 0];

cat_sort()