function two(n){
    if(n==1) return true
else if(n%2!==0||n<1){
    return false
}
return two(n/2)
}
console.log(two(19))