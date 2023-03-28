let a = [1, 2, 4, 5]


function product(a, i)
 {
    if (i == a.length) return 1
    return a[i] * product(a, i + 1)
}
console.log(product(a, 0))
























