function flat(arr) {
    let flatarr = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) === false)
            flatarr.push(arr[i])
        else {
            flatarr = flatarr.concat(flat(arr[i]))
        }
    }
return flatarr
}
console.log(flat([1,2,3,4,[2,3,[1]]]))
